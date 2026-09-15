import { useEffect } from 'react'
import { Benefits } from './components/Benefits'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Promotions } from './components/Promotions'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.08 },
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Promotions />
        <Services />
        <Benefits />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
