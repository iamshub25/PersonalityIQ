import { FileText, Atom, CheckSquare } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="bg-[#FAF8F4] min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto text-center w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#0A2342] mb-4 sm:mb-6 md:mb-8">
          A Process That Understands You First
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#2C5E4D] leading-relaxed mb-10 sm:mb-16 md:mb-20 px-2">
          Before suggesting your next move, we listen. Our system decodes your motivations,
          fears, and aspirations to design a path that feels like yours — not someone else's.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white border border-[#E8E8E3] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <FileText className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#2C5E4D] mb-4 sm:mb-6 md:mb-8" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A2342] mb-3 sm:mb-4">
              Share Your Story
            </h3>
            <p className="text-[#2C5E4D] text-sm sm:text-base md:text-lg leading-relaxed">
              Answer thoughtful questions designed to uncover not just what you do — but who
              you are. This becomes the foundation of your personalized roadmap.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#E8E8E3] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <Atom className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#2C5E4D] mb-4 sm:mb-6 md:mb-8" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A2342] mb-3 sm:mb-4">
              Get Decoded, Not Judged
            </h3>
            <p className="text-[#2C5E4D] text-sm sm:text-base md:text-lg leading-relaxed">
              Our AI doesn't label you — it listens. It synthesizes your strengths, hidden
              fears, and life constraints to reveal venture paths that truly align with your reality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#E8E8E3] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <CheckSquare className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#2C5E4D] mb-4 sm:mb-6 md:mb-8" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0A2342] mb-3 sm:mb-4">
              Receive Your Blueprint
            </h3>
            <p className="text-[#2C5E4D] text-sm sm:text-base md:text-lg leading-relaxed">
              You get a customized roadmap with actionable steps tailored to your pace and energy.
              No guesswork. No overwhelm — just momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}