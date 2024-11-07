"use client";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
	GoogleMap,
	LoadScript,
	Marker,
	DirectionsService,
	DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "400px",
};

// Updated coordinates for KNH, Nairobi (DEFAULT CENTER)
const knhLocation = {
	lat: -1.3021,
	lng: 36.8077,
};

// Gmaps icon URLs
const hospitalIcon = "https://maps.google.com/mapfiles/ms/icons/hospitals.png";
const redDotIcon = "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
const greenDotIcon = "https://maps.google.com/mapfiles/ms/icons/green-dot.png";

const MapModule = () => {
	const [currentLocation, setCurrentLocation] = useState(null);
	const [deviceLocations, setDeviceLocations] = useState([]);
	const [deviceId, setDeviceId] = useState(null);
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [loading, setLoading] = useState(true); // Map loading state
	const [isSimulating, setIsSimulating] = useState(false); // Button loading state
	const [errorMessage, setErrorMessage] = useState(""); // Error message state

	// Generate or retrieve device ID
	useEffect(() => {
		let storedDeviceId = localStorage.getItem("deviceId");
		if (!storedDeviceId) {
			storedDeviceId = uuidv4(); // Generate a new UUID
			localStorage.setItem("deviceId", storedDeviceId);
		}
		setDeviceId(storedDeviceId);
	}, []);

	useEffect(() => {
		if (deviceId && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const location = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					setCurrentLocation(location);
					saveLocation(location, deviceId);
					setLoading(false); // Stop loading once location is retrieved
				},
				(error) => {
					setErrorMessage("Failed to retrieve current location.");
					console.error("Error fetching current location:", error);
					setLoading(false); // Stop loading even if location retrieval fails
				}
			);
		} else if (!navigator.geolocation) {
			setErrorMessage("Geolocation is not supported by this browser.");
			console.error("Geolocation is not supported by this browser.");
			setLoading(false); // Stop loading if geolocation is unsupported
		}
	}, [deviceId]);

	// Save location to MongoDB via API
	const saveLocation = async (location, deviceId) => {
		try {
			await fetch("/api/streamLocations", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					deviceId,
					lat: location.lat,
					lng: location.lng,
				}),
			});
		} catch (error) {
			console.error("Error saving location:", error);
		}
	};

	// Listen for new locations via SSE
	useEffect(() => {
		const eventSource = new EventSource("/api/streamLocations");

		eventSource.onmessage = (event) => {
			const newLocation = JSON.parse(event.data);
			setDeviceLocations((prevLocations) => [...prevLocations, newLocation]);
		};

		eventSource.onerror = () => {
			console.error("EventSource failed. Closing connection.");
			eventSource.close();
		};

		return () => eventSource.close();
	}, []);

	// Handle directions request
	const handleSimulateAction = () => {
		setIsSimulating(true); // Set button to loading state
		if (currentLocation) {
			const directionsService = new google.maps.DirectionsService();
			directionsService.route(
				{
					origin: currentLocation,
					destination: knhLocation,
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
					setIsSimulating(false); // Reset button loading state
					if (status === google.maps.DirectionsStatus.OK) {
						setDirectionsResponse(result);
					} else {
						setErrorMessage("Failed to retrieve directions.");
						console.error(`Error fetching directions: ${status}`);
					}
				}
			);
		} else {
			setErrorMessage("Current location not set.");
			console.error("Current location not set.");
			setIsSimulating(false); // Reset button loading state
		}
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			<div>
				{errorMessage && (
					<div className="alert alert-danger">{errorMessage}</div>
				)}

				{loading ? (
					<div className="loader">Loading Map...</div> // Show loading indicator
				) : (
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={knhLocation}
						zoom={12}
					>
						{/* Render marker for current location */}
						{currentLocation && (
							<Marker
								position={currentLocation}
								icon={{
									url: redDotIcon,
								}}
							/>
						)}

						{/* Render markers for all devices' locations */}
						{deviceLocations.map((location, index) => (
							<Marker
								key={index}
								position={{ lat: location.lat, lng: location.lng }}
								icon={{
									url: greenDotIcon,
								}}
							/>
						))}

						{/* Render KNH hospital marker */}
						<Marker
							position={knhLocation}
							icon={{
								url: hospitalIcon,
							}}
						/>

						{/* Render directions if available */}
						{directionsResponse && (
							<DirectionsRenderer directions={directionsResponse} />
						)}
					</GoogleMap>
				)}

				{/* Button to simulate action */}
				<div className="mt-4">
					<button
						onClick={handleSimulateAction}
						className="px-4 py-2 bg-blue-600 text-white rounded-md"
						disabled={isSimulating}
					>
						{isSimulating ? "Loading..." : "Simulate Action"}
					</button>
				</div>
			</div>
		</LoadScript>
	);
};

export default MapModule;
