'use client'

import React from "react";
import Link from "next/link";

export const TestInterface = () => {
  return (
    <section 
      className="relative w-full h-screen bg-[#FBF4E7] md:bg-cover md:bg-center md:bg-no-repeat"
      style={{ backgroundImage: 'url()', '--tw-bg-opacity': '1' } as React.CSSProperties & { '--tw-bg-opacity': string }}
    >
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            background-image: url('https://res.cloudinary.com/dyd30abcs/image/upload/v1760705517/Generated_Image_October_17_2025_-_5_50PM_1_jrsppv.png') !important;
          }
        }
      `}</style>
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#1a1a1a] leading-tight">
            You&apos;re not stuck.<br />
            You&apos;re standing at<br />
            a doorway.
          </h1>
          <p className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed max-w-xl">
            This isn&apos;t just career advice, It&apos;s a personalized map to help you rewrite your story — based on your goals, your life, and your mindset.
          </p>

          <div className="space-y-4">
            <Link href="/test">
              <button className="bg-[#E87B4A] text-white font-medium py-4 px-8 rounded-lg hover:bg-[#d66d3d] transition-colors text-lg cursor-pointer">
                Start Your 6-Minute Change Quiz
              </button>
            </Link>
            {/* <div>
              <a
                href="#"
                className="text-[#1a1a1a] font-normal inline-flex items-center hover:underline text-base"
              >
                See how it works <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
