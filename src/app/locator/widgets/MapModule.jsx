"use client";

import React, { useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
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
						onClick={() => setSelectedLocation(location)}
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
			</GoogleMap>
		</LoadScript>
	);
};

export default MapModule;
