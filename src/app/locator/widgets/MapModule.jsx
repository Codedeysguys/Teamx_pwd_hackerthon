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

// Hospital icon URL
const hospitalIcon = "http://maps.google.com/mapfiles/ms/icons/hospitals.png";

const MapModule = () => {
	const [currentLocation, setCurrentLocation] = useState(null);
	const [deviceLocations, setDeviceLocations] = useState([]);
	const [deviceId, setDeviceId] = useState(null);
	const [directionsResponse, setDirectionsResponse] = useState(null); // Add directionsResponse state

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
		console.log("Device ID:", deviceId); // Check if deviceId is set
		if (deviceId && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const location = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					setCurrentLocation(location);
					saveLocation(location, deviceId);
				},
				(error) => {
					console.error("Error fetching current location:", error);
				}
			);
		} else if (!navigator.geolocation) {
			console.error("Geolocation is not supported by this browser.");
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
		if (currentLocation) {
			const directionsService = new google.maps.DirectionsService();
			directionsService.route(
				{
					origin: currentLocation,
					destination: knhLocation,
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
					if (status === google.maps.DirectionsStatus.OK) {
						setDirectionsResponse(result);
					} else {
						console.error(`Error fetching directions: ${status}`);
					}
				}
			);
		} else {
			console.error("Current location not set.");
		}
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
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
							url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
						}}
					/>
				)}

				{/* Render markers for all devices' locations */}
				{deviceLocations.map((location, index) => (
					<Marker
						key={index}
						position={{ lat: location.lat, lng: location.lng }}
						icon={{
							url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
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
			{/* Button to simulate action */}
			<div className="mt-4">
				<button
					onClick={handleSimulateAction}
					className="px-4 py-2 bg-blue-600 text-white rounded-md"
				>
					Simulate Action
				</button>
			</div>
		</LoadScript>
	);
};

export default MapModule;
