import React from 'react';
import { API_BASE } from '../apiConfig';

const CulturalHighlights = () => {
    const [highlights, setHighlights] = React.useState([]);

    React.useEffect(() => {
        fetch(`${API_BASE}/api/highlights`)
            .then(res => res.json())
            .then(data => setHighlights(data))
            .catch(err => console.error('Error fetching highlights:', err));
    }, []);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-saffron font-serif text-xl mb-2 uppercase tracking-widest">Experience India</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Cultural Highlights</h3>
                <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {highlights.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative h-96 overflow-hidden rounded-t-full border-4 border-white shadow-xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                <h4 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CulturalHighlights;
