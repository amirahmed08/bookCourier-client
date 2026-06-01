import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    fetch('./serviceCenter.json')
      .then((res) => res.json())
      .then((data) => setCenters(data))
      .catch((error) => console.error(error));
  }, []);
  const position = [23.685, 90.3563];

  return (
    <section className="py-10 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Coverage Area
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We are proud to serve a wide range of locations, ensuring that book
            lovers everywhere can enjoy our services.
          </p>
        </div>

        {/* Map */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="h-[350px] md:h-[500px] w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {centers.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <div>
                    <strong>{center.district}</strong>
                    <br />
                    Service Area: {center.covered_area.join(", ")}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Coverage;