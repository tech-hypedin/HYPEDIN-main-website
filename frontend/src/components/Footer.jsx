import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  useEffect(() => {
    document.getElementById('year').textContent = new Date().getFullYear()
  }, [])

  return (
    <footer
      className="relative py-24 md:py-32 px-6 z-10 bg-black text-center overflow-hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 64px)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[1000px] -translate-y-[60%] bg-[radial-gradient(circle,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-5xl md:text-8xl text-white mb-8 md:mb-10 tracking-tight uppercase leading-none">
          Let's Build <br /> Something <span className="text-brand-red">Epic</span>
        </h2>
        <p className="font-sans text-gray-500 mb-12 md:mb-16 text-lg md:text-xl font-light">
          Ready to hype your brand across campuses?
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="group relative inline-flex items-center justify-center px-12 py-5 md:px-16 md:py-6 text-base md:text-lg font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 hover:border-brand-red hover:bg-brand-red/10 overflow-hidden rounded-sm backdrop-blur-md"
        >
          <span className="font-sans tracking-[0.2em] uppercase text-xs md:text-sm group-hover:scale-105 transition-transform duration-300">
            Work With Us
          </span>
        </button>
        <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm font-sans gap-6 md:gap-0">
          <p>&copy; <span id="year"></span> HYPEDIN. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8 uppercase tracking-widest text-[10px] md:text-xs font-bold">
            <Link
              to="https://www.linkedin.com/company/hypedin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              to="https://www.instagram.com/hypedin.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </Link>
            <Link
              to='/contact'
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to='/privacy'
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
