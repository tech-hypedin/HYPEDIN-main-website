// import { useEffect, useState, useRef } from 'react'
// import CountUp from 'react-countup'
// import { Helmet } from 'react-helmet-async'
// import { Link } from 'react-router-dom'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useSEO } from '../hooks/useSEO'
// import Footer from '../components/Footer'
// import CreatorsHero from '../components/CreatorsHero';

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

// import vid1 from '../assets/videos/vid1.mp4';
// import vid2 from '../assets/videos/vid2.mp4';
// import vid3 from '../assets/videos/vid3.mp4';
// import vid4 from '../assets/videos/vid4.mp4';
// import vid5 from '../assets/videos/vid5.mp4';
// import vid6 from '../assets/videos/vid6.mp4';
// import vid7 from '../assets/videos/vid7.mp4';
// import vid8 from '../assets/videos/vid8.mp4';

// gsap.registerPlugin(ScrollTrigger)

// export default function CreatorsView() {
//   useSEO({
//     title: 'Creators | HYPEDIN | Empower Your Reach - Join Our Creator Network',
//     description: 'Join HYPEDIN\'s creator network and amplify your influence. Get exclusive brand collaborations, monetization opportunities, and grow your audience across Indian campuses. 5000+ creators already partnering with top brands.',
//     canonical: 'https://www.hypedin.co/creators',
//     ogTitle: 'Creators | HYPEDIN | Join Our Creator Network',
//     ogDescription: 'Empower your creativity with HYPEDIN. Connect with top brands like Google, Amazon, and more. Monetize your content through authentic campus partnerships. 5000+ creators, 300+ brands, 100M+ audience reach.',
//     keywords: 'creators HYPEDIN, influencer program, content creators, brand collaboration, youth creators India, campus influencers, creator network, monetize content, brand partnerships'
//   })

//   const [contentIndex, setContentIndex] = useState(0)
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false)

//   const brands = [
//       { src: Google, alt: 'Google' },
//       { src: Amazon, alt: 'Amazon' },
//       { src: Swiggy, alt: 'Swiggy' },
//       { src: McD, alt: 'McDonald\'s' },
//       { src: Blink, alt: 'Blinkit' },
//       { src: RedFM, alt: 'Red FM' },
//       { src: Google, alt: 'Google' },
//       { src: Amazon, alt: 'Amazon' },
//       { src: Swiggy, alt: 'Swiggy' },
//       { src: McD, alt: 'McDonald\'s' },
//       { src: Blink, alt: 'Blinkit' },
//       { src: RedFM, alt: 'Red FM' }
//     ]
  
//     const brands2 = [
//       { src: Plum, alt: 'Plum' },
//       { src: PW, alt: 'Physics Wallah' },
//       { src: Unacademy, alt: 'Unacademy' },
//       { src: Dream11, alt: 'Dream11' },
//       { src: Viacom18, alt: 'Viacom18' },
//       { src: Veeba, alt: 'Veeba' },
//       { src: Plum, alt: 'Plum' },
//       { src: PW, alt: 'Physics Wallah' },
//       { src: Unacademy, alt: 'Unacademy' },
//       { src: Dream11, alt: 'Dream11' },
//       { src: Viacom18, alt: 'Viacom18' },
//       { src: Veeba, alt: 'Veeba' }
//     ]

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
//     const mm = gsap.matchMedia()

//     mm.add('(min-width: 769px)', () => {
//       gsap.to('.creator-hero-text', {
//         opacity: 1, 
//         y: 0, 
//         duration: 1, 
//         stagger: 0.1, 
//         ease: 'power3.out',
//         delay: 0.2
//       })
//     })

//     mm.add('(max-width: 768px)', () => {
//       gsap.set('.creator-hero-text', {
//         opacity: 1,
//         y: 0
//       })
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach(st => st.kill())
//     }
//   }, [])

//   const CountComponent = CountUp.default || CountUp;

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 2
//     const y = (e.clientY / window.innerHeight - 0.5) * 2
//     gsap.to('#hero-title', { rotateX: -y * 5, rotateY: x * 5, duration: 1.5 })
//     gsap.to('.hero-glow', { x: x * 40, y: y * 40, duration: 2.5 })
//   }

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
//       <Helmet>
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Creators | HYPEDIN",
//             "url": "https://www.hypedin.co/creators",
//             "description": "Join HYPEDIN's creator network with 5000+ creators, 300+ brand collaborations, and 100M+ audience reach across India.",
//             "mainEntity": {
//               "@type": "Organization",
//               "@id": "https://www.hypedin.co",
//               "name": "HYPEDIN",
//               "description": "Creator network connecting content creators with top brands for exclusive collaborations and monetization opportunities",
//               "url": "https://www.hypedin.co",
//               "telephone": "+91-8439279315",
//               "email": "team@hypedin.co",
//               "sameAs": [
//                 "https://instagram.com/hypedin",
//                 "https://twitter.com/hypedin",
//                 "https://youtube.com/hypedin"
//               ],
//               "knowsAbout": [
//                 "Creator Economy",
//                 "Influencer Marketing",
//                 "Brand Collaborations",
//                 "Social Media Content",
//                 "Campus Marketing"
//               ]
//             },
//             "aggregateRating": {
//               "@type": "AggregateRating",
//               "ratingValue": "4.8",
//               "bestRating": "5",
//               "worstRating": "1",
//               "ratingCount": "5000"
//             },
//             "breadcrumb": {
//               "@type": "BreadcrumbList",
//               "itemListElement": [
//                 {
//                   "@type": "ListItem",
//                   "position": 1,
//                   "name": "Home",
//                   "item": "https://www.hypedin.co/"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 2,
//                   "name": "Creators",
//                   "item": "https://www.hypedin.co/creators"
//                 }
//               ]
//             }
//           })}
//         </script>
//       </Helmet>

//       <div className="font-heading relative min-h-screen overflow-hidden bg-[#050505]">
//         {/* Rendered fully dynamic inner Hero layout */}
//         <CreatorsHero/>


//         <div className="creators-stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 mt-12 md:mt-20 border-y border-white/10 py-0 px-4 sm:px-6 md:px-0 2xl:mt-24 3xl:mt-32 max-w-[1920px] 3xl:max-w-[2500px] mx-auto bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-[2px]">
  
//   {/* Stat 1 */}
//   <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 md:border-r border-b sm:border-b-0 border-white/10 relative group transition-all duration-500 hover:bg-white/[0.01]">
//     <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//     <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
//       <CountComponent end={10000} duration={2.5} enableScrollSpy scrollSpyOnce />
//       <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">+</span>
//     </div>
//     <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
//       Creators Across India
//     </p>
//   </div>

//   {/* Stat 2 */}
//   <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 md:border-r border-b sm:border-b-0 border-white/10 relative group transition-all duration-500 hover:bg-white/[0.01]">
//     <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//     <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
//       <CountComponent end={200} duration={2.5} enableScrollSpy scrollSpyOnce />
//       <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">+</span>
//     </div>
//     <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
//       Brand Collaborations
//     </p>
//   </div>
    
//   {/* Stat 3 */}
//   <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 md:border-r border-b sm:border-b-0 border-white/10 relative group transition-all duration-500 hover:bg-white/[0.01]">
//     <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//     <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
//       <CountComponent end={500} duration={2.5} enableScrollSpy scrollSpyOnce />
//       <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">+</span>
//     </div>
//     <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
//       Campaigns Delivered
//     </p>
//   </div>

//   {/* Stat 4 */}
//   <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 relative group transition-all duration-500 hover:bg-white/[0.01]">
//     <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//     <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
//       <CountComponent end={100} duration={2.5} enableScrollSpy scrollSpyOnce />
//       <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">M+</span>
//     </div>
//     <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
//       Audience Reach
//     </p>
//   </div>
// </div>


//         <section id="brands-carousel" className="brands-section relative py-16 md:py-32 z-10 border-t border-white/5 overflow-hidden bg-[#050505] 2xl:py-44 3xl:py-56">
//   {/* Ambient Background Radial Glow to elevate the section */}
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] bg-brand-red/[0.02] blur-[100px] pointer-events-none rounded-full mix-blend-screen"></div>

//   <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-0 mb-12 md:mb-20 2xl:max-w-[1920px] 3xl:max-w-[2500px] 2xl:mb-28">
//     <h2 className="brands-title font-heading font-extrabold tracking-tighter text-3xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 uppercase leading-[1.1] 2xl:text-7xl 3xl:text-8xl">
//       Brands We <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]">Collaborate</span> With
//     </h2>
//     <p className="font-sans font-light tracking-[0.2em] text-gray-400 uppercase text-[9px] sm:text-xs md:text-sm mt-3 md:mt-4 2xl:text-lg 3xl:text-xl">
//       Join creators already partnering with industry leaders
//     </p>
//   </div>

//   {/* Marquee Row 1 */}
//   <div className="relative flex overflow-x-hidden mb-6 md:mb-8 group/row1 2xl:mb-10">
//     <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-6 py-2 2xl:gap-8">
//       {brands.map((brand, i) => (
//         <div key={i} className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-[#fdfdfd] border border-white/5 rounded-full hover:border-brand-red/40 hover:bg-[#0f0f0f] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item h-20 md:h-24 w-[220px] md:w-[260px]">
//           <img src={brand.src} alt={brand.alt} className="h-10 md:h-14 w-auto max-w-[170px] md:max-w-[200px] object-contain"/>
//         </div>
//       ))}
//     </div>
//     {/* Duplicate loop running seamlessly behind for infinite animation continuity */}
//     <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-6 py-2 2xl:gap-8 absolute top-0 left-0" aria-hidden="true">
//       {brands.map((brand, i) => (
//         <div key={`dup1-${i}`} className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-[#fdfdfd] border border-white/5 rounded-full hover:border-brand-red/40 hover:bg-[#0f0f0f] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item h-20 md:h-24 w-[220px] md:w-[260px]">
//           <img src={brand.src} alt={brand.alt} className="h-10 md:h-14 w-auto max-w-[170px] md:max-w-[200px] object-contain"/>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Marquee Row 2 */}
//   <div className="relative flex overflow-x-hidden group/row2">
//     <div className="animate-marquee-reverse whitespace-nowrap flex gap-4 md:gap-6 py-2 2xl:gap-8">
//       {brands2.map((brand, i) => (
//         <div key={i} className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-[#fdfdfd] border border-white/5 rounded-full hover:border-brand-red/40 hover:bg-[#0f0f0f] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item h-20 md:h-24 w-[220px] md:w-[260px]">
//           <img src={brand.src} alt={brand.alt} className="h-10 md:h-14 w-auto max-w-[170px] md:max-w-[200px] object-contain"/>
//         </div>
//       ))}
//     </div>
//     {/* Duplicate loop running seamlessly behind for infinite animation continuity */}
//     <div className="animate-marquee-reverse whitespace-nowrap flex gap-4 md:gap-6 py-2 2xl:gap-8 absolute top-0 left-0" aria-hidden="true">
//       {brands2.map((brand, i) => (
//         <div key={`dup1-${i}`} className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-[#fdfdfd] border border-white/5 rounded-full hover:border-brand-red/40 hover:bg-[#0f0f0f] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/item h-20 md:h-24 w-[220px] md:w-[260px]">
//           <img src={brand.src} alt={brand.alt} className="h-10 md:h-14 w-auto max-w-[170px] md:max-w-[200px] object-contain"/>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Smooth Panoramic Edge Vignettes */}
//   <div className="absolute top-0 left-0 h-full w-12 sm:w-24 md:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent pointer-events-none 2xl:w-80 3xl:w-96 z-10"></div>
//   <div className="absolute top-0 right-0 h-full w-12 sm:w-24 md:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent pointer-events-none 2xl:w-80 3xl:w-96 z-10"></div>
// </section>

//         {/* Viral Content Showcase Grid - Maximized card heights and content text sizing */}
//         <section className="content-section relative py-16 md:py-28 z-10 bg-[#050505] border-t border-white/5 overflow-hidden 2xl:py-36">
  
//   {/* Background Atmospheric Underlay */}
//   <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,0,0,0.015)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

//   {/* Header Section */}
//   <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20 2xl:max-w-[1800px] 3xl:max-w-[2400px]">
//     <div className="inline-flex items-center gap-3 mb-4 justify-center">
//       <span className="w-6 h-[1px] bg-brand-red/40"/>
//       <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red">Metrics That Matter</span>
//       <span className="w-6 h-[1px] bg-brand-red/40"/>
//     </div>
    
//     <h2 className="content-title font-black tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase leading-[1.1]">
//       Viral <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]">Content</span> That Converts
//     </h2>
//   </div>

//   {/* Content Carousel Grid */}
//   <div className="relative w-full overflow-hidden py-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
// </section>

// <section className="font-heading creators-cta-section relative py-24 md:py-36 px-4 sm:px-6 md:px-12 z-10 bg-[#050505] border-t border-white/5 overflow-hidden 2xl:py-48">
//   {/* Sophisticated, deep atmospheric lighting - centered soft pool layout */}
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(255,0,0,0.03)_0%,transparent_65%)] pointer-events-none blur-3xl z-0"></div>

//   <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
    
//     {/* Micro-tagline */}
//     <div className="inline-flex items-center gap-3 mb-6 justify-center">
//       <span className="w-6 h-[1px] bg-brand-red/40"></span>
//       <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
//         Elevate Your Digital Presence
//       </span>
//       <span className="w-6 h-[1px] bg-brand-red/40"></span>
//     </div>

//     <h2 className="font-['Bebas Neue'] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase tracking-tighter leading-[1.05] mb-6">
//   Ready To Grow Your <br />
//   <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.25)]">
//     Influence?
//   </span>
// </h2>

//     {/* Focused description layout */}
//     <p className="font-sans text-neutral-400 mb-10 md:mb-12 text-sm sm:text-base font-light leading-relaxed tracking-wide max-w-2xl">
//       Join our curated community of creators. Unlock premium brand partnerships, enterprise-grade monetization avenues, and a dedicated management squad tailored to your trajectory.
//     </p>

//     {/* Clean Minimalist Architectural Button */}
//     <Link
//   to='/creators-form'
//   className="group relative inline-flex items-center justify-center px-10 py-5 text-[11px] font-sans font-black tracking-[0.25em] uppercase text-white bg-[#0a0a0a]/40 border border-white/10 hover:border-brand-red/60 overflow-hidden rounded-none transition-all duration-500 ease-out active:scale-[0.98] w-full sm:w-auto min-w-[260px] backdrop-blur-sm shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]"
//   aria-label="Apply as a Creator - Join HYPEDIN"
// >
//   {/* Advanced high-contrast background slide overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-red/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
  
//   {/* Left edge premium laser-light accent tracker */}
//   <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-brand-red scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-400 ease-out delay-75"></div>

//   {/* Subtle micro-grid internal highlights */}
//   <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:8px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
//   <div className="relative z-10 flex items-center justify-center gap-3">
//     <span className="text-neutral-200 group-hover:text-white transition-colors duration-300 ease-out">
//       Apply as a Creator
//     </span>
    
//     {/* Enhanced container-less shifting utility arrow */}
//     <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden">
//       <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         stroke="currentColor" 
//         strokeWidth="3" 
//         className="w-3.5 h-3.5 absolute transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-white"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//       </svg>
//       <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         stroke="currentColor" 
//         strokeWidth="2.5" 
//         className="w-3.5 h-3.5 absolute transform translate-x-0 group-hover:translate-x-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-400"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//       </svg>
//     </div>
//   </div>
// </Link>

//     {/* Elegant Minimal Editorial Footer block */}
//     <div className="w-full mt-24 md:mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-neutral-500 text-[10px] font-sans gap-4 sm:gap-0 tracking-widest">
//       <p className="hover:text-neutral-400 transition-colors duration-300">&copy; {new Date().getFullYear()} HYPEDIN. All rights reserved.</p>
      
//       <div className="flex gap-6 md:gap-8 uppercase tracking-[0.2em] font-semibold">
//         <a href="https://www.linkedin.com/company/hypedin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
//           LinkedIn
//         </a>
//         <a href="https://www.instagram.com/hypedin.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
//           Instagram
//         </a>
//         <Link to='/contact' className="hover:text-white transition-colors duration-300">
//           Contact
//         </Link>
//         <Link to='/privacy' className="hover:text-white transition-colors duration-300">
//           Privacy Policy
//         </Link>
//       </div>
//     </div>

//   </div>
// </section>
//       </div>
//     </>
//   )
// }



import { useEffect, useState, useRef } from 'react'
import CountUp from 'react-countup'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSEO } from '../hooks/useSEO'
import Footer from '../components/Footer'
import CreatorsHero from '../components/CreatorsHero';

import img1 from '../assets/thumbnail/img1.jpg';
import img2 from '../assets/thumbnail/img2.jpg';
import img3 from '../assets/thumbnail/img3.jpg';
import img4 from '../assets/thumbnail/img4.jpg';
import img5 from '../assets/thumbnail/img5.jpg';
import img6 from '../assets/thumbnail/img6.jpg';
import img7 from '../assets/thumbnail/img7.jpg';
import img8 from '../assets/thumbnail/img8.jpg';

import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';
import vid6 from '../assets/videos/vid6.mp4';
import vid7 from '../assets/videos/vid7.mp4';
import vid8 from '../assets/videos/vid8.mp4';

gsap.registerPlugin(ScrollTrigger)

export default function CreatorsView() {
  useSEO({
    title: 'Creators | HYPEDIN | Empower Your Reach - Join Our Creator Network',
    description: 'Join HYPEDIN\'s creator network and amplify your influence. Get exclusive brand collaborations, monetization opportunities, and grow your audience across Indian campuses. 5000+ creators already partnering with top brands.',
    canonical: 'https://www.hypedin.co/creators',
    ogTitle: 'Creators | HYPEDIN | Join Our Creator Network',
    ogDescription: 'Empower your creativity with HYPEDIN. Connect with top brands like Google, Amazon, and more. Monetize your content through authentic campus partnerships. 5000+ creators, 300+ brands, 100M+ audience reach.',
    keywords: 'creators HYPEDIN, influencer program, content creators, brand collaboration, youth creators India, campus influencers, creator network, monetize content, brand partnerships'
  })

  const [contentIndex, setContentIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const brands = [
    'Google','BGMI','Amazon','Swiggy',"McDonald's",'H&M','Simon Carter','American Eagle','Blinkit','Wishcare','Red FM', 'Fateh',
    'Google','BGMI','Amazon','Swiggy',"McDonald's",'H&M','Simon Carter','American Eagle','Blinkit','Wishcare','Red FM', 'Fateh'
  ]

  const brands2 = [
    'Plum','Bistro','Physics Wallah','Curefoods','XYXX','Old Spice','Unacademy','Skybags','Dream11','Viacom18','Adobe','Veeba',
    'Plum','Bistro','Physics Wallah','Curefoods','XYXX','Old Spice','Unacademy','Skybags','Dream11', 'Viacom18','Adobe','Veeba',
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
    const mm = gsap.matchMedia()

    mm.add('(min-width: 769px)', () => {
      gsap.to('.creator-hero-text', {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: 'power3.out',
        delay: 0.2
      })
    })

    mm.add('(max-width: 768px)', () => {
      gsap.set('.creator-hero-text', {
        opacity: 1,
        y: 0
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  const CountComponent = CountUp.default || CountUp;

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    gsap.to('#hero-title', { rotateX: -y * 5, rotateY: x * 5, duration: 1.5 })
    gsap.to('.hero-glow', { x: x * 40, y: y * 40, duration: 2.5 })
  }

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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Creators | HYPEDIN",
            "url": "https://www.hypedin.co/creators",
            "description": "Join HYPEDIN's creator network with 5000+ creators, 300+ brand collaborations, and 100M+ audience reach across India.",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://www.hypedin.co",
              "name": "HYPEDIN",
              "description": "Creator network connecting content creators with top brands for exclusive collaborations and monetization opportunities",
              "url": "https://www.hypedin.co",
              "telephone": "+91-8439279315",
              "email": "team@hypedin.co",
              "sameAs": [
                "https://instagram.com/hypedin",
                "https://twitter.com/hypedin",
                "https://youtube.com/hypedin"
              ],
              "knowsAbout": [
                "Creator Economy",
                "Influencer Marketing",
                "Brand Collaborations",
                "Social Media Content",
                "Campus Marketing"
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "5000"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.hypedin.co/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Creators",
                  "item": "https://www.hypedin.co/creators"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="font-heading relative min-h-screen overflow-hidden bg-[#050505]">
        {/* Rendered fully dynamic inner Hero layout */}
        <CreatorsHero/>


        <div className="creators-stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 mt-12 md:mt-20 border-y border-white/10 py-0 px-4 sm:px-6 md:px-0 2xl:mt-24 3xl:mt-32 max-w-[1920px] 3xl:max-w-[2500px] mx-auto bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-[2px]">
  
  {/* Stat 1 */}
  <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 md:border-r border-b sm:border-b-0 border-white/10 relative group transition-all duration-500 hover:bg-white/[0.01]">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <CountComponent end={10000} duration={2.5} enableScrollSpy scrollSpyOnce />
      <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">+</span>
    </div>
    <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
      Creators Across India
    </p>
  </div>

  {/* Stat 2 */}
  <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 md:border-r border-b sm:border-b-0 border-white/10 relative group transition-all duration-500 hover:bg-white/[0.01]">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <CountComponent end={200} duration={2.5} enableScrollSpy scrollSpyOnce />
      <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">+</span>
    </div>
    <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
      Brand Collaborations
    </p>
  </div>
    
  {/* Stat 3 */}
  <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 md:border-r border-b sm:border-b-0 border-white/10 relative group transition-all duration-500 hover:bg-white/[0.01]">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <CountComponent end={500} duration={2.5} enableScrollSpy scrollSpyOnce />
      <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">+</span>
    </div>
    <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
      Campaigns Delivered
    </p>
  </div>

  {/* Stat 4 */}
  <div className="stat-counter text-center py-8 md:py-12 2xl:py-20 3xl:py-24 relative group transition-all duration-500 hover:bg-white/[0.01]">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="font-heading leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 font-bold 2xl:text-7xl 3xl:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <CountComponent end={100} duration={2.5} enableScrollSpy scrollSpyOnce />
      <span className="text-2xl sm:text-3xl md:text-4xl ml-1 2xl:text-5xl 3xl:text-6xl text-brand-red select-none transition-transform duration-300 inline-block group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">M+</span>
    </div>
    <p className="text-gray-500 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mt-4 md:mt-5 2xl:text-base 3xl:text-lg 2xl:mt-6 transition-colors duration-300 group-hover:text-gray-300">
      Audience Reach
    </p>
  </div>
</div>


        <section id="brands-carousel" className="brands-section relative py-16 md:py-32 z-10 border-t border-white/5 overflow-hidden bg-[#050505] 2xl:py-44 3xl:py-56">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-0 mb-12 md:mb-20 2xl:max-w-[1920px] 3xl:max-w-[2500px] 2xl:mb-28">
    <h2 className="brands-title font-heading font-extrabold tracking-tight text-3xl sm:text-4xl md:text-6xl text-white uppercase leading-[1.1] 2xl:text-7xl 3xl:text-8xl">
      Campaign <span className="text-brand-red">Constellations</span>
    </h2>
    <p className="font-sans font-light tracking-[0.3em] text-slate-400 uppercase text-[9px] sm:text-xs md:text-sm mt-6 md:mt-8 2xl:text-lg 3xl:text-xl">
      Fueling the biggest names
    </p>
  </div>

  {/* Marquee Row 1 */}
  {/* <div className="relative flex overflow-x-hidden mb-6 md:mb-12 group/row1">
    <div className="animate-marquee whitespace-nowrap flex gap-6 md:gap-10 py-2">
      {brands.map((brand, i) => (
        <div key={i} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-extrabold uppercase tracking-tight text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
    <div className="animate-marquee whitespace-nowrap flex gap-6 md:gap-10 py-2 absolute top-0 left-0" aria-hidden="true">
      {brands.map((brand, i) => (
        <div key={`dup1-${i}`} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-extrabold uppercase tracking-tight text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </div> */}

  {/* Marquee Row 2 */}
  {/* <div className="relative flex overflow-x-hidden group/row2">
    <div className="animate-marquee-reverse whitespace-nowrap flex gap-6 md:gap-10 py-2">
      {brands2.map((brand, i) => (
        <div key={i} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-extrabold uppercase tracking-tight text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
    <div className="animate-marquee-reverse whitespace-nowrap flex gap-6 md:gap-10 py-2 absolute top-0 left-0" aria-hidden="true">
      {brands2.map((brand, i) => (
        <div key={`dup1-${i}`} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-extrabold uppercase tracking-tight text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </div> */}


  {/* Marquee Row 1 */}
  <div className="relative flex overflow-x-hidden mb-6 md:mb-12 group/row1">
    <div className="animate-marquee [animation-duration:90s] whitespace-nowrap flex gap-6 md:gap-10 py-2">
      {brands.map((brand, i) => (
        <div key={i} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-bold uppercase tracking-normal text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
    <div className="animate-marquee [animation-duration:90s] whitespace-nowrap flex gap-6 md:gap-10 py-2 absolute top-0 left-0" aria-hidden="true">
      {brands.map((brand, i) => (
        <div key={`dup1-${i}`} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-bold uppercase tracking-normal text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Marquee Row 2 */}
  <div className="relative flex overflow-x-hidden group/row2">
    <div className="animate-marquee-reverse [animation-duration:70s] whitespace-nowrap flex gap-6 md:gap-10 py-2">
      {brands2.map((brand, i) => (
        <div key={i} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-bold uppercase tracking-normal text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
    <div className="animate-marquee-reverse [animation-duration:70s] whitespace-nowrap flex gap-6 md:gap-10 py-2 absolute top-0 left-0" aria-hidden="true">
      {brands2.map((brand, i) => (
        <div key={`dup1-${i}`} className="inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 bg-white/[0.04] border border-white/10 rounded-full">
          <span className="font-heading font-bold uppercase tracking-normal text-neutral-500 text-xl md:text-4xl">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Edge vignettes */}
  <div className="absolute top-0 left-0 h-full w-12 sm:w-24 md:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent pointer-events-none 2xl:w-80 3xl:w-96 z-10"></div>
  <div className="absolute top-0 right-0 h-full w-12 sm:w-24 md:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent pointer-events-none 2xl:w-80 3xl:w-96 z-10"></div>
</section>

        {/* Viral Content Showcase Grid - Maximized card heights and content text sizing */}
        <section className="content-section relative py-16 md:py-28 z-10 bg-[#050505] border-t border-white/5 overflow-hidden 2xl:py-36">
  
  {/* Background Atmospheric Underlay */}
  <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,0,0,0.015)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

  {/* Header Section */}
  <div className="max-w-7xl mx-auto text-center px-6 mb-12 md:mb-20 2xl:max-w-[1800px] 3xl:max-w-[2400px]">
    <div className="inline-flex items-center gap-3 mb-4 justify-center">
      <span className="w-6 h-[1px] bg-brand-red/40"/>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red">Metrics That Matter</span>
      <span className="w-6 h-[1px] bg-brand-red/40"/>
    </div>
    
    <h2 className="content-title font-black tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase leading-[1.1]">
      Viral <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]">Content</span> That Converts
    </h2>
  </div>

  {/* Content Carousel Grid */}
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

<section className="font-heading creators-cta-section relative py-24 md:py-36 px-4 sm:px-6 md:px-12 z-10 bg-[#050505] border-t border-white/5 overflow-hidden 2xl:py-48">
  {/* Sophisticated, deep atmospheric lighting - centered soft pool layout */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(255,0,0,0.03)_0%,transparent_65%)] pointer-events-none blur-3xl z-0"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
    
    {/* Micro-tagline */}
    <div className="inline-flex items-center gap-3 mb-6 justify-center">
      <span className="w-6 h-[1px] bg-brand-red/40"></span>
      <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
        Elevate Your Digital Presence
      </span>
      <span className="w-6 h-[1px] bg-brand-red/40"></span>
    </div>

    <h2 className="font-['Bebas Neue'] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400 uppercase tracking-tighter leading-[1.05] mb-6">
  Ready To Grow Your <br />
  <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.25)]">
    Influence?
  </span>
</h2>

    {/* Focused description layout */}
    <p className="font-sans text-neutral-400 mb-10 md:mb-12 text-sm sm:text-base font-light leading-relaxed tracking-wide max-w-2xl">
      Join our curated community of creators. Unlock premium brand partnerships, enterprise-grade monetization avenues, and a dedicated management squad tailored to your trajectory.
    </p>

    {/* Clean Minimalist Architectural Button */}
    <Link
  to='/creators-form'
  className="group relative inline-flex items-center justify-center px-10 py-5 text-[11px] font-sans font-black tracking-[0.25em] uppercase text-white bg-[#0a0a0a]/40 border border-white/10 hover:border-brand-red/60 overflow-hidden rounded-none transition-all duration-500 ease-out active:scale-[0.98] w-full sm:w-auto min-w-[260px] backdrop-blur-sm shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]"
  aria-label="Apply as a Creator - Join HYPEDIN"
>
  {/* Advanced high-contrast background slide overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-red/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
  
  {/* Left edge premium laser-light accent tracker */}
  <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-brand-red scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-400 ease-out delay-75"></div>

  {/* Subtle micro-grid internal highlights */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:8px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
  <div className="relative z-10 flex items-center justify-center gap-3">
    <span className="text-neutral-200 group-hover:text-white transition-colors duration-300 ease-out">
      Apply as a Creator
    </span>
    
    {/* Enhanced container-less shifting utility arrow */}
    <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        className="w-3.5 h-3.5 absolute transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        className="w-3.5 h-3.5 absolute transform translate-x-0 group-hover:translate-x-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-neutral-400"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  </div>
</Link>

    {/* Elegant Minimal Editorial Footer block */}
    <div className="w-full mt-24 md:mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-neutral-500 text-[10px] font-sans gap-4 sm:gap-0 tracking-widest">
      <p className="hover:text-neutral-400 transition-colors duration-300">&copy; {new Date().getFullYear()} HYPEDIN. All rights reserved.</p>
      
      <div className="flex gap-6 md:gap-8 uppercase tracking-[0.2em] font-semibold">
        <a href="https://www.linkedin.com/company/hypedin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/hypedin.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          Instagram
        </a>
        <Link to='/contact' className="hover:text-white transition-colors duration-300">
          Contact
        </Link>
        <Link to='/privacy' className="hover:text-white transition-colors duration-300">
          Privacy Policy
        </Link>
      </div>
    </div>

  </div>
</section>
      </div>
    </>
  )
}
