import React, { useState } from 'react';
import MapModal from './MapModal';

const IndiaMap = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-saffron font-serif text-xl mb-2 uppercase tracking-widest">Explore the Map</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Discover India's Geography</h3>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        From the snowy peaks of the Himalayas to the tropical beaches of the south,
                        India's diverse landscape offers something for every traveler. Explore our interactive map to find your next destination.
                    </p>
                    <button onClick={openMap} className="bg-india-green text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg">
                        View Full Map
                    </button>
                </div>
                <div className="flex-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
                            alt="Map of India"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
            {isMapOpen && <MapModal isOpen={isMapOpen} onClose={closeMap} imageSrc="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=3000&auto=format&fit=crop" />}
        </section>
    );
};

export default IndiaMap;
