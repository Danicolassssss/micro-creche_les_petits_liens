"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [ClientMap, setClientMap] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const L = (await import("leaflet")).default;
      const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");

      // Fix for default marker icon
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });

      setClientMap({ MapContainer, TileLayer, Marker, Popup });
    })();
  }, []);

  if (!ClientMap) {
    return (
      <div className="w-full h-full bg-secondary/10 rounded-xl animate-pulse flex items-center justify-center">
        <span className="text-secondary/50">Chargement de la carte...</span>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = ClientMap;
  const position: [number, number] = [48.8566, 2.3522]; // Paris center

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl z-0"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Les Petits Liens <br /> 123 Rue du Quartier, 75000 Paris
        </Popup>
      </Marker>
    </MapContainer>
  );
}

