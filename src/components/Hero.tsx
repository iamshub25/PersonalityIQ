'use client'

import { useState } from 'react'

interface Question {
  question: string
  options: string[]
}

export default function Hero() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  const questions: Question[] = [
    {
      question: "In social situations, you usually:",
      options: ["Take charge and lead", "Observe and contribute when needed", "Prefer one-on-one conversations"]
    },
    {
      question: "When making decisions, you rely more on:",
      options: ["Logic and facts", "Intuition and feelings", "Past experiences"]
    }
  ]

  const handleOptionClick = () => {
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      setTimeout(() => setIsCompleted(true), 300)
    }
  }

  const handleStartAssessment = () => {
    window.location.href = '/test'
  }

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Discover Your
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                {" "}True Self
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              AI-powered personality assessment that unlocks deep insights about your personality, 
              improves self-awareness, and accelerates your personal growth journey.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleStartAssessment}
                className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                <i className="fas fa-play mr-2"></i>
                Take Free Assessment
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200">
                <i className="fas fa-info-circle mr-2"></i>
                Learn More
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500K+</div>
                <div className="text-white/70">Assessments Taken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9⭐</div>
                <div className="text-white/70">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-white/70">Accuracy Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Demo */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <i className="fas fa-brain text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Quick Personality Preview</h3>
                  <p className="text-white/80">Answer a few questions to get started</p>
                </div>
                
                <div className="space-y-4">
                  {!isCompleted ? (
                    currentQuestion < questions.length ? (
                      <div className="question-card">
                        <h4 className="font-semibold mb-4 text-lg">{questions[currentQuestion].question}</h4>
                        <div className="space-y-2">
                          {questions[currentQuestion].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={handleOptionClick}
                              className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-green-400 text-4xl mb-2">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <p className="text-lg font-semibold">Great start! Ready for your full assessment?</p>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={handleStartAssessment}
                  className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 py-3 rounded-xl font-semibold mt-6 hover:from-yellow-300 hover:to-pink-300 transition-all duration-200"
                >
                  Start Personality Test
                </button>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}