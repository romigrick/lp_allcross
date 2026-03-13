import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import HowItWorks from './components/HowItWorks'
import ForWhom from './components/ForWhom'
import Differentials from './components/Differentials'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import { FinalCTA, Footer } from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ForWhom />
        <Differentials />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
