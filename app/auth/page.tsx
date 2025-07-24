'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const router = useRouter();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth process
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-emerald-100'}`}>
      {/* Fluid Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDarkMode ? 'opacity-20' : 'opacity-30'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 via-green-500/60 to-teal-400/40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-emerald-700/50 to-teal-600/30 animate-pulse animation-delay-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/20 via-green-600/40 to-emerald-500/20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent transform rotate-12 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent transform -rotate-12 animate-pulse animation-delay-1500"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-400/10 to-transparent transform rotate-6 animate-pulse animation-delay-3000"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`relative z-10 flex items-center justify-between px-8 py-6 ${isDarkMode ? 'bg-gray-800/70 border-b border-gray-700/50' : 'bg-white/70'} backdrop-blur-md`}>
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center ${isDarkMode ? 'shadow-lg shadow-green-500/20' : ''}`}>
            <i className="ri-leaf-line text-white text-xl"></i>
          </div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`} style={{ fontFamily: 'Pacifico, serif' }}>
            SwathAI
          </h1>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${
            isDarkMode ? 'bg-gray-700/70 text-yellow-400 hover:bg-gray-600/70 shadow-lg backdrop-blur-sm' : 'bg-gray-100/70 text-gray-600 hover:bg-gray-200/70 backdrop-blur-sm'
          }`}
        >
          <i className={`text-lg ${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'}`}></i>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-88px)] px-8 py-16">
        <div className="max-w-md w-full">
          {/* Auth Card */}
          <div className={`rounded-3xl p-8 ${isDarkMode ? 'bg-gray-800/40 border border-gray-700/30' : 'bg-white/40 border border-white/20'} backdrop-blur-md shadow-xl`}>
            <div className="text-center mb-8">
              <div className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 ${isDarkMode ? 'shadow-lg shadow-green-500/30' : ''}`}>
                <i className="ri-user-line text-white text-2xl"></i>
              </div>
              <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {isLogin ? 'Welcome Back' : 'Join SwathAI'}
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {isLogin ? 'Sign in to your account' : 'Create your account'}
              </p>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      isDarkMode ? 'bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600/50 backdrop-blur-sm' : 'bg-white/70 text-gray-900 placeholder-gray-500 backdrop-blur-sm border border-gray-200/50'
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    isDarkMode ? 'bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600/50 backdrop-blur-sm' : 'bg-white/70 text-gray-900 placeholder-gray-500 backdrop-blur-sm border border-gray-200/50'
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    isDarkMode ? 'bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600/50 backdrop-blur-sm' : 'bg-white/70 text-gray-900 placeholder-gray-500 backdrop-blur-sm border border-gray-200/50'
                  }`}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      isDarkMode ? 'bg-gray-700/70 text-white placeholder-gray-400 border border-gray-600/50 backdrop-blur-sm' : 'bg-white/70 text-gray-900 placeholder-gray-500 backdrop-blur-sm border border-gray-200/50'
                    }`}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow whitespace-nowrap"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors whitespace-nowrap ${
                    isDarkMode ? 'bg-gray-700/70 text-white hover:bg-gray-600/70 backdrop-blur-sm' : 'bg-gray-100/70 text-gray-700 hover:bg-gray-200/70 backdrop-blur-sm'
                  }`}
                >
                  {isLogin ? 'Create New Account' : 'Back to Sign In'}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}