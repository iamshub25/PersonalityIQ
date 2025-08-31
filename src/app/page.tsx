import HeroSection from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <Features /> */}
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}