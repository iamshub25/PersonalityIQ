'use client'

export default function HowItWorks() {


  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover your personality type in three simple steps. 
            Start today and begin understanding yourself like never before.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative mb-12 sm:mb-16">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative z-10">
            {/* Step 1 */}
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-clipboard-list text-white text-xl sm:text-2xl lg:text-3xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Take the Assessment</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Complete our comprehensive 60-question personality assessment. 
                Based on proven psychological frameworks, it takes just 10-15 minutes.
              </p>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-xs sm:text-sm text-blue-600 font-semibold">15 min</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 sm:h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 sm:mt-2">Question 45 of 60</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-file-alt text-white text-3xl"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Report</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Receive a comprehensive personality report with detailed insights about your 
                strengths, preferences, and areas for growth tailored to your type.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="text-left space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Detailed personality profile</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Career recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Relationship insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chart-line text-white text-3xl"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply Your Insights</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Use your personality insights to make better decisions, improve relationships, 
                and accelerate your personal and professional development.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Growth Score</span>
                  <span className="text-lg font-bold text-green-600">8.2/10</span>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-3">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div 
                      key={i}
                      className="bg-green-400 rounded"
                      style={{ height: `${20 + i * 5}px` }}
                    ></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">Personal development score</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Success Stories</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">See how others have transformed their lives</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Success Story 1 */}
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                S
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Sarah M.</h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">INFP • Marketing Manager</p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                &ldquo;Understanding my personality type helped me find a career path that 
                aligns with my values. The insights keep me focused on my goals.&rdquo;
              </p>
            </div>
            
            {/* Success Story 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Michael R.</h4>
              <p className="text-sm text-gray-600 mb-3">ENTJ • Entrepreneur</p>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;The personality insights helped me become a better leader. 
                I now understand my team&apos;s needs and communicate more effectively.&rdquo;
              </p>
            </div>
            
            {/* Success Story 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Emma L.</h4>
              <p className="text-sm text-gray-600 mb-3">ISFJ • Teacher</p>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;The personality assessment has improved my self-awareness dramatically. 
                I&apos;m more confident in my decisions and relationships.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to Begin Your Journey?</h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of people who have already discovered their true potential. 
            Start with our free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/test"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              <i className="fas fa-rocket mr-2"></i>
              Start Free Assessment
            </a>
            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <i className="fas fa-play mr-2"></i>
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}