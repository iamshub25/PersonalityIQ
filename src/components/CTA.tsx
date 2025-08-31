'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

export default function CTA() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: "Is the assessment scientifically accurate?",
      answer: "Yes, our assessment is based on established psychological frameworks and has been validated through extensive research with thousands of users."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "Is my data secure?",
      answer: "Your privacy is our top priority. All data is encrypted and stored securely. We never share your personal information with third parties."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you&apos;re not satisfied, contact our support team for a full refund."
    },
    {
      question: "Can I access my results later?",
      answer: "Yes! Your personality results and insights are saved to your account and can be accessed anytime through our web platform."
    },
    {
      question: "How accurate are the personality assessments?",
      answer: "Our assessments are based on scientifically validated psychological frameworks with over 95% accuracy rate when users answer honestly."
    }
  ]

  const togglePricing = () => {
    setIsYearly(!isYearly)
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }



  return (
    <section id="pricing" className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Start free and upgrade when you&apos;re ready to unlock your full potential
          </p>
          
          
          <div className="flex items-center justify-center mb-8">
            <span className="text-gray-600 mr-3">Monthly</span>
            <button 
              onClick={togglePricing}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span className="sr-only">Toggle yearly pricing</span>
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-gray-600 ml-3">Yearly</span>
            <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Save 20%</span>
          </div>
        </div>

        
        <div className="grid gap-6 sm:gap-8 mb-12 sm:mb-16">

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Explorer</h3>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                <span>$0</span>
                <span className="text-base sm:text-lg text-gray-500 font-normal">/month</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-3"></i>
                <span className="text-gray-700">Basic personality assessment</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-3"></i>
                <span className="text-gray-700">Personality type overview</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-3"></i>
                <span className="text-gray-700">Basic insights</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-3"></i>
                <span className="text-gray-700">Community access</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-times text-gray-300 mr-3"></i>
                <span>Detailed personality report</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-times text-gray-300 mr-3"></i>
                <span>Career recommendations</span>
              </li>
            </ul>
            
            <a href="/test" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-center">
              Unlock Full Potential
            </a>
          </div>
        </div> */}

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              {faqs.slice(0, 3).map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <i className={`fas ${openFAQ === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400`}></i>
                  </button>
                  {openFAQ === index && (
                    <div className="p-4 text-gray-600 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {faqs.slice(3, 6).map((faq, index) => (
                <div key={index + 3} className="faq-item">
                  <button 
                    onClick={() => toggleFAQ(index + 3)}
                    className="w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <i className={`fas ${openFAQ === index + 3 ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400`}></i>
                  </button>
                  {openFAQ === index + 3 && (
                    <div className="p-4 text-gray-600 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Transform Your Life?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join over 500,000 people who have already discovered their true potential. 
            Start your journey today with our free assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/test" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
              <i className="fas fa-rocket mr-2"></i>
              Start Free Assessment
            </a>
            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <i className="fas fa-calendar mr-2"></i>
              Schedule Demo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}