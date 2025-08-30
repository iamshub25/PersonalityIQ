'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: { text: string; value: string }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "In social situations, you usually:",
    options: [
      { text: "Take charge and lead conversations", value: "E" },
      { text: "Listen and contribute when needed", value: "I" },
      { text: "Prefer one-on-one interactions", value: "I" }
    ]
  },
  {
    id: 2,
    question: "When making decisions, you rely more on:",
    options: [
      { text: "Logic and facts", value: "T" },
      { text: "Personal values and feelings", value: "F" },
      { text: "Past experiences", value: "T" }
    ]
  },
  {
    id: 3,
    question: "You prefer to:",
    options: [
      { text: "Plan everything in advance", value: "J" },
      { text: "Keep your options open", value: "P" },
      { text: "Go with the flow", value: "P" }
    ]
  },
  {
    id: 4,
    question: "When learning something new, you:",
    options: [
      { text: "Focus on practical applications", value: "S" },
      { text: "Look for patterns and possibilities", value: "N" },
      { text: "Connect it to bigger concepts", value: "N" }
    ]
  },
  {
    id: 5,
    question: "At work, you're most motivated by:",
    options: [
      { text: "Clear goals and deadlines", value: "J" },
      { text: "Creative freedom and flexibility", value: "P" },
      { text: "Helping others succeed", value: "F" }
    ]
  }
]

const getPersonalityResult = (answers: string[]) => {
  const counts = { E: 0, I: 0, T: 0, F: 0, J: 0, P: 0, S: 0, N: 0 }
  answers.forEach(answer => counts[answer as keyof typeof counts]++)
  
  const type = 
    (counts.E > counts.I ? 'E' : 'I') +
    (counts.S > counts.N ? 'S' : 'N') +
    (counts.T > counts.F ? 'T' : 'F') +
    (counts.J > counts.P ? 'J' : 'P')
  
  const results: Record<string, { title: string; description: string; traits: string[] }> = {
    'ESTJ': {
      title: 'The Executive',
      description: 'You are organized, practical, and natural leader who thrives on efficiency and getting things done.',
      traits: ['Natural leadership', 'Goal-oriented', 'Practical problem solver']
    },
    'ISTJ': {
      title: 'The Logistician',
      description: 'You are reliable, practical, and fact-minded. You value tradition and loyalty.',
      traits: ['Highly reliable', 'Detail-oriented', 'Strong work ethic']
    },
    'ENFP': {
      title: 'The Campaigner',
      description: 'You are enthusiastic, creative, and sociable. You see life as full of possibilities.',
      traits: ['Highly creative', 'Excellent communicator', 'Inspiring to others']
    },
    'INFP': {
      title: 'The Mediator',
      description: 'You are idealistic, loyal to your values, and seek to help people reach their potential.',
      traits: ['Strong values', 'Creative and imaginative', 'Empathetic']
    },
    'ENTJ': {
      title: 'The Commander',
      description: 'You are bold, imaginative, and strong-willed leader who finds a way or makes one.',
      traits: ['Strategic thinking', 'Natural leadership', 'Highly ambitious']
    },
    'INTJ': {
      title: 'The Architect',
      description: 'You are imaginative and strategic thinker, with a plan for everything.',
      traits: ['Independent thinking', 'Strategic planning', 'High standards']
    }
  }
  
  return results[type] || results['ENFP']
}

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<any>(null)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const personalityResult = getPersonalityResult(newAnswers)
      setResult(personalityResult)
      setIsComplete(true)
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
    setIsComplete(false)
  }

  if (isComplete && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <i className="fas fa-check text-white text-3xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Personality Type</h1>
            <h2 className="text-2xl font-semibold text-blue-600">{result.title}</h2>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{result.description}</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Key Traits:</h3>
            <ul className="space-y-2">
              {result.traits.map((trait: string, index: number) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-star text-yellow-500 mr-3"></i>
                  <span className="text-gray-700">{trait}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={resetTest}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Take Test Again
            </button>
            <Link 
              href="/"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              <i className="fas fa-arrow-left mr-2"></i>Back
            </Link>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
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
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {questions[currentQuestion].question}
          </h1>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <span className="text-gray-800">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}