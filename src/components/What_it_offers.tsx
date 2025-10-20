import { Lightbulb, Lock, Compass } from "lucide-react";

export default function SiteOffers() {
  return (
    <section className="bg-[#FFFF] min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#0A2342] mb-10 sm:mb-16 md:mb-20">
          What This Site Offers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {/* 1. Personalised Guidance */}
          <div className="flex flex-col items-center text-center">
            <Lightbulb className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#5AA897] mb-4 sm:mb-6 md:mb-8" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A2342] mb-3 sm:mb-4">
              Personalised Guidance
            </h3>
            <p className="text-[#2C5E4D] text-sm sm:text-base md:text-lg leading-relaxed">
              Insights and action steps tailored to your unique strengths and aspirations.
            </p>
          </div>

          {/* 2. Confidential & Secure */}
          <div className="flex flex-col items-center text-center">
            <Lock className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#E4AF42] mb-4 sm:mb-6 md:mb-8" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A2342] mb-3 sm:mb-4">
              Confidential & Secure
            </h3>
            <p className="text-[#2C5E4D] text-sm sm:text-base md:text-lg leading-relaxed">
              Your journey is private. We prioritize your confidentiality and data security.
            </p>
          </div>

          {/* 3. Proven Framework */}
          <div className="flex flex-col items-center text-center">
            <Compass className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#5AA897] mb-4 sm:mb-6 md:mb-8" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A2342] mb-3 sm:mb-4">
              Proven Framework
            </h3>
            <p className="text-[#2C5E4D] text-sm sm:text-base md:text-lg leading-relaxed">
              Based on research and success stories of real career transformations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
