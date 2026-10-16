import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import hypedin from '../assets/HYPEDIN.png'

export default function Navbar() {
  const navbarRef = useRef(null)
  const menuRef = useRef(null)
  const bar1Ref = useRef(null)
  const bar2Ref = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    gsap.to(navbarRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 2.5
    })
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    gsap.to(menuRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
    gsap.killTweensOf([bar1Ref.current, bar2Ref.current])
    gsap.to(bar1Ref.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
    gsap.to(bar2Ref.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
    gsap.to('.mobile-link', { y: 40, opacity: 0, duration: 0.25, ease: 'power2.in' })
    document.body.style.overflow = ''
  }

  const openMenu = () => {
    setMenuOpen(true)
    gsap.to(menuRef.current, {
      x: '0%',
      duration: 0.5,
      ease: 'power2.out'
    })
    gsap.killTweensOf([bar1Ref.current, bar2Ref.current])
    gsap.to(bar1Ref.current, { rotate: 45, y: 6, duration: 0.35, ease: 'power2.out' })
    gsap.to(bar2Ref.current, { rotate: -45, y: -6, duration: 0.35, ease: 'power2.out' })
    gsap.fromTo(
      '.mobile-link',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
    )
    document.body.style.overflow = 'hidden'
  }

  const toggleMenu = () => {
    if (menuOpen) closeMenu()
    else openMenu()
  }

  const handleNavigate = (route) => {
    navigate(route)
    if (menuOpen) closeMenu()
  }

  const handleScrollToSection = (sectionId) => {
    if (menuOpen) closeMenu()
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center border-b border-white/5 bg-black/50 backdrop-blur-md opacity-0 -translate-y-full"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 12px)' }}
      >
        {/* Logo */}
        <div className="flex items-center relative z-50">
          <button
            onClick={() => handleNavigate('/')}
            className="group relative block"
          >
            <img
              src={hypedin}
              alt="HYPEDIN"
              className="h-8 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => handleNavigate('/about')}
            className="nav-link relative font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            About
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          <button
            onClick={() => handleNavigate('/network')}
            className="nav-link relative font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            Network
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          <button
            onClick={() => {
              navigate('/')
              handleScrollToSection('services')
            }}
            className="relative font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            Services
          </button>

          <button
            onClick={() => {
              navigate('/')
              handleScrollToSection('work')
            }}
            className="relative font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            Work
          </button>

          <button
            onClick={() => handleNavigate('/creators')}
            className="relative font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            Creators
          </button>

          <button
            onClick={() => handleNavigate('/careers')}
            className="relative font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            Careers
          </button>
          
          <button
            onClick={() => handleNavigate('/contact')}
            className="nav-link ml-6 px-5 py-2 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            ref={bar1Ref}
            className="w-6 h-[1px] bg-white transition-all duration-300"
          ></span>
          <span
            ref={bar2Ref}
            className="w-6 h-[1px] bg-white transition-all duration-300"
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center translate-x-full transition-transform duration-500 ease-in-out md:hidden"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]"></div>
        <div className="flex flex-col items-center gap-8 relative z-10">
          <button
            onClick={() => handleNavigate('/about')}
            className="mobile-link nav-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate('/network')}
            className="mobile-link nav-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            Network
          </button>
          <button
            onClick={() => {
              navigate('/')
              handleScrollToSection('services')
            }}
            className="mobile-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            Services
          </button>
          <button
            onClick={() => {
              navigate('/')
              handleScrollToSection('work')
            }}
            className="mobile-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            Work
          </button>
          <button
            onClick={() => handleNavigate('/creators')}
            className="mobile-link nav-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            Creators
          </button>
          <button
            onClick={() => handleNavigate('/careers')}
            className="mobile-link nav-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            Careers
          </button>
          <button
            onClick={() => handleNavigate('/contact')}
            className="mobile-link nav-link font-heading text-4xl font-bold text-white hover:text-brand-red transition-colors uppercase tracking-tight opacity-0 translate-y-10"
          >
            Contact
          </button>
        </div>
        <div className="mobile-link mt-12 flex gap-6 text-xs uppercase tracking-widest text-gray-500 opacity-0 translate-y-10">
          <a href="https://www.instagram.com/hypedin.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/hypedin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}
