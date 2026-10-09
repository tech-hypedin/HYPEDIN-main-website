import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useSEO } from '../hooks/useSEO'
import { ShieldCheck, Lock, Mail } from 'lucide-react'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  if (typeof useSEO === 'function') {
    useSEO({
      title: 'Privacy Policy | HYPEDIN — Continuous Legal Terms',
      description: 'Official continuous Privacy Policy statement for HYPEDIN (hypedin.co) under the DPDP Act 2023.',
      canonical: 'https://www.hypedin.co/privacy-policy',
      ogTitle: 'Privacy Policy | HYPEDIN',
      ogDescription: 'Full continuous privacy policy agreement for HYPEDIN creators and brand partners.',
      keywords: 'HYPEDIN privacy policy, DPDP Act 2023, hypedin.co terms'
    })
  }

  useEffect(() => {
    gsap.fromTo(
      ".fade-in-statement", 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
  }, [])

  return (
    <>
        <div className="relative min-h-screen w-full bg-[#050505] font-sans text-white antialiased selection:bg-white selection:text-black">
        
        {/* AMBIENT BACKGROUND GLOWS */}
        <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[rgb(255,0,0)]/15 opacity-40 blur-[150px]" 
        />
        <div 
            aria-hidden="true" 
            className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" 
        />

        {/* HERO HEADER */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-8 text-center md:pt-24 lg:pt-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(255,0,0)]/30 bg-[rgb(255,0,0)]/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[rgb(255,0,0)]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>DPDP Act 2023 Compliant</span>
            </div>

            <h1 className="mt-6 font-['Bebas_Neue',sans-serif,system-ui] text-[13vw] font-extrabold uppercase leading-[0.9] tracking-tighter text-white sm:text-[8vw] lg:text-[5.5rem]">
            PRIVACY <span className="text-[rgb(255,0,0)]">STATEMENT</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-xs font-mono tracking-widest text-neutral-500 uppercase">
            HYPEDIN NETWORK / CONTINUOUS LEGAL POLICY / LAST REVISED JULY 2026
            </p>
        </section>

        {/* CONTINUOUS PARAGRAPH STATEMENT CONTAINER */}
        <main className="relative z-10 mx-auto max-w-5xl px-6 py-8 pb-20">
            <div className="fade-in-statement relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-8 md:p-14 backdrop-blur-md">
            
            {/* Subtle accent bar */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[rgb(255,0,0)] to-transparent" />

            {/* SINGLE CONTINUOUS LEGAL PARAGRAPH */}
            <p className="font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed text-neutral-300 text-justify tracking-wide selection:bg-[rgb(255,0,0)] selection:text-white">
                By visiting, accessing, registering with, or utilizing any portion of the Website located at <strong className="text-white">hypedin.co</strong> and its associated creator network,
                platform applications, campaign tools, and service features (collectively, the "Website" or "Services"), operated independently by <strong className="text-white">HYPEDIN</strong>
                ("Company", "we", "us", or "our"), you ("User", "Creator", "Member", or "Data Principal") explicitly acknowledge and agree to be bound by all terms, conditions, and operational practices
                outlined within this comprehensive Privacy Policy statement; if you do not agree with any provision set forth herein, you must immediately cease all access to and utilization of our Website and Services.
                In furtherance of our steadfast commitment to safeguarding user confidentiality and maintaining complete operational integrity, this Privacy Policy complies strictly with the <strong className="text-white">Digital
                Personal Data Protection Act, 2023 (DPDP Act)</strong>, the Information Technology Act, 2000, and all applicable legal mandates and regulatory rules governing digital personal data in the Republic of India 
                ("Data Laws"). We collect two distinct classifications of information to operate, scale, and fulfill creator-brand partnerships: <span className="text-white font-medium underline decoration-[rgb(255,0,0)] underline-offset-4">Submitted Information</span>, 
                which encompasses all personal and sensitive personal data voluntarily provided during account registration, KYC verification, and campaign execution—including your full legal name, username, date of birth, gender, email address, phone number, physical address, social media account handles, 
                profile photographs, bank account details, UPI identifiers, and government identification numbers (such as PAN or Aadhaar where explicitly mandated by law or tax compliance for payout executions)—along with message correspondence, chat logs, feedback forms, and customer support transcripts recorded via our communication facilities 
                for quality control, dispute resolution, and operational accuracy; and <span className="text-white font-medium underline decoration-[rgb(255,0,0)] underline-offset-4">Aggregate Information</span>, which includes technical telemetry automatically logged whenever you interact with hypedin.co—such as your Internet Protocol (IP) address, 
                operating system, unique device identifiers (IMEI or MAC address), browser types, time zone settings, geographic location data, and clickstream application analytics used to evaluate platform performance, match creators with local brand campaigns, and optimize network responsiveness. All personal data relating to minors (individuals below 18 years of age) submitted on the Website is 
                strictly deemed provided under the explicit consent and active supervision of the minor's parent or natural/legal guardian, who assumes full legal responsibility for supervising the child's interactions and data sharing practices on HYPEDIN. We process Submitted and Aggregate Information solely on valid legal bases—including 
                contract performance (to grant system access, deliver campaign matches, and disburse creator payouts), legitimate business operations, and explicit consent (which you reserve the right to withdraw or modify at any time prospectively by submitting a written notice, without affecting the lawfulness of processing undertaken prior to such withdrawal)—and we strictly enforce 
                a policy against selling, renting, or trading your personal data to third-party ad networks or data brokers, disclosing information exclusively to vetted brand partners upon your voluntary opt-in to specific campaign opportunities, authorized contractors operating under binding confidentiality agreements, or statutory law enforcement 
                agencies when compelled by valid court orders or legal mandates. You retain full statutory rights as a Data Principal under the DPDP Act, including the right to request a summary of personal data processed 
                by us, obtain the identity of third parties with whom data has been shared, demand rectification of inaccurate or outdated information, request complete erasure of your profile details (subject to statutory retention obligations for financial and dispute defense records), 
                and nominate a representative to exercise your rights in the event of death or incapacity. You are equally bound by statutory duties under Data Laws to provide authentic, verifiable identity details, refrain from impersonating third parties, and avoid submitting false or frivolous grievances to HYPEDIN or regulatory authorities. We implement enterprise-grade security safeguards, 
                including HTTPS protocol encryption and restricted backend database controls, to prevent personal data breaches, and in the event of any cybersecurity incident, HYPEDIN will notify the Indian Computer Emergency Response Team (<strong className="text-white">CERT-In</strong>) in accordance with statutory procedures. Our Website utilizes persistent and session cookies to recognize returning devices, preserve authentication 
                states, and analyze user interaction trends; you may adjust your web browser settings to decline or clear cookies, though certain interactive platform capabilities may consequently be impaired. For any privacy inquiries, data deletion requests, or formal complaints under this policy, you may contact our designated Grievance Redressal Officer (GRO) at HYPEDIN Media & Network Technologies, 
                Mumbai, Maharashtra, India, by emailing <a href="mailto:legal@hypedin.co" className="text-[rgb(255,0,0)] font-bold hover:underline">legal@hypedin.co</a>, who shall acknowledge receipt within 24 hours and resolve all discrepancies within 15 days as prescribed under the Data Laws, with exclusive judicial jurisdiction for any unresolved legal disputes residing solely with the competent courts located at Mumbai, Maharashtra, India.
            </p>

            </div>
        </main>
        </div>

        <Footer/>
    </>
  )
}