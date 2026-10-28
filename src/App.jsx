import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Treatments from './components/Treatments'
import Experience from './components/Experience'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

const HEADER_OFFSET = -80

export default function App() {
  useSmoothScroll(HEADER_OFFSET)
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Treatments />
        <Experience />
        <Team />
        <Testimonials />
        <Booking />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
