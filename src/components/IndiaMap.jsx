import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { destinationsData } from '../data/destinationsData';
import { MapPin, Hotel, Utensils, Train, Bus, Plane, X, Info } from 'lucide-react';

const IndiaMap = ({ selectedDest, setSelectedDest }) => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (!mapInstanceRef.current && mapContainerRef.current) {
            // Initialize Leaflet map centered to fit the real, full map of India in the container
            const map = L.map(mapContainerRef.current, {
                center: [22.8, 78.9],
                zoom: 4.8,
                scrollWheelZoom: false,
                zoomControl: false
            });

            // Add zoom control at bottom-left corner
            L.control.zoom({ position: 'bottomleft' }).addTo(map);

            // Add Esri World Satellite Imagery
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS'
            }).addTo(map);

            // Add Esri Reference Labels on top for hybrid style readability
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Labels &copy; Esri'
            }).addTo(map);

            mapInstanceRef.current = map;

            // Add markers with custom pulsing orange divIcon
            destinationsData.forEach(dest => {
                const customMarker = L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div class="pulse-marker" style="background-color:#FF9933; width:16px; height:16px; border-radius:50%; border:3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
                    iconSize: [16, 16],
                    iconAnchor: [8, 8]
                });

                const marker = L.marker(dest.coordinates, { icon: customMarker }).addTo(map);

                marker.bindTooltip(`<b>${dest.name}</b>`, {
                    direction: 'top',
                    offset: [0, -8]
                });

                marker.on('click', () => {
                    setSelectedDest(dest);
                    map.setView(dest.coordinates, 6);
                });
            });
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    // Effect to pan and zoom map to coordinates when selectedDest changes from outside
    useEffect(() => {
        if (selectedDest && mapInstanceRef.current) {
            mapInstanceRef.current.setView(selectedDest.coordinates, 6);
        }
    }, [selectedDest]);

    // Selection helper
    const handleSelectDest = (dest) => {
        setSelectedDest(dest);
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView(dest.coordinates, 6);
        }
    };

    return (
        <section className="relative w-full h-[750px] overflow-hidden bg-slate-900 border-y border-slate-800" id="explore-map">
            <style>{`
                .pulse-marker {
                    animation: marker-pulse 2s infinite alternate;
                    cursor: pointer;
                }
                @keyframes marker-pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 6px rgba(255, 153, 51, 0.7); }
                    100% { transform: scale(1.3); box-shadow: 0 0 14px rgba(255, 153, 51, 1); }
                }
                .leaflet-container {
                    font-family: inherit;
                    z-index: 0;
                }
                /* Hide default Leaflet scrollbars inside tooltip */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(156, 163, 175, 0.5);
                    border-radius: 2px;
                }
            `}</style>

            {/* Map Container as Absolute Background */}
            <div 
                ref={mapContainerRef} 
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
            />

            {/* Floating Top-Left Header Panel */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl shadow-2xl border border-white/50 max-w-sm hidden sm:block">
                <div className="flex items-center gap-2 text-saffron font-bold text-xs uppercase tracking-wider mb-1">
                    <Info size={14} /> Interactive Travel Guide
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 leading-snug">Explore Divine India</h3>
                <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                    Click on the pulsing orange markers on the satellite map or use the links below to check hotels, restaurants, and transport availability.
                </p>
            </div>

            {/* Floating Bottom Quick Selection Link Pills */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-white/50 flex gap-2 overflow-x-auto max-w-full sm:max-w-xl scrollbar-none">
                {destinationsData.map((dest) => (
                    <button
                        key={dest.id}
                        onClick={() => handleSelectDest(dest)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                            selectedDest?.id === dest.id
                                ? 'bg-saffron text-white shadow-md'
                                : 'bg-warm-sand/20 text-gray-700 hover:bg-warm-sand/40'
                        }`}
                    >
                        {dest.name.split(',')[0]}
                    </button>
                ))}
            </div>

            {/* Floating Right Glassmorphic Info Panel (only shown when a destination is selected) */}
            {selectedDest && (
                <div className="absolute right-4 top-4 bottom-4 w-[calc(100%-32px)] sm:w-[420px] z-10 flex flex-col pointer-events-none">
                    <div className="flex-1 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-2xl overflow-y-auto max-h-full custom-scrollbar pointer-events-auto flex flex-col justify-between">
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                {/* Close Button */}
                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-flex items-center gap-1 text-[10px] bg-saffron/10 text-saffron px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                                        <MapPin size={10} /> Active Destination
                                    </span>
                                    <button 
                                        onClick={() => setSelectedDest(null)}
                                        className="w-7 h-7 bg-warm-sand/20 hover:bg-warm-sand/40 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>

                                {/* Destination Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img 
                                        src={selectedDest.image} 
                                        alt={selectedDest.name}
                                        className="w-16 h-16 rounded-xl object-cover shadow-sm border border-white"
                                    />
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-gray-900 leading-tight">{selectedDest.name}</h4>
                                        <p className="text-gray-500 text-[10px] mt-0.5">Lat: {selectedDest.coordinates[0]} | Lng: {selectedDest.coordinates[1]}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-xs leading-relaxed mb-4 border-b border-gray-100 pb-3">
                                    {selectedDest.description}
                                </p>

                                {/* Hotels & Dining */}
                                <div className="grid grid-cols-1 gap-3 mb-4">
                                    {/* Hotels */}
                                    <div className="bg-warm-sand/10 rounded-xl p-3.5 border border-warm-sand/20">
                                        <div className="flex items-center gap-2 text-saffron font-bold text-xs mb-2">
                                            <Hotel size={14} /> Recommended Hotels
                                        </div>
                                        <div className="space-y-2">
                                            {selectedDest.hotels.map((hotel, idx) => (
                                                <div key={idx} className="text-[11px] leading-tight">
                                                    <p className="font-bold text-gray-800">{hotel.name}</p>
                                                    <div className="flex justify-between text-gray-500 mt-0.5">
                                                        <span>Rating: {hotel.rating}</span>
                                                        <span>{hotel.price}</span>
                                                    </div>
                                                    <span className="text-[9px] text-green-700 font-medium">
                                                        ● {hotel.availability}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Restaurants */}
                                    <div className="bg-warm-sand/10 rounded-xl p-3.5 border border-warm-sand/20">
                                        <div className="flex items-center gap-2 text-india-green font-bold text-xs mb-2">
                                            <Utensils size={14} /> Popular Dining Cuisines
                                        </div>
                                        <div className="space-y-2">
                                            {selectedDest.restaurants.map((rest, idx) => (
                                                <div key={idx} className="text-[11px] leading-tight">
                                                    <p className="font-bold text-gray-800">{rest.name}</p>
                                                    <div className="flex justify-between text-gray-500 mt-0.5">
                                                        <span>Cuisine: {rest.cuisine}</span>
                                                        <span>{rest.rating}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Transit Options */}
                            <div className="border-t border-gray-100 pt-3">
                                <h5 className="font-serif font-bold text-gray-900 text-sm mb-3">Transit Connections & Seat Availability</h5>
                                <div className="space-y-3">
                                    {/* Train */}
                                    <div>
                                        <div className="flex items-center justify-between text-[11px] font-medium mb-0.5">
                                            <span className="flex items-center gap-1.5 text-gray-700">
                                                <Train size={12} className="text-blue-600" />
                                                {selectedDest.transport.train.connection}
                                            </span>
                                            <span className="text-blue-700 font-bold">{selectedDest.transport.train.availability}</span>
                                        </div>
                                        <p className="text-[9px] text-gray-400 mb-1">{selectedDest.transport.train.status}</p>
                                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                                                style={{ width: selectedDest.transport.train.availability !== 'N/A' ? selectedDest.transport.train.availability.split('%')[0] + '%' : '0%' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Bus */}
                                    <div>
                                        <div className="flex items-center justify-between text-[11px] font-medium mb-0.5">
                                            <span className="flex items-center gap-1.5 text-gray-700">
                                                <Bus size={12} className="text-india-green" />
                                                {selectedDest.transport.bus.connection}
                                            </span>
                                            <span className="text-green-700 font-bold">{selectedDest.transport.bus.availability}</span>
                                        </div>
                                        <p className="text-[9px] text-gray-400 mb-1">{selectedDest.transport.bus.status}</p>
                                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-india-green h-full rounded-full transition-all duration-500" 
                                                style={{ width: selectedDest.transport.bus.availability !== 'N/A' ? selectedDest.transport.bus.availability.split('%')[0] + '%' : '0%' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Flight */}
                                    <div>
                                        <div className="flex items-center justify-between text-[11px] font-medium mb-0.5">
                                            <span className="flex items-center gap-1.5 text-gray-700">
                                                <Plane size={12} className="text-saffron" />
                                                {selectedDest.transport.flight.connection}
                                            </span>
                                            <span className="text-orange-700 font-bold">{selectedDest.transport.flight.availability}</span>
                                        </div>
                                        <p className="text-[9px] text-gray-400 mb-1">{selectedDest.transport.flight.status}</p>
                                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-saffron h-full rounded-full transition-all duration-500" 
                                                style={{ width: selectedDest.transport.flight.availability !== 'N/A' ? selectedDest.transport.flight.availability.split('%')[0] + '%' : '0%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default IndiaMap;
