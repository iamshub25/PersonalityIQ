'use client'

import { useState } from 'react'

export default function Features() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const openDemo = () => setIsDemoOpen(true)
  const closeDemo = () => setIsDemoOpen(false)

  return (
    <>
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Self-Discovery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your unique personality type with our scientifically-backed assessment 
              and unlock unprecedented insights about yourself.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Feature 1: Personality Assessment */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-user-check text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                16 Personality Types
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Take our comprehensive assessment based on proven psychological frameworks. 
                Discover your unique personality type with detailed insights into your 
                strengths, preferences, and growth areas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> 60-question comprehensive test</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Scientifically validated results</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Detailed personality report</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Career & relationship insights</li>
              </ul>
            </div>

            {/* Feature 2: Career Insights */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-briefcase text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career & Life Insights
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover career paths that align with your personality type. Get personalized 
                recommendations for professional development, relationship compatibility, 
                and life decisions based on your unique traits.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Career recommendations</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Relationship compatibility</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Communication style guide</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Personal development tips</li>
              </ul>
            </div>

            {/* Feature 3: Growth Tracking */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Progress Analytics
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get detailed reports and analytics about your personality traits. 
                Compare your results with others, track assessment history, and 
                receive personalized recommendations for growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Detailed personality reports</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Trait comparisons</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Assessment history</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Growth recommendations</li>
              </ul>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              More Ways to Grow
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                <p className="text-sm text-gray-600">Connect with like-minded individuals</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
                <p className="text-sm text-gray-600">Curated articles and guides</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-mobile-alt text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
                <p className="text-sm text-gray-600">Access your results anywhere</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Privacy</h4>
                <p className="text-sm text-gray-600">Your data is secure and private</p>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">See It In Action</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Experience our platform with an interactive demo. No signup required.
                </p>
                <button 
                  onClick={openDemo}
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  <i className="fas fa-play mr-2"></i>
                  Start Interactive Demo
                </button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <div className="flex-1 bg-white/10 rounded ml-4 h-6"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded h-4 w-3/4"></div>
                    <div className="bg-white/20 rounded h-4 w-1/2"></div>
                    <div className="bg-blue-400 rounded h-8 w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 relative">
            <button 
              onClick={closeDemo}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                We're putting the finishing touches on our interactive demo. 
                Sign up to be notified when it's ready!
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}