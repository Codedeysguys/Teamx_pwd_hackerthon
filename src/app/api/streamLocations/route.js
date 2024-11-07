import clientPromise from "../../../lib/mongodb";

let clients = [];

export async function GET(req) {
	const headers = new Headers({
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		Connection: "keep-alive",
	});

	const stream = new ReadableStream({
		start(controller) {
			clients.push(controller);

			req.signal.addEventListener("abort", () => {
				clients = clients.filter((client) => client !== controller);
				controller.close();
			});
		},
	});

	return new Response(stream, { headers });
}

export async function POST(req) {
	try {
		const client = await clientPromise;
		const db = client.db("supportsync");
		const collection = db.collection("devices"); // Rename to "devices" for device-based storage

		const { deviceId, lat, lng, timestamp } = await req.json();

		if (!deviceId || !lat || !lng) {
			return new Response(
				JSON.stringify({ message: "Missing required fields" }),
				{ status: 400 }
			);
		}

		const newLocation = {
			lat,
			lng,
			timestamp: timestamp || new Date(),
		};

		// Update the device document with the new location, or insert if not exists
		await collection.updateOne(
			{ deviceId }, // Filter by deviceId
			{
				$push: { locations: newLocation }, // Push the new location to the array
				$setOnInsert: { deviceId }, // Set deviceId if this is a new document
			},
			{ upsert: true } // Create a new document if it doesn't exist
		);

		// Notify all connected clients of the new location
		clients.forEach((client) =>
			client.enqueue(
				`data: ${JSON.stringify({ deviceId, ...newLocation })}\n\n`
			)
		);

		return new Response(
			JSON.stringify({ message: "Location saved and broadcasted" }),
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error saving location:", error);
		return new Response(JSON.stringify({ message: "Internal server error" }), {
			status: 500,
		});
	}
}
