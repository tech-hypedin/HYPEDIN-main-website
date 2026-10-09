import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const regionalMapData = [
  { id: 1, region: "North Engineering Hub Cluster", coordinates: [28.6139, 77.2090], load: "45% Turnout", nodes: "25+ Partner Colleges" },
  { id: 2, region: "West Central University Nodes", coordinates: [19.0760, 72.8777], load: "35% Turnout", nodes: "18+ Partner Colleges" },
  { id: 3, region: "Southern Technical Collective", coordinates: [13.0827, 80.2707], load: "20% Turnout", nodes: "12+ Partner Colleges" },
  { id: 4, region: "Eastern Technical Collective", coordinates: [26.0827, 92.2707], load: "25% Turnout", nodes: "15+ Partner Colleges" }
];

const GSACampaignMap = () => {
  const defaultCenter = [22.0000, 78.0000]; 
  const defaultZoom = 4;

  return (
    <div className="w-full h-full min-h-[350px] relative rounded-xl overflow-hidden border border-white/5 bg-[#090909]">
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ background: '#050505' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {regionalMapData.map((node) => (
          <CircleMarker
            key={node.id}
            center={node.coordinates}
            radius={45}
            pathOptions={{
              color: '#FF0000', 
              fillColor: '#FF0000', 
              fillOpacity: 0.25,
              weight: 1.5,
            }}
          >
            <Popup className="custom-hypedin-popup">
              <div className="p-2 bg-[#0b0b0b] text-[#f5f5f5] rounded-md border border-white/10 font-sans min-w-[160px]">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#FF0000] font-bold mb-1">
                  Active Region Cluster
                </div>
                <div className="text-xs font-bold text-white mb-1">
                  {node.region}
                </div>
                <div className="text-[11px] text-neutral-400 mt-2 flex justify-between border-t border-white/5 pt-1.5">
                  <span>Capacity:</span>
                  <span className="font-mono text-white">{node.load}</span>
                </div>
                <div className="text-[11px] text-neutral-400 flex justify-between">
                  <span>Coverage:</span>
                  <span className="font-mono text-white">{node.nodes}</span>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GSACampaignMap;