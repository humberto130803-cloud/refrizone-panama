import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Brands from './components/Brands'
import WhyChooseUs from './components/WhyChooseUs'
import LocationContact from './components/LocationContact'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Brands />
      <WhyChooseUs />
      <LocationContact />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
