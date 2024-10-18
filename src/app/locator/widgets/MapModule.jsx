"use client";

import React, { useState, useEffect } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
	DirectionsService,
	DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "400px",
};

const distressLocations = [
	{ lat: -1.2921, lng: 36.8219, description: "Distress Call 1: Nairobi CBD" },
	{ lat: -1.2872, lng: 36.8194, description: "Distress Call 2: Westlands" },
];

const MapModule = () => {
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [currentLocation, setCurrentLocation] = useState(null);
	const [deviceTwoLocation, setDeviceTwoLocation] = useState(null);
	const [directionsResponse, setDirectionsResponse] = useState(null);

	// Get current device location
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCurrentLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				() => {
					console.log("Error: Unable to fetch current location.");
				}
			);
		}
	}, []);

	const handleMarkerClick = (location) => {
		setSelectedLocation(location);
		calculateDirections(location);
	};

	const calculateDirections = (destination) => {
		if (currentLocation) {
			const directionsService = new google.maps.DirectionsService();
			directionsService.route(
				{
					origin: currentLocation,
					destination: { lat: destination.lat, lng: destination.lng },
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
					if (status === google.maps.DirectionsStatus.OK) {
						setDirectionsResponse(result);
					} else {
						console.error(`Error fetching directions: ${result}`);
					}
				}
			);
		}
	};

	// Simulate another device sharing its location
	const handleDeviceTwoLocation = () => {
		const deviceTwoCoordinates = {
			lat: -1.295, // Example second device's location
			lng: 36.82,
		};
		setDeviceTwoLocation(deviceTwoCoordinates);
		calculateDirections(deviceTwoCoordinates);
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			{currentLocation && (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={currentLocation} // Use current location as the map center
					zoom={12}
				>
					{/* Markers for distress locations */}
					{distressLocations.map((location, index) => (
						<Marker
							key={index}
							position={{ lat: location.lat, lng: location.lng }}
							onClick={() => handleMarkerClick(location)}
							icon={{
								url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Blue marker for distress locations
							}}
						/>
					))}

					{/* Marker for current location (red locator) */}
					<Marker
						position={currentLocation}
						icon={{
							url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red marker for current location
						}}
					/>

					{/* Marker for device two's location (green locator) */}
					{deviceTwoLocation && (
						<Marker
							position={deviceTwoLocation}
							icon={{
								url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png", // Green marker for second device location
							}}
						/>
					)}

					{/* Info window for the selected distress location */}
					{selectedLocation && (
						<InfoWindow
							position={{
								lat: selectedLocation.lat,
								lng: selectedLocation.lng,
							}}
							onCloseClick={() => setSelectedLocation(null)}
						>
							<div>
								<h3>Distress Alert</h3>
								<p>{selectedLocation.description}</p>
							</div>
						</InfoWindow>
					)}

					{/* Render directions */}
					{directionsResponse && (
						<DirectionsRenderer directions={directionsResponse} />
					)}
				</GoogleMap>
			)}

			{/* Button to simulate another device location */}
			<div className="mt-4">
				<button
					onClick={handleDeviceTwoLocation}
					className="px-4 py-2 bg-blue-600 text-white rounded-md"
				>
					Simulate Device Two Location
				</button>
			</div>
		</LoadScript>
	);
};

export default MapModule;
