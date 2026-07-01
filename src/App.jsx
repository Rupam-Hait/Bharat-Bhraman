import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CulturalHighlights from './components/CulturalHighlights';
import Footer from './components/Footer';

import FamousDestinations from './components/FamousDestinations';
import IndiaMap from './components/IndiaMap';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-warm-sand/30 font-sans">
                <Navbar />
                <Hero />
                <FamousDestinations />
                <IndiaMap />
                <CulturalHighlights />
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
