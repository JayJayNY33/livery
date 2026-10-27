import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MobileCallBar } from './components/MobileCallBar'

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Faq asPage />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
