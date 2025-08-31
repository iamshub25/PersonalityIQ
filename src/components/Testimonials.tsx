'use client'

import { useState, useEffect, useCallback } from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  type: string
  quote: string
  avatar: string
  stats?: {
    type: string
    selfAwareness?: number
    decisionMaking?: number
    emotionalIntelligence?: number
    assessments?: number
    accuracy?: number
    posts?: number
    connections?: number
    votes?: number
  }
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "UX Designer at Google",
      type: "ENFP",
      avatar: "A",
      quote: "PersonalityIQ helped me understand why I make certain decisions and how to leverage my strengths. The personality insights are incredibly accurate and helpful.",
      stats: {
        type: "growth",
        selfAwareness: 85,
        decisionMaking: 78,
        emotionalIntelligence: 92
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Software Architect",
      type: "INTJ",
      avatar: "M",
      quote: "The personality insights are perfectly tailored to my INTJ type. I've discovered patterns in my thinking that I never noticed before.",
      stats: {
        type: "assessment",
        assessments: 12,
        accuracy: 94
      }
    },
    {
      id: 3,
      name: "Sarah Kim",
      role: "Content Creator",
      type: "ESFP",
      avatar: "S",
      quote: "As an ESFP, I love how the platform celebrates my personality while helping me grow. The community features are fantastic for connecting with like-minded people.",
      stats: {
        type: "community",
        posts: 47,
        connections: 156,
        votes: 284
      }
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const renderStats = (testimonial: Testimonial) => {
    if (testimonial.stats?.type === 'growth') {
      return (
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
          <div className="text-sm text-gray-300 mb-4">Personality Growth</div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Self-Awareness</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-700 rounded-full mr-2">
                  <div className="h-2 bg-blue-400 rounded-full" style={{ width: `${testimonial.stats.selfAwareness}%` }}></div>
                </div>
                <span className="text-xs text-gray-400">{testimonial.stats.selfAwareness}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Decision Making</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-700 rounded-full mr-2">
                  <div className="h-2 bg-green-400 rounded-full" style={{ width: `${testimonial.stats.decisionMaking}%` }}></div>
                </div>
                <span className="text-xs text-gray-400">{testimonial.stats.decisionMaking}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Emotional Intelligence</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-700 rounded-full mr-2">
                  <div className="h-2 bg-purple-400 rounded-full" style={{ width: `${testimonial.stats.emotionalIntelligence}%` }}></div>
                </div>
                <span className="text-xs text-gray-400">{testimonial.stats.emotionalIntelligence}%</span>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (testimonial.stats?.type === 'assessment') {
      return (
        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
          <div className="text-sm text-gray-300 mb-4">Assessment History</div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Assessments Taken</span>
              <span className="text-lg font-semibold text-green-400">{testimonial.stats.assessments}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Accuracy Score</span>
              <span className="text-lg font-semibold text-blue-400">{testimonial.stats.accuracy}%</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg font-semibold">INTJ Personality</div>
                <div className="text-xs text-gray-400">Architect Type</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
          <div className="text-sm text-gray-300 mb-4">Community Impact</div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Posts Shared</span>
              <span className="text-lg font-semibold text-pink-400">{testimonial.stats?.posts}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Connections Made</span>
              <span className="text-lg font-semibold text-orange-400">{testimonial.stats?.connections}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Helpful Votes</span>
              <span className="text-lg font-semibold text-yellow-400">{testimonial.stats?.votes}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg font-semibold">Top Contributor</div>
                <div className="text-xs text-gray-400">ESFP Community</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            What Our Users Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands of people who have transformed their lives through self-understanding
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">500K+</div>
            <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">4.9⭐</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">2M+</div>
            <div className="text-gray-300">Assessments Taken</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mb-12 sm:mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                      <div>
                        <div className="flex mb-4 sm:mb-6 justify-center lg:justify-start">
                          {Array.from({ length: 5 }, (_, i) => (
                            <i key={i} className="fas fa-star text-yellow-400 text-base sm:text-lg lg:text-xl"></i>
                          ))}
                        </div>
                        <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed mb-6 sm:mb-8 text-gray-100 text-center lg:text-left">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center lg:justify-start">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${
                            testimonial.id === 1 ? 'from-blue-400 to-purple-500' :
                            testimonial.id === 2 ? 'from-green-400 to-blue-500' :
                            'from-pink-400 to-orange-500'
                          } rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4`}>
                            {testimonial.avatar}
                          </div>
                          <div className="text-center lg:text-left">
                            <div className="font-semibold text-base sm:text-lg">{testimonial.name}</div>
                            <div className="text-gray-400 text-sm sm:text-base">{testimonial.type} • {testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        {renderStats(testimonial)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 transition-colors"
            >
              <i className="fas fa-chevron-left text-white text-sm sm:text-base"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 transition-colors"
            >
              <i className="fas fa-chevron-right text-white text-sm sm:text-base"></i>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white/50' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by teams at</div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Google</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Microsoft</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Apple</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Netflix</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Spotify</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">Airbnb</div>
          </div>
        </div>
      </div>
    </section>
  )
}