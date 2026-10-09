import gsap from 'gsap'
import axios from 'axios'
import { useSEO } from '../hooks/useSEO'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'


import Footer from './Footer'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSwSPVVPwWAzWR_E31HRI_qlgNF29ydqXRFGoSJpRAeBuI_xsB9hMAwrm4-L3h0xrP/exec'

export default function CreatorsForm() {
  useSEO({
    title: 'Creator Application | HYPEDIN | Join Our Network',
    description: 'Apply to join HYPEDIN\'s exclusive creator network. Get brand collaborations, monetization opportunities, and dedicated support. Start your creator journey today.',
    canonical: 'https://www.hypedin.co/creators-form',
    ogTitle: 'Creator Application | HYPEDIN',
    ogDescription: 'Apply now to become part of HYPEDIN\'s creator network and monetize your content through authentic brand partnerships.',
    keywords: 'creator application, HYPEDIN creators, apply as creator, content creator network, influencer application, brand collaboration opportunities'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formData, setFormData] = useState({ fullName: '', contactNumber: '', contactEmail: '', instagramUrl: '', instagramFollowers: '', stateOfResidence: '', contentNeiche: '', commercials: '', previousWork: '' })

  useEffect(() => {
    const formElements = document.querySelectorAll('.creator-form-anim')
    gsap.killTweensOf(formElements)

    if (window.innerWidth > 768) {
      gsap.set(formElements, { opacity: 0, y: 30 })
      gsap.to(formElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      })
    } else {
      gsap.set(formElements, {
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

    if(!formData.commercials || !formData.contactEmail || !formData.contactNumber || formData.contentNeiche === '' || !formData.fullName || !formData.instagramFollowers || !formData.instagramUrl || !formData.previousWork || !formData.stateOfResidence) {
      alert('Please Fill out all the Details first');
      setIsSubmitting(false);
      return;
    }

    try {
      const data = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      console.log(data);

      e.target.reset()
      setFormSuccess(true)

      setFormData({
        commercials: '',
        contactEmail: '',
        contactNumber: '',
        contentNeiche: '',
        fullName: '',
        instagramFollowers: '',
        instagramUrl: '',
        previousWork: '',
        stateOfResidence: ''
      })

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
            "@type": "WebPage",
            "name": "Creator Application | HYPEDIN",
            "url": "https://www.hypedin.co/creators-form",
            "description": "Apply to join HYPEDIN's exclusive creator network with brand collaborations and monetization opportunities.",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://www.hypedin.co",
              "name": "HYPEDIN",
              "description": "Campus marketing agency connecting creators with top brands",
              "url": "https://www.hypedin.co",
              "logo": "https://www.hypedin.co/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8439279315",
                "contactType": "Creator Support"
              }
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Apply",
                  "item": "https://www.hypedin.co/creators-form"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div
        className="min-h-screen pt-20 md:pt-32 pb-0 flex flex-col justify-between relative bg-brand-black 2xl:pt-48 3xl:pt-60"
        style={{
          paddingTop: 'calc(env(safe-area-inset-top) + 80px)',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}
      >
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-start mb-16 md:mb-20 2xl:max-w-[1920px] 3xl:max-w-[2500px] 2xl:gap-48 3xl:gap-64 2xl:mb-32 2xl:px-24">
          
          {/* Left Column Sticky Header Information */}
          <div className="relative md:sticky md:top-32 2xl:top-48 text-center md:text-left">
            <span className="creator-form-anim block text-brand-red font-sans text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 md:mb-8 font-medium 2xl:text-lg 3xl:text-xl 2xl:tracking-[0.5em] 2xl:mb-12">
              Creator Application
            </span>
            <h1 className="creator-form-anim font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white uppercase leading-[0.9] mb-6 md:mb-10 tracking-tighter 2xl:text-7xl 3xl:text-8xl 2xl:mb-16">
              Join Our <br />
              Creator <span className="text-brand-red">Network</span>
            </h1>
            <p className="creator-form-anim font-sans text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md mb-8 md:mb-16 md:border-l  border-white/10 pl-4 md:pl-6 2xl:text-2xl 3xl:text-3xl 2xl:max-w-2xl 2xl:pl-8 2xl:mb-24">
              Tell us about yourself and your content. We're looking for authentic creators who want to collaborate with top brands.
            </p>
            
            {/* Expanded Value Perks Block */}
            <div className="creator-form-aim border-t border-brand-black/10 text-center max-w-4xl mx-auto md:text-left">
              <h3 className="text-sm tracking-[0.2em] uppercase text-brand-red mb-8 md:mb-12 font-sans font-bold 2xl:text-xl 3xl:text-2xl 2xl:tracking-[0.3em] 2xl:mb-16">
                What You'll Get
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 text-lg font-sans font-light text-brand-white 2xl:grid-cols-2 3xl:grid-cols-4 2xl:gap-10">
                <span className='text-xs bg-gradient-to-b from-[#0F0F0F] to-[#050505] border border-white/10 hover:border-brand-red/50 transition-all duration-500 hover:cursor-pointer p-4 rounded-2xl w-32 2xl:w-full 3xl:w-full text-center md:text-left 2xl:text-lg 3xl:text-xl 2xl:p-8 2xl:rounded-3xl'>
                  Exclusive brand collaborations
                </span>
                <span className='text-xs bg-gradient-to-b from-[#0F0F0F] to-[#050505] border border-white/10 hover:border-brand-red/50 transition-all duration-500 hover:cursor-pointer p-4 rounded-2xl w-32 2xl:w-full 3xl:w-full text-center md:text-left 2xl:text-lg 3xl:text-xl 2xl:p-8 2xl:rounded-3xl'>
                  Monetization opportunities
                </span>
                <span className='text-xs bg-gradient-to-b from-[#0F0F0F] to-[#050505] border border-white/10 hover:border-brand-red/50 transition-all duration-500 hover:cursor-pointer p-4 rounded-2xl w-32 2xl:w-full 3xl:w-full text-center md:text-left 2xl:text-lg 3xl:text-xl 2xl:p-8 2xl:rounded-3xl'>
                  Dedicated support team
                </span>
                <span className='text-xs bg-gradient-to-b from-[#0F0F0F] to-[#050505] border border-white/10 hover:border-brand-red/50 transition-all duration-500 hover:cursor-pointer p-4 rounded-2xl w-32 2xl:w-full 3xl:w-full text-center md:text-left 2xl:text-lg 3xl:text-xl 2xl:p-8 2xl:rounded-3xl'>
                  Creative resources & tools
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Registration Form Element Container */}
          <div className="creator-form-anim bg-[#080808] border border-white/5 p-4 sm:p-8 md:p-10 rounded-sm relative overflow-hidden 2xl:p-12 3xl:p-16 2xl:rounded-xl w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 2xl:w-[500px] 2xl:h-[500px] 2xl:blur-[150px]"></div>

            <form id="creator-form" className="space-y-5 sm:space-y-6 md:space-y-8 relative z-10 2xl:space-y-12" onSubmit={handleSubmit} noValidate>
              
              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="fullName" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Full Name <span className="text-brand-red">*</span></label>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="John Doe"
                  aria-label="Full Name"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="contactNumber" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Contact Number <span className="text-brand-red">*</span></label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  type="tel"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="+91 98765 43210"
                  aria-label="Contact Number"
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="contactEmail" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Contact Email <span className="text-brand-red">*</span></label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="you@example.com"
                  aria-label="Contact Email"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="instagramUrl" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Instagram URL <span className="text-brand-red">*</span></label>
                <input
                  id="instagramUrl"
                  name="instagramUrl"
                  required
                  value={formData.instagramUrl}
                  onChange={(e) => setFormData({...formData, instagramUrl: e.target.value})}
                  type="url"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="https://instagram.com/yourprofile"
                  aria-label="Instagram Profile URL"
                  autoComplete="url"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="instagramFollowers" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Instagram Followers <span className="text-brand-red">*</span></label>
                <input
                  id="instagramFollowers"
                  name="instagramFollowers"
                  required
                  value={formData.instagramFollowers}
                  onChange={(e) => setFormData({...formData, instagramFollowers: e.target.value})}
                  type="number"
                  min="0"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="50000"
                  aria-label="Instagram Followers Count"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="stateOfResidence" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">State of Residence <span className="text-brand-red">*</span></label>
                <input
                  id="stateOfResidence"
                  name="stateOfResidence"
                  required
                  value={formData.stateOfResidence}
                  onChange={(e) => setFormData({...formData, stateOfResidence: e.target.value})}
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="Delhi"
                  aria-label="State of Residence"
                  list="indian-states"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="contentNiche" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Content Niche <span className="text-brand-red">*</span></label>
                <select
                  id="contentNiche"
                  name="contentNiche"
                  value={formData.contentNeiche}
                  onChange={(e) => setFormData({...formData, contentNeiche: e.target.value})}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none cursor-pointer transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  aria-label="Content Niche"
                >
                  <option value="" disabled className="text-gray-400 bg-black">
                    Select your niche
                  </option>
                  <option value="Fashion / Lifestyle" className="text-gray-400 bg-black">Fashion / Lifestyle</option>
                  <option value="Comedy" className="text-gray-400 bg-black">Comedy</option>
                  <option value="Beauty / Skincare" className="text-gray-400 bg-black">Beauty / Skincare</option>
                  <option value="Fitness" className="text-gray-400 bg-black">Fitness</option>
                  <option value="Campus / Student Community Content" className="text-gray-400 bg-black">Campus / Student Community Content</option>
                  <option value="Finance & Business" className="text-gray-400 bg-black">Finance & Business</option>
                  <option value="Gaming & Esports" className="text-gray-400 bg-black">Gaming & Esports</option>
                  <option value="Travel" className="text-gray-400 bg-black">Travel</option>
                  <option value="Food" className="text-gray-400 bg-black">Food</option>
                  <option value="Mini Vlog" className="text-gray-400 bg-black">Mini Vlog</option>
                </select>
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="commercials" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Commercials (1 Reel & 2 Stories) <span className="text-brand-red">*</span></label>
                <input
                  id="commercials"
                  name="commercials"
                  type='number'
                  min="0"
                  required
                  value={formData.commercials}
                  onChange={(e) => setFormData({...formData, commercials: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none resize-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="5000"
                  aria-label="Price for Commercial"
                />
              </div>

              <div className="space-y-0.5 sm:space-y-1 group 2xl:space-y-2">
                <label htmlFor="previousWork" className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500 2xl:text-sm 3xl:text-base">Links to Previous Work <span className="text-brand-red">*</span></label>
                <textarea
                  id="previousWork"
                  name="previousWork"
                  required
                  value={formData.previousWork}
                  onChange={(e) => setFormData({...formData, previousWork: e.target.value})}
                  rows="2"
                  className="w-full bg-transparent border-b border-white/10 py-1 sm:py-2 text-white text-base sm:text-lg focus:border-brand-red outline-none resize-none transition-colors 2xl:text-xl 3xl:text-2xl 2xl:py-3"
                  placeholder="Share links to your best content and previous collaborations..."
                  aria-label="Links to Previous Work"
                ></textarea>
              </div>

              {/* <button
                id="submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="group mt-8 md:mt-12 w-full py-5 sm:py-6 md:py-5 bg-white text-black hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-black font-heading font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 2xl:text-xl 2xl:py-8 2xl:tracking-[0.3em]"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button> */}

              <button
  id="submit-btn"
  type="submit"
  disabled={isSubmitting}
  className="group mt-8 md:mt-12 w-full py-5 sm:py-6 md:py-5 bg-white text-black hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-black font-heading font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[11px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 2xl:text-lg 2xl:py-8 2xl:tracking-[0.3em]"
  aria-busy={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit Application'}
</button>

              {formSuccess && (
                <p id="form-success" className="text-green-400 text-[10px] sm:text-xs uppercase tracking-widest text-center mt-4 2xl:text-lg 2xl:mt-6">
                  Your application has been submitted successfully
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}