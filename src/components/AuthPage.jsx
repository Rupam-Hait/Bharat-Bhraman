import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Compass, Mail, Lock, User, AlertCircle, Loader2 } from 'lucide-react';

export const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const { login, signup } = useAuth();

    // Fields state
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            let success = false;
            if (isSignUp) {
                success = await signup(username, email, password);
            } else {
                success = await login(username, password);
            }

            if (!success) {
                setError(isSignUp ? 'Signup failed. Username/Email might be taken.' : 'Invalid credentials. Please try again.');
            }
        } catch (err) {
            console.error('Authentication error:', err);
            setError('Connection error. Please check if the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 bg-slate-950 overflow-hidden font-sans">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-saffron/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-india-green/15 rounded-full blur-[120px]" />

            {/* Main Auth Card Container */}
            <div className="relative w-full max-w-md bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800/40 shadow-2xl rounded-3xl p-8 transition-colors duration-300">
                {/* Brand Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-saffron/20 text-saffron rounded-2xl flex items-center justify-center mx-auto mb-4 border border-saffron/30">
                        <Compass size={32} className="animate-spin-slow" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-white tracking-wide">
                        Bharat<span className="text-india-green">Bhraman</span>
                    </h2>
                    <p className="text-gray-300 text-xs mt-2 font-medium">
                        {isSignUp ? 'Register to begin your divine pilgrimage' : 'Log in to continue your travel guide'}
                    </p>
                </div>

                {/* Error Banner */}
                {error && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded-2xl text-xs mb-6">
                        <AlertCircle size={16} className="shrink-0" /> {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Field */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">Username / Name</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                <User size={16} />
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-400 focus:border-saffron focus:outline-none transition-colors"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field (Only on Sign Up Mode) */}
                    {isSignUp && (
                        <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                    <Mail size={16} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-400 focus:border-saffron focus:outline-none transition-colors"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* Password Field */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">Password</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                <Lock size={16} />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-400 focus:border-saffron focus:outline-none transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-saffron to-orange-600 hover:from-orange-600 hover:to-saffron text-white font-bold py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 mt-6"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={16} /> Connecting...
                            </>
                        ) : (
                            isSignUp ? 'Sign Up' : 'Log In'
                        )}
                    </button>
                </form>

                {/* Switch Mode Footer */}
                <div className="mt-8 text-center text-xs text-gray-400 border-t border-white/5 pt-4">
                    {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}{' '}
                    <button
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setError('');
                        }}
                        className="text-saffron font-bold hover:underline ml-1"
                    >
                        {isSignUp ? 'Log In' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
