import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop")', // Taj Mahal / Indian Architecture
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-warm-sand"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                <span className="text-gold font-serif text-xl md:text-2xl mb-4 tracking-widest uppercase drop-shadow-md">
                    Explore the Divine Beauty of India
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 drop-shadow-lg">
                    Journey Through <br />
                    <span className="text-saffron">Timeless Heritage</span>
                </h1>

                {/* Search Box */}
                <div className="w-full max-w-3xl bg-white/95 backdrop-blur p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center p-4 md:p-2 gap-2">
                    <div className="flex-1 w-full px-4 border-b md:border-b-0 md:border-r border-gray-200 py-2">
                        <label className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Destination</label>
                        <input type="text" placeholder="Where to?" className="w-full outline-none text-gray-800 font-serif text-lg bg-transparent" />
                    </div>
                    <div className="flex-1 w-full px-4 border-b md:border-b-0 md:border-r border-gray-200 py-2">
                        <label className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Dates</label>
                        <input type="text" placeholder="Select dates" className="w-full outline-none text-gray-800 font-serif text-lg bg-transparent" />
                    </div>
                    <div className="flex-1 w-full px-4 py-2">
                        <label className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Guests</label>
                        <input type="text" placeholder="Add guests" className="w-full outline-none text-gray-800 font-serif text-lg bg-transparent" />
                    </div>
                    <button className="w-full md:w-auto bg-saffron hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
