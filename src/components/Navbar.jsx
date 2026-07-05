import React, { useState, useEffect } from 'react';
import { Menu, Search, User, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { destinationsData } from '../data/destinationsData';
import LoginModal from './LoginModal';

const Navbar = ({ onSearchSelect }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { user, logout } = useAuth();
    
    // Theme switching state initialized from localStorage
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    // Search query states
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Smooth scroll helper
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Search submit handler
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        const query = searchQuery.toLowerCase().trim();
        // Look for exact or partial matches in the name or description of destinations
        const matchedDest = destinationsData.find(dest => 
            dest.name.toLowerCase().includes(query) || 
            dest.description.toLowerCase().includes(query)
        );

        if (matchedDest) {
            onSearchSelect(matchedDest);
            scrollToSection('explore-map');
            setSearchQuery('');
            setIsSearchOpen(false);
        } else {
            alert(`No matching destination found for "${searchQuery}". Try searching for "Agra", "Jaipur", "Kerala", "Varanasi", etc.`);
        }
    };

    return (
        <>
            <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b-4 border-saffron transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="font-serif text-3xl font-bold text-saffron tracking-wide">
                                Bharat<span className="text-india-green">Bhraman</span>
                            </h1>
                        </div>

                        {/* Desktop Menu - Made clickable with smooth scroll */}
                        <div className="hidden lg:flex space-x-6 items-center">
                            <button 
                                onClick={() => scrollToSection('explore-map')} 
                                className="text-gray-800 dark:text-gray-200 hover:text-saffron dark:hover:text-saffron font-semibold text-sm transition-colors focus:outline-none"
                            >
                                Map Explorer
                            </button>
                            <button 
                                onClick={() => scrollToSection('register')} 
                                className="text-gray-800 dark:text-gray-200 hover:text-saffron dark:hover:text-saffron font-semibold text-sm transition-colors focus:outline-none"
                            >
                                Plan Trip
                            </button>
                            <button 
                                onClick={() => scrollToSection('groups')} 
                                className="text-gray-800 dark:text-gray-200 hover:text-saffron dark:hover:text-saffron font-semibold text-sm transition-colors focus:outline-none"
                            >
                                Travel Groups
                            </button>
                            <button 
                                onClick={() => scrollToSection('highlights')} 
                                className="text-gray-800 dark:text-gray-200 hover:text-saffron dark:hover:text-saffron font-semibold text-sm transition-colors focus:outline-none"
                            >
                                Highlights
                            </button>
                        </div>

                        {/* Controls & Icons */}
                        <div className="flex items-center space-x-3">
                            {/* Expandable Search Input */}
                            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                                <div className={`flex items-center bg-warm-sand/20 dark:bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 ${
                                    isSearchOpen ? 'w-40 sm:w-60 px-3 py-1' : 'w-0 px-0 py-0'
                                }`}>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search destination..."
                                        className="w-full py-1.5 bg-transparent text-xs text-gray-800 dark:text-gray-200 border-none outline-none focus:ring-0 placeholder-gray-400"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (isSearchOpen && searchQuery.trim()) {
                                            // Act as submit if open and has query
                                            handleSearchSubmit({ preventDefault: () => {} });
                                        } else {
                                            setIsSearchOpen(!isSearchOpen);
                                        }
                                    }}
                                    className="p-2 rounded-xl bg-warm-sand/20 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-saffron dark:hover:text-saffron transition-all focus:outline-none"
                                    title="Search Destination"
                                >
                                    <Search size={20} />
                                </button>
                            </form>

                            {/* Theme Toggle Button */}
                            <button 
                                onClick={toggleTheme}
                                className="p-2 rounded-xl bg-warm-sand/20 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-saffron dark:hover:text-saffron transition-all focus:outline-none"
                                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>

                            {user ? (
                                <div className="flex items-center space-x-3">
                                    <span className="text-saffron font-semibold text-xs hidden sm:inline">Welcome, {user.name}</span>
                                    <button
                                        onClick={logout}
                                        className="text-gray-600 dark:text-gray-300 hover:text-saffron transition-colors text-xs font-semibold"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="p-2 rounded-xl bg-warm-sand/20 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-saffron transition-colors focus:outline-none"
                                >
                                    <User size={20} />
                                </button>
                            )}

                            {/* Mobile Hamburger menu */}
                            <button 
                                onClick={() => scrollToSection('explore-map')}
                                className="lg:hidden p-2 rounded-xl bg-warm-sand/20 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-saffron transition-colors focus:outline-none"
                            >
                                <Menu size={20} />
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
