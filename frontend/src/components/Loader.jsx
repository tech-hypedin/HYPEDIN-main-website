import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null)
  const textRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const loaderText = textRef.current
    loaderText.innerHTML = ''
    
    'HYPEDIN'.split('').forEach((char) => {
      const span = document.createElement('span')
      span.className = 'loader-char inline-block'
      span.textContent = char
      loaderText.appendChild(span)
    })

    gsap.set('.loader-char', { yPercent: 120, opacity: 0 })

    const loadTl = gsap.timeline({
      defaults: { ease: 'power4.out' },
      onComplete: () => {
        if (onComplete) onComplete()
      }
    })

    loadTl
      .to('.loader-char', { yPercent: 0, opacity: 1, duration: 1, stagger: 0.06 })
      .to('#loader-progress', { scaleX: 1, duration: 1.4, ease: 'expo.inOut' }, '-=0.6')
      .to('#loader-text, #loader-progress', { y: -40, opacity: 0, duration: 0.5, ease: 'power2.in' })
      .set('#loader', { display: 'none' })
  }, [onComplete])

  return (
    <div
      id="loader"
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center vh-screen"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <div className="relative overflow-hidden mb-8 w-full">
        <h1
          id="loader-text"
          ref={textRef}
          className="font-heading font-extrabold text-white tracking-tighter uppercase leading-none text-center"
        >
        </h1>
      </div>
      <div className="w-64 h-[1px] bg-white/10 rounded-full overflow-hidden">
        <div
          id="loader-progress"
          ref={progressRef}
          className="w-full h-full bg-brand-red origin-left scale-x-0"
        ></div>
      </div>
    </div>
  )
}
