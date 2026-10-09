import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSEO } from '../hooks/useSEO'
import Footer from '../components/Footer'
import founderImg from '../assets/hypedin-about.png'

gsap.registerPlugin(ScrollTrigger)

export default function AboutView() {
  useSEO({
    title: 'About HYPEDIN | Our Story & Mission - Gen Z Marketing Leaders',
    description: 'Learn about HYPEDIN\'s mission to connect brands with Indian youth. Founded on principles of velocity, precision, and authenticity in campus marketing.',
    canonical: 'https://www.hypedin.co/about',
    ogTitle: 'About HYPEDIN',
    ogDescription: 'Discover how HYPEDIN is revolutionizing youth marketing in India with 5,000+ college partnerships and 200M+ student reach.',
    keywords: 'about HYPEDIN, youth marketing company India, campus marketing, Gen Z agency, brand activation, student networks'
  })

  const stats = [
    { l: 'Cities Active', v: 50, s: '+', sub: 'Cities' },
    { l: 'Campaigns', v: 500, s: '+', sub: 'Executed' },
    { l: 'Reach', v: 10, s: 'M+', sub: 'Students' },
  ]

  const dna = [
    { id: '01', title: 'Velocity', desc: 'We move at the speed of culture. Trends die fast; we execute faster.' },
    { id: '02', title: 'Precision', desc: 'Data-backed execution. No guessing, just targeted impact.' },
    { id: '03', title: 'Authenticity', desc: 'We don\'t buy attention; we build trust through peer-to-peer influence.' }
  ]

  useEffect(() => {
    ScrollTrigger.getAll().forEach(st => st.kill())

    const mm = gsap.matchMedia()

    mm.add('(min-width: 769px)', () => {
      ScrollTrigger.create({
        trigger: '.impact-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.impact-item', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' })
          document.querySelectorAll('.counter').forEach(c => {
            const val = parseInt(c.dataset.val, 10)
            gsap.to(c, { innerHTML: val, duration: 2.5, snap: { innerHTML: 1 } })
          })
        }
      })

      gsap.to('.founder-reveal, .dna-card', {
        scrollTrigger: { trigger: '.founder-section', start: 'top 75%' },
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      })
    })

    mm.add('(max-width: 768px)', () => {
      const runMobileCounter = () => {
        const counters = document.querySelectorAll('.counter')
        if (counters.length === 0) return

        counters.forEach(c => {
          const target = parseInt(c.dataset.val)
          if (c.innerHTML === '0' || c.innerHTML === '') {
            gsap.to(c, {
              innerHTML: target,
              duration: 1.5,
              snap: { innerHTML: 1 },
              ease: 'power2.out'
            })
          }
        })
      }

      runMobileCounter()
      setTimeout(runMobileCounter, 300)
      setTimeout(() => {
        document.querySelectorAll('.counter').forEach(c => {
          if (c.innerHTML === '0') c.innerHTML = c.dataset.val
        })
      }, 1000)
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About HYPEDIN",
            "url": "https://www.hypedin.co/about",
            "description": "HYPEDIN is a Gen Z marketing agency specializing in campus ambassador programs and brand activations across Indian educational institutions.",
            "publisher": {
              "@type": "Organization",
              "name": "HYPEDIN"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "HYPEDIN",
              "description": "Gen Z marketing agency connecting brands with Indian youth culture",
              "foundingDate": "2022",
              "employees": "50+",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="relative bg-brand-black min-h-screen pt-32 overflow-hidden" style={{ paddingTop: 'calc(env(safe-area-inset-top) + 96px)' }}>
      {/* Story Section */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="about-hero-text block text-brand-red font-sans text-xs tracking-[0.4em] uppercase mb-6 font-medium">
            The Origin
          </span>
          <h1 className="about-hero-text font-heading font-bold text-6xl md:text-8xl text-white leading-[0.9] mb-10 uppercase tracking-tighter">
            The Story Behind <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">HYPEDIN</span>
          </h1>
          <div className="w-full h-[1px] bg-white/10 mb-10 about-hero-text"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="about-hero-text font-sans text-xl text-gray-300 font-light leading-relaxed">
              At HYPEDIN, we believe in the power of authentic connections. Our team is a passionate group of young individuals with a passion to bridge the gap between brands and the ever-evolving youth.
            </p>
            <p className="about-hero-text font-sans text-xl text-gray-500 font-light leading-relaxed">
              Our mission is to ignite the spark that builds lasting impact of brands and drive business growth through innovative and results-oriented digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <div className="relative border border-white/5 bg-[#080808] p-8 md:p-12 rounded-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="founder-reveal relative group translate-y-8 opacity-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-red to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-lg"></div>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden bg-[#111] border border-white/10">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="founder-reveal text-left translate-y-8 opacity-0">
              <span className="block text-brand-red font-sans text-xs tracking-[0.3em] uppercase mb-6 font-medium">
                Leadership
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8 leading-tight uppercase">
                "Combining psychology, data analytics, and design."
              </h2>
              <div className="space-y-6 font-sans font-light text-gray-400 text-lg leading-relaxed">
                <p>
                  We don't just execute campaigns; we architect culture. Our approach is rooted in a deep understanding of student behavior and campus dynamics.
                </p>
                <p>
                  We are passionate about pushing boundaries, challenging norms, and redefining the way brands connect with the youth.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-heading font-bold text-white uppercase tracking-wider leading-none">
                      Manav Sharma
                    </div>
                    <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.25em] text-gray-500">
                      Founder · HYPEDIN
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/manav-sharma-hypedin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manav Sharma on LinkedIn"
                  className="group inline-flex items-center justify-center w-11 h-11 border border-white/10 bg-white/[0.02] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section relative py-32 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="max-w-8xl mx-auto px-6 md:px-20 relative z-10">
          <div className="mb-16">
            <span className="block text-brand-red font-sans text-xs tracking-[0.3em] uppercase mb-4">Live Metrics</span>
            <h2 className="font-heading font-bold text-5xl text-white uppercase">Impact At Scale</h2>
          </div>
          <div className="impact-row grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="relative pl-6 border-l border-white/10 impact-item opacity-0 translate-y-12 group">
                <div className="font-heading font-bold text-5xl md:text-7xl text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  <span className="counter desktop-counter" data-val={stat.v}>
                    0
                  </span>
                  <span className="mobile-counter hidden md:hidden">{stat.v}</span>
                  {stat.s}
                </div>
                <div className="font-sans text-gray-500 text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="dna-section py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="block text-brand-red font-sans text-xs tracking-[0.3em] uppercase mb-4">Core Philosophy</span>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white uppercase">The HYPEDIN DNA</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dna.map(item => (
            <div
              key={item.id}
              className="dna-card group relative p-10 bg-gradient-to-b from-[#0F0F0F] to-[#050505] border border-white/10 hover:border-brand-red/50 transition-all duration-500 overflow-hidden opacity-0 translate-y-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-heading text-4xl font-bold text-white/20 group-hover:text-brand-red transition-colors duration-500">
                    {item.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-red transition-colors duration-300 shadow-[0_0_10px_rgba(255,0,0,0)] group-hover:shadow-[0_0_10px_#FF0000]"></div>
                </div>
                <h3 className="font-heading font-bold text-3xl text-white uppercase mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section relative py-32 border-t border-white/5 bg-brand-black">
        <div className="px-6 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="relative pl-8 border-l-2 border-brand-red">
              <h2 className="font-heading font-bold text-4xl text-white mb-6 uppercase">Our Vision</h2>
              <p className="font-sans text-gray-400 text-lg font-light leading-relaxed">
                To empower brand success through innovative digital marketing solutions that cultivate profound customer connections and propel brands towards online triumphs.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-brand-red">
              <h2 className="font-heading font-bold text-4xl text-white mb-6 uppercase">Our Mission</h2>
              <p className="font-sans text-gray-400 text-lg font-light leading-relaxed">
                We're on a journey to help businesses find their voice and thrive in the digital world and beyond. Make your mark, for real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}
