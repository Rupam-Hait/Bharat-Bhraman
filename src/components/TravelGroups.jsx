import React, { useState } from 'react';
import { API_BASE } from '../apiConfig';
import { CheckCircle, AlertCircle, Loader2, Users, Compass, CompassIcon, Sparkles } from 'lucide-react';

export const TravelGroups = () => {
    const [emails, setEmails] = useState({
        adventure: '',
        family: '',
        culture: ''
    });
    const [loading, setLoading] = useState({
        adventure: false,
        family: false,
        culture: false
    });
    const [status, setStatus] = useState({
        adventure: { success: '', error: '' },
        family: { success: '', error: '' },
        culture: { success: '', error: '' }
    });

    const handleJoinGroup = async (groupName, key) => {
        const email = emails[key];
        if (!email) {
            setStatus(prev => ({
                ...prev,
                [key]: { success: '', error: 'Email address is required.' }
            }));
            return;
        }

        // Reset status
        setStatus(prev => ({
            ...prev,
            [key]: { success: '', error: '' }
        }));
        setLoading(prev => ({ ...prev, [key]: true }));

        try {
            const res = await fetch(`${API_BASE}/api/group`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ groupName, email })
            });
            const data = await res.json();

            if (res.ok && data.success) {
                setStatus(prev => ({
                    ...prev,
                    [key]: { success: data.message || 'Successfully joined group!', error: '' }
                }));
                setEmails(prev => ({ ...prev, [key]: '' }));
            } else {
                setStatus(prev => ({
                    ...prev,
                    [key]: { success: '', error: data.message || 'Could not join. Please try again.' }
                }));
            }
        } catch (err) {
            console.error('Group join error:', err);
            setStatus(prev => ({
                ...prev,
                [key]: { success: '', error: 'Server connection error. Please try again later.' }
            }));
        } finally {
            setLoading(prev => ({ ...prev, [key]: false }));
        }
    };

    const handleEmailChange = (key, val) => {
        setEmails(prev => ({ ...prev, [key]: val }));
    };

    const groups = [
        {
            key: 'adventure',
            name: 'Adventure Seekers',
            icon: Compass,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-100',
            description: 'Trekking through Leh-Ladakh, camping in Western Ghats, rafting in Rishikesh. Perfect for thrill-lovers.'
        },
        {
            key: 'family',
            name: 'Family Explorers',
            icon: Users,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-100',
            description: 'Safe, carefully curated heritage tours and comfortable houseboat experiences in Kerala. Ideal for family trips.'
        },
        {
            key: 'culture',
            name: 'Culture Lovers',
            icon: Sparkles,
            color: 'text-saffron',
            bgColor: 'bg-orange-50/50',
            borderColor: 'border-saffron/10',
            description: 'Exploring temples of Varanasi, architecture of Mysore, and traditional festivals. Ideal for history enthusiasts.'
        }
    ];

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto border-t border-gray-100" id="groups">
            <div className="text-center mb-16">
                <h2 className="text-saffron font-serif text-xl mb-2 uppercase tracking-widest">Connect with Travelers</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Join Our Travel Groups</h3>
                <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {groups.map((group) => {
                    const Icon = group.icon;
                    return (
                        <div 
                            key={group.key}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className={`w-14 h-14 ${group.bgColor} rounded-2xl flex items-center justify-center ${group.color} mb-6`}>
                                    <Icon size={28} />
                                </div>
                                <h4 className="text-2xl font-serif font-bold text-gray-900 mb-3">{group.name}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{group.description}</p>
                            </div>

                            <div className="space-y-3">
                                {status[group.key].error && (
                                    <div className="flex items-center gap-2 bg-red-50 text-red-700 p-2.5 rounded-xl text-xs border border-red-100">
                                        <AlertCircle size={14} className="shrink-0" /> {status[group.key].error}
                                    </div>
                                )}
                                {status[group.key].success && (
                                    <div className="flex items-center gap-2 bg-green-50 text-green-700 p-2.5 rounded-xl text-xs border border-green-100">
                                        <CheckCircle size={14} className="shrink-0" /> {status[group.key].success}
                                    </div>
                                )}

                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={emails[group.key]}
                                        onChange={(e) => handleEmailChange(group.key, e.target.value)}
                                        placeholder="Your email address"
                                        className="flex-1 min-w-0 px-3.5 py-2.5 bg-warm-sand/10 border border-gray-200 rounded-xl text-xs focus:ring-saffron focus:border-saffron focus:outline-none"
                                        required
                                    />
                                    <button
                                        onClick={() => handleJoinGroup(group.name, group.key)}
                                        disabled={loading[group.key]}
                                        className="px-4 py-2.5 bg-india-green hover:bg-green-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1 disabled:opacity-50"
                                    >
                                        {loading[group.key] ? (
                                            <Loader2 className="animate-spin" size={14} />
                                        ) : (
                                            'Join'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TravelGroups;
