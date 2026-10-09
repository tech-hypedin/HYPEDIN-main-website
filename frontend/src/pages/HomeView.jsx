// import { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useSEO } from '../hooks/useSEO'
// import Footer from '../components/Footer'

// import Google from '../assets/brands/google.png';
// import Amazon from '../assets/brands/amazon.png';
// import Swiggy from '../assets/brands/Swiggy.png';
// import McD from '../assets/brands/McDonald.png';
// import Blink from '../assets/brands/Blinkit.png';
// import RedFM from '../assets/brands/Red FM.png';
// import Plum from '../assets/brands/Plum.png';
// import PW from '../assets/brands/PW.jpg';
// import Unacademy from '../assets/brands/Unacademy.png';
// import Veeba from '../assets/brands/veeba.png';
// import Dream11 from '../assets/brands/Dream11.svg';
// import Viacom18 from '../assets/brands/Viacom18.svg';

// import img1 from '../assets/thumbnail/img1.jpg';
// import img2 from '../assets/thumbnail/img2.jpg';
// import img3 from '../assets/thumbnail/img3.jpg';
// import img4 from '../assets/thumbnail/img4.jpg';
// import img5 from '../assets/thumbnail/img5.jpg';
// import img6 from '../assets/thumbnail/img6.jpg';
// import img7 from '../assets/thumbnail/img7.jpg';
// import img8 from '../assets/thumbnail/img8.jpg';

// import p1 from '../assets/posts/p1.jpg';
// import p2 from '../assets/posts/p2.jpg';
// import p3 from '../assets/posts/p3.png';
// import p4 from '../assets/posts/p4.jpg';
// import p5 from '../assets/posts/p5.jpg';
// import p6 from '../assets/posts/p6.jpg';

// import vid1 from '../assets/videos/vid1.mp4';
// import vid2 from '../assets/videos/vid2.mp4';
// import vid3 from '../assets/videos/vid3.mp4';
// import vid4 from '../assets/videos/vid4.mp4';
// import vid5 from '../assets/videos/vid5.mp4';
// import vid6 from '../assets/videos/vid6.mp4';
// import vid7 from '../assets/videos/vid7.mp4';
// import vid8 from '../assets/videos/vid8.mp4';

// gsap.registerPlugin(ScrollTrigger)

// export default function HomeView() {
//   useSEO({
//     title: 'HYPEDIN | Connecting Brands with Youth - Gen Z Marketing Agency',
//     description: 'HYPEDIN connects brands with Indian youth culture through campus ambassador programs, influencer campaigns, community building, and experiential marketing.',
//     canonical: 'https://www.hypedin.co/',
//     ogTitle: 'HYPEDIN | Gen Z Marketing Agency India',
//     ogDescription: 'Deploy armies of campus leaders and high-impact experiential events. We move at the speed of culture.',
//     keywords: 'Gen Z marketing agency, campus ambassador program, youth marketing India, influencer campaigns, brand activation, student network'
//   })

//   const heroRef = useRef(null)
//   const heroTitleRef = useRef(null)

//   const zones = [
//     { id: 'north', name: 'North', hubs: ['Delhi NCR', 'Chandigarh', 'Jaipur', 'Lucknow'], stats: '800+ Colleges', color: 'from-blue-500/10' },
//     { id: 'west', name: 'West', hubs: ['Mumbai', 'Pune', 'Ahmedabad', 'Indore'], stats: '650+ Colleges', color: 'from-purple-500/10' },
//     { id: 'south', name: 'South', hubs: ['Bangalore', 'Hyderabad', 'Chennai', 'Kochi'], stats: '700+ Colleges', color: 'from-green-500/10' },
//     { id: 'east', name: 'East', hubs: ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Patna'], stats: '350+ Colleges', color: 'from-yellow-500/10' }
//   ]

//   const services = [
//     { id: '01', number: '01', title: 'Student Ambassadors', description: 'Deploy armies of campus leaders to evangelize your brand authentically.' },
//     { id: '02', number: '02', title: 'Campus Activations', description: 'High-impact experiential events and stalls inside college premises.' },
//     { id: '03', number: '03', title: 'Gen Z Influencers', description: 'Micro-influencer campaigns leveraging student opinion leaders.' },
//     { id: '04', number: '04', title: 'User Acquisition', description: 'Drive app installs and sign-ups through verified student networks.' },
//     { id: '05', number: '05', title: 'Community Building', description: 'Create and nurture exclusive brand communities on Discord and WhatsApp.' },
//     { id: '06', number: '06', title: 'Experiential Marketing', description: 'Immersive, on-ground brand experiences designed to drive recall, engagement, and word-of-mouth.' }
//   ]

//   const processSteps = [
//     { step: '01', title: 'Research', description: 'Deep dive into brand goals and student psychology.' },
//     { step: '02', title: 'Strategy', description: 'Crafting the perfect narrative for campus culture.' },
//     { step: '03', title: 'Distribution', description: 'Activating our network of ambassadors and influencers.' },
//     { step: '04', title: 'Execution', description: 'Flawless on-ground and digital implementation.' },
//     { step: '05', title: 'Monitoring', description: 'Real-time tracking of engagement and reach.' },
//     { step: '06', title: 'Report', description: 'Data-driven insights and impact analysis.' },
//   ]

//   const brands = [
//     { src: Google, alt: 'Google' },
//     { src: Amazon, alt: 'Amazon' },
//     { src: Swiggy, alt: 'Swiggy' },
//     { src: McD, alt: 'McDonald\'s' },
//     { src: Blink, alt: 'Blinkit' },
//     { src: RedFM, alt: 'Red FM' },
//     { src: Google, alt: 'Google' },
//     { src: Amazon, alt: 'Amazon' },
//     { src: Swiggy, alt: 'Swiggy' },
//     { src: McD, alt: 'McDonald\'s' },
//     { src: Blink, alt: 'Blinkit' },
//     { src: RedFM, alt: 'Red FM' }
//   ]

//   const brands2 = [
//     { src: Plum, alt: 'Plum' },
//     { src: PW, alt: 'Physics Wallah' },
//     { src: Unacademy, alt: 'Unacademy' },
//     { src: Dream11, alt: 'Dream11' },
//     { src: Viacom18, alt: 'Viacom18' },
//     { src: Veeba, alt: 'Veeba' },
//     { src: Plum, alt: 'Plum' },
//     { src: PW, alt: 'Physics Wallah' },
//     { src: Unacademy, alt: 'Unacademy' },
//     { src: Dream11, alt: 'Dream11' },
//     { src: Viacom18, alt: 'Viacom18' },
//     { src: Veeba, alt: 'Veeba' }
//   ]

//   const posts = [
//     { src: p1, alt: "Skybag's Campus Creator Program", url: "https://www.instagram.com/p/DbFnAsQGY-C/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
//     { src: p2, alt: 'BGMI Campus MVP Program', url: "https://www.instagram.com/p/DaXh8-QFAyh/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
//     { src: p3, alt: "H&M Creator COnnect", url: "https://www.instagram.com/reel/DXHak9HATv8/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
//     { src: p4, alt: 'Google Student Ambassador Program', url: "https://www.instagram.com/p/DXjORKAmVxf/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
//     { src: p5, alt: "Phat Brand Launch", url: "https://www.instagram.com/reel/DXOWBArgY3x/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
//     { src: p6, alt: 'XYXX Creator Campaign', url: "https://www.instagram.com/reel/DXLywHZgQY4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" }
//   ]

//   const whyUs = [
//     { title: 'Proven Expertise', desc: 'Years of specialized experience in the Indian education and youth sector, delivering measurable ROI for top brands.' },
//     { title: 'Direct Access', desc: 'We bypass the noise. Our direct relationships with 5,000+ college administrations ensure your brand gets prime visibility.' },
//     { title: 'Data-Driven', desc: 'We don\'t guess; we track. From footfall to app installs, every campaign is backed by real-time analytics and reporting.' }
//   ]

//   const allContent = [
//     { id: 1, title: 'H&M Collaboration', views: '60.4k', videoUrl: vid1, thumbnail: img1 },
//     { id: 2, title: 'Get Phat Collaboration', views: '49.8k', videoUrl: vid2, thumbnail: img2 },
//     { id: 3, title: 'XYXX Collaboration', views: '21.4k', videoUrl: vid3, thumbnail: img3 },
//     { id: 4, title: 'H&M Creator Collab', views: '44K', videoUrl: vid4, thumbnail: img4 },
//     { id: 5, title: 'H&M Creator Collab', views: '45k', videoUrl: vid5, thumbnail: img5 },
//     { id: 6, title: 'H&M Creator Collab', views: '75k', videoUrl: vid6, thumbnail: img6 },
//     { id: 7, title: 'H&M Creator Collab', views: '20k', videoUrl: vid7, thumbnail: img7 },
//     { id: 8, title: 'H&M Creator Collab', views: '55k', videoUrl: vid8, thumbnail: img8 },
//   ]

//   useEffect(() => {
//     const animationTimer = setTimeout(() => {
//       ScrollTrigger.getAll().forEach(st => st.kill())

//       const mm = gsap.matchMedia()

//       mm.add('(min-width: 769px)', () => {
//         // 1. Reddish glow animation executes first
//         if (document.querySelector('.hero-glow')) {
//           gsap.fromTo('.hero-glow', 
//             { opacity: 0, scale: 0.6 },
//             { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' }
//           )
//         }

//         if (document.querySelector('#hero-top, #hero-bottom')) {
//           gsap.to('#hero-top, #hero-bottom', { autoAlpha: 1, scaleX: 1, duration: 1.8, ease: 'expo.out', delay: 0.2 })
//         }
        
//         // 2. Timeline synchronized to coordinate BRANDS, WITH, and YOUTH perfectly
//         const tl = gsap.timeline({ delay: 0.5 })

//         if (document.querySelectorAll('.hero-char').length > 0) {
//           tl.fromTo(
//             '.hero-char',
//             { yPercent: 120, rotateX: -40, opacity: 0 },
//             { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.5, stagger: 0.08, ease: 'power4.out' },
//             0
//           )
//         }
//         if (document.querySelector('.hero-fade')) {
//           // Changed to fromTo to enforce starting from absolute zero simultaneously with BRANDS/YOUTH
//           tl.fromTo('.hero-fade', 
//             { opacity: 0, scale: 0.5 },
//             { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, 
//             0
//           )
//         }
        
//         if (document.querySelector('.hero-handwritten')) {
//           gsap.to('.hero-handwritten', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.out', delay: 1 })
//         }
//         if (document.querySelector('.hero-subtext')) {
//           gsap.to('.hero-subtext', { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 })
//         }

//         if (document.querySelector('#universe-grid') && document.querySelectorAll('.zone-card').length > 0) {
//           gsap.to('.zone-card', {
//             scrollTrigger: { trigger: '#universe-grid', start: 'top 90%' },
//             y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out'
//           })
//         }

//         if (document.querySelector('#universe') && document.querySelectorAll('.connector-line').length > 0) {
//           gsap.to('.connector-line', {
//             scrollTrigger: { trigger: '#universe', start: 'top 70%' },
//             scaleY: 1, opacity: 1, duration: 1.5, ease: 'expo.out'
//           })
//         }

//         if (document.querySelector('#timeline-line') && document.querySelector('#process-steps')) {
//           gsap.to('#timeline-line', {
//             scrollTrigger: {
//               trigger: '#process-steps',
//               start: 'top 80%',
//               end: 'bottom 20%',
//               scrub: 1.5,
//               invalidateOnRefresh: true
//             },
//             height: '100%', ease: 'none'
//           })
//         }

//         if (document.querySelector('#process-steps') && document.querySelectorAll('.timeline-item').length > 0) {
//           gsap.to('.timeline-item', {
//             scrollTrigger: { trigger: '#process-steps', start: 'top 85%' },
//             y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out'
//           })
//         }
//       })

//       mm.add('(max-width: 768px)', () => {
//         if (document.querySelector('.hero-glow')) {
//           gsap.fromTo('.hero-glow', 
//             { opacity: 0, scale: 0.6 },
//             { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
//           )
//         }

//         if (document.querySelector('#hero-top, #hero-bottom')) {
//           gsap.to('#hero-top, #hero-bottom', { autoAlpha: 1, scaleX: 1, duration: 1.2, ease: 'expo.out', delay: 0.2 })
//         }
        
//         const tlMobile = gsap.timeline({ delay: 0.5 })

//         if (document.querySelectorAll('.hero-char').length > 0) {
//           tlMobile.fromTo(
//             '.hero-char',
//             { yPercent: 120, rotateX: -40, opacity: 0 },
//             { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.5, stagger: 0.08, ease: 'power4.out' },
//             0
//           )
//         }
//         if (document.querySelector('.hero-fade')) {
//           tlMobile.fromTo('.hero-fade', 
//             { opacity: 0, scale: 0.5 },
//             { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, 
//             0
//           )
//         }
        
//         if (document.querySelector('.hero-handwritten')) {
//           gsap.to('.hero-handwritten', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.out', delay: 1 })
//         }
//         if (document.querySelector('.hero-subtext')) {
//           gsap.to('.hero-subtext', { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 })
//         }
        
//         if (document.querySelectorAll('.zone-card').length > 0) {
//           gsap.to('.zone-card', {
//             y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.5
//           })
//         }
        
//         if (document.querySelectorAll('.timeline-item').length > 0) {
//           gsap.to('.timeline-item', {
//             y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.5
//           })
//         }
        
//         if (document.querySelector('#timeline-line')) {
//           gsap.to('#timeline-line', { height: '100%', duration: 1, ease: 'power2.out' })
//         }
//       })
//     }, 100)

//     if (heroRef.current) {
//       heroRef.current.addEventListener('mousemove', handleMouseMove)
//     }

//     return () => {
//       clearTimeout(animationTimer)
//       if (heroRef.current) {
//         heroRef.current.removeEventListener('mousemove', handleMouseMove)
//       }
//     }
//   }, [])

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 2
//     const y = (e.clientY / window.innerHeight - 0.5) * 2
//     gsap.to('#hero-title', { rotateX: -y * 5, rotateY: x * 5, duration: 1.5 })
//     gsap.to('.hero-glow', { x: x * 40, y: y * 40, duration: 2.5 })
//   }

//   const [contentIndex, setContentIndex] = useState(0)

//   const contentSets = [
//     allContent.slice(0, 4),
//     allContent.slice(4, 8)
//   ]

//   const trackRef = useRef(null)
//   const tweenRef = useRef(null)

//   // Duplicate items to make the loop seamless
//   const extendedContent = [...allContent, ...allContent]

//   // 1. Setup continuous horizontal scroll animation
//   useEffect(() => {
//     const track = trackRef.current
//     if (!track) return

//     // Calculate width of half the track (one set of items)
//     const totalWidth = track.scrollWidth / 2

//     // Continuous linear loop moving left
//     tweenRef.current = gsap.to(track, {
//       x: `-=${totalWidth}`,
//       duration: 20, // Adjust speed here (higher = slower)
//       ease: 'none',
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
//       }
//     })

//     return () => {
//       if (tweenRef.current) tweenRef.current.kill()
//     }
//   }, [allContent]);

//   // 2. Observer: Play videos automatically as they pass through view
//   useEffect(() => {
//     const track = trackRef.current
//     if (!track) return

//     const cards = track.querySelectorAll('.content-card')

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const card = entry.target
//           const video = card.querySelector('video')
//           const thumbnail = card.querySelector('img')
//           const badge = card.querySelector('.preview-badge')

//           if (!video || !thumbnail) return

//           if (entry.isIntersecting) {
//             // Fades in and plays when entering the visible section
//             video.style.opacity = '1'
//             thumbnail.style.opacity = '0'
//             if (badge) badge.style.opacity = '1'
            
//             video.play().catch(() => {
//               // Graceful fallback for browser autoplay policies
//             })
//           } else {
//             // Pauses and restores thumbnail when scrolling out
//             video.pause()
//             video.currentTime = 0
//             video.style.opacity = '0'
//             thumbnail.style.opacity = '1'
//             if (badge) badge.style.opacity = '0'
//           }
//         })
//       },
//       {
//         root: null, // Relative to viewport (or parent container if specified)
//         threshold: 0.6 // Trigger when card is at least 60% visible
//       }
//     )

//     cards.forEach((card) => observer.observe(card))

//     return () => observer.disconnect()
//   }, [allContent]);

//   // Optional: Pause horizontal loop on container hover/touch so user can inspect
//   const handleMouseEnter = () => tweenRef.current?.pause();
//   const handleMouseLeave = () => tweenRef.current?.play();

//   return (
//     <>
//       {/* Hero */}
//       <section
//         ref={heroRef}
//         id="hero"
//         className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 md:px-8 overflow-hidden py-20 perspective-1000"
//         style={{ paddingTop: 'calc(env(safe-area-inset-top) + 80px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)' }}
//       >
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div className="absolute top-0 left-4 md:left-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
//           <div className="absolute top-0 right-4 md:right-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
//         </div>

//         {/* The reddish glow component initialized with opacity: 0 to smoothly control load order */}
//         <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-brand-red/[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" style={{ opacity: 0 }}></div>

//         <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center">
//           <div
//             id="hero-top"
//             className="w-full flex items-center justify-between py-6 border-t border-b border-white/[0.08] mb-12 md:mb-16 relative backdrop-blur-sm opacity-0 scale-x-0 origin-center"
//           >
//             <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans pl-2 md:pl-4 hidden xs:block">Est. 2022</span>
//             <div className="absolute left-1/2 -translate-x-1/2 px-4 md:px-6 bg-[#050505] border border-white/5 rounded-full py-1 whitespace-nowrap">
//               <div className="flex items-center gap-3">
//                 <span className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_#FF0000] animate-pulse"></span>
//                 <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/80 font-sans">Gen Z Marketing</span>
//               </div>
//             </div>
//             <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans pr-2 md:pr-4 hidden xs:block">Pan India</span>
//           </div>

//           <div id="hero-title" ref={heroTitleRef} className="w-full flex flex-col items-center justify-center relative gap-2 md:gap-4 preserve-3d">
//             <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 z-10 relative px-2 md:px-0">
//               <div className="relative flex flex-col items-center md:items-start group" style={{ transform: 'translateZ(20px)' }}>
//                 <div className="hero-handwritten absolute -top-5 -left-1 md:-top-10 md:-left-10 z-30 transform -rotate-6 mix-blend-screen opacity-90 w-full text-center md:text-left">
//                   <h2 className="font-handwritten text-xl md:text-3xl text-white whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] px-10">
//                     Connecting <span className="ml-1 opacity-80 text-brand-red">_</span>
//                   </h2>
//                 </div>
//                 {/* Added inline style opacity: 0 to block initial paint flash */}
//                 <div className="overflow-hidden p-2">
//                   <h1 className="hero-char font-heading font-extrabold uppercase leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500" style={{ opacity: 0 }}>
//                     BRANDS
//                   </h1>
//                 </div>
//               </div>
//               {/* Added inline style opacity: 0 to ensure WITH is hidden along with BRANDS and YOUTH */}
//               <div className="hero-fade flex items-center mx-2 my-2 md:my-0 md:mt-2 z-20" style={{ transform: 'translateZ(40px)', opacity: 0 }}>
//                 <span className="font-sans font-medium text-[9px] md:text-[11px] text-white/90 tracking-[0.35em] uppercase border border-white/20 px-4 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
//                   WITH
//                 </span>
//               </div>
//               {/* Added inline style opacity: 0 to block initial paint flash */}
//               <div className="overflow-hidden p-2" style={{ transform: 'translateZ(20px)' }}>
//                 <h1 className="hero-char font-heading font-extrabold uppercase leading-[0.85] tracking-tighter text-white mix-blend-difference" style={{ opacity: 0 }}>
//                   YOUTH
//                 </h1>
//               </div>
//             </div>
//           </div>

//           <div className="hero-subtext mt-12 md:mt-16 max-w-[90%] md:max-w-xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-2xl opacity-0 translate-y-8">
//             <p className="text-gray-300 font-sans text-sm md:text-lg font-light leading-relaxed tracking-wide">
//               Bridging top-tier brands with India's <span className="text-white border-b border-brand-red/60 pb-0.5">200M+ student ecosystem</span> through data-driven ambassador programs.
//             </p>
//           </div>

//           <div
//             id="hero-bottom"
//             className="w-full mt-16 md:mt-24 border-t border-white/[0.08] pt-8 flex justify-between items-start origin-center px-4 md:px-12 backdrop-blur-[2px] opacity-0 scale-x-0"
//           >
//             <div className="text-left group cursor-default">
//               <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
//                 Network
//               </p>
//               <div className="font-heading text-xl md:text-4xl text-white font-bold tracking-tight">
//                 5,000<span className="text-brand-red text-xl md:text-2xl align-top">+</span>
//               </div>
//             </div>
//             <div className="hidden md:flex flex-col items-center opacity-20">
//               <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mb-3"></div>
//             </div>
//             <div className="text-right group cursor-default">
//               <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
//                 Students
//               </p>
//               <div className="font-heading text-xl md:text-4xl text-white font-bold tracking-tight">
//                 200K<span className="text-brand-red text-xl md:text-2xl align-top">+</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 mix-blend-screen pointer-events-none">
//           <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-sans animate-pulse">Scroll</span>
//           <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/20 to-transparent overflow-hidden">
//             <div className="w-full h-1/2 bg-gradient-to-b from-transparent to-brand-red animate-float-medium"></div>
//           </div>
//         </div>
//       </section>

//       {/* Universe */}
//       <section id="universe" className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 z-10 flex flex-col justify-center overflow-hidden bg-[#050505]">
//         <div className="relative z-10 max-w-8xl mx-auto w-full">
//           <div className="text-center mb-12 md:mb-20">
//             <span className="text-brand-red font-sans font-bold text-xs tracking-widest uppercase mb-4 block">National Network</span>
//             <h2 className="font-heading font-bold text-4xl md:text-7xl text-white uppercase leading-none mb-6">
//               Pan India <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Dominance</span>
//             </h2>
//             <p className="text-gray-400 font-sans text-base md:text-lg max-w-2xl mx-auto font-light">
//               Our infrastructure spans every major educational hub in the country.
//             </p>
//           </div>
//           <div id="universe-grid" className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {zones.map((zone, i) => (
//               <div key={zone.id} className="zone-card group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-[#080808] overflow-hidden hover:border-brand-red/40 transition-all duration-500 hover:-translate-y-2 min-h-[280px] md:min-h-[300px] flex flex-col justify-between opacity-0 translate-y-12">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
//                 <div className="absolute -right-4 -top-4 text-[5rem] md:text-[8rem] font-heading font-bold text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
//                   0{i + 1}
//                 </div>
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
//                     <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase">{zone.name}</h3>
//                     <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#FF0000]"></div>
//                   </div>
//                   <div className="mb-8">
//                     <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Key Hubs</p>
//                     <div className="flex flex-wrap gap-2">
//                       {zone.hubs.map(hub => (
//                         <span key={hub} className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-sans rounded border border-white/5 group-hover:border-white/20 transition-colors">
//                           {hub}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Network Strength</p>
//                     <p className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-brand-red transition-colors">
//                       {zone.stats}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 md:mt-16 flex flex-col items-center justify-center">
//             <div className="connector-line w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-white/20 to-brand-red mb-6 scale-y-0 opacity-0"></div>
//             <div className="px-6 py-2 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red font-sans text-xs tracking-[0.2em] uppercase">
//               100% Coverage Guaranteed
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section id="services" className="relative py-20 md:py-40 px-6 md:px-20 z-10 bg-[#050505] overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
//         <div className="max-w-[90rem] mx-auto relative z-10">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 pb-8 border-b border-white/[0.05]">
//             <h2 id="services-title" className="font-heading font-bold text-5xl md:text-8xl text-white uppercase leading-[0.9] tracking-tighter">
//               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white/20">Services</span>
//             </h2>
//             <p className="text-gray-400 font-sans text-base md:text-lg mt-6 md:mt-0 max-w-lg md:text-right leading-relaxed font-light tracking-wide">
//               Precision-engineered modules to penetrate the Gen Z ecosystem.
//             </p>
//           </div>
//           <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map(service => (
//               <div
//                 key={service.id}
//                 className="service-card group relative h-[320px] md:h-[360px] bg-white/[0.015] backdrop-blur-sm border border-white/[0.05] rounded-sm overflow-hidden transition-all duration-700 hover:border-brand-red/40 hover:-translate-y-2"
//               >
//                 <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
//                   <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 group-hover:text-brand-red transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <p className="font-sans text-gray-400 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section id="process" className="relative py-20 md:py-32 px-6 z-10 bg-brand-black overflow-hidden">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="font-heading font-bold text-5xl md:text-8xl text-center text-white mb-20 md:mb-32 uppercase">
//             How We <span className="text-brand-red">Work</span>
//           </h2>
//           <div className="relative">
//             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>
//             <div id="timeline-line" className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-brand-red md:-translate-x-1/2 h-0 origin-top"></div>
//             <div id="process-steps" className="flex flex-col gap-16 md:gap-24">
//               {processSteps.map((step, i) => {
//                 const isEven = i % 2 === 0
//                 return (
//                   <div
//                     key={step.step}
//                     className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} opacity-0 translate-y-12`}
//                   >
//                     <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-brand-red rounded-full z-10 shadow-[0_0_10px_#FF0000] mt-1 md:mt-0"></div>
//                     <div className={`relative pl-12 md:pl-0 w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right text-left' : 'md:pl-12 text-left'}`}>
//                       <div className={`font-heading text-brand-red text-6xl md:text-7xl font-bold opacity-10 absolute -top-8 select-none pointer-events-none ${isEven ? 'md:right-0 right-auto left-12' : 'left-12 md:left-0'}`}>
//                         {step.step}
//                       </div>
//                       <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 uppercase relative z-10">
//                         {step.title}
//                       </h3>
//                       <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed font-light relative z-10">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work/Brands */}
//       <section id="work" className="relative py-20 md:py-32 z-10 bg-brand-black border-t border-white/5 overflow-hidden">
//         <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20">
//           <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4 uppercase">
//             Campaign <span className="text-brand-red">Constellations</span>
//           </h2>
//           <p className="font-sans text-gray-400 uppercase tracking-[0.2em] text-xs md:text-sm">Fueling the biggest names</p>
//         </div>
//         <div className="relative flex overflow-x-hidden mb-6 md:mb-8 group">
//           <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-8 py-4">
//             {brands.map((brand, i) => (
//               <div key={i} className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-[#fdfdfd] border border-white/5 rounded-full hover:border-brand-red/40 hover:bg-[#0f0f0f] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item h-20 md:h-24 w-[220px] md:w-[260px]">
//                 <img src={brand.src} alt={brand.alt} className="h-10 md:h-14 w-auto max-w-[170px] md:max-w-[200px] object-contain" />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative flex overflow-x-hidden group">
//           <div className="animate-marquee-reverse whitespace-nowrap flex gap-4 md:gap-8 py-4">
//             {brands2.map((brand, i) => (
//               <div key={i} className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-[#fdfdfd] border border-white/5 rounded-full hover:border-brand-red/40 hover:bg-[#0f0f0f] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item h-20 md:h-24 w-[220px] md:w-[260px]">
//                 <img src={brand.src} alt={brand.alt} className="h-10 md:h-14 w-auto max-w-[170px] md:max-w-[200px] object-contain" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Socials */}
//       <section id="services" className="relative py-20 md:py-40 px-6 md:px-20 z-10 bg-[#050505] overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
//         <div className="max-w-[90rem] mx-auto relative z-10">
//         <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,0,0,0.015)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />
//           <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20 2xl:max-w-[1800px] 3xl:max-w-[2400px]">
//             <div className="inline-flex items-center gap-3 mb-4 justify-center">
//               <span className="w-6 h-[1px] bg-brand-red/40"></span>
//               <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">[ 01 / Portfolio ]</span>
//               <span className="w-6 h-[1px] bg-brand-red/40"></span>
//               {/* <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red">Metrics That Matter</span> */}
//             </div>

//             <h2 className="content-title font-sans font-black tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase leading-[1.1]">
//               Our <span className="text-brand-red font-heading drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]">Recent</span> Collaborations
//             </h2>
//           </div>
//           <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map(p => (
//               <a key={p.alt} href={p.url} target='_blank' rel="noopener noreferrer">
//                 <div className="service-card group relative h-[320px] md:h-[360px] bg-white/[0.015] backdrop-blur-sm border border-white/[0.05] rounded-sm overflow-hidden transition-all duration-700 hover:border-brand-red/40 hover:-translate-y-2">
//                   <img src={p.src} alt={p.alt} className="max-h-8 md:max-h-10 w-auto object-contain min-w-full min-h-full"/>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Viral Content Showcase Grid - Maximized card heights and content text sizing */}
//         <section className="content-section relative py-16 md:py-28 z-10 bg-[#050505] border-t border-white/5 overflow-hidden 2xl:py-36">
  
//           {/* Background Atmospheric Underlay */}
//           <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,0,0,0.015)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

//           {/* Header Section */}
//           <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20 2xl:max-w-[1800px] 3xl:max-w-[2400px]">
//             <div className="inline-flex items-center gap-3 mb-4 justify-center">
//               <span className="w-6 h-[1px] bg-brand-red/40"></span>
//               <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">[ 02 / Portfolio ]</span>
//               <span className="w-6 h-[1px] bg-brand-red/40"></span>
//               {/* <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red">Metrics That Matter</span> */}
//             </div>

//             <h2 className="content-title font-heading  font-black tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase leading-[1.1]">
//               Some of <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]">Our</span> Work
//             </h2>
//           </div>

//           <div className="relative w-full overflow-hidden py-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//             {/* Scroll Track */}
//             <div ref={trackRef} className="flex gap-4 md:gap-6 w-max will-change-transform">
//               {extendedContent.map((item, i) => (
//                 <div
//                   key={i}
//                   className="content-card group relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[320px] h-[380px] sm:h-[440px] md:h-[520px] bg-[#0c0c0c] border border-white/10 rounded-none overflow-hidden transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] cursor-pointer"
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`${item.title} - ${item.views} views`}
//                 >
//                   {/* Static Thumbnail */}
//                   <img src={item.thumbnail} alt={`${item.title} - ${item.views} views`} className="absolute inset-0 w-full h-full object-cover opacity-100 transform scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"/>

//                   {/* Video Player */}
//                   <video
//                     src={item.videoUrl}
//                     className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out"
//                     style={{ pointerEvents: 'none' }}
//                     controls={false}
//                     muted
//                     playsInline
//                     preload="metadata"
//                   />

//                   {/* Dark Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:from-black/90 transition-all duration-500"></div>
              
//                   {/* Top Border Highlight */}
//                   <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>
              
//                   {/* Foreground Overlay */}
//                   <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 z-10 pointer-events-none">
//                     {/* Upper Status Pulse */}
//                     <div className="flex items-start justify-between w-full">
//                       <div className="preview-badge flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 border border-white/5 rounded-none opacity-0 transition-opacity duration-300">
//                         <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
//                         <span className="text-[9px] font-sans font-black uppercase tracking-widest text-neutral-300">
//                           Playing
//                         </span>
//                       </div>
//                     </div>
              
//                     {/* Text Metadata */}
//                     <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                       <h3 className="font-sans font-black text-lg md:text-xl text-white tracking-tight uppercase leading-tight">
//                         {item.title}
//                       </h3>
              
//                       <div className="flex items-center justify-between pt-1 border-t border-white/5 group-hover:border-brand-red/30 transition-colors duration-500">
//                         <p className="font-sans text-xs font-medium tracking-wide text-neutral-400 group-hover:text-white transition-colors duration-300">
//                           {item.views} views
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </section>

//       {/* Gallery carousel */}
//       <section>

//       </section>

//       {/* Why Us */}
//       <section className="relative py-32 px-6 z-10 bg-[#080808] overflow-hidden">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
//         <div className="max-w-8xl mx-auto relative">
//           <h2 className="font-heading font-bold text-5xl md:text-7xl text-white mb-24 text-center uppercase">
//             Why Choose <span className="text-brand-red">HYPEDIN?</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {whyUs.map((item, i) => (
//               <div key={i} className="p-10 border-l-2 border-brand-red/20 hover:border-brand-red transition-colors duration-500 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm">
//                 <div className="font-heading font-bold text-5xl text-white/10 mb-6">0{i + 1}</div>
//                 <h3 className="font-heading text-2xl text-white font-bold mb-5 uppercase tracking-wide">{item.title}</h3>
//                 <p className="font-sans text-gray-400 leading-relaxed text-lg font-light">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }




import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSEO } from '../hooks/useSEO'
import Footer from '../components/Footer'

import img1 from '../assets/thumbnail/img1.jpg';
import img2 from '../assets/thumbnail/img2.jpg';
import img3 from '../assets/thumbnail/img3.jpg';
import img4 from '../assets/thumbnail/img4.jpg';
import img5 from '../assets/thumbnail/img5.jpg';
import img6 from '../assets/thumbnail/img6.jpg';
import img7 from '../assets/thumbnail/img7.jpg';
import img8 from '../assets/thumbnail/img8.jpg';

import p1 from '../assets/posts/p1.jpg';
import p2 from '../assets/posts/p2.jpg';
import p3 from '../assets/posts/p3.png';
import p4 from '../assets/posts/p4.jpg';
import p5 from '../assets/posts/p5.jpg';
import p6 from '../assets/posts/p6.jpg';

import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';
import vid6 from '../assets/videos/vid6.mp4';
import vid7 from '../assets/videos/vid7.mp4';
import vid8 from '../assets/videos/vid8.mp4';

gsap.registerPlugin(ScrollTrigger)

export default function HomeView() {
  useSEO({
    title: 'HYPEDIN | Connecting Brands with Youth - Gen Z Marketing Agency',
    description: 'HYPEDIN connects brands with Indian youth culture through campus ambassador programs, influencer campaigns, community building, and experiential marketing.',
    canonical: 'https://www.hypedin.co/',
    ogTitle: 'HYPEDIN | Gen Z Marketing Agency India',
    ogDescription: 'Deploy armies of campus leaders and high-impact experiential events. We move at the speed of culture.',
    keywords: 'Gen Z marketing agency, campus ambassador program, youth marketing India, influencer campaigns, brand activation, student network'
  })

  const heroRef = useRef(null)
  const heroTitleRef = useRef(null)

  const zones = [
    { id: 'north', name: 'North', hubs: ['Delhi NCR', 'Chandigarh', 'Jaipur', 'Lucknow'], stats: '800+ Colleges', color: 'from-blue-500/10' },
    { id: 'west', name: 'West', hubs: ['Mumbai', 'Pune', 'Ahmedabad', 'Indore'], stats: '650+ Colleges', color: 'from-purple-500/10' },
    { id: 'south', name: 'South', hubs: ['Bangalore', 'Hyderabad', 'Chennai', 'Kochi'], stats: '700+ Colleges', color: 'from-green-500/10' },
    { id: 'east', name: 'East', hubs: ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Patna'], stats: '350+ Colleges', color: 'from-yellow-500/10' }
  ]

  const services = [
    { id: '01', number: '01', title: 'Student Ambassadors', description: 'Deploy armies of campus leaders to evangelize your brand authentically.' },
    { id: '02', number: '02', title: 'Campus Activations', description: 'High-impact experiential events and stalls inside college premises.' },
    { id: '03', number: '03', title: 'Gen Z Influencers', description: 'Micro-influencer campaigns leveraging student opinion leaders.' },
    { id: '04', number: '04', title: 'User Acquisition', description: 'Drive app installs and sign-ups through verified student networks.' },
    { id: '05', number: '05', title: 'Community Building', description: 'Create and nurture exclusive brand communities on Discord and WhatsApp.' },
    { id: '06', number: '06', title: 'Experiential Marketing', description: 'Immersive, on-ground brand experiences designed to drive recall, engagement, and word-of-mouth.' }
  ]

  const processSteps = [
    { step: '01', title: 'Research', description: 'Deep dive into brand goals and student psychology.' },
    { step: '02', title: 'Strategy', description: 'Crafting the perfect narrative for campus culture.' },
    { step: '03', title: 'Distribution', description: 'Activating our network of ambassadors and influencers.' },
    { step: '04', title: 'Execution', description: 'Flawless on-ground and digital implementation.' },
    { step: '05', title: 'Monitoring', description: 'Real-time tracking of engagement and reach.' },
    { step: '06', title: 'Report', description: 'Data-driven insights and impact analysis.' },
  ]

  const brands = [
    { name: 'Google' },
    { name: 'BGMI' },
    { name: 'Amazon' },
    { name: 'Swiggy' },
    { name: 'McDonald\'s' },
    { name: 'H&M' },
    { name: 'Simon Carter' },
    { name: 'American Eagle' },
    { name: 'Blinkit' },
    { name: 'Wishcare' },
    { name: 'Red FM' },
    { name: 'Fateh' },
    { name: 'Google' },
    { name: 'BGMI' },
    { name: 'Amazon' },
    { name: 'Swiggy' },
    { name: 'McDonald\'s' },
    { name: 'H&M' },
    { name: 'Simon Carter' },
    { name: 'American Eagle' },
    { name: 'Blinkit' },
    { name: 'Wishcare' },
    { name: 'Red FM' },
    { name: 'Fateh' }
  ]

  const brands2 = [
    { name: 'Plum' },
    { name: 'Bistro' },
    { name: 'Physics Wallah' },
    { name: 'Curefoods' },
    { name: 'XYXX' },
    { name: 'Old Spice' },
    { name: 'Unacademy' },
    { name: 'Skybags' },
    { name: 'Dream11' },
    { name: 'Viacom18' },
    { name: 'Adobe' },
    { name: 'Veeba' },
    { name: 'Plum' },
    { name: 'Bistro' },
    { name: 'Physics Wallah' },
    { name: 'Curefoods' },
    { name: 'XYXX' },
    { name: 'Old Spice' },
    { name: 'Unacademy' },
    { name: 'Skybags' },
    { name: 'Dream11' },
    { name: 'Viacom18' },
    { name: 'Adobe' },
    { name: 'Veeba' }
  ]

  const posts = [
    { src: p1, alt: "Skybag's Campus Creator Program", url: "https://www.instagram.com/p/DbFnAsQGY-C/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
    { src: p2, alt: 'BGMI Campus MVP Program', url: "https://www.instagram.com/p/DaXh8-QFAyh/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
    { src: p3, alt: "H&M Creator COnnect", url: "https://www.instagram.com/reel/DXHak9HATv8/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
    { src: p4, alt: 'Google Student Ambassador Program', url: "https://www.instagram.com/p/DXjORKAmVxf/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
    { src: p5, alt: "Phat Brand Launch", url: "https://www.instagram.com/reel/DXOWBArgY3x/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
    { src: p6, alt: 'XYXX Creator Campaign', url: "https://www.instagram.com/reel/DXLywHZgQY4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" }
  ]

  const whyUs = [
    { title: 'Proven Expertise', desc: 'Years of specialized experience in the Indian education and youth sector, delivering measurable ROI for top brands.' },
    { title: 'Direct Access', desc: 'We bypass the noise. Our direct relationships with 5,000+ college administrations ensure your brand gets prime visibility.' },
    { title: 'Data-Driven', desc: 'We don\'t guess; we track. From footfall to app installs, every campaign is backed by real-time analytics and reporting.' }
  ]

  const allContent = [
    { id: 1, title: 'H&M Collaboration', views: '60.4k', videoUrl: vid1, thumbnail: img1 },
    { id: 2, title: 'Get Phat Collaboration', views: '49.8k', videoUrl: vid2, thumbnail: img2 },
    { id: 3, title: 'XYXX Collaboration', views: '21.4k', videoUrl: vid3, thumbnail: img3 },
    { id: 4, title: 'H&M Creator Collab', views: '44K', videoUrl: vid4, thumbnail: img4 },
    { id: 5, title: 'H&M Creator Collab', views: '45k', videoUrl: vid5, thumbnail: img5 },
    { id: 6, title: 'H&M Creator Collab', views: '75k', videoUrl: vid6, thumbnail: img6 },
    { id: 7, title: 'H&M Creator Collab', views: '20k', videoUrl: vid7, thumbnail: img7 },
    { id: 8, title: 'H&M Creator Collab', views: '55k', videoUrl: vid8, thumbnail: img8 },
  ]

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      ScrollTrigger.getAll().forEach(st => st.kill())

      const mm = gsap.matchMedia()

      mm.add('(min-width: 769px)', () => {
        // 1. Reddish glow animation executes first
        if (document.querySelector('.hero-glow')) {
          gsap.fromTo('.hero-glow', 
            { opacity: 0, scale: 0.6 },
            { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' }
          )
        }

        if (document.querySelector('#hero-top, #hero-bottom')) {
          gsap.to('#hero-top, #hero-bottom', { autoAlpha: 1, scaleX: 1, duration: 1.8, ease: 'expo.out', delay: 0.2 })
        }
        
        // 2. Timeline synchronized to coordinate BRANDS, WITH, and YOUTH perfectly
        const tl = gsap.timeline({ delay: 0.5 })

        if (document.querySelectorAll('.hero-char').length > 0) {
          tl.fromTo(
            '.hero-char',
            { yPercent: 120, rotateX: -40, opacity: 0 },
            { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.5, stagger: 0.08, ease: 'power4.out' },
            0
          )
        }
        if (document.querySelector('.hero-fade')) {
          // Changed to fromTo to enforce starting from absolute zero simultaneously with BRANDS/YOUTH
          tl.fromTo('.hero-fade', 
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, 
            0
          )
        }
        
        if (document.querySelector('.hero-handwritten')) {
          gsap.to('.hero-handwritten', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.out', delay: 1 })
        }
        if (document.querySelector('.hero-subtext')) {
          gsap.to('.hero-subtext', { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 })
        }

        if (document.querySelector('#universe-grid') && document.querySelectorAll('.zone-card').length > 0) {
          gsap.to('.zone-card', {
            scrollTrigger: { trigger: '#universe-grid', start: 'top 90%' },
            y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out'
          })
        }

        if (document.querySelector('#universe') && document.querySelectorAll('.connector-line').length > 0) {
          gsap.to('.connector-line', {
            scrollTrigger: { trigger: '#universe', start: 'top 70%' },
            scaleY: 1, opacity: 1, duration: 1.5, ease: 'expo.out'
          })
        }

        if (document.querySelector('#timeline-line') && document.querySelector('#process-steps')) {
          gsap.to('#timeline-line', {
            scrollTrigger: {
              trigger: '#process-steps',
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1.5,
              invalidateOnRefresh: true
            },
            height: '100%', ease: 'none'
          })
        }

        if (document.querySelector('#process-steps') && document.querySelectorAll('.timeline-item').length > 0) {
          gsap.to('.timeline-item', {
            scrollTrigger: { trigger: '#process-steps', start: 'top 85%' },
            y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out'
          })
        }
      })

      mm.add('(max-width: 768px)', () => {
        if (document.querySelector('.hero-glow')) {
          gsap.fromTo('.hero-glow', 
            { opacity: 0, scale: 0.6 },
            { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          )
        }

        if (document.querySelector('#hero-top, #hero-bottom')) {
          gsap.to('#hero-top, #hero-bottom', { autoAlpha: 1, scaleX: 1, duration: 1.2, ease: 'expo.out', delay: 0.2 })
        }
        
        const tlMobile = gsap.timeline({ delay: 0.5 })

        if (document.querySelectorAll('.hero-char').length > 0) {
          tlMobile.fromTo(
            '.hero-char',
            { yPercent: 120, rotateX: -40, opacity: 0 },
            { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.5, stagger: 0.08, ease: 'power4.out' },
            0
          )
        }
        if (document.querySelector('.hero-fade')) {
          tlMobile.fromTo('.hero-fade', 
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, 
            0
          )
        }
        
        if (document.querySelector('.hero-handwritten')) {
          gsap.to('.hero-handwritten', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.out', delay: 1 })
        }
        if (document.querySelector('.hero-subtext')) {
          gsap.to('.hero-subtext', { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 })
        }
        
        if (document.querySelectorAll('.zone-card').length > 0) {
          gsap.to('.zone-card', {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.5
          })
        }
        
        if (document.querySelectorAll('.timeline-item').length > 0) {
          gsap.to('.timeline-item', {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.5
          })
        }
        
        if (document.querySelector('#timeline-line')) {
          gsap.to('#timeline-line', { height: '100%', duration: 1, ease: 'power2.out' })
        }
      })
    }, 100)

    if (heroRef.current) {
      heroRef.current.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      clearTimeout(animationTimer)
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    gsap.to('#hero-title', { rotateX: -y * 5, rotateY: x * 5, duration: 1.5 })
    gsap.to('.hero-glow', { x: x * 40, y: y * 40, duration: 2.5 })
  }

  const [contentIndex, setContentIndex] = useState(0)

  const contentSets = [
    allContent.slice(0, 4),
    allContent.slice(4, 8)
  ]

  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  // Duplicate items to make the loop seamless
  const extendedContent = [...allContent, ...allContent]

  // 1. Setup continuous horizontal scroll animation
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Calculate width of half the track (one set of items)
    const totalWidth = track.scrollWidth / 2

    // Continuous linear loop moving left
    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 20, // Adjust speed here (higher = slower)
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    })

    return () => {
      if (tweenRef.current) tweenRef.current.kill()
    }
  }, [allContent]);

  // 2. Observer: Play videos automatically as they pass through view
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const cards = track.querySelectorAll('.content-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target
          const video = card.querySelector('video')
          const thumbnail = card.querySelector('img')
          const badge = card.querySelector('.preview-badge')

          if (!video || !thumbnail) return

          if (entry.isIntersecting) {
            // Fades in and plays when entering the visible section
            video.style.opacity = '1'
            thumbnail.style.opacity = '0'
            if (badge) badge.style.opacity = '1'
            
            video.play().catch(() => {
              // Graceful fallback for browser autoplay policies
            })
          } else {
            // Pauses and restores thumbnail when scrolling out
            video.pause()
            video.currentTime = 0
            video.style.opacity = '0'
            thumbnail.style.opacity = '1'
            if (badge) badge.style.opacity = '0'
          }
        })
      },
      {
        root: null, // Relative to viewport (or parent container if specified)
        threshold: 0.6 // Trigger when card is at least 60% visible
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [allContent]);

  // Optional: Pause horizontal loop on container hover/touch so user can inspect
  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 md:px-8 overflow-hidden py-20 perspective-1000"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 80px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)' }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-4 md:left-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
          <div className="absolute top-0 right-4 md:right-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
        </div>

        {/* The reddish glow component initialized with opacity: 0 to smoothly control load order */}
        <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-brand-red/[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" style={{ opacity: 0 }}></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center">
          <div
            id="hero-top"
            className="w-full flex items-center justify-between py-6 border-t border-b border-white/[0.08] mb-12 md:mb-16 relative backdrop-blur-sm opacity-0 scale-x-0 origin-center"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans pl-2 md:pl-4 hidden xs:block">Est. 2022</span>
            <div className="absolute left-1/2 -translate-x-1/2 px-4 md:px-6 bg-[#050505] border border-white/5 rounded-full py-1 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_#FF0000] animate-pulse"></span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/80 font-sans">Gen Z Marketing</span>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans pr-2 md:pr-4 hidden xs:block">Pan India</span>
          </div>

          <div id="hero-title" ref={heroTitleRef} className="w-full flex flex-col items-center justify-center relative gap-2 md:gap-4 preserve-3d">
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 z-10 relative px-2 md:px-0">
              <div className="relative flex flex-col items-center md:items-start group" style={{ transform: 'translateZ(20px)' }}>
                <div className="hero-handwritten absolute -top-5 -left-1 md:-top-10 md:-left-10 z-30 transform -rotate-6 mix-blend-screen opacity-90 w-full text-center md:text-left">
                  <h2 className="font-handwritten text-xl md:text-3xl text-white whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] px-10">
                    Connecting <span className="ml-1 opacity-80 text-brand-red">_</span>
                  </h2>
                </div>
                {/* Added inline style opacity: 0 to block initial paint flash */}
                <div className="overflow-hidden p-2">
                  <h1 className="hero-char font-heading font-extrabold uppercase leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500" style={{ opacity: 0 }}>
                    BRANDS
                  </h1>
                </div>
              </div>
              {/* Added inline style opacity: 0 to ensure WITH is hidden along with BRANDS and YOUTH */}
              <div className="hero-fade flex items-center mx-2 my-2 md:my-0 md:mt-2 z-20" style={{ transform: 'translateZ(40px)', opacity: 0 }}>
                <span className="font-sans font-medium text-[9px] md:text-[11px] text-white/90 tracking-[0.35em] uppercase border border-white/20 px-4 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  WITH
                </span>
              </div>
              {/* Added inline style opacity: 0 to block initial paint flash */}
              <div className="overflow-hidden p-2" style={{ transform: 'translateZ(20px)' }}>
                <h1 className="hero-char font-heading font-extrabold uppercase leading-[0.85] tracking-tighter text-white mix-blend-difference" style={{ opacity: 0 }}>
                  YOUTH
                </h1>
              </div>
            </div>
          </div>

          <div className="hero-subtext mt-12 md:mt-16 max-w-[90%] md:max-w-xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-2xl opacity-0 translate-y-8">
            <p className="text-gray-300 font-sans text-sm md:text-lg font-light leading-relaxed tracking-wide">
              Bridging top-tier brands with India's <span className="text-white border-b border-brand-red/60 pb-0.5">200M+ student ecosystem</span> through data-driven ambassador programs.
            </p>
          </div>

          <div
            id="hero-bottom"
            className="w-full mt-16 md:mt-24 border-t border-white/[0.08] pt-8 flex justify-between items-start origin-center px-4 md:px-12 backdrop-blur-[2px] opacity-0 scale-x-0"
          >
            <div className="text-left group cursor-default">
              <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
                Network
              </p>
              <div className="font-heading text-xl md:text-4xl text-white font-bold tracking-tight">
                5,000<span className="text-brand-red text-xl md:text-2xl align-top">+</span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center opacity-20">
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mb-3"></div>
            </div>
            <div className="text-right group cursor-default">
              <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
                Students
              </p>
              <div className="font-heading text-xl md:text-4xl text-white font-bold tracking-tight">
                200K<span className="text-brand-red text-xl md:text-2xl align-top">+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 mix-blend-screen pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-sans animate-pulse">Scroll</span>
          <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/20 to-transparent overflow-hidden">
            <div className="w-full h-1/2 bg-gradient-to-b from-transparent to-brand-red animate-float-medium"></div>
          </div>
        </div>
      </section>

      {/* Universe */}
      <section id="universe" className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 z-10 flex flex-col justify-center overflow-hidden bg-[#050505]">
        <div className="relative z-10 max-w-8xl mx-auto w-full">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-brand-red font-sans font-bold text-xs tracking-widest uppercase mb-4 block">National Network</span>
            <h2 className="font-heading font-bold text-4xl md:text-7xl text-white uppercase leading-none mb-6">
              Pan India <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Dominance</span>
            </h2>
            <p className="text-gray-400 font-sans text-base md:text-lg max-w-2xl mx-auto font-light">
              Our infrastructure spans every major educational hub in the country.
            </p>
          </div>
          <div id="universe-grid" className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, i) => (
              <div key={zone.id} className="zone-card group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-[#080808] overflow-hidden hover:border-brand-red/40 transition-all duration-500 hover:-translate-y-2 min-h-[280px] md:min-h-[300px] flex flex-col justify-between opacity-0 translate-y-12">
                <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                <div className="absolute -right-4 -top-4 text-[5rem] md:text-[8rem] font-heading font-bold text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                  0{i + 1}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase">{zone.name}</h3>
                    <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#FF0000]"></div>
                  </div>
                  <div className="mb-8">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Key Hubs</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.hubs.map(hub => (
                        <span key={hub} className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-sans rounded border border-white/5 group-hover:border-white/20 transition-colors">
                          {hub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Network Strength</p>
                    <p className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-brand-red transition-colors">
                      {zone.stats}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex flex-col items-center justify-center">
            <div className="connector-line w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-white/20 to-brand-red mb-6 scale-y-0 opacity-0"></div>
            <div className="px-6 py-2 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red font-sans text-xs tracking-[0.2em] uppercase">
              100% Coverage Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 md:py-40 px-6 md:px-20 z-10 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 pb-8 border-b border-white/[0.05]">
            <h2 id="services-title" className="font-heading font-bold text-5xl md:text-8xl text-white uppercase leading-[0.9] tracking-tighter">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white/20">Services</span>
            </h2>
            <p className="text-gray-400 font-sans text-base md:text-lg mt-6 md:mt-0 max-w-lg md:text-right leading-relaxed font-light tracking-wide">
              Precision-engineered modules to penetrate the Gen Z ecosystem.
            </p>
          </div>
          <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div
                key={service.id}
                className="service-card group relative h-[320px] md:h-[360px] bg-white/[0.015] backdrop-blur-sm border border-white/[0.05] rounded-sm overflow-hidden transition-all duration-700 hover:border-brand-red/40 hover:-translate-y-2"
              >
                <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-20 md:py-32 px-6 z-10 bg-brand-black overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-5xl md:text-8xl text-center text-white mb-20 md:mb-32 uppercase">
            How We <span className="text-brand-red">Work</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>
            <div id="timeline-line" className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-brand-red md:-translate-x-1/2 h-0 origin-top"></div>
            <div id="process-steps" className="flex flex-col gap-16 md:gap-24">
              {processSteps.map((step, i) => {
                const isEven = i % 2 === 0
                return (
                  <div
                    key={step.step}
                    className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} opacity-0 translate-y-12`}
                  >
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-brand-red rounded-full z-10 shadow-[0_0_10px_#FF0000] mt-1 md:mt-0"></div>
                    <div className={`relative pl-12 md:pl-0 w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right text-left' : 'md:pl-12 text-left'}`}>
                      <div className={`font-heading text-brand-red text-6xl md:text-7xl font-bold opacity-10 absolute -top-8 select-none pointer-events-none ${isEven ? 'md:right-0 right-auto left-12' : 'left-12 md:left-0'}`}>
                        {step.step}
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 uppercase relative z-10">
                        {step.title}
                      </h3>
                      <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed font-light relative z-10">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work/Brands */}
      <section id="work" className="relative py-20 md:py-32 z-10 bg-brand-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4 uppercase">
            Campaign <span className="text-brand-red">Constellations</span>
          </h2>
          <p className="font-sans text-gray-400 uppercase tracking-[0.2em] text-xs md:text-sm">Fueling the biggest names</p>
        </div>
        <div className="relative flex overflow-x-hidden mb-6 md:mb-8 group">
          <div className="animate-marquee [animation-duration:60s] whitespace-nowrap flex gap-4 md:gap-8 py-4">
            {brands.map((brand, i) => (
              // <div key={i} className="inline-flex items-center justify-center flex-shrink-0 px-8 py-4 md:px-12 md:py-6 h-20 md:h-28 bg-white/[0.04] border border-white/[0.06] rounded-full hover:border-brand-red/40 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item">
              //   <span className="font-heading font-bold uppercase tracking-tight text-2xl md:text-4xl text-white/40 group-hover/item:text-white/70 transition-colors duration-300">
              //     {brand.name}
              //   </span>
              // </div>
              <div class="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-[#0F0F0F] border border-white/5 rounded-full hover:border-brand-red transition-colors duration-300">
                <span class="font-heading text-xl md:text-4xl text-white/50 font-bold uppercase group-hover:text-white transition-colors">
                {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee-reverse [animation-duration:60s] whitespace-nowrap flex gap-4 md:gap-8 py-4">
            {brands2.map((brand, i) => (
              <div key={i} className="inline-flex items-center justify-center flex-shrink-0 px-8 py-4 md:px-12 md:py-6 h-20 md:h-28 bg-white/[0.04] border border-white/[0.06] rounded-full hover:border-brand-red/40 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item">
                <span className="font-heading font-bold uppercase tracking-tight text-2xl md:text-4xl text-white/40 group-hover/item:text-white/70 transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Socials */}
      <section id="services" className="relative py-20 md:py-40 px-6 md:px-20 z-10 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,0,0,0.015)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />
          <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20 2xl:max-w-[1800px] 3xl:max-w-[2400px]">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="w-6 h-[1px] bg-brand-red/40"></span>
              <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">[ 01 / Portfolio ]</span>
              <span className="w-6 h-[1px] bg-brand-red/40"></span>
              {/* <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red">Metrics That Matter</span> */}
            </div>

            <h2 className="content-title font-sans font-black tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase leading-[1.1]">
              Our <span className="text-brand-red font-heading drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]">Recent</span> Collaborations
            </h2>
          </div>
          <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(p => (
              <a key={p.alt} href={p.url} target='_blank' rel="noopener noreferrer">
                <div className="service-card group relative h-[320px] md:h-[360px] bg-white/[0.015] backdrop-blur-sm border border-white/[0.05] rounded-sm overflow-hidden transition-all duration-700 hover:border-brand-red/40 hover:-translate-y-2">
                  <img src={p.src} alt={p.alt} className="max-h-8 md:max-h-10 w-auto object-contain min-w-full min-h-full"/>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Viral Content Showcase Grid - Maximized card heights and content text sizing */}
        <section className="content-section relative py-16 md:py-28 z-10 bg-[#050505] border-t border-white/5 overflow-hidden 2xl:py-36">
  
          {/* Background Atmospheric Underlay */}
          <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,0,0,0.015)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

          {/* Header Section */}
          <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20 2xl:max-w-[1800px] 3xl:max-w-[2400px]">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="w-6 h-[1px] bg-brand-red/40"></span>
              <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">[ 02 / Portfolio ]</span>
              <span className="w-6 h-[1px] bg-brand-red/40"></span>
              {/* <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red">Metrics That Matter</span> */}
            </div>

            <h2 className="content-title font-heading  font-black tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase leading-[1.1]">
              Some of <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]">Our</span> Work
            </h2>
          </div>

          <div className="relative w-full overflow-hidden py-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Scroll Track */}
            <div ref={trackRef} className="flex gap-4 md:gap-6 w-max will-change-transform">
              {extendedContent.map((item, i) => (
                <div
                  key={i}
                  className="content-card group relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[320px] h-[380px] sm:h-[440px] md:h-[520px] bg-[#0c0c0c] border border-white/10 rounded-none overflow-hidden transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.title} - ${item.views} views`}
                >
                  {/* Static Thumbnail */}
                  <img src={item.thumbnail} alt={`${item.title} - ${item.views} views`} className="absolute inset-0 w-full h-full object-cover opacity-100 transform scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"/>

                  {/* Video Player */}
                  <video
                    src={item.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out"
                    style={{ pointerEvents: 'none' }}
                    controls={false}
                    muted
                    playsInline
                    preload="metadata"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:from-black/90 transition-all duration-500"></div>
              
                  {/* Top Border Highlight */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>
              
                  {/* Foreground Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 z-10 pointer-events-none">
                    {/* Upper Status Pulse */}
                    <div className="flex items-start justify-between w-full">
                      <div className="preview-badge flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 border border-white/5 rounded-none opacity-0 transition-opacity duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                        <span className="text-[9px] font-sans font-black uppercase tracking-widest text-neutral-300">
                          Playing
                        </span>
                      </div>
                    </div>
              
                    {/* Text Metadata */}
                    <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="font-sans font-black text-lg md:text-xl text-white tracking-tight uppercase leading-tight">
                        {item.title}
                      </h3>
              
                      <div className="flex items-center justify-between pt-1 border-t border-white/5 group-hover:border-brand-red/30 transition-colors duration-500">
                        <p className="font-sans text-xs font-medium tracking-wide text-neutral-400 group-hover:text-white transition-colors duration-300">
                          {item.views} views
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Gallery carousel */}
      <section>

      </section>

      {/* Why Us */}
      <section className="relative py-32 px-6 z-10 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        <div className="max-w-8xl mx-auto relative">
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-white mb-24 text-center uppercase">
            Why Choose <span className="text-brand-red">HYPEDIN?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyUs.map((item, i) => (
              <div key={i} className="p-10 border-l-2 border-brand-red/20 hover:border-brand-red transition-colors duration-500 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm">
                <div className="font-heading font-bold text-5xl text-white/10 mb-6">0{i + 1}</div>
                <h3 className="font-heading text-2xl text-white font-bold mb-5 uppercase tracking-wide">{item.title}</h3>
                <p className="font-sans text-gray-400 leading-relaxed text-lg font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
