import gsap from 'gsap'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSEO } from '../hooks/useSEO'
import { Eye, Zap, TrendingUp, Clock, Users, Crown } from 'lucide-react'
import CreatorsHeroImage from '../assets/creators-hero.png'

import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';
import vid6 from '../assets/videos/vid6.mp4';
import vid7 from '../assets/videos/vid7.mp4';
import vid8 from '../assets/videos/vid8.mp4';

gsap.registerPlugin(ScrollTrigger)

export default function CreatorsHero() {

  useSEO({
    title: 'Creators | HYPEDIN | Empower Your Reach',
    description: 'Join HYPEDIN\'s creator network and amplify your influence with exclusive collaborations and monetization opportunities. Connect with 5000+ creators and 300+ top brands.',
    canonical: 'https://www.hypedin.co/creators',
    ogTitle: 'Creators | HYPEDIN',
    ogDescription: 'Empower your creativity with HYPEDIN. Connect with top brands and monetize your passion through authentic collaborations. Join 5000+ creators across India.',
    keywords: 'creators HYPEDIN, influencer program, content creators, brand collaboration, creator community, monetize content, influencer network'
  })

  const features = [
    {
      icon: Eye,
      title: "Top Brand Collaborations",
      description: "Work with leading brands across industries and niches. Get matches based on your performance and content style."
    },
    {
      icon: Zap,
      title: "Exclusive Opportunities",
      description: "Access curated campaigns, high-profile events, and long-term brand equity deals not available elsewhere."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Influence",
      description: "Get the technical tools, data insights, and 1-on-1 support to organically scale your content reach and brand identity."
    },
    {
      icon: Clock,
      title: "Timely & Fair Payouts",
      description: "Transparent milestones, standard industry pricing templates, and dependable payments built around rewarding partnerships."
    },
    {
      icon: Users,
      title: "Be Part of a Creator Community",
      description: "Join a thriving offline and online network of creators to share concepts, run cross-collaborations, and grow your network."
    },
    {
      icon: Crown,
      title: "Built for Creators",
      description: "By creators, for creators. We understand the hustle, standard workflows, and exactly what you need to scale up your value."
    }
  ];

    useEffect(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Hero content animation
        gsap.to(".hero-animate", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        });

        // Network map animation
        gsap.from(".network-map-section", {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.5
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(".hero-animate", { opacity: 1, y: 0 });
      });

      return () => {
        mm.revert();
      };
    }, []);

    const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white">

      {/* Main Hero Container Section */}
      <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black overflow-hidden">

      {/* Custom Styles for Infinite Scrolling (horizontal on mobile, vertical on desktop) */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        /* Mobile / tablet: horizontal film-strip */
        .video-track {
          display: flex;
          flex-direction: row;
          width: max-content;
          height: 100%;
          animation: scrollLeft 30s linear infinite;
          will-change: transform;
        }

        /* Desktop: original vertical wall */
        @media (min-width: 1024px) {
          .video-track {
            flex-direction: column;
            width: 100%;
            height: auto;
            position: absolute;
            top: 0;
            left: 0;
            animation: scrollDown 25s linear infinite;
          }
        }

        /* Pause the moving track on hover */
        .video-track:hover {
          animation-play-state: paused;
        }

        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .video-track {
            animation: none;
          }
        }
      `}</style>

      {/* Main Hero Container */}
      <main className="font-sans grid min-h-screen w-full grid-cols-1 grid-rows-[1fr_auto] lg:grid-rows-1 lg:grid-cols-[74%_26%] overflow-hidden">

  {/* Left Panel: Black Background & Custom Headline Layout */}
  <section className="flex flex-col justify-between bg-black p-6 md:p-12 lg:py-16 z-10">

  {/* Wrapper to vertically center the entire text block */}
  <div className="mt-auto mb-auto flex flex-col gap-6 md:gap-8">

    {/* Stylish Kick-off Text */}
      <div className="flex items-center gap-3 font-sans tracking-[0.35em] text-xs font-bold uppercase text-neutral-400 select-none">
        {/* A small, clean accent line for visual style */}
        <span className="h-[1px] w-8 bg-[rgb(255,0,0)]"/>
        <span>
          Join The <span className="text-white pb-0.5">HypedIn</span> Network
        </span>
      </div>

    {/* Main Typography Headline */}
    <h1 className="font-['Bebas Neue'] tracking-tighter font-extrabold text-[13vw] uppercase leading-[1.05] text-[rgb(255,0,0)] sm:text-[8vw] lg:leading-[1.1] lg:max-w-[95%] lg:text-[4.2rem]">
  One Network.<br />
  Unlimited<br />
  <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]">
    Influence.
  </span>
</h1>

    {/* Stylish Explainer/Description Text */}
    <p className="max-w-xl font-sans text-sm md:text-base font-normal leading-relaxed tracking-wide text-neutral-400">
      <span className="text-white font-medium">HYPEDIN</span> connects creators with leading brands and exciting opportunities. Collaborate, create, and monetize your influence like never before.
    </p>

    {/* Stylish CTA Button */}
    <Link to='/creators-form'>
      <div className="mt-2">
        <button className="group relative overflow-hidden border border-[rgb(255,0,0)] bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 ease-out hover:text-black">
          {/* Animated background fill effect */}
          <span className="absolute inset-0 left-0 top-0 h-full w-0 bg-[rgb(255,0,0)] transition-all duration-300 ease-out group-hover:w-full"></span>
          {/* Button Text */}
          <span className="relative z-10">Join the Network</span>
        </button>
      </div>
    </Link>

  </div>

</section>

  {/* Right Panel (desktop) / Bottom Strip (mobile): Infinite Seamless Scrolling Video Track */}
  <section className="relative block h-[34vh] min-h-[220px] w-full overflow-hidden border-t border-neutral-900 bg-zinc-950 sm:h-[38vh] lg:h-screen lg:min-h-0 lg:border-t-0 lg:border-l">

    {/* Scrolling Wrapper — horizontal on mobile, vertical on lg+ */}
    <div className="video-track">

      {/* Set 1: The Original 8 Videos */}
      {videos.map((src, idx) => (
        <div
          key={`original-${idx}`}
          className="h-full w-[52vw] shrink-0 p-1 sm:w-[34vw] lg:h-[33.33vh] lg:w-full"
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover filter brightness-90 grayscale-[20%]"
          />
        </div>
      ))}

      {/* Set 2: Duplicated Videos for seamless looping anchor */}
      {videos.map((src, idx) => (
        <div
          key={`duplicate-${idx}`}
          className="h-full w-[52vw] shrink-0 p-1 sm:w-[34vw] lg:h-[33.33vh] lg:w-full"
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover filter brightness-90 grayscale-[20%]"
          />
        </div>
      ))}

    </div>

  </section>
</main>
    </div>


      {/* WHY JOIN SECTION */}
      <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#050505] via-[#070707] to-[#050505] py-24 sm:py-28 lg:py-40 2xl:py-56">
      {/* Ambient brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-red/20 opacity-40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-brand-red/10 opacity-50 blur-[120px]"
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 xl:px-16 2xl:max-w-[1700px] 3xl:max-w-[2200px]">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24 2xl:max-w-4xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-red/25 bg-brand-red/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-brand-red 2xl:text-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Benefits &amp; Ecosystem
          </span>
          <h2 className="text-balance font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tighter text-white sm:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
            Why join{" "}
            <span className="relative inline-block text-brand-red">
              HypedIn?
              <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-brand-red transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-sm font-light leading-relaxed text-gray-400 sm:text-base 2xl:text-lg">
            Everything you need to grow, monetize, and protect your creator
            business — in one ecosystem built for people like you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10 max-w-md sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <article
                key={idx}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-20px_rgba(220,38,38,0.45)] sm:p-8 xl:p-10 w-full"
              >
                {/* Hover gradient sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Slightly decreased Icon Box and SVG sizes */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-red/20 bg-brand-red/10 transition-all duration-300 group-hover:scale-110 group-hover:border-brand-red/40 group-hover:bg-brand-red/20 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16">
                  <IconComponent className="h-5 w-5 text-brand-red xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
                </div>

                {/* Slightly decreased Heading and Paragraph text scaling */}
                <div className="relative mt-5 space-y-2">
                  <h3 className="font-heading text-base font-bold uppercase tracking-tight text-white sm:text-lg xl:text-xl 2xl:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] font-light leading-relaxed text-gray-400 sm:text-sm 2xl:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <span className="mt-6 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand-red to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  )
}
