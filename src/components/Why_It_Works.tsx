import React from "react";
import { GraduationCap } from "lucide-react";

const WhyWeStartWithYou = () => {
  return (
    <section className="bg-[#FAF8F4] min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-xs tracking-[0.4em] text-[#0A2342] mb-8 sm:mb-12">
          WHY IT WORKS
        </h2>
        
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
          <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#2C5E4D] flex-shrink-0 sm:mt-2" strokeWidth={1.5} />
          
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0A2342] mb-4 sm:mb-6 leading-snug">
              Backed by career psychology.<br />
              Powered by AI. Refined by human wisdom.
            </h3>
            <p className="text-sm sm:text-base text-[#2C5E4D]">
              Built from 1000+ hours of user research<br />
              & coaching insight
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStartWithYou;
