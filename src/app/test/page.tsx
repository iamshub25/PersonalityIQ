'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const questions = [
  {
    id: 1,
    question: "How do you typically handle stressful situations?",
    options: [
      { text: "I stay calm and think through solutions", value: "analytical" },
      { text: "I seek support from friends or family", value: "social" },
      { text: "I take time alone to process my feelings", value: "introspective" },
      { text: "I jump into action to solve the problem", value: "action-oriented" }
    ]
  },
  {
    id: 2,
    question: "What energizes you most?",
    options: [
      { text: "Being around people and socializing", value: "social" },
      { text: "Working on challenging problems", value: "analytical" },
      { text: "Quiet time for reflection", value: "introspective" },
      { text: "Taking on new adventures", value: "action-oriented" }
    ]
  },
  {
    id: 3,
    question: "How do you make important decisions?",
    options: [
      { text: "I analyze all the facts and data", value: "analytical" },
      { text: "I trust my gut feelings", value: "introspective" },
      { text: "I discuss with others to get their input", value: "social" },
      { text: "I make quick decisions and adjust as needed", value: "action-oriented" }
    ]
  },
  {
    id: 4,
    question: "What describes your ideal weekend?",
    options: [
      { text: "Hosting a party with friends", value: "social" },
      { text: "Reading a book or learning something new", value: "analytical" },
      { text: "Going on an outdoor adventure", value: "action-oriented" },
      { text: "Having quiet time for hobbies", value: "introspective" }
    ]
  },
  {
    id: 5,
    question: "How do you approach new challenges?",
    options: [
      { text: "I research thoroughly before starting", value: "analytical" },
      { text: "I dive in and learn as I go", value: "action-oriented" },
      { text: "I collaborate with others for support", value: "social" },
      { text: "I reflect on how it aligns with my values", value: "introspective" }
    ]
  }
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const router = useRouter()

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = () => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const dominant = Object.entries(counts).sort(([,a], [,b]) => b - a)[0][0]

    const results = {
      analytical: {
        type: "The Analyst",
        description: "You approach life with logic and careful consideration. You excel at problem-solving and making well-informed decisions.",
        traits: ["Logical", "Detail-oriented", "Strategic", "Methodical"],
        color: "from-blue-500 to-indigo-600"
      },
      social: {
        type: "The Connector",
        description: "You thrive on relationships and collaboration. You have natural leadership abilities and excel in team environments.",
        traits: ["Empathetic", "Collaborative", "Inspiring", "Communicative"],
        color: "from-green-500 to-emerald-600"
      },
      introspective: {
        type: "The Reflector",
        description: "You value deep thinking and authentic connections. You have strong intuition and care deeply about personal values.",
        traits: ["Thoughtful", "Intuitive", "Authentic", "Creative"],
        color: "from-purple-500 to-violet-600"
      },
      "action-oriented": {
        type: "The Achiever",
        description: "You are driven by results and love taking action. You adapt quickly and thrive in dynamic environments.",
        traits: ["Dynamic", "Adaptable", "Results-focused", "Energetic"],
        color: "from-orange-500 to-red-600"
      }
    }

    return results[dominant as keyof typeof results]
  }

  if (showResult) {
    const result = getResult()
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 bg-gradient-to-r ${result.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
              <span className="text-3xl text-white font-bold">{result.type.charAt(4)}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{result.type}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{result.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Key Traits:</h3>
            <div className="grid grid-cols-2 gap-3">
              {result.traits.map((trait, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="font-medium text-gray-800">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Take Test Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Personality Assessment</h1>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-200 border-2 border-transparent hover:border-blue-200"
              >
                <span className="font-medium text-gray-800">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          Click on the option that best describes you
        </div>
      </div>
    </div>
  )
}