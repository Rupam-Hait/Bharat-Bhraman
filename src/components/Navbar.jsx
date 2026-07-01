import React from 'react';
import { Menu, Search, User } from 'lucide-react';

import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const { user, logout } = useAuth();

    return (
        <>
            <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b-4 border-saffron">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="font-serif text-3xl font-bold text-saffron tracking-wide">
                                Bharat<span className="text-india-green">Bhraman</span>
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <a href="#" className="text-gray-800 hover:text-saffron font-medium transition-colors">Destinations</a>
                            <a href="#" className="text-gray-800 hover:text-saffron font-medium transition-colors">Heritage</a>
                            <a href="#" className="text-gray-800 hover:text-saffron font-medium transition-colors">Festivals</a>
                            <a href="#" className="text-gray-800 hover:text-saffron font-medium transition-colors">Plan Trip</a>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-6">
                            <button className="text-gray-600 hover:text-saffron transition-colors">
                                <Search className="h-6 w-6" />
                            </button>

                            {user ? (
                                <div className="flex items-center space-x-4">
                                    <span className="text-saffron font-medium">Welcome, {user.name}</span>
                                    <button
                                        onClick={logout}
                                        className="text-gray-600 hover:text-saffron transition-colors text-sm font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="text-gray-600 hover:text-saffron transition-colors"
                                >
                                    <User className="h-6 w-6" />
                                </button>
                            )}

                            <button className="md:hidden text-gray-600 hover:text-saffron transition-colors">
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Navbar;
