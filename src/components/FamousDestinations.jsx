import React, { useState, useEffect } from 'react';
import { API_BASE } from '../apiConfig';

const FamousDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE}/api/destinations`)
            .then(res => res.json())
            .then(data => setDestinations(data))
            .catch(err => console.error('Error fetching destinations:', err));
    }, []);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto bg-white/50 rounded-3xl my-10">
            <div className="text-center mb-16">
                <h2 className="text-saffron font-serif text-xl mb-2 uppercase tracking-widest">Must Visit</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Famous Destinations</h3>
                <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {destinations.map((dest) => (
                    <div key={dest.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80">
                        <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <h4 className="text-xl font-serif font-bold text-white mb-1">{dest.name}</h4>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                {dest.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FamousDestinations;
