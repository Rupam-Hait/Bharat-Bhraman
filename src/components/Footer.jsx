import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-8 border-gold">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                    <h2 className="font-serif text-2xl font-bold text-saffron mb-6">Bharat<span className="text-white">Bhraman</span></h2>
                    <p className="text-gray-400 leading-relaxed">
                        Connecting you to the soul of India. Experience the heritage, culture, and beauty of our incredible nation.
                    </p>
                </div>

                <div>
                    <h3 className="font-serif text-xl mb-6 text-gold">Explore</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-saffron transition-colors">Destinations</a></li>
                        <li><a href="#" className="hover:text-saffron transition-colors">Heritage Sites</a></li>
                        <li><a href="#" className="hover:text-saffron transition-colors">Spiritual Tours</a></li>
                        <li><a href="#" className="hover:text-saffron transition-colors">Wildlife</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif text-xl mb-6 text-gold">Company</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-saffron transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-saffron transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-saffron transition-colors">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif text-xl mb-6 text-gold">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Subscribe for travel inspiration.</p>
                    <div className="flex">
                        <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none w-full" />
                        <button className="bg-saffron px-4 py-2 rounded-r-md font-bold hover:bg-orange-600 transition-colors">Join</button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2024 Bharat Bhraman. Made with ❤️ in India.</p>
            </div>
        </footer>
    );
};

export default Footer;
