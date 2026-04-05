import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const routeCoords: [number, number][] = [
  [-6.2440, 106.8000], 
  [-6.2445, 106.8015], 
  [-6.2449, 106.8023]
];

const MapComponent: React.FC = () => {
  const position: [number, number] = [-6.2449, 106.8023]; // Precise Darmawangsa Square coordinates

  const buildingIcon = L.divIcon({
    html: `<div class="flex items-center justify-center bg-white border-2 border-[#C49A6C] rounded-full w-10 h-10 shadow-lg">
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" class="text-[#C49A6C]">
               <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 72h48v48h-48V72zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48zm144-288h48v48h-48V72zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48zm0 96h48v48h-48v-48z"></path>
             </svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    className: 'custom-marker-icon'
  });

  return (
    <div className="w-full h-[450px] overflow-hidden">
      <MapContainer 
        center={position} 
        zoom={17} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline 
          positions={routeCoords} 
          color="#C49A6C" 
          weight={4} 
          dashArray="10, 10" 
          opacity={0.7}
        />
        <Marker position={position} icon={buildingIcon}>
          <Popup>
            <div className="text-black p-1">
              <strong className="block text-sm font-bold">Pergadaian Utama Indonesia(PUI)</strong>
              <p className="text-xs mt-1">The Darmawangsa Square Lt.2 No.263-264</p>
              <p className="text-xs text-gray-500">Jakarta Selatan 12160</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
