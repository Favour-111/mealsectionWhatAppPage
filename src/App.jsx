import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import FoodShowcase from './components/FoodShowcase'
import WhyMealSection from './components/WhyMealSection'
import AppComingSoon from './components/AppComingSoon'
import VendorSection from './components/VendorSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <HowItWorks />
        <FoodShowcase />
        <WhyMealSection />
        <AppComingSoon />
        <VendorSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
