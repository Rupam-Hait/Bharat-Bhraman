import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { destinationsData } from '../data/destinationsData';
import { MapPin, Hotel, Utensils, Train, Bus, Plane, ArrowRight, CheckCircle } from 'lucide-react';

const IndiaMap = () => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [selectedDest, setSelectedDest] = useState(null);

    useEffect(() => {
        if (!mapInstanceRef.current && mapContainerRef.current) {
            // Initialize Leaflet map centered on India
            const map = L.map(mapContainerRef.current, {
                center: [22.9734, 78.6569],
                zoom: 5,
                scrollWheelZoom: false
            });

            // Add Esri World Satellite Imagery
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }).addTo(map);

            // Add Esri Reference Labels on top for hybrid style readability
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Labels &copy; Esri'
            }).addTo(map);

            mapInstanceRef.current = map;

            // Add markers with custom divIcon for orange dots
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

    // Helper to programmatically select destination and center map
    const handleSelectDest = (dest) => {
        setSelectedDest(dest);
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView(dest.coordinates, 6);
        }
    };

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto" id="explore-map">
            <style>{`
                .pulse-marker {
                    animation: marker-pulse 2s infinite alternate;
                    cursor: pointer;
                }
                @keyframes marker-pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 6px rgba(255, 153, 51, 0.6); }
                    100% { transform: scale(1.3); box-shadow: 0 0 14px rgba(255, 153, 51, 0.9); }
                }
                .leaflet-container {
                    font-family: inherit;
                    z-index: 1;
                }
            `}</style>

            <div className="text-center mb-12">
                <h2 className="text-saffron font-serif text-xl mb-2 uppercase tracking-widest">Interactive Travel Map</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Plan Your Pilgrimage & Tours</h3>
                <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Interactive Map */}
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-3xl p-4 shadow-2xl border border-gray-100">
                        <div 
                            ref={mapContainerRef} 
                            className="w-full h-[550px] rounded-2xl overflow-hidden"
                            style={{ minHeight: '550px' }}
                        />
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {destinationsData.map((dest) => (
                                <button
                                    key={dest.id}
                                    onClick={() => handleSelectDest(dest)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                        selectedDest?.id === dest.id
                                            ? 'bg-saffron text-white shadow-md'
                                            : 'bg-warm-sand/20 text-gray-700 hover:bg-warm-sand/40'
                                    }`}
                                >
                                    {dest.name.split(',')[0]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Destination Details */}
                <div className="lg:col-span-5 h-[620px] flex flex-col">
                    {!selectedDest ? (
                        <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl flex flex-col justify-center items-center text-center h-full">
                            <div className="w-20 h-20 bg-warm-sand/20 rounded-full flex items-center justify-center mb-6">
                                <MapPin size={40} className="text-saffron animate-bounce" />
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">Explore Destinations</h4>
                            <p className="text-gray-600 max-w-sm leading-relaxed">
                                Click on any orange marker on the map of India or select a quick link below the map to see hotels, restaurants, and transit options.
                            </p>
                        </div>
                    ) : (
                        <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl overflow-y-auto max-h-[620px] custom-scrollbar">
                            {/* Destination Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <img 
                                    src={selectedDest.image} 
                                    alt={selectedDest.name}
                                    className="w-24 h-24 rounded-2xl object-cover shadow-md border-2 border-white"
                                />
                                <div>
                                    <div className="flex items-center gap-1 text-saffron font-medium text-xs uppercase tracking-wider mb-1">
                                        <MapPin size={12} /> Live Tour Guide
                                    </div>
                                    <h4 className="text-2xl font-serif font-bold text-gray-900 leading-tight">{selectedDest.name}</h4>
                                    <p className="text-gray-500 text-xs mt-1">Latitude: {selectedDest.coordinates[0]}, Longitude: {selectedDest.coordinates[1]}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-4">
                                {selectedDest.description}
                            </p>

                            {/* Hotels & Restaurants Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {/* Hotels */}
                                <div className="bg-warm-sand/10 rounded-2xl p-4 border border-warm-sand/25">
                                    <div className="flex items-center gap-2 text-saffron font-bold text-sm mb-3">
                                        <Hotel size={16} /> Recommended Hotels
                                    </div>
                                    <div className="space-y-3">
                                        {selectedDest.hotels.map((hotel, idx) => (
                                            <div key={idx} className="text-xs">
                                                <p className="font-bold text-gray-800">{hotel.name}</p>
                                                <div className="flex justify-between text-gray-500 mt-0.5">
                                                    <span>Rating: {hotel.rating}</span>
                                                    <span>{hotel.price}</span>
                                                </div>
                                                <span className="inline-block mt-1 text-[10px] px-2 py-0.5 bg-green-50 text-green-700 rounded border border-green-100">
                                                    {hotel.availability}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Restaurants */}
                                <div className="bg-warm-sand/10 rounded-2xl p-4 border border-warm-sand/25">
                                    <div className="flex items-center gap-2 text-india-green font-bold text-sm mb-3">
                                        <Utensils size={16} /> Local Restaurants
                                    </div>
                                    <div className="space-y-3">
                                        {selectedDest.restaurants.map((rest, idx) => (
                                            <div key={idx} className="text-xs">
                                                <p className="font-bold text-gray-800">{rest.name}</p>
                                                <p className="text-gray-500 mt-0.5">Cuisine: {rest.cuisine}</p>
                                                <span className="text-gray-500">Rating: {rest.rating}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Transport Connectivity */}
                            <div className="border-t border-gray-100 pt-4">
                                <h5 className="font-serif font-bold text-gray-900 text-base mb-4">Transport Connections & Seat Availability</h5>
                                <div className="space-y-4">
                                    {/* Train */}
                                    <div>
                                        <div className="flex items-center justify-between text-xs font-medium mb-1">
                                            <span className="flex items-center gap-2 text-gray-800">
                                                <Train size={14} className="text-blue-600" />
                                                {selectedDest.transport.train.connection}
                                            </span>
                                            <span className="text-blue-700 font-bold">{selectedDest.transport.train.availability}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mb-1.5">{selectedDest.transport.train.status}</p>
                                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                                                style={{ width: selectedDest.transport.train.availability !== 'N/A' ? selectedDest.transport.train.availability.split('%')[0] + '%' : '0%' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Bus */}
                                    <div>
                                        <div className="flex items-center justify-between text-xs font-medium mb-1">
                                            <span className="flex items-center gap-2 text-gray-800">
                                                <Bus size={14} className="text-india-green" />
                                                {selectedDest.transport.bus.connection}
                                            </span>
                                            <span className="text-green-700 font-bold">{selectedDest.transport.bus.availability}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mb-1.5">{selectedDest.transport.bus.status}</p>
                                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-india-green h-full rounded-full transition-all duration-500" 
                                                style={{ width: selectedDest.transport.bus.availability !== 'N/A' ? selectedDest.transport.bus.availability.split('%')[0] + '%' : '0%' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Flights */}
                                    <div>
                                        <div className="flex items-center justify-between text-xs font-medium mb-1">
                                            <span className="flex items-center gap-2 text-gray-800">
                                                <Plane size={14} className="text-saffron" />
                                                {selectedDest.transport.flight.connection}
                                            </span>
                                            <span className="text-orange-700 font-bold">{selectedDest.transport.flight.availability}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mb-1.5">{selectedDest.transport.flight.status}</p>
                                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-saffron h-full rounded-full transition-all duration-500" 
                                                style={{ width: selectedDest.transport.flight.availability !== 'N/A' ? selectedDest.transport.flight.availability.split('%')[0] + '%' : '0%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default IndiaMap;
