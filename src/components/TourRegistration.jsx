import React, { useState } from 'react';
import { API_BASE } from '../apiConfig';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { destinationsData } from '../data/destinationsData';

export const TourRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState(destinationsData[0]?.name || 'Taj Mahal, Agra');
    const [date, setDate] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, destination, date })
            });
            const data = await res.json();
            
            if (res.ok && data.success) {
                setSuccess(data.message || 'Your tour has been successfully registered!');
                setName('');
                setEmail('');
                setDate('');
            } else {
                setError(data.message || 'Failed to submit registration. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('Could not connect to the backend server. Please verify the connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 max-w-4xl mx-auto" id="register">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-colors duration-300">
                {/* Left Side: Text Description */}
                <div>
                    <h2 className="text-saffron font-serif text-xl mb-2 uppercase tracking-widest">Book Your Journey</h2>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Tour Registration</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                        Ready to embark on an incredible journey across India? Select your dream destination and travel date to book your customized guided tour. Our local guides will connect with you via email to plan your itinerary.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300">
                            <span className="w-6 h-6 bg-saffron/10 rounded-full flex items-center justify-center text-saffron font-bold text-xs">✓</span>
                            Certified Local Professional Guides
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300">
                            <span className="w-6 h-6 bg-saffron/10 rounded-full flex items-center justify-center text-saffron font-bold text-xs">✓</span>
                            Seamless Hotel & Transport Coordination
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300">
                            <span className="w-6 h-6 bg-saffron/10 rounded-full flex items-center justify-center text-saffron font-bold text-xs">✓</span>
                            24/7 Pilgrimage Support & Helpdesk
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-warm-sand/10 dark:bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-warm-sand/20 dark:border-slate-700/50">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="flex items-center gap-2 bg-red-50 text-red-700 p-3 rounded-xl text-xs border border-red-100">
                                <AlertCircle size={16} /> {error}
                            </div>
                        )}
                        {success && (
                            <div className="flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-xl text-xs border border-green-100">
                                <CheckCircle size={16} /> {success}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:ring-saffron focus:border-saffron focus:outline-none dark:text-white"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:ring-saffron focus:border-saffron focus:outline-none dark:text-white"
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Select Destination</label>
                            <select
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:ring-saffron focus:border-saffron focus:outline-none dark:text-white"
                            >
                                {destinationsData.map((dest) => (
                                    <option key={dest.id} value={dest.name} className="dark:bg-slate-800 dark:text-white">
                                        {dest.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Travel Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:ring-saffron focus:border-saffron focus:outline-none dark:text-white"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-india-green hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={16} /> Submitting...
                                </>
                            ) : (
                                'Register Now'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TourRegistration;
