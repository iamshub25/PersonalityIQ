import HeroSection from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import SiteOffers from '@/components/What_it_offers'
import ProcessSection from '@/components/How_it_Works'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <SiteOffers />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <ProcessSection />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      {/* <WhyWeStartWithYou/> */}
      <Testimonials />
      {/* <CTA /> */}
      <Footer />
    </main>
  )
}