import { GoodToKnow } from './components/GoodToKnow'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MobileCallBar } from './components/MobileCallBar'
import { RideCheckSection } from './components/RideCheck'
import { Services } from './components/Services'
import { WhyChoose } from './components/WhyChoose'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChoose />
        <GoodToKnow />
        <RideCheckSection />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
