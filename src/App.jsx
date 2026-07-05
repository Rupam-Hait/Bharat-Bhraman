import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CulturalHighlights from './components/CulturalHighlights';
import Footer from './components/Footer';
import IndiaMap from './components/IndiaMap';
import TourRegistration from './components/TourRegistration';
import TravelGroups from './components/TravelGroups';
import AuthPage from './components/AuthPage';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
    const { user } = useAuth();
    const [selectedDest, setSelectedDest] = React.useState(null);

    if (!user) {
        return <AuthPage />;
    }

    return (
        <div className="min-h-screen bg-warm-sand/30 dark:bg-slate-950 font-sans text-gray-950 dark:text-gray-50 transition-colors duration-300">
            <Navbar onSearchSelect={setSelectedDest} />
            <Hero />
            <IndiaMap selectedDest={selectedDest} setSelectedDest={setSelectedDest} />
            <TourRegistration />
            <TravelGroups />
            <CulturalHighlights />
            <Footer />
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;
