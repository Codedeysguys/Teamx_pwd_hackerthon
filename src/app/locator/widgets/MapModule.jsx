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

const defaultCenter = {
	lat: -1.2921, // Nairobi, Kenya
	lng: 36.8219,
};

const distressLocations = [
	{ lat: -1.2921, lng: 36.8219, description: "Distress Call 1: Nairobi CBD" },
	{ lat: -1.2872, lng: 36.8194, description: "Distress Call 2: Westlands" },
	// Add more locations dynamically if needed
];

const MapModule = () => {
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [currentLocation, setCurrentLocation] = useState(null);
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

		// Calculate directions from current location to the selected distress location
		if (currentLocation) {
			const directionsService = new google.maps.DirectionsService();
			directionsService.route(
				{
					origin: currentLocation,
					destination: { lat: location.lat, lng: location.lng },
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
					if (status === google.maps.DirectionsStatus.OK) {
						setDirectionsResponse(result);
					} else {
						console.error(`error fetching directions ${result}`);
					}
				}
			);
		}
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={defaultCenter}
				zoom={12}
			>
				{/* Loop through distress locations and place markers */}
				{distressLocations.map((location, index) => (
					<Marker
						key={index}
						position={{ lat: location.lat, lng: location.lng }}
						onClick={() => handleMarkerClick(location)}
						icon={{
							url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Custom blue marker
						}}
					/>
				))}

				{/* Show info window when a marker is clicked */}
				{selectedLocation && (
					<InfoWindow
						position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
						onCloseClick={() => setSelectedLocation(null)}
					>
						<div>
							<h3>Distress Alert</h3>
							<p>{selectedLocation.description}</p>
						</div>
					</InfoWindow>
				)}

				{/* Show directions from current location to selected distress location */}
				{directionsResponse && (
					<DirectionsRenderer directions={directionsResponse} />
				)}
			</GoogleMap>
		</LoadScript>
	);
};

export default MapModule;
