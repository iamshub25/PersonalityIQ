'use client';

import { useState } from 'react';

const questions = [
  {
    title: 'Charting a New Course',
    subtitle: 'This section helps us understand the core of your desire for change.',
    question: 'What is the primary driver for wanting to start your venture (startup/side hustle)?',
    options: [
      'Seeking greater financial independence',
      'Desiring more creative freedom and autonomy',
      'Wanting to escape my current job/work environment',
      'Passionate about a specific idea or solving a particular problem'
    ]
  },
  {
    title: 'Understanding Your Strengths',
    subtitle: 'Let\'s identify what you bring to the table.',
    question: 'Which of these best describes your strongest skill set?',
    options: [
      'Technical skills (coding, design, engineering)',
      'Business skills (sales, marketing, strategy)',
      'Creative skills (content, storytelling, branding)',
      'People skills (leadership, networking, communication)'
    ]
  },
  {
    title: 'Time & Commitment',
    subtitle: 'Understanding your availability helps us create a realistic plan.',
    question: 'How much time can you dedicate to your venture weekly?',
    options: [
      'Less than 5 hours (testing the waters)',
      '5-10 hours (serious side hustle)',
      '10-20 hours (major commitment)',
      '20+ hours (ready to go all in)'
    ]
  },
  {
    title: 'Risk Tolerance',
    subtitle: 'Everyone has different comfort levels with uncertainty.',
    question: 'How do you feel about taking financial risks?',
    options: [
      'Very conservative - I need stability',
      'Somewhat cautious - small calculated risks only',
      'Moderate - willing to invest some savings',
      'High tolerance - ready to bet on myself'
    ]
  },
  {
    title: 'Your Vision',
    subtitle: 'What does success look like for you?',
    question: 'What\'s your primary goal for this venture?',
    options: [
      'Generate extra income on the side',
      'Replace my current job income',
      'Build a scalable business',
      'Create impact and solve a problem I care about'
    ]
  },
  {
    title: 'Support System',
    subtitle: 'Your environment plays a crucial role in your success.',
    question: 'How supportive is your immediate circle about this change?',
    options: [
      'Very supportive - they encourage me',
      'Neutral - they\'re okay with it',
      'Skeptical - they have doubts',
      'Unsupportive - they think it\'s risky'
    ]
  }
];

export default function TestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleContinue = () => {
    if (selected !== null) {
      const newAnswers = [...answers];
      newAnswers[currentStep] = selected;
      setAnswers(newAnswers);
      
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelected(newAnswers[currentStep + 1] ?? null);
      } else {
        alert('Quiz completed! Your answers have been saved.');
      }
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-24 px-8 pb-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="w-full bg-[#e8d5c4] rounded-full h-3 mb-8">
          <div 
            className="h-full bg-[#4a6b7c] rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step Indicator */}
        <p className="text-gray-600 mb-4">Step {currentStep + 1} of {questions.length}</p>

        {/* Title */}
        <h1 className="text-5xl font-serif mb-6">{currentQuestion.title}</h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 mb-12">
          {currentQuestion.subtitle}
        </p>

        {/* Question */}
        <h2 className="text-2xl font-serif mb-8">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-full p-6 text-left border-2 rounded-xl transition-all ${
                selected === index
                  ? 'border-gray-400 bg-white'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selected === index ? 'border-gray-400' : 'border-gray-300'
                }`}>
                  {selected === index && (
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                  )}
                </div>
                <span className="text-lg">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Auto-save Message */}
        <div className="flex items-center gap-2 text-green-700 mb-8">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Your progress is being saved automatically.</span>
        </div>

        {/* Continue Button */}
        <button 
          onClick={handleContinue}
          disabled={selected === null}
          className={`w-full text-white text-xl py-5 rounded-xl transition-colors flex items-center justify-center gap-2 ${
            selected === null 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-[#c88b65] hover:bg-[#b67a54] cursor-pointer'
          }`}
        >
          {currentStep === questions.length - 1 ? 'Complete Quiz' : "Let's Continue"}
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
