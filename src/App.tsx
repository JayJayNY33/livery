import { About } from './components/About'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MobileCallBar } from './components/MobileCallBar'
import { Services } from './components/Services'
import { WhyChoose } from './components/WhyChoose'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
