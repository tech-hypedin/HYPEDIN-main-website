import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { useSEO } from '../hooks/useSEO'
import Footer from '../components/Footer'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygpmBRMGLwfYg5JuhyCYogwOBUvY69144TMS6WCE86H5EEc-eyTuQnyeo4wIR_MbKG3Q/exec'

export default function ContactView() {
  useSEO({
    title: 'Contact HYPEDIN | Get In Touch - Campus Marketing Solutions',
    description: 'Contact HYPEDIN for campus ambassador programs, brand activation, and youth marketing campaigns. Reach us via email, phone, or our contact form.',
    canonical: 'https://www.hypedin.co/contact',
    ogTitle: 'Contact HYPEDIN',
    ogDescription: 'Deploy armies of campus leaders and high-impact experiential events. Contact our team at +91 8439279315.',
    keywords: 'contact HYPEDIN, campus marketing contact, Gen Z marketing agency contact, brand activation services, college ambassador program'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    const contactElements = document.querySelectorAll('.contact-anim')
    gsap.killTweensOf(contactElements)

    if (window.innerWidth > 768) {
      // On desktop, set initial state and float up
      gsap.set(contactElements, { opacity: 0, y: 30 })
      gsap.to(contactElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      })
    } else {
      // On mobile, immediately show all elements
      gsap.set(contactElements, {
        opacity: 1,
        y: 0,
        clearProps: 'all'
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormSuccess(false)

    const formData = new FormData(e.target)

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      e.target.reset()
      setFormSuccess(true)

      setTimeout(() => {
        setFormSuccess(false)
      }, 4000)
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact HYPEDIN",
            "url": "https://www.hypedin.co/contact",
            "description": "Contact HYPEDIN for campus ambassador programs, brand activation, and youth marketing campaigns.",
            "mainEntity": {
              "@type": "Organization",
              "name": "HYPEDIN",
              "telephone": "+91-8439279315",
              "email": "team@hypedin.co",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "E-37 Ground Floor, Block-E Sector-3",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201301",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>

      <div
      className="min-h-screen pt-24 md:pt-32 pb-0 flex flex-col justify-between relative bg-brand-black"
      style={{
        paddingTop: 'calc(env(safe-area-inset-top) + 96px)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start mb-20">
        <div className="relative md:sticky md:top-32">
          <span className="contact-anim block text-brand-red font-sans text-xs tracking-[0.4em] uppercase mb-6 md:mb-8 font-medium">
            Coordinates
          </span>
          <h1 className="contact-anim font-heading font-bold text-5xl md:text-8xl text-white uppercase leading-[0.9] mb-8 md:mb-10 tracking-tighter">
            Let's <br />
            Connect
          </h1>
          <p className="contact-anim font-sans text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-md mb-12 md:mb-16 border-l border-white/10 pl-6">
            Whether you're looking to launch a campus revolution or just say hello, our frequency is open.
          </p>
          <div className="contact-anim grid grid-cols-1 gap-10 md:gap-12">
            <div className="group">
              <h3 className="text-white/40 font-sans text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-brand-red transition-colors">
                Headquarters
              </h3>
              <p className="text-white font-sans text-lg md:text-xl font-light leading-relaxed">
                E-37 Ground Floor,<br />
                Block-E Sector-3,<br />
                Noida,<br />
                Uttar Pradesh, India
              </p>
            </div>
            <div className="group">
              <h3 className="text-white/40 font-sans text-xs uppercase tracking-[0.2em] mb-4 group-hover:text-brand-red transition-colors">
                Direct Line
              </h3>
              <a
                href="mailto:team@hypedin.co"
                className="block text-white font-sans text-lg md:text-xl font-light hover:text-brand-red transition-colors mb-2"
              >
                team@hypedin.co
              </a>
              <a
                href="tel:+918439279315"
                className="block text-white font-sans text-lg md:text-xl font-light hover:text-brand-red transition-colors"
              >
                +91 8439279315
              </a>
            </div>
          </div>
        </div>

        <div className="contact-anim bg-[#080808] border border-white/5 p-6 md:p-12 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <form id="contact-form" className="space-y-6 md:space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 group">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">First Name</label>
                <input
                  name="firstName"
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:border-brand-red outline-none"
                  placeholder="John"
                />
              </div>
              <div className="space-y-3 group">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Last Name</label>
                <input
                  name="lastName"
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:border-brand-red outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Email</label>
              <input
                name="email"
                required
                type="email"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:border-brand-red outline-none"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Contact Number</label>
              <input
                name="phone"
                required
                type="tel"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:border-brand-red outline-none"
                placeholder="+91"
              />
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Interest</label>
              <select
                name="interest"
                required
                defaultValue=""
                className="w-full bg-black border-b border-white/10 py-3 text-white text-lg focus:border-brand-red outline-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-400">
                  Select an option
                </option>
                <option value="Campus Ambassador Program">Campus Ambassador Program</option>
                <option value="Events & Activations">Events & Activations</option>
                <option value="Digital Campaigns">Digital Campaigns</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Message</label>
              <textarea
                name="message"
                required
                rows="3"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:border-brand-red outline-none resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              id="submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="group mt-12 w-full py-5 bg-white text-black hover:bg-brand-red hover:text-white font-heading font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {formSuccess && (
              <p id="form-success" className="text-green-400 text-xs uppercase tracking-widest text-center mt-4">
                Your response has been submitted
              </p>
            )}
          </form>
        </div>
      </div>
    </div>

    </>
  )
}
