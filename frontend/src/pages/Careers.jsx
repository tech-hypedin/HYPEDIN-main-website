// // // import { useLayoutEffect, useEffect, useRef, useState } from 'react'
// // // import gsap from 'gsap'
// // // import { ScrollTrigger } from 'gsap/ScrollTrigger'
// // // import {
// // //   MapPin,
// // //   Briefcase,
// // //   Wallet,
// // //   ArrowRight,
// // //   Check,
// // //   ChevronDown,
// // //   CheckCircle2,
// // //   AlertCircle,
// // //   Loader2,
// // //   Send,
// // //   Gamepad2,
// // //   GraduationCap,
// // //   Sparkles,
// // // } from 'lucide-react'
// // // import { useSEO } from '../hooks/useSEO'
// // // import Footer from '../components/Footer'

// // // gsap.registerPlugin(ScrollTrigger)

// // // /* ------------------------------------------------------------------ */
// // // /* Config                                                              */
// // // /* ------------------------------------------------------------------ */

// // // const CAREERS_EMAIL = 'careers@hypedin.co'

// // // // Where applications are POSTed (form-encoded). Works with a Google Apps Script web app,
// // // // an n8n / Make webhook, Formspree, or your own API.
// // // // Leave it empty and the form falls back to opening the applicant's email app with
// // // // everything filled in, addressed to CAREERS_EMAIL.
// // // const APPLICATION_ENDPOINT = ''

// // // /* ------------------------------------------------------------------ */
// // // /* Content                                                             */
// // // /* ------------------------------------------------------------------ */

// // // const heroStats = [
// // //   { label: 'Open Roles', value: '02' },
// // //   { label: 'Brands', value: '24', suffix: '+' },
// // //   { label: 'Since', value: '2022' },
// // //   { label: 'Hiring', value: 'Pan India' },
// // // ]

// // // const campaigns = [
// // //   {
// // //     icon: Gamepad2,
// // //     title: 'BGMI Campus MVP',
// // //     partner: 'with KRAFTON India',
// // //     desc: 'Building BGMI gaming communities in colleges. Ambassadors run tournaments and scrims, create gaming content, host campus meetups and take their colleges into inter-college competitions.',
// // //   },
// // //   {
// // //     icon: GraduationCap,
// // //     title: 'Fateh Education Campus Ambassador Program',
// // //     partner: 'Study abroad, UK & Ireland',
// // //     desc: 'Fateh has helped Indian students study in the UK and Ireland since 2004. Our ambassadors take its counselling, scholarship and IELTS/PTE guidance to students, online and offline.',
// // //   },
// // //   {
// // //     icon: Sparkles,
// // //     title: 'Activations, Creators & Brand Programs',
// // //     partner: 'New campaigns launching all the time',
// // //     desc: 'Campus activations, creator campaigns and brand programs for leading names across tech, quick commerce, gaming, education and lifestyle.',
// // //   },
// // // ]

// // // const PHONE_PATTERN = '[0-9]{10}'

// // // const roles = [
// // //   {
// // //     id: 'community-lead',
// // //     title: 'Community Lead',
// // //     team: 'Community',
// // //     meta: [
// // //       { icon: MapPin, text: 'Sector 3, Noida' },
// // //       { icon: Briefcase, text: 'Full-time / Internship' },
// // //     ],
// // //     summary:
// // //       'We’re hiring Community Leads to build, manage and grow HYPEDIN’s student and campus community across colleges. This role is for someone who understands college culture, enjoys working with students and can build strong relationships with student leaders, societies, clubs and campus communities. You’ll drive community engagement, manage campus networks, coordinate student ambassadors and make sure participation stays strong across HYPEDIN initiatives.',
// // //     highlight:
// // //       'What matters most is your ability to connect with people, take ownership, coordinate multiple stakeholders and build an active community.',
// // //     groups: [
// // //       {
// // //         heading: 'Community Building & Management',
// // //         points: [
// // //           'Build and maintain strong relationships with college students, societies, clubs and student leaders',
// // //           'Grow and manage HYPEDIN’s network of student communities across campuses',
// // //           'Identify active student communities, influencers, societies and potential campus partners',
// // //           'Drive regular engagement and participation within the community',
// // //           'Create initiatives and engagement opportunities that keep students actively involved',
// // //           'Act as the primary point of contact for student communities and campus representatives',
// // //         ],
// // //       },
// // //       {
// // //         heading: 'Campus Ambassador Programs',
// // //         points: [
// // //           'Recruit, onboard and manage student ambassadors across colleges',
// // //           'Set clear tasks, targets and timelines for ambassadors',
// // //           'Track ambassador performance, engagement and deliverables',
// // //           'Motivate and retain high-performing ambassadors',
// // //           'Build a strong campus leadership network to support HYPEDIN’s campaigns',
// // //         ],
// // //       },
// // //       {
// // //         heading: 'Campaign & Event Support',
// // //         points: [
// // //           'Coordinate with student communities to execute brand campaigns and campus activations',
// // //           'Mobilise students for events, workshops, competitions and promotional initiatives',
// // //           'Make sure campaigns reach the right student audiences and hit participation targets',
// // //           'Coordinate with internal operations and brand teams for smooth execution',
// // //           'Handle on-ground and community-level challenges during campaigns',
// // //         ],
// // //       },
// // //       {
// // //         heading: 'Tracking & Reporting',
// // //         points: [
// // //           'Maintain community, ambassador and engagement trackers',
// // //           'Monitor participation, reach, conversions and other campaign metrics',
// // //           'Share regular updates and reports on community performance',
// // //           'Identify gaps in engagement and take corrective action',
// // //           'Suggest new ideas to improve community growth and participation',
// // //         ],
// // //       },
// // //     ],
// // //     lookingFor: [
// // //       'Prior experience in campus communities, college societies, events, student programs or ambassador programs is a strong plus',
// // //       'Strong understanding of college culture and student communities',
// // //       'Excellent communication and relationship-building skills',
// // //       'Ability to coordinate with multiple people and stakeholders at once',
// // //       'Comfortable reaching out to new people and building relationships from scratch',
// // //       'Strong ownership and follow-through',
// // //       'Ability to work independently and handle fast-moving situations',
// // //       'Organised, proactive and comfortable working with targets and timelines',
// // //       'A self-starter who enjoys working in a dynamic environment',
// // //     ],
// // //     niceToHave: [
// // //       'Experience managing a campus ambassador or student community program',
// // //       'Experience working with college societies, clubs, fests or student bodies',
// // //       'Experience in community building, events, marketing or youth engagement',
// // //       'An existing network across colleges or student communities',
// // //       'Experience managing teams of student ambassadors',
// // //       'Experience scaling communities or programs across multiple campuses',
// // //     ],
// // //     offer: null,
// // //     note: null,
// // //     fields: [
// // //       { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
// // //       { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
// // //       { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
// // //       { name: 'city', label: 'Current City', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Noida' },
// // //       { name: 'engagement', label: 'Applying For', type: 'select', required: true, options: ['Full-time', 'Internship'] },
// // //       { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work' },
// // //       { name: 'profileLink', label: 'Resume or LinkedIn Link', type: 'text', inputMode: 'url', required: true, placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
// // //       { name: 'experience', label: 'Campus / Community Experience', type: 'textarea', rows: 3, placeholder: 'Societies, fests, ambassador programs or communities you have run or been part of', full: true },
// // //       { name: 'whyFit', label: 'Why You’d Be A Good Fit', type: 'textarea', rows: 4, required: true, placeholder: 'A short note is enough', full: true },
// // //       { name: 'locationOk', label: 'I can work from HYPEDIN’s office in Sector 3, Noida.', type: 'checkbox', required: true, full: true },
// // //     ],
// // //   },
// // //   {
// // //     id: 'city-lead',
// // //     title: 'City Lead, Campus Ambassador Programs',
// // //     team: 'Programs',
// // //     meta: [
// // //       { icon: MapPin, text: 'Remote, based in your own city' },
// // //       { icon: Briefcase, text: 'Program / Project / Full-time' },
// // //       { icon: Wallet, text: '₹5,000 to ₹10,000 / month' },
// // //     ],
// // //     summary:
// // //       'As City Lead, you are the face of HYPEDIN in your city. You’ll recruit and guide campus ambassadors, support them at their events and keep our team informed about what’s happening on the ground. You work from home and step out only for events in your city.',
// // //     highlight:
// // //       'Every campaign we run depends on a dependable person on the ground in each city. That’s the City Lead.',
// // //     groups: [
// // //       {
// // //         heading: 'What You’ll Do',
// // //         points: [
// // //           'Recruit campus ambassadors from colleges in your city',
// // //           'Manage your ambassadors and track their performance',
// // //           'Share a daily performance update with our team',
// // //           'Help ambassadors plan and run events at their colleges',
// // //           'Attend campus events in your city',
// // //           'Resolve ambassador queries quickly',
// // //           'Be the point of contact between your ambassadors and our team',
// // //         ],
// // //       },
// // //     ],
// // //     lookingFor: [
// // //       'Based in the city you’ll lead',
// // //       'A confident communicator who is comfortable with college students',
// // //       'Organised, reliable and strong at follow-ups and reporting',
// // //       'Experience with campus programs, student communities or events is a plus, but not required',
// // //     ],
// // //     niceToHave: null,
// // //     offer: [
// // //       '₹5,000 to ₹10,000 per month',
// // //       '2 casual leaves per month',
// // //       '100% work from home, with no relocation and no office visits',
// // //       'Flexible engagement: program-based, project-based or full-time',
// // //       'Hands-on experience running national campaigns for well-known brands',
// // //     ],
// // //     note: 'Saturdays are working days. Travel is limited to events in your city.',
// // //     fields: [
// // //       { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
// // //       { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
// // //       { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
// // //       { name: 'city', label: 'City You’ll Lead', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Jaipur' },
// // //       { name: 'engagement', label: 'Preferred Engagement', type: 'select', required: true, options: ['Program-based', 'Project-based', 'Full-time'] },
// // //       {
// // //         name: 'experience',
// // //         label: 'Campus Program Experience',
// // //         type: 'select',
// // //         required: true,
// // //         options: ['Yes, I have run or managed one', 'Yes, as an ambassador or volunteer', 'Not yet'],
// // //       },
// // //       { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work', full: true },
// // //       { name: 'profileLink', label: 'Resume or LinkedIn Link (optional)', type: 'text', inputMode: 'url', placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
// // //       { name: 'whyFit', label: 'Why You’d Be A Good Fit', type: 'textarea', rows: 4, required: true, placeholder: 'A short note is enough', full: true },
// // //       { name: 'termsOk', label: 'I understand Saturdays are working days and travel is limited to events in my city.', type: 'checkbox', required: true, full: true },
// // //     ],
// // //   },
// // // ]

// // // /* ------------------------------------------------------------------ */
// // // /* Helpers                                                             */
// // // /* ------------------------------------------------------------------ */

// // // const initialValues = (fields) =>
// // //   fields.reduce((acc, f) => ({ ...acc, [f.name]: f.type === 'checkbox' ? false : '' }), { website: '' })

// // // const toReadable = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : value || '-')

// // // const buildMailto = (role, values) => {
// // //   const subject = `Application: ${role.title} - ${values.fullName}`
// // //   const body = [`Role: ${role.title}`, '', ...role.fields.map((f) => `${f.label}: ${toReadable(f, values[f.name])}`)].join('\n')
// // //   return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
// // // }

// // // const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

// // // /* ------------------------------------------------------------------ */
// // // /* Small building blocks                                               */
// // // /* ------------------------------------------------------------------ */

// // // const SectionKicker = ({ index, label }) => (
// // //   <div className="inline-flex items-center gap-3 mb-4">
// // //     <span className="w-6 h-[1px] bg-brand-red/40"></span>
// // //     <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">
// // //       [ {index} / {label} ]
// // //     </span>
// // //     <span className="w-6 h-[1px] bg-brand-red/40"></span>
// // //   </div>
// // // )

// // // const BulletList = ({ items }) => (
// // //   <ul className="space-y-3">
// // //     {items.map((item) => (
// // //       <li key={item} className="flex gap-3 text-sm md:text-[15px] text-gray-400 leading-relaxed font-light">
// // //         <span className="mt-[9px] w-1.5 h-1.5 shrink-0 bg-brand-red rounded-full shadow-[0_0_6px_#FF0000]"></span>
// // //         <span>{item}</span>
// // //       </li>
// // //     ))}
// // //   </ul>
// // // )

// // // const DetailBlock = ({ title, children }) => (
// // //   <div className="reveal">
// // //     <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase tracking-wide mb-5 flex items-center gap-3">
// // //       <span className="w-4 h-[2px] bg-brand-red"></span>
// // //       {title}
// // //     </h3>
// // //     {children}
// // //   </div>
// // // )

// // // const inputBase =
// // //   'w-full bg-[#0c0c0c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 font-sans font-light outline-none transition-colors duration-300 focus:border-brand-red focus:bg-[#0f0f0f]'

// // // function FormField({ field, id, value, onChange }) {
// // //   if (field.type === 'checkbox') {
// // //     return (
// // //       <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group/check">
// // //         <span className="relative mt-0.5 shrink-0">
// // //           <input
// // //             id={id}
// // //             name={field.name}
// // //             type="checkbox"
// // //             checked={value}
// // //             onChange={onChange}
// // //             required={field.required}
// // //             className="peer absolute inset-0 opacity-0 cursor-pointer"
// // //           />
// // //           <span className="flex w-5 h-5 items-center justify-center rounded border border-white/20 bg-[#0c0c0c] transition-colors peer-checked:bg-brand-red peer-checked:border-brand-red peer-focus-visible:ring-2 peer-focus-visible:ring-brand-red/50">
// // //             {value && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
// // //           </span>
// // //         </span>
// // //         <span className="text-sm text-gray-400 font-sans font-light leading-relaxed group-hover/check:text-gray-300 transition-colors">
// // //           {field.label}
// // //         </span>
// // //       </label>
// // //     )
// // //   }

// // //   const label = (
// // //     <label htmlFor={id} className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 font-sans">
// // //       {field.label}
// // //       {field.required && <span className="text-brand-red ml-1">*</span>}
// // //     </label>
// // //   )

// // //   if (field.type === 'select') {
// // //     return (
// // //       <div>
// // //         {label}
// // //         <div className="relative">
// // //           <select
// // //             id={id}
// // //             name={field.name}
// // //             value={value}
// // //             onChange={onChange}
// // //             required={field.required}
// // //             className={`${inputBase} appearance-none pr-10 ${value ? '' : 'text-gray-600'}`}
// // //           >
// // //             <option value="" disabled className="bg-[#0c0c0c]">
// // //               Select one
// // //             </option>
// // //             {field.options.map((opt) => (
// // //               <option key={opt} value={opt} className="bg-[#0c0c0c] text-white">
// // //                 {opt}
// // //               </option>
// // //             ))}
// // //           </select>
// // //           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   if (field.type === 'textarea') {
// // //     return (
// // //       <div>
// // //         {label}
// // //         <textarea
// // //           id={id}
// // //           name={field.name}
// // //           rows={field.rows || 4}
// // //           value={value}
// // //           onChange={onChange}
// // //           required={field.required}
// // //           placeholder={field.placeholder}
// // //           className={`${inputBase} resize-y min-h-[96px]`}
// // //         />
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div>
// // //       {label}
// // //       <input
// // //         id={id}
// // //         name={field.name}
// // //         type={field.type}
// // //         value={value}
// // //         onChange={onChange}
// // //         required={field.required}
// // //         placeholder={field.placeholder}
// // //         autoComplete={field.autoComplete}
// // //         inputMode={field.type === 'tel' ? 'numeric' : field.inputMode}
// // //         pattern={field.pattern}
// // //         maxLength={field.type === 'tel' ? 10 : undefined}
// // //         title={field.type === 'tel' ? 'Enter a 10-digit phone number' : undefined}
// // //         className={inputBase}
// // //       />
// // //     </div>
// // //   )
// // // }

// // // function ApplicationForm({ role }) {
// // //   const [values, setValues] = useState(() => initialValues(role.fields))
// // //   const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error
// // //   const [submittedName, setSubmittedName] = useState('')

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target
// // //     const nextValue = type === 'checkbox' ? checked : type === 'tel' ? value.replace(/\D/g, '').slice(0, 10) : value
// // //     setValues((prev) => ({ ...prev, [name]: nextValue }))
// // //     if (status === 'error') setStatus('idle')
// // //   }

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()
// // //     if (values.website) return // honeypot: bots fill hidden fields

// // //     const firstName = values.fullName.trim().split(' ')[0]

// // //     if (!APPLICATION_ENDPOINT) {
// // //       window.location.href = buildMailto(role, values)
// // //       setSubmittedName(firstName)
// // //       setStatus('mailto')
// // //       return
// // //     }

// // //     setStatus('sending')
// // //     try {
// // //       const payload = { role: role.title, submittedAt: new Date().toISOString(), source: 'hypedin.co/careers' }
// // //       role.fields.forEach((f) => {
// // //         payload[f.name] = toReadable(f, values[f.name])
// // //       })

// // //       const res = await fetch(APPLICATION_ENDPOINT, { method: 'POST', body: new URLSearchParams(payload) })
// // //       if (!res.ok) throw new Error(`Request failed: ${res.status}`)

// // //       setSubmittedName(firstName)
// // //       setValues(initialValues(role.fields))
// // //       setStatus('sent')
// // //     } catch (err) {
// // //       console.error(err)
// // //       setStatus('error')
// // //     }
// // //   }

// // //   const reset = () => {
// // //     setValues(initialValues(role.fields))
// // //     setStatus('idle')
// // //   }

// // //   if (status === 'sent' || status === 'mailto') {
// // //     return (
// // //       <div className="text-center py-10 px-2">
// // //         <div className="mx-auto w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
// // //           <CheckCircle2 className="w-8 h-8 text-brand-red" strokeWidth={1.75} />
// // //         </div>
// // //         <h4 className="font-heading text-2xl font-bold text-white uppercase mb-3">
// // //           {status === 'sent' ? 'Application Received' : 'Almost Done'}
// // //         </h4>
// // //         <p className="font-sans text-gray-400 text-sm leading-relaxed font-light max-w-sm mx-auto mb-8">
// // //           {status === 'sent' ? (
// // //             <>
// // //               Thanks{submittedName ? `, ${submittedName}` : ''}. Our team will go through your application and get in touch if
// // //               it’s a match.
// // //             </>
// // //           ) : (
// // //             <>
// // //               Your email app should have opened with your application filled in. Hit send to finish. If nothing opened, write to{' '}
// // //               <a href={`mailto:${CAREERS_EMAIL}`} className="text-white border-b border-brand-red/60">
// // //                 {CAREERS_EMAIL}
// // //               </a>
// // //               .
// // //             </>
// // //           )}
// // //         </p>
// // //         <button
// // //           type="button"
// // //           onClick={reset}
// // //           className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-white/70 hover:text-white border-b border-white/20 hover:border-brand-red pb-1 transition-colors"
// // //         >
// // //           Submit another
// // //         </button>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <form onSubmit={handleSubmit} noValidate={false} className="space-y-5">
// // //       {/* Honeypot */}
// // //       <div className="hidden" aria-hidden="true">
// // //         <label>
// // //           Website
// // //           <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
// // //         </label>
// // //       </div>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
// // //         {role.fields.map((field) => (
// // //           <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
// // //             <FormField field={field} id={`${role.id}-${field.name}`} value={values[field.name]} onChange={handleChange} />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {status === 'error' && (
// // //         <div className="flex items-start gap-3 p-3 rounded-lg border border-brand-red/30 bg-brand-red/5 text-sm text-gray-300 font-sans font-light">
// // //           <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" />
// // //           <span>
// // //             Something went wrong. Please try again, or email your details to{' '}
// // //             <a href={buildMailto(role, values)} className="text-white border-b border-brand-red/60">
// // //               {CAREERS_EMAIL}
// // //             </a>
// // //             .
// // //           </span>
// // //         </div>
// // //       )}

// // //       <button
// // //         type="submit"
// // //         disabled={status === 'sending'}
// // //         className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand-red text-white text-xs uppercase tracking-[0.3em] font-sans font-bold border border-brand-red hover:bg-transparent transition-colors duration-300 disabled:opacity-60 disabled:cursor-wait"
// // //       >
// // //         {status === 'sending' ? (
// // //           <>
// // //             Sending <Loader2 className="w-4 h-4 animate-spin" />
// // //           </>
// // //         ) : (
// // //           <>
// // //             Submit Application <Send className="w-4 h-4" strokeWidth={2} />
// // //           </>
// // //         )}
// // //       </button>

// // //       <p className="text-[11px] text-gray-600 font-sans text-center">
// // //         Fields marked <span className="text-brand-red">*</span> are required.
// // //       </p>
// // //     </form>
// // //   )
// // // }

// // // function JobSection({ role, index }) {
// // //   const formId = `${role.id}-apply`

// // //   return (
// // //     <section
// // //       id={role.id}
// // //       className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-white/5 scroll-mt-24 ${
// // //         index % 2 === 0 ? 'bg-[#050505]' : 'bg-[#080808]'
// // //       }`}
// // //     >
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <div className="reveal relative pb-10 md:pb-12 mb-12 md:mb-16 border-b border-white/[0.06]">
// // //           <div className="absolute right-0 -top-10 text-[7rem] md:text-[11rem] leading-none font-heading font-bold text-white/[0.03] select-none pointer-events-none">
// // //             0{index + 1}
// // //           </div>

// // //           <SectionKicker index={`0${index + 2}`} label="Open Role" />

// // //           <div className="flex items-center gap-3 mb-5">
// // //             <span className="px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-sans text-brand-red border border-brand-red/30 bg-brand-red/5 rounded-full">
// // //               {role.team}
// // //             </span>
// // //             <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans">
// // //               <span className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_#FF0000] animate-pulse"></span>
// // //               Now hiring
// // //             </span>
// // //           </div>

// // //           <h2 className="relative font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-8 max-w-4xl">
// // //             {role.title}
// // //           </h2>

// // //           <div className="flex flex-wrap items-center gap-2">
// // //             {role.meta.map(({ icon: MetaIcon, text }) => (
// // //               <span
// // //                 key={text}
// // //                 className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-sans rounded border border-white/5"
// // //               >
// // //                 <MetaIcon className="w-3.5 h-3.5 text-brand-red" strokeWidth={1.75} />
// // //                 {text}
// // //               </span>
// // //             ))}
// // //             <button
// // //               type="button"
// // //               onClick={() => scrollToId(formId)}
// // //               className="lg:hidden inline-flex items-center gap-2 px-4 py-1.5 border border-brand-red text-white text-[10px] uppercase tracking-[0.25em] font-sans font-bold"
// // //             >
// // //               Apply Now <ArrowRight className="w-3.5 h-3.5" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
// // //           {/* Job content */}
// // //           <div className="lg:col-span-7 space-y-12">
// // //             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">{role.summary}</p>

// // //             {role.highlight && (
// // //               <p className="reveal font-sans text-white text-base md:text-lg font-light leading-relaxed border-l-2 border-brand-red pl-5 bg-gradient-to-r from-brand-red/[0.06] to-transparent py-3">
// // //                 {role.highlight}
// // //               </p>
// // //             )}

// // //             {role.groups.map((group) => (
// // //               <DetailBlock key={group.heading} title={group.heading}>
// // //                 <BulletList items={group.points} />
// // //               </DetailBlock>
// // //             ))}

// // //             <DetailBlock title="What We’re Looking For">
// // //               <BulletList items={role.lookingFor} />
// // //             </DetailBlock>

// // //             {role.niceToHave && (
// // //               <DetailBlock title="Nice To Have">
// // //                 <BulletList items={role.niceToHave} />
// // //               </DetailBlock>
// // //             )}

// // //             {role.offer && (
// // //               <DetailBlock title="What We Offer">
// // //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // //                   {role.offer.map((item) => (
// // //                     <li
// // //                       key={item}
// // //                       className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg text-sm text-gray-300 font-sans font-light leading-relaxed"
// // //                     >
// // //                       <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" strokeWidth={2.25} />
// // //                       {item}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //                 {role.note && <p className="mt-5 text-xs text-gray-500 font-sans tracking-wide">{role.note}</p>}
// // //               </DetailBlock>
// // //             )}
// // //           </div>

// // //           {/* Application form */}
// // //           <div className="lg:col-span-5">
// // //             <div id={formId} className="lg:sticky lg:top-28 scroll-mt-28">
// // //               <div className="reveal relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-[0_0_80px_-30px_rgba(255,0,0,0.35)] overflow-hidden">
// // //                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent"></div>
// // //                 <p className="text-[10px] text-brand-red uppercase tracking-[0.3em] mb-2 font-sans font-bold">Apply Now</p>
// // //                 <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase leading-tight mb-2">{role.title}</h3>
// // //                 <p className="font-sans text-gray-500 text-sm font-light mb-8">Takes about two minutes.</p>
// // //                 <ApplicationForm role={role} />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /* Page                                                                */
// // // /* ------------------------------------------------------------------ */

// // // export function Careers() {
// // //   useSEO({
// // //     title: 'Careers | HYPEDIN - Build India’s Campus Network',
// // //     description:
// // //       'Join HYPEDIN as a Community Lead or City Lead. Recruit campus ambassadors, build student communities and run national youth campaigns for leading brands.',
// // //     canonical: 'https://www.hypedin.co/careers',
// // //     ogTitle: 'Careers at HYPEDIN',
// // //     ogDescription: 'Build the campus network behind India’s biggest youth campaigns. Now hiring Community Leads and City Leads.',
// // //     keywords: 'HYPEDIN careers, campus ambassador jobs, community lead jobs Noida, city lead remote, youth marketing jobs India',
// // //   })

// // //   const rootRef = useRef(null)
// // //   const heroRef = useRef(null)

// // //   // Entrance + scroll animations
// // //   useLayoutEffect(() => {
// // //     const mm = gsap.matchMedia()

// // //     mm.add(
// // //       '(prefers-reduced-motion: no-preference)',
// // //       () => {
// // //         gsap.fromTo('.careers-glow', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' })

// // //         const tl = gsap.timeline({ delay: 0.2 })
// // //         tl.from('.hero-kicker', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
// // //           .from('.hero-line', { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'power4.out' }, '-=0.5')
// // //           .from('.hero-handwritten', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', duration: 1, ease: 'power3.out' }, '-=0.7')
// // //           .from('.hero-fade', { y: 24, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out' }, '-=0.8')

// // //         gsap.utils.toArray('.reveal').forEach((el) => {
// // //           gsap.from(el, {
// // //             y: 40,
// // //             opacity: 0,
// // //             duration: 0.9,
// // //             ease: 'power3.out',
// // //             scrollTrigger: { trigger: el, start: 'top 90%', once: true },
// // //           })
// // //         })
// // //       },
// // //       rootRef
// // //     )

// // //     return () => mm.revert()
// // //   }, [])

// // //   // Subtle glow parallax on the hero (desktop pointer only)
// // //   useEffect(() => {
// // //     const hero = heroRef.current
// // //     if (!hero || !window.matchMedia('(pointer: fine)').matches) return

// // //     const handleMouseMove = (e) => {
// // //       const x = (e.clientX / window.innerWidth - 0.5) * 2
// // //       const y = (e.clientY / window.innerHeight - 0.5) * 2
// // //       gsap.to('.careers-glow', { x: x * 40, y: y * 40, duration: 2.5 })
// // //     }

// // //     hero.addEventListener('mousemove', handleMouseMove)
// // //     return () => hero.removeEventListener('mousemove', handleMouseMove)
// // //   }, [])

// // //   return (
// // //     <div ref={rootRef}>
// // //       {/* ================= HERO ================= */}
// // //       <section
// // //         ref={heroRef}
// // //         className="relative min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505]"
// // //         style={{ paddingTop: 'calc(env(safe-area-inset-top) + 130px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 64px)' }}
// // //       >
// // //         <div className="absolute inset-0 pointer-events-none z-0">
// // //           <div className="absolute top-0 left-4 md:left-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
// // //           <div className="absolute top-0 right-4 md:right-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
// // //           <div
// // //             className="absolute inset-0 opacity-20"
// // //             style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}
// // //           ></div>
// // //         </div>

// // //         <div className="careers-glow absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] bg-brand-red/[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

// // //         <div className="relative z-10 max-w-7xl mx-auto w-full">
// // //           <div className="hero-kicker flex items-center gap-4 mb-8 md:mb-10">
// // //             <span className="w-10 h-[2px] bg-brand-red"></span>
// // //             <span className="text-[11px] md:text-sm uppercase tracking-[0.45em] text-white/60 font-sans">
// // //               Careers at <span className="text-white font-bold">HYPEDIN</span>
// // //             </span>
// // //           </div>

// // //           <div className="relative">
// // //             <h2
// // //               className="hero-handwritten hidden sm:block absolute -top-8 right-0 md:right-[12%] lg:right-[22%] -rotate-6 font-handwritten text-2xl md:text-4xl text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20"
// // //               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
// // //             >
// // //               we’re hiring <span className="text-brand-red">_</span>
// // //             </h2>

// // //             <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.92] text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
// // //               <span className="block overflow-hidden pb-1">
// // //                 <span className="hero-line block text-brand-red">Build The</span>
// // //               </span>
// // //               <span className="block overflow-hidden pb-1">
// // //                 <span className="hero-line block text-brand-red">Campus</span>
// // //               </span>
// // //               <span className="block overflow-hidden pb-1">
// // //                 <span className="hero-line block text-white">Network.</span>
// // //               </span>
// // //             </h1>
// // //           </div>

// // //           <p className="hero-fade mt-8 md:mt-10 max-w-2xl font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
// // //             <span className="text-white font-medium">HYPEDIN</span> brings brands into student life across India. Behind every
// // //             campaign is a network of ambassadors, societies and student communities, and the people who keep it moving. That
// // //             could be you.
// // //           </p>

// // //           <div className="hero-fade mt-10 flex flex-col sm:flex-row gap-4">
// // //             {roles.map((role, i) => (
// // //               <button
// // //                 key={role.id}
// // //                 type="button"
// // //                 onClick={() => scrollToId(role.id)}
// // //                 className={`inline-flex items-center justify-center gap-3 px-8 py-4 border text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold transition-colors duration-300 ${
// // //                   i === 0
// // //                     ? 'border-brand-red text-white hover:bg-brand-red'
// // //                     : 'border-white/15 text-white/80 hover:border-white/50 hover:text-white'
// // //                 }`}
// // //               >
// // //                 {role.id === 'city-lead' ? 'City Lead' : role.title}
// // //                 <ArrowRight className="w-4 h-4" strokeWidth={2} />
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="hero-fade mt-16 md:mt-24 border-t border-white/[0.08] pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
// // //             {heroStats.map((stat) => (
// // //               <div key={stat.label} className="group cursor-default">
// // //                 <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
// // //                   {stat.label}
// // //                 </p>
// // //                 <div className="font-heading text-xl md:text-3xl text-white font-bold tracking-tight">
// // //                   {stat.value}
// // //                   {stat.suffix && <span className="text-brand-red text-lg md:text-2xl align-top">{stat.suffix}</span>}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= ABOUT ================= */}
// // //       <section id="about-hypedin" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#080808] border-t border-white/5 overflow-hidden">
// // //         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

// // //         <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
// // //           <div className="reveal lg:col-span-5">
// // //             <SectionKicker index="01" label="About" />
// // //             <h2 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight">
// // //               About <span className="text-brand-red">HYPEDIN</span>
// // //             </h2>
// // //           </div>

// // //           <div className="lg:col-span-7 space-y-6">
// // //             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
// // //               HYPEDIN is a youth marketing agency that connects brands with India’s college students and young adults. We work
// // //               with brands like Google, Amazon and Blinkit, and bring them to life through campus ambassador programs, influencer
// // //               and creator campaigns, community building, event amplification, digital promotions and on-ground activations.
// // //             </p>
// // //             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
// // //               Our strength is the network behind every campaign: thousands of college societies, clubs and student communities
// // //               across the country, and the ambassadors who represent brands on their own campuses. When a brand wants to be part
// // //               of student life, we make sure it shows up in the right place, in the right way, with students who genuinely care.
// // //             </p>

// // //             <div className="reveal pt-6">
// // //               <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-2 font-sans">Running right now</p>
// // //               <ul>
// // //                 {campaigns.map(({ icon: CampaignIcon, title, partner, desc }) => (
// // //                   <li key={title} className="group flex gap-5 py-6 border-t border-white/[0.06] last:border-b">
// // //                     <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
// // //                       <CampaignIcon className="w-5 h-5 text-brand-red" strokeWidth={1.75} />
// // //                     </div>
// // //                     <div>
// // //                       <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
// // //                         <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase group-hover:text-brand-red transition-colors">
// // //                           {title}
// // //                         </h3>
// // //                         <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">{partner}</span>
// // //                       </div>
// // //                       <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
// // //                     </div>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= JOBS ================= */}
// // //       {roles.map((role, i) => (
// // //         <JobSection key={role.id} role={role} index={i} />
// // //       ))}

// // //       <Footer />
// // //     </div>
// // //   )
// // // }

// // // export default Careers




// // import { useLayoutEffect, useEffect, useRef, useState } from 'react'
// // import gsap from 'gsap'
// // import { ScrollTrigger } from 'gsap/ScrollTrigger'
// // import {
// //   MapPin,
// //   Briefcase,
// //   Wallet,
// //   ArrowRight,
// //   Check,
// //   ChevronDown,
// //   CheckCircle2,
// //   AlertCircle,
// //   Loader2,
// //   Send,
// //   Gamepad2,
// //   GraduationCap,
// //   Sparkles,
// // } from 'lucide-react'
// // import { useSEO } from '../hooks/useSEO'
// // import Footer from '../components/Footer'

// // gsap.registerPlugin(ScrollTrigger)

// // /* ------------------------------------------------------------------ */
// // /* Config                                                              */
// // /* ------------------------------------------------------------------ */

// // const CAREERS_EMAIL = 'careers@hypedin.co'

// // // Google Apps Script web app that appends each application to the "Applications" sheet.
// // // Sent as application/x-www-form-urlencoded (a "simple" request), so the browser skips the
// // // CORS preflight that Apps Script can't answer. Do not add a JSON Content-Type header.
// // const APPLICATION_ENDPOINT =
// //   'https://script.google.com/macros/s/AKfycbwj8B0JnhiVcSDsoBDBh-GUcFOX9YucxbCaF7Wh6zGtPp0opDoW2bT3B87VV7AnOiEImQ/exec'

// // const REQUEST_TIMEOUT_MS = 20000

// // /* ------------------------------------------------------------------ */
// // /* Content                                                             */
// // /* ------------------------------------------------------------------ */

// // const heroStats = [
// //   { label: 'Open Roles', value: '02' },
// //   { label: 'Brands', value: '24', suffix: '+' },
// //   { label: 'Since', value: '2022' },
// //   { label: 'Hiring', value: 'Pan India' },
// // ]

// // const campaigns = [
// //   {
// //     icon: Gamepad2,
// //     title: 'BGMI Campus MVP',
// //     partner: 'with KRAFTON India',
// //     desc: 'Building BGMI gaming communities in colleges. Ambassadors run tournaments and scrims, create gaming content, host campus meetups and take their colleges into inter-college competitions.',
// //   },
// //   {
// //     icon: GraduationCap,
// //     title: 'Fateh Education Campus Ambassador Program',
// //     partner: 'Study abroad, UK & Ireland',
// //     desc: 'Fateh has helped Indian students study in the UK and Ireland since 2004. Our ambassadors take its counselling, scholarship and IELTS/PTE guidance to students, online and offline.',
// //   },
// //   {
// //     icon: Sparkles,
// //     title: 'Activations, Creators & Brand Programs',
// //     partner: 'New campaigns launching all the time',
// //     desc: 'Campus activations, creator campaigns and brand programs for leading names across tech, quick commerce, gaming, education and lifestyle.',
// //   },
// // ]

// // const PHONE_PATTERN = '[0-9]{10}'

// // const roles = [
// //   {
// //     id: 'community-lead',
// //     title: 'Community Lead',
// //     team: 'Community',
// //     meta: [
// //       { icon: MapPin, text: 'Sector 3, Noida' },
// //       { icon: Briefcase, text: 'Full-time / Internship' },
// //     ],
// //     summary:
// //       'We’re hiring Community Leads to build, manage and grow HYPEDIN’s student and campus community across colleges. This role is for someone who understands college culture, enjoys working with students and can build strong relationships with student leaders, societies, clubs and campus communities. You’ll drive community engagement, manage campus networks, coordinate student ambassadors and make sure participation stays strong across HYPEDIN initiatives.',
// //     highlight:
// //       'What matters most is your ability to connect with people, take ownership, coordinate multiple stakeholders and build an active community.',
// //     groups: [
// //       {
// //         heading: 'Community Building & Management',
// //         points: [
// //           'Build and maintain strong relationships with college students, societies, clubs and student leaders',
// //           'Grow and manage HYPEDIN’s network of student communities across campuses',
// //           'Identify active student communities, influencers, societies and potential campus partners',
// //           'Drive regular engagement and participation within the community',
// //           'Create initiatives and engagement opportunities that keep students actively involved',
// //           'Act as the primary point of contact for student communities and campus representatives',
// //         ],
// //       },
// //       {
// //         heading: 'Campus Ambassador Programs',
// //         points: [
// //           'Recruit, onboard and manage student ambassadors across colleges',
// //           'Set clear tasks, targets and timelines for ambassadors',
// //           'Track ambassador performance, engagement and deliverables',
// //           'Motivate and retain high-performing ambassadors',
// //           'Build a strong campus leadership network to support HYPEDIN’s campaigns',
// //         ],
// //       },
// //       {
// //         heading: 'Campaign & Event Support',
// //         points: [
// //           'Coordinate with student communities to execute brand campaigns and campus activations',
// //           'Mobilise students for events, workshops, competitions and promotional initiatives',
// //           'Make sure campaigns reach the right student audiences and hit participation targets',
// //           'Coordinate with internal operations and brand teams for smooth execution',
// //           'Handle on-ground and community-level challenges during campaigns',
// //         ],
// //       },
// //       {
// //         heading: 'Tracking & Reporting',
// //         points: [
// //           'Maintain community, ambassador and engagement trackers',
// //           'Monitor participation, reach, conversions and other campaign metrics',
// //           'Share regular updates and reports on community performance',
// //           'Identify gaps in engagement and take corrective action',
// //           'Suggest new ideas to improve community growth and participation',
// //         ],
// //       },
// //     ],
// //     lookingFor: [
// //       'Prior experience in campus communities, college societies, events, student programs or ambassador programs is a strong plus',
// //       'Strong understanding of college culture and student communities',
// //       'Excellent communication and relationship-building skills',
// //       'Ability to coordinate with multiple people and stakeholders at once',
// //       'Comfortable reaching out to new people and building relationships from scratch',
// //       'Strong ownership and follow-through',
// //       'Ability to work independently and handle fast-moving situations',
// //       'Organised, proactive and comfortable working with targets and timelines',
// //       'A self-starter who enjoys working in a dynamic environment',
// //     ],
// //     niceToHave: [
// //       'Experience managing a campus ambassador or student community program',
// //       'Experience working with college societies, clubs, fests or student bodies',
// //       'Experience in community building, events, marketing or youth engagement',
// //       'An existing network across colleges or student communities',
// //       'Experience managing teams of student ambassadors',
// //       'Experience scaling communities or programs across multiple campuses',
// //     ],
// //     offer: null,
// //     note: null,
// //     fields: [
// //       { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
// //       { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
// //       { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
// //       { name: 'city', label: 'Current City', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Noida' },
// //       { name: 'engagement', label: 'Applying For', type: 'select', required: true, options: ['Full-time', 'Internship'] },
// //       { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work' },
// //       { name: 'profileLink', label: 'Resume or LinkedIn Link', type: 'text', inputMode: 'url', required: true, placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
// //       { name: 'experience', label: 'Campus / Community Experience', type: 'textarea', rows: 3, placeholder: 'Societies, fests, ambassador programs or communities you have run or been part of', full: true },
// //       { name: 'whyFit', label: 'Why You’d Be A Good Fit', type: 'textarea', rows: 4, required: true, placeholder: 'A short note is enough', full: true },
// //       { name: 'locationOk', label: 'I can work from HYPEDIN’s office in Sector 3, Noida.', type: 'checkbox', required: true, full: true },
// //     ],
// //   },
// //   {
// //     id: 'city-lead',
// //     title: 'City Lead, Campus Ambassador Programs',
// //     team: 'Programs',
// //     meta: [
// //       { icon: MapPin, text: 'Remote, based in your own city' },
// //       { icon: Briefcase, text: 'Program / Project / Full-time' },
// //       { icon: Wallet, text: '₹5,000 to ₹10,000 / month' },
// //     ],
// //     summary:
// //       'As City Lead, you are the face of HYPEDIN in your city. You’ll recruit and guide campus ambassadors, support them at their events and keep our team informed about what’s happening on the ground. You work from home and step out only for events in your city.',
// //     highlight:
// //       'Every campaign we run depends on a dependable person on the ground in each city. That’s the City Lead.',
// //     groups: [
// //       {
// //         heading: 'What You’ll Do',
// //         points: [
// //           'Recruit campus ambassadors from colleges in your city',
// //           'Manage your ambassadors and track their performance',
// //           'Share a daily performance update with our team',
// //           'Help ambassadors plan and run events at their colleges',
// //           'Attend campus events in your city',
// //           'Resolve ambassador queries quickly',
// //           'Be the point of contact between your ambassadors and our team',
// //         ],
// //       },
// //     ],
// //     lookingFor: [
// //       'Based in the city you’ll lead',
// //       'A confident communicator who is comfortable with college students',
// //       'Organised, reliable and strong at follow-ups and reporting',
// //       'Experience with campus programs, student communities or events is a plus, but not required',
// //     ],
// //     niceToHave: null,
// //     offer: [
// //       '₹5,000 to ₹10,000 per month',
// //       '2 casual leaves per month',
// //       '100% work from home, with no relocation and no office visits',
// //       'Flexible engagement: program-based, project-based or full-time',
// //       'Hands-on experience running national campaigns for well-known brands',
// //     ],
// //     note: 'Saturdays are working days. Travel is limited to events in your city.',
// //     fields: [
// //       { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
// //       { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
// //       { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
// //       { name: 'city', label: 'City You’ll Lead', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Jaipur' },
// //       { name: 'engagement', label: 'Preferred Engagement', type: 'select', required: true, options: ['Program-based', 'Project-based', 'Full-time'] },
// //       {
// //         name: 'experience',
// //         label: 'Campus Program Experience',
// //         type: 'select',
// //         required: true,
// //         options: ['Yes, I have run or managed one', 'Yes, as an ambassador or volunteer', 'Not yet'],
// //       },
// //       { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work', full: true },
// //       { name: 'profileLink', label: 'Resume or LinkedIn Link (optional)', type: 'text', inputMode: 'url', placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
// //       { name: 'whyFit', label: 'Why You’d Be A Good Fit', type: 'textarea', rows: 4, required: true, placeholder: 'A short note is enough', full: true },
// //       { name: 'termsOk', label: 'I understand Saturdays are working days and travel is limited to events in my city.', type: 'checkbox', required: true, full: true },
// //     ],
// //   },
// // ]

// // /* ------------------------------------------------------------------ */
// // /* Helpers                                                             */
// // /* ------------------------------------------------------------------ */

// // const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// // const PHONE_RE = /^[0-9]{10}$/

// // // The Submit button stays disabled until these are filled in.
// // // Other required fields (resume link, "why fit", consent checkbox) are still enforced
// // // by the browser's native validation when Submit is clicked.
// // const isReadyToSubmit = (values) =>
// //   values.fullName.trim() !== '' &&
// //   EMAIL_RE.test(values.email.trim()) &&
// //   PHONE_RE.test(values.phone) &&
// //   values.city.trim() !== '' &&
// //   values.engagement !== ''

// // const initialValues = (fields) =>
// //   fields.reduce((acc, f) => ({ ...acc, [f.name]: f.type === 'checkbox' ? false : '' }), { website: '' })

// // const toReadable = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : value || '-')

// // // Clean values for the sheet: Yes/No for checkboxes, trimmed text, blank instead of "-".
// // const toSheetValue = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : String(value ?? '').trim())

// // const buildMailto = (role, values) => {
// //   const subject = `Application: ${role.title} - ${values.fullName}`
// //   const body = [`Role: ${role.title}`, '', ...role.fields.map((f) => `${f.label}: ${toReadable(f, values[f.name])}`)].join('\n')
// //   return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
// // }

// // const submitToSheet = async (role, values) => {
// //   const payload = { role: role.title, source: 'hypedin.co/careers' }
// //   role.fields.forEach((f) => {
// //     payload[f.name] = toSheetValue(f, values[f.name])
// //   })

// //   const controller = new AbortController()
// //   const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

// //   try {
// //     const res = await fetch(APPLICATION_ENDPOINT, {
// //       method: 'POST',
// //       body: new URLSearchParams(payload), // form-encoded, no preflight
// //       redirect: 'follow', // Apps Script answers via a redirect to googleusercontent.com
// //       signal: controller.signal,
// //     })
// //     if (!res.ok) throw new Error(`Request failed: ${res.status}`)

// //     // The script returns HTTP 200 even on failure, so check its own success flag.
// //     const data = await res.json().catch(() => null)
// //     if (!data?.success) throw new Error(data?.message || 'The sheet did not confirm the save')
// //   } finally {
// //     clearTimeout(timer)
// //   }
// // }

// // const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

// // /* ------------------------------------------------------------------ */
// // /* Small building blocks                                               */
// // /* ------------------------------------------------------------------ */

// // const SectionKicker = ({ index, label }) => (
// //   <div className="inline-flex items-center gap-3 mb-4">
// //     <span className="w-6 h-[1px] bg-brand-red/40"></span>
// //     <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">
// //       [ {index} / {label} ]
// //     </span>
// //     <span className="w-6 h-[1px] bg-brand-red/40"></span>
// //   </div>
// // )

// // const BulletList = ({ items }) => (
// //   <ul className="space-y-3">
// //     {items.map((item) => (
// //       <li key={item} className="flex gap-3 text-sm md:text-[15px] text-gray-400 leading-relaxed font-light">
// //         <span className="mt-[9px] w-1.5 h-1.5 shrink-0 bg-brand-red rounded-full shadow-[0_0_6px_#FF0000]"></span>
// //         <span>{item}</span>
// //       </li>
// //     ))}
// //   </ul>
// // )

// // const DetailBlock = ({ title, children }) => (
// //   <div className="reveal">
// //     <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase tracking-wide mb-5 flex items-center gap-3">
// //       <span className="w-4 h-[2px] bg-brand-red"></span>
// //       {title}
// //     </h3>
// //     {children}
// //   </div>
// // )

// // const inputBase =
// //   'w-full bg-[#0c0c0c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 font-sans font-light outline-none transition-colors duration-300 focus:border-brand-red focus:bg-[#0f0f0f]'

// // function FormField({ field, id, value, onChange }) {
// //   if (field.type === 'checkbox') {
// //     return (
// //       <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group/check">
// //         <span className="relative mt-0.5 shrink-0">
// //           <input
// //             id={id}
// //             name={field.name}
// //             type="checkbox"
// //             checked={value}
// //             onChange={onChange}
// //             required={field.required}
// //             className="peer absolute inset-0 opacity-0 cursor-pointer"
// //           />
// //           <span className="flex w-5 h-5 items-center justify-center rounded border border-white/20 bg-[#0c0c0c] transition-colors peer-checked:bg-brand-red peer-checked:border-brand-red peer-focus-visible:ring-2 peer-focus-visible:ring-brand-red/50">
// //             {value && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
// //           </span>
// //         </span>
// //         <span className="text-sm text-gray-400 font-sans font-light leading-relaxed group-hover/check:text-gray-300 transition-colors">
// //           {field.label}
// //         </span>
// //       </label>
// //     )
// //   }

// //   const label = (
// //     <label htmlFor={id} className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 font-sans">
// //       {field.label}
// //       {field.required && <span className="text-brand-red ml-1">*</span>}
// //     </label>
// //   )

// //   if (field.type === 'select') {
// //     return (
// //       <div>
// //         {label}
// //         <div className="relative">
// //           <select
// //             id={id}
// //             name={field.name}
// //             value={value}
// //             onChange={onChange}
// //             required={field.required}
// //             className={`${inputBase} appearance-none pr-10 ${value ? '' : 'text-gray-600'}`}
// //           >
// //             <option value="" disabled className="bg-[#0c0c0c]">
// //               Select one
// //             </option>
// //             {field.options.map((opt) => (
// //               <option key={opt} value={opt} className="bg-[#0c0c0c] text-white">
// //                 {opt}
// //               </option>
// //             ))}
// //           </select>
// //           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
// //         </div>
// //       </div>
// //     )
// //   }

// //   if (field.type === 'textarea') {
// //     return (
// //       <div>
// //         {label}
// //         <textarea
// //           id={id}
// //           name={field.name}
// //           rows={field.rows || 4}
// //           value={value}
// //           onChange={onChange}
// //           required={field.required}
// //           placeholder={field.placeholder}
// //           className={`${inputBase} resize-y min-h-[96px]`}
// //         />
// //       </div>
// //     )
// //   }

// //   return (
// //     <div>
// //       {label}
// //       <input
// //         id={id}
// //         name={field.name}
// //         type={field.type}
// //         value={value}
// //         onChange={onChange}
// //         required={field.required}
// //         placeholder={field.placeholder}
// //         autoComplete={field.autoComplete}
// //         inputMode={field.type === 'tel' ? 'numeric' : field.inputMode}
// //         pattern={field.pattern}
// //         maxLength={field.type === 'tel' ? 10 : undefined}
// //         title={field.type === 'tel' ? 'Enter a 10-digit phone number' : undefined}
// //         className={inputBase}
// //       />
// //     </div>
// //   )
// // }

// // function ApplicationForm({ role }) {
// //   const [values, setValues] = useState(() => initialValues(role.fields))
// //   const [status, setStatus] = useState('idle') // idle | sending | sent | error
// //   const [submittedName, setSubmittedName] = useState('')

// //   const canSubmit = isReadyToSubmit(values)
// //   const isSending = status === 'sending'

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target
// //     const nextValue = type === 'checkbox' ? checked : type === 'tel' ? value.replace(/\D/g, '').slice(0, 10) : value
// //     setValues((prev) => ({ ...prev, [name]: nextValue }))
// //     if (status === 'error') setStatus('idle')
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (values.website) return // honeypot: bots fill hidden fields
// //     if (!canSubmit || isSending) return

// //     const firstName = values.fullName.trim().split(' ')[0]

// //     setStatus('sending')
// //     try {
// //       await submitToSheet(role, values)
// //       setSubmittedName(firstName)
// //       setValues(initialValues(role.fields))
// //       setStatus('sent')
// //     } catch (err) {
// //       console.error(err)
// //       setStatus('error')
// //     }
// //   }

// //   const reset = () => {
// //     setValues(initialValues(role.fields))
// //     setStatus('idle')
// //   }

// //   if (status === 'sent') {
// //     return (
// //       <div className="text-center py-10 px-2">
// //         <div className="mx-auto w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
// //           <CheckCircle2 className="w-8 h-8 text-brand-red" strokeWidth={1.75} />
// //         </div>
// //         <h4 className="font-heading text-2xl font-bold text-white uppercase mb-3">Application Received</h4>
// //         <p className="font-sans text-gray-400 text-sm leading-relaxed font-light max-w-sm mx-auto mb-8">
// //           Thanks{submittedName ? `, ${submittedName}` : ''}. Our team will go through your application and get in touch if it’s a
// //           match.
// //         </p>
// //         <button
// //           type="button"
// //           onClick={reset}
// //           className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-white/70 hover:text-white border-b border-white/20 hover:border-brand-red pb-1 transition-colors"
// //         >
// //           Submit another
// //         </button>
// //       </div>
// //     )
// //   }

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-5">
// //       {/* Honeypot */}
// //       <div className="hidden" aria-hidden="true">
// //         <label>
// //           Website
// //           <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
// //         </label>
// //       </div>

// //       <fieldset disabled={isSending} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
// //         {role.fields.map((field) => (
// //           <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
// //             <FormField field={field} id={`${role.id}-${field.name}`} value={values[field.name]} onChange={handleChange} />
// //           </div>
// //         ))}
// //       </fieldset>

// //       {status === 'error' && (
// //         <div role="alert" className="flex items-start gap-3 p-3 rounded-lg border border-brand-red/30 bg-brand-red/5 text-sm text-gray-300 font-sans font-light">
// //           <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" />
// //           <span>
// //             Something went wrong. Please try again, or email your details to{' '}
// //             <a href={buildMailto(role, values)} className="text-white border-b border-brand-red/60">
// //               {CAREERS_EMAIL}
// //             </a>
// //             .
// //           </span>
// //         </div>
// //       )}

// //       <button
// //         type="submit"
// //         disabled={!canSubmit || isSending}
// //         aria-disabled={!canSubmit || isSending}
// //         className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand-red text-white text-xs uppercase tracking-[0.3em] font-sans font-bold border border-brand-red transition-colors duration-300 enabled:hover:bg-transparent disabled:opacity-40 disabled:cursor-not-allowed"
// //       >
// //         {isSending ? (
// //           <>
// //             Sending <Loader2 className="w-4 h-4 animate-spin" />
// //           </>
// //         ) : (
// //           <>
// //             Submit Application <Send className="w-4 h-4" strokeWidth={2} />
// //           </>
// //         )}
// //       </button>

// //       <p className="text-[11px] text-gray-600 font-sans text-center">
// //         {canSubmit ? (
// //           <>
// //             Fields marked <span className="text-brand-red">*</span> are required.
// //           </>
// //         ) : (
// //           'Add your name, email, a 10-digit phone number, city and engagement type to submit.'
// //         )}
// //       </p>
// //     </form>
// //   )
// // }

// // function JobSection({ role, index }) {
// //   const formId = `${role.id}-apply`

// //   return (
// //     <section
// //       id={role.id}
// //       className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-white/5 scroll-mt-24 ${
// //         index % 2 === 0 ? 'bg-[#050505]' : 'bg-[#080808]'
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="reveal relative pb-10 md:pb-12 mb-12 md:mb-16 border-b border-white/[0.06]">
// //           <div className="absolute right-0 -top-10 text-[7rem] md:text-[11rem] leading-none font-heading font-bold text-white/[0.03] select-none pointer-events-none">
// //             0{index + 1}
// //           </div>

// //           <SectionKicker index={`0${index + 2}`} label="Open Role" />

// //           <div className="flex items-center gap-3 mb-5">
// //             <span className="px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-sans text-brand-red border border-brand-red/30 bg-brand-red/5 rounded-full">
// //               {role.team}
// //             </span>
// //             <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans">
// //               <span className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_#FF0000] animate-pulse"></span>
// //               Now hiring
// //             </span>
// //           </div>

// //           <h2 className="relative font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-8 max-w-4xl">
// //             {role.title}
// //           </h2>

// //           <div className="flex flex-wrap items-center gap-2">
// //             {role.meta.map(({ icon: MetaIcon, text }) => (
// //               <span
// //                 key={text}
// //                 className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-sans rounded border border-white/5"
// //               >
// //                 <MetaIcon className="w-3.5 h-3.5 text-brand-red" strokeWidth={1.75} />
// //                 {text}
// //               </span>
// //             ))}
// //             <button
// //               type="button"
// //               onClick={() => scrollToId(formId)}
// //               className="lg:hidden inline-flex items-center gap-2 px-4 py-1.5 border border-brand-red text-white text-[10px] uppercase tracking-[0.25em] font-sans font-bold"
// //             >
// //               Apply Now <ArrowRight className="w-3.5 h-3.5" />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
// //           {/* Job content */}
// //           <div className="lg:col-span-7 space-y-12">
// //             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">{role.summary}</p>

// //             {role.highlight && (
// //               <p className="reveal font-sans text-white text-base md:text-lg font-light leading-relaxed border-l-2 border-brand-red pl-5 bg-gradient-to-r from-brand-red/[0.06] to-transparent py-3">
// //                 {role.highlight}
// //               </p>
// //             )}

// //             {role.groups.map((group) => (
// //               <DetailBlock key={group.heading} title={group.heading}>
// //                 <BulletList items={group.points} />
// //               </DetailBlock>
// //             ))}

// //             <DetailBlock title="What We’re Looking For">
// //               <BulletList items={role.lookingFor} />
// //             </DetailBlock>

// //             {role.niceToHave && (
// //               <DetailBlock title="Nice To Have">
// //                 <BulletList items={role.niceToHave} />
// //               </DetailBlock>
// //             )}

// //             {role.offer && (
// //               <DetailBlock title="What We Offer">
// //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                   {role.offer.map((item) => (
// //                     <li
// //                       key={item}
// //                       className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg text-sm text-gray-300 font-sans font-light leading-relaxed"
// //                     >
// //                       <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" strokeWidth={2.25} />
// //                       {item}
// //                     </li>
// //                   ))}
// //                 </ul>
// //                 {role.note && <p className="mt-5 text-xs text-gray-500 font-sans tracking-wide">{role.note}</p>}
// //               </DetailBlock>
// //             )}
// //           </div>

// //           {/* Application form */}
// //           <div className="lg:col-span-5">
// //             <div id={formId} className="lg:sticky lg:top-28 scroll-mt-28">
// //               <div className="reveal relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-[0_0_80px_-30px_rgba(255,0,0,0.35)] overflow-hidden">
// //                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent"></div>
// //                 <p className="text-[10px] text-brand-red uppercase tracking-[0.3em] mb-2 font-sans font-bold">Apply Now</p>
// //                 <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase leading-tight mb-2">{role.title}</h3>
// //                 <p className="font-sans text-gray-500 text-sm font-light mb-8">Takes about two minutes.</p>
// //                 <ApplicationForm role={role} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // /* ------------------------------------------------------------------ */
// // /* Page                                                                */
// // /* ------------------------------------------------------------------ */

// // export function Careers() {
// //   useSEO({
// //     title: 'Careers | HYPEDIN - Build India’s Campus Network',
// //     description:
// //       'Join HYPEDIN as a Community Lead or City Lead. Recruit campus ambassadors, build student communities and run national youth campaigns for leading brands.',
// //     canonical: 'https://www.hypedin.co/careers',
// //     ogTitle: 'Careers at HYPEDIN',
// //     ogDescription: 'Build the campus network behind India’s biggest youth campaigns. Now hiring Community Leads and City Leads.',
// //     keywords: 'HYPEDIN careers, campus ambassador jobs, community lead jobs Noida, city lead remote, youth marketing jobs India',
// //   })

// //   const rootRef = useRef(null)
// //   const heroRef = useRef(null)

// //   // Entrance + scroll animations
// //   useLayoutEffect(() => {
// //     const mm = gsap.matchMedia()

// //     mm.add(
// //       '(prefers-reduced-motion: no-preference)',
// //       () => {
// //         gsap.fromTo('.careers-glow', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' })

// //         const tl = gsap.timeline({ delay: 0.2 })
// //         tl.from('.hero-kicker', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
// //           .from('.hero-line', { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'power4.out' }, '-=0.5')
// //           .from('.hero-handwritten', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', duration: 1, ease: 'power3.out' }, '-=0.7')
// //           .from('.hero-fade', { y: 24, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out' }, '-=0.8')

// //         gsap.utils.toArray('.reveal').forEach((el) => {
// //           gsap.from(el, {
// //             y: 40,
// //             opacity: 0,
// //             duration: 0.9,
// //             ease: 'power3.out',
// //             scrollTrigger: { trigger: el, start: 'top 90%', once: true },
// //           })
// //         })
// //       },
// //       rootRef
// //     )

// //     return () => mm.revert()
// //   }, [])

// //   // Subtle glow parallax on the hero (desktop pointer only)
// //   useEffect(() => {
// //     const hero = heroRef.current
// //     if (!hero || !window.matchMedia('(pointer: fine)').matches) return

// //     const handleMouseMove = (e) => {
// //       const x = (e.clientX / window.innerWidth - 0.5) * 2
// //       const y = (e.clientY / window.innerHeight - 0.5) * 2
// //       gsap.to('.careers-glow', { x: x * 40, y: y * 40, duration: 2.5 })
// //     }

// //     hero.addEventListener('mousemove', handleMouseMove)
// //     return () => hero.removeEventListener('mousemove', handleMouseMove)
// //   }, [])

// //   return (
// //     <div ref={rootRef}>
// //       {/* ================= HERO ================= */}
// //       <section
// //         ref={heroRef}
// //         className="relative min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505]"
// //         style={{ paddingTop: 'calc(env(safe-area-inset-top) + 130px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 64px)' }}
// //       >
// //         <div className="absolute inset-0 pointer-events-none z-0">
// //           <div className="absolute top-0 left-4 md:left-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
// //           <div className="absolute top-0 right-4 md:right-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
// //           <div
// //             className="absolute inset-0 opacity-20"
// //             style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}
// //           ></div>
// //         </div>

// //         <div className="careers-glow absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] bg-brand-red/[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

// //         <div className="relative z-10 max-w-7xl mx-auto w-full">
// //           <div className="hero-kicker flex items-center gap-4 mb-8 md:mb-10">
// //             <span className="w-10 h-[2px] bg-brand-red"></span>
// //             <span className="text-[11px] md:text-sm uppercase tracking-[0.45em] text-white/60 font-sans">
// //               Careers at <span className="text-white font-bold">HYPEDIN</span>
// //             </span>
// //           </div>

// //           <div className="relative">
// //             <h2
// //               className="hero-handwritten hidden sm:block absolute -top-8 right-0 md:right-[12%] lg:right-[22%] -rotate-6 font-handwritten text-2xl md:text-4xl text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20"
// //               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
// //             >
// //               we’re hiring <span className="text-brand-red">_</span>
// //             </h2>

// //             <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.92] text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
// //               <span className="block overflow-hidden pb-1">
// //                 <span className="hero-line block text-brand-red">Create Culture</span>
// //               </span>
// //               <span className="block overflow-hidden pb-1">
// //                 <span className="hero-line block text-brand-red">Inspire Influence</span>
// //               </span>
// //               <span className="block overflow-hidden pb-1">
// //                 <span className="hero-line block text-white">Make Impact.</span>
// //               </span>
// //             </h1>
// //           </div>

// //           <p className="hero-fade mt-8 md:mt-10 max-w-2xl font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
// //             <span className="text-white font-medium">HYPEDIN</span> brings brands into student life across India. Behind every
// //             campaign is a network of ambassadors, societies and student communities, and the people who keep it moving. That
// //             could be you.
// //           </p>

// //           <div className="hero-fade mt-10 flex flex-col sm:flex-row gap-4">
// //             {roles.map((role, i) => (
// //               <button
// //                 key={role.id}
// //                 type="button"
// //                 onClick={() => scrollToId(role.id)}
// //                 className={`inline-flex items-center justify-center gap-3 px-8 py-4 border text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold transition-colors duration-300 ${
// //                   i === 0
// //                     ? 'border-brand-red text-white hover:bg-brand-red'
// //                     : 'border-white/15 text-white/80 hover:border-white/50 hover:text-white'
// //                 }`}
// //               >
// //                 {role.id === 'city-lead' ? 'City Lead' : role.title}
// //                 <ArrowRight className="w-4 h-4" strokeWidth={2} />
// //               </button>
// //             ))}
// //           </div>

// //           <div className="hero-fade mt-16 md:mt-24 border-t border-white/[0.08] pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
// //             {heroStats.map((stat) => (
// //               <div key={stat.label} className="group cursor-default">
// //                 <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
// //                   {stat.label}
// //                 </p>
// //                 <div className="font-heading text-xl md:text-3xl text-white font-bold tracking-tight">
// //                   {stat.value}
// //                   {stat.suffix && <span className="text-brand-red text-lg md:text-2xl align-top">{stat.suffix}</span>}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= ABOUT ================= */}
// //       <section id="about-hypedin" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#080808] border-t border-white/5 overflow-hidden">
// //         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

// //         <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
// //           <div className="reveal lg:col-span-5">
// //             <SectionKicker index="01" label="About" />
// //             <h2 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight">
// //               About <span className="text-brand-red">HYPEDIN</span>
// //             </h2>
// //           </div>

// //           <div className="lg:col-span-7 space-y-6">
// //             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
// //               HYPEDIN is a youth marketing agency that connects brands with India’s college students and young adults. We work
// //               with brands like Google, Amazon and Blinkit, and bring them to life through campus ambassador programs, influencer
// //               and creator campaigns, community building, event amplification, digital promotions and on-ground activations.
// //             </p>
// //             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
// //               Our strength is the network behind every campaign: thousands of college societies, clubs and student communities
// //               across the country, and the ambassadors who represent brands on their own campuses. When a brand wants to be part
// //               of student life, we make sure it shows up in the right place, in the right way, with students who genuinely care.
// //             </p>

// //             <div className="reveal pt-6">
// //               <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-2 font-sans">Running right now</p>
// //               <ul>
// //                 {campaigns.map(({ icon: CampaignIcon, title, partner, desc }) => (
// //                   <li key={title} className="group flex gap-5 py-6 border-t border-white/[0.06] last:border-b">
// //                     <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
// //                       <CampaignIcon className="w-5 h-5 text-brand-red" strokeWidth={1.75} />
// //                     </div>
// //                     <div>
// //                       <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
// //                         <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase group-hover:text-brand-red transition-colors">
// //                           {title}
// //                         </h3>
// //                         <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">{partner}</span>
// //                       </div>
// //                       <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= JOBS ================= */}
// //       {roles.map((role, i) => (
// //         <JobSection key={role.id} role={role} index={i} />
// //       ))}

// //       <Footer />
// //     </div>
// //   )
// // }

// // export default Careers




// import { useLayoutEffect, useEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import {
//   MapPin,
//   Briefcase,
//   Wallet,
//   ArrowRight,
//   Check,
//   ChevronDown,
//   CheckCircle2,
//   AlertCircle,
//   Loader2,
//   Send,
//   Gamepad2,
//   GraduationCap,
//   Sparkles,
// } from 'lucide-react'
// import { useSEO } from '../hooks/useSEO'
// import Footer from '../components/Footer'

// gsap.registerPlugin(ScrollTrigger)

// /* ------------------------------------------------------------------ */
// /* Config                                                              */
// /* ------------------------------------------------------------------ */

// const CAREERS_EMAIL = 'careers@hypedin.co'

// // Google Apps Script web app that appends each application to the "Applications" sheet.
// // Sent as application/x-www-form-urlencoded (a "simple" request), so the browser skips the
// // CORS preflight that Apps Script can't answer. Do not add a JSON Content-Type header.
// const APPLICATION_ENDPOINT =
//   'https://script.google.com/macros/s/AKfycbwj8B0JnhiVcSDsoBDBh-GUcFOX9YucxbCaF7Wh6zGtPp0opDoW2bT3B87VV7AnOiEImQ/exec'

// const REQUEST_TIMEOUT_MS = 20000

// /* ------------------------------------------------------------------ */
// /* Content                                                             */
// /* ------------------------------------------------------------------ */

// const heroStats = [
//   { label: 'Open Roles', value: '02' },
//   { label: 'Brands', value: '24', suffix: '+' },
//   { label: 'Since', value: '2022' },
//   { label: 'Hiring', value: 'Pan India' },
// ]

// const campaigns = [
//   {
//     icon: Gamepad2,
//     title: 'BGMI Campus MVP',
//     partner: 'with KRAFTON India',
//     desc: 'Building BGMI gaming communities in colleges. Ambassadors run tournaments and scrims, create gaming content, host campus meetups and take their colleges into inter-college competitions.',
//   },
//   {
//     icon: GraduationCap,
//     title: 'Fateh Education Campus Ambassador Program',
//     partner: 'Study abroad, UK & Ireland',
//     desc: 'Fateh has helped Indian students study in the UK and Ireland since 2004. Our ambassadors take its counselling, scholarship and IELTS/PTE guidance to students, online and offline.',
//   },
//   {
//     icon: Sparkles,
//     title: 'Activations, Creators & Brand Programs',
//     partner: 'New campaigns launching all the time',
//     desc: 'Campus activations, creator campaigns and brand programs for leading names across tech, quick commerce, gaming, education and lifestyle.',
//   },
// ]

// const PHONE_PATTERN = '[0-9]{10}'

// const roles = [
//   {
//     id: 'community-lead',
//     title: 'Community Lead',
//     team: 'Community',
//     meta: [
//       { icon: MapPin, text: 'Sector 3, Noida' },
//       { icon: Briefcase, text: 'Full-time / Internship' },
//     ],
//     summary:
//       'We’re hiring Community Leads to build, manage and grow HYPEDIN’s student and campus community across colleges. This role is for someone who understands college culture, enjoys working with students and can build strong relationships with student leaders, societies, clubs and campus communities. You’ll drive community engagement, manage campus networks, coordinate student ambassadors and make sure participation stays strong across HYPEDIN initiatives.',
//     highlight:
//       'What matters most is your ability to connect with people, take ownership, coordinate multiple stakeholders and build an active community.',
//     groups: [
//       {
//         heading: 'Community Building & Management',
//         points: [
//           'Build and maintain strong relationships with college students, societies, clubs and student leaders',
//           'Grow and manage HYPEDIN’s network of student communities across campuses',
//           'Identify active student communities, influencers, societies and potential campus partners',
//           'Drive regular engagement and participation within the community',
//           'Create initiatives and engagement opportunities that keep students actively involved',
//           'Act as the primary point of contact for student communities and campus representatives',
//         ],
//       },
//       {
//         heading: 'Campus Ambassador Programs',
//         points: [
//           'Recruit, onboard and manage student ambassadors across colleges',
//           'Set clear tasks, targets and timelines for ambassadors',
//           'Track ambassador performance, engagement and deliverables',
//           'Motivate and retain high-performing ambassadors',
//           'Build a strong campus leadership network to support HYPEDIN’s campaigns',
//         ],
//       },
//       {
//         heading: 'Campaign & Event Support',
//         points: [
//           'Coordinate with student communities to execute brand campaigns and campus activations',
//           'Mobilise students for events, workshops, competitions and promotional initiatives',
//           'Make sure campaigns reach the right student audiences and hit participation targets',
//           'Coordinate with internal operations and brand teams for smooth execution',
//           'Handle on-ground and community-level challenges during campaigns',
//         ],
//       },
//       {
//         heading: 'Tracking & Reporting',
//         points: [
//           'Maintain community, ambassador and engagement trackers',
//           'Monitor participation, reach, conversions and other campaign metrics',
//           'Share regular updates and reports on community performance',
//           'Identify gaps in engagement and take corrective action',
//           'Suggest new ideas to improve community growth and participation',
//         ],
//       },
//     ],
//     lookingFor: [
//       'Prior experience in campus communities, college societies, events, student programs or ambassador programs is a strong plus',
//       'Strong understanding of college culture and student communities',
//       'Excellent communication and relationship-building skills',
//       'Ability to coordinate with multiple people and stakeholders at once',
//       'Comfortable reaching out to new people and building relationships from scratch',
//       'Strong ownership and follow-through',
//       'Ability to work independently and handle fast-moving situations',
//       'Organised, proactive and comfortable working with targets and timelines',
//       'A self-starter who enjoys working in a dynamic environment',
//     ],
//     niceToHave: [
//       'Experience managing a campus ambassador or student community program',
//       'Experience working with college societies, clubs, fests or student bodies',
//       'Experience in community building, events, marketing or youth engagement',
//       'An existing network across colleges or student communities',
//       'Experience managing teams of student ambassadors',
//       'Experience scaling communities or programs across multiple campuses',
//     ],
//     offer: null,
//     note: null,
//     fields: [
//       { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
//       { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
//       { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
//       { name: 'city', label: 'Current City', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Noida' },
//       { name: 'engagement', label: 'Applying For', type: 'select', required: true, options: ['Full-time', 'Internship'] },
//       { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work' },
//       { name: 'profileLink', label: 'Resume or LinkedIn Link', type: 'text', inputMode: 'url', required: true, placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
//       { name: 'experience', label: 'Campus / Community Experience', type: 'textarea', rows: 3, placeholder: 'Societies, fests, ambassador programs or communities you have run or been part of', full: true },
//       { name: 'locationOk', label: 'I can work from HYPEDIN’s office in Sector 3, Noida.', type: 'checkbox', required: true, full: true },
//     ],
//   },
//   {
//     id: 'city-lead',
//     title: 'City Lead, Campus Ambassador Programs',
//     team: 'Programs',
//     meta: [
//       { icon: MapPin, text: 'Remote, based in your own city' },
//       { icon: Briefcase, text: 'Program / Project / Full-time' },
//       { icon: Wallet, text: '₹5,000 to ₹10,000 / month' },
//     ],
//     summary:
//       'As City Lead, you are the face of HYPEDIN in your city. You’ll recruit and guide campus ambassadors, support them at their events and keep our team informed about what’s happening on the ground. You work from home and step out only for events in your city.',
//     highlight:
//       'Every campaign we run depends on a dependable person on the ground in each city. That’s the City Lead.',
//     groups: [
//       {
//         heading: 'What You’ll Do',
//         points: [
//           'Recruit campus ambassadors from colleges in your city',
//           'Manage your ambassadors and track their performance',
//           'Share a daily performance update with our team',
//           'Help ambassadors plan and run events at their colleges',
//           'Attend campus events in your city',
//           'Resolve ambassador queries quickly',
//           'Be the point of contact between your ambassadors and our team',
//         ],
//       },
//     ],
//     lookingFor: [
//       'Based in the city you’ll lead',
//       'A confident communicator who is comfortable with college students',
//       'Organised, reliable and strong at follow-ups and reporting',
//       'Experience with campus programs, student communities or events is a plus, but not required',
//     ],
//     niceToHave: null,
//     offer: [
//       '₹5,000 to ₹10,000 per month',
//       '2 casual leaves per month',
//       '100% work from home, with no relocation and no office visits',
//       'Flexible engagement: program-based, project-based or full-time',
//       'Hands-on experience running national campaigns for well-known brands',
//     ],
//     note: 'Saturdays are working days. Travel is limited to events in your city.',
//     fields: [
//       { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
//       { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
//       { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
//       { name: 'city', label: 'City You’ll Lead', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Jaipur' },
//       { name: 'engagement', label: 'Preferred Engagement', type: 'select', required: true, options: ['Program-based', 'Project-based', 'Full-time'] },
//       {
//         name: 'experience',
//         label: 'Campus Program Experience',
//         type: 'select',
//         required: true,
//         options: ['Yes, I have run or managed one', 'Yes, as an ambassador or volunteer', 'Not yet'],
//       },
//       { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work', full: true },
//       { name: 'profileLink', label: 'Resume or LinkedIn Link (optional)', type: 'text', inputMode: 'url', placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
//       { name: 'termsOk', label: 'I understand Saturdays are working days and travel is limited to events in my city.', type: 'checkbox', required: true, full: true },
//     ],
//   },
// ]

// /* ------------------------------------------------------------------ */
// /* Helpers                                                             */
// /* ------------------------------------------------------------------ */

// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// const PHONE_RE = /^[0-9]{10}$/

// // The Submit button stays disabled until these are filled in.
// // Other required fields (resume link, consent checkbox) are still enforced
// // by the browser's native validation when Submit is clicked.
// const isReadyToSubmit = (values) =>
//   values.fullName.trim() !== '' &&
//   EMAIL_RE.test(values.email.trim()) &&
//   PHONE_RE.test(values.phone) &&
//   values.city.trim() !== '' &&
//   values.engagement !== ''

// const initialValues = (fields) =>
//   fields.reduce((acc, f) => ({ ...acc, [f.name]: f.type === 'checkbox' ? false : '' }), { website: '' })

// const toReadable = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : value || '-')

// // Clean values for the sheet: Yes/No for checkboxes, trimmed text, blank instead of "-".
// const toSheetValue = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : String(value ?? '').trim())

// const buildMailto = (role, values) => {
//   const subject = `Application: ${role.title} - ${values.fullName}`
//   const body = [`Role: ${role.title}`, '', ...role.fields.map((f) => `${f.label}: ${toReadable(f, values[f.name])}`)].join('\n')
//   return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
// }

// const submitToSheet = async (role, values) => {
//   const payload = { role: role.title, source: 'hypedin.co/careers' }
//   role.fields.forEach((f) => {
//     payload[f.name] = toSheetValue(f, values[f.name])
//   })

//   const controller = new AbortController()
//   const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

//   try {
//     const res = await fetch(APPLICATION_ENDPOINT, {
//       method: 'POST',
//       body: new URLSearchParams(payload), // form-encoded, no preflight
//       redirect: 'follow', // Apps Script answers via a redirect to googleusercontent.com
//       signal: controller.signal,
//     })
//     if (!res.ok) throw new Error(`Request failed: ${res.status}`)

//     // The script returns HTTP 200 even on failure, so check its own success flag.
//     const data = await res.json().catch(() => null)
//     if (!data?.success) throw new Error(data?.message || 'The sheet did not confirm the save')
//   } finally {
//     clearTimeout(timer)
//   }
// }

// const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

// /* ------------------------------------------------------------------ */
// /* Small building blocks                                               */
// /* ------------------------------------------------------------------ */

// const SectionKicker = ({ index, label }) => (
//   <div className="inline-flex items-center gap-3 mb-4">
//     <span className="w-6 h-[1px] bg-brand-red/40"></span>
//     <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">
//       [ {index} / {label} ]
//     </span>
//     <span className="w-6 h-[1px] bg-brand-red/40"></span>
//   </div>
// )

// const BulletList = ({ items }) => (
//   <ul className="space-y-3">
//     {items.map((item) => (
//       <li key={item} className="flex gap-3 text-sm md:text-[15px] text-gray-400 leading-relaxed font-light">
//         <span className="mt-[9px] w-1.5 h-1.5 shrink-0 bg-brand-red rounded-full shadow-[0_0_6px_#FF0000]"></span>
//         <span>{item}</span>
//       </li>
//     ))}
//   </ul>
// )

// const DetailBlock = ({ title, children }) => (
//   <div className="reveal">
//     <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase tracking-wide mb-5 flex items-center gap-3">
//       <span className="w-4 h-[2px] bg-brand-red"></span>
//       {title}
//     </h3>
//     {children}
//   </div>
// )

// const inputBase =
//   'w-full bg-[#0c0c0c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 font-sans font-light outline-none transition-colors duration-300 focus:border-brand-red focus:bg-[#0f0f0f]'

// function FormField({ field, id, value, onChange }) {
//   if (field.type === 'checkbox') {
//     return (
//       <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group/check">
//         <span className="relative mt-0.5 shrink-0">
//           <input
//             id={id}
//             name={field.name}
//             type="checkbox"
//             checked={value}
//             onChange={onChange}
//             required={field.required}
//             className="peer absolute inset-0 opacity-0 cursor-pointer"
//           />
//           <span className="flex w-5 h-5 items-center justify-center rounded border border-white/20 bg-[#0c0c0c] transition-colors peer-checked:bg-brand-red peer-checked:border-brand-red peer-focus-visible:ring-2 peer-focus-visible:ring-brand-red/50">
//             {value && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
//           </span>
//         </span>
//         <span className="text-sm text-gray-400 font-sans font-light leading-relaxed group-hover/check:text-gray-300 transition-colors">
//           {field.label}
//         </span>
//       </label>
//     )
//   }

//   const label = (
//     <label htmlFor={id} className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 font-sans">
//       {field.label}
//       {field.required && <span className="text-brand-red ml-1">*</span>}
//     </label>
//   )

//   if (field.type === 'select') {
//     return (
//       <div>
//         {label}
//         <div className="relative">
//           <select
//             id={id}
//             name={field.name}
//             value={value}
//             onChange={onChange}
//             required={field.required}
//             className={`${inputBase} appearance-none pr-10 ${value ? '' : 'text-gray-600'}`}
//           >
//             <option value="" disabled className="bg-[#0c0c0c]">
//               Select one
//             </option>
//             {field.options.map((opt) => (
//               <option key={opt} value={opt} className="bg-[#0c0c0c] text-white">
//                 {opt}
//               </option>
//             ))}
//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
//         </div>
//       </div>
//     )
//   }

//   if (field.type === 'textarea') {
//     return (
//       <div>
//         {label}
//         <textarea
//           id={id}
//           name={field.name}
//           rows={field.rows || 4}
//           value={value}
//           onChange={onChange}
//           required={field.required}
//           placeholder={field.placeholder}
//           className={`${inputBase} resize-y min-h-[96px]`}
//         />
//       </div>
//     )
//   }

//   return (
//     <div>
//       {label}
//       <input
//         id={id}
//         name={field.name}
//         type={field.type}
//         value={value}
//         onChange={onChange}
//         required={field.required}
//         placeholder={field.placeholder}
//         autoComplete={field.autoComplete}
//         inputMode={field.type === 'tel' ? 'numeric' : field.inputMode}
//         pattern={field.pattern}
//         maxLength={field.type === 'tel' ? 10 : undefined}
//         title={field.type === 'tel' ? 'Enter a 10-digit phone number' : undefined}
//         className={inputBase}
//       />
//     </div>
//   )
// }

// function ApplicationForm({ role }) {
//   const [values, setValues] = useState(() => initialValues(role.fields))
//   const [status, setStatus] = useState('idle') // idle | sending | sent | error
//   const [submittedName, setSubmittedName] = useState('')

//   const canSubmit = isReadyToSubmit(values)
//   const isSending = status === 'sending'

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     const nextValue = type === 'checkbox' ? checked : type === 'tel' ? value.replace(/\D/g, '').slice(0, 10) : value
//     setValues((prev) => ({ ...prev, [name]: nextValue }))
//     if (status === 'error') setStatus('idle')
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (values.website) return // honeypot: bots fill hidden fields
//     if (!canSubmit || isSending) return

//     const firstName = values.fullName.trim().split(' ')[0]

//     setStatus('sending')
//     try {
//       await submitToSheet(role, values)
//       setSubmittedName(firstName)
//       setValues(initialValues(role.fields))
//       setStatus('sent')
//     } catch (err) {
//       console.error(err)
//       setStatus('error')
//     }
//   }

//   const reset = () => {
//     setValues(initialValues(role.fields))
//     setStatus('idle')
//   }

//   if (status === 'sent') {
//     return (
//       <div className="text-center py-10 px-2">
//         <div className="mx-auto w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
//           <CheckCircle2 className="w-8 h-8 text-brand-red" strokeWidth={1.75} />
//         </div>
//         <h4 className="font-heading text-2xl font-bold text-white uppercase mb-3">Application Received</h4>
//         <p className="font-sans text-gray-400 text-sm leading-relaxed font-light max-w-sm mx-auto mb-8">
//           Thanks{submittedName ? `, ${submittedName}` : ''}. Our team will go through your application and get in touch if it’s a
//           match.
//         </p>
//         <button
//           type="button"
//           onClick={reset}
//           className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-white/70 hover:text-white border-b border-white/20 hover:border-brand-red pb-1 transition-colors"
//         >
//           Submit another
//         </button>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       {/* Honeypot */}
//       <div className="hidden" aria-hidden="true">
//         <label>
//           Website
//           <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
//         </label>
//       </div>

//       <fieldset disabled={isSending} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//         {role.fields.map((field) => (
//           <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
//             <FormField field={field} id={`${role.id}-${field.name}`} value={values[field.name]} onChange={handleChange} />
//           </div>
//         ))}
//       </fieldset>

//       {status === 'error' && (
//         <div role="alert" className="flex items-start gap-3 p-3 rounded-lg border border-brand-red/30 bg-brand-red/5 text-sm text-gray-300 font-sans font-light">
//           <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" />
//           <span>
//             Something went wrong. Please try again, or email your details to{' '}
//             <a href={buildMailto(role, values)} className="text-white border-b border-brand-red/60">
//               {CAREERS_EMAIL}
//             </a>
//             .
//           </span>
//         </div>
//       )}

//       <button
//         type="submit"
//         disabled={!canSubmit || isSending}
//         aria-disabled={!canSubmit || isSending}
//         className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand-red text-white text-xs uppercase tracking-[0.3em] font-sans font-bold border border-brand-red transition-colors duration-300 enabled:hover:bg-transparent disabled:opacity-40 disabled:cursor-not-allowed"
//       >
//         {isSending ? (
//           <>
//             Sending <Loader2 className="w-4 h-4 animate-spin" />
//           </>
//         ) : (
//           <>
//             Submit Application <Send className="w-4 h-4" strokeWidth={2} />
//           </>
//         )}
//       </button>

//       <p className="text-[11px] text-gray-600 font-sans text-center">
//         {canSubmit ? (
//           <>
//             Fields marked <span className="text-brand-red">*</span> are required.
//           </>
//         ) : (
//           'Add your name, email, a 10-digit phone number, city and engagement type to submit.'
//         )}
//       </p>
//     </form>
//   )
// }

// function JobSection({ role, index }) {
//   const formId = `${role.id}-apply`

//   return (
//     <section
//       id={role.id}
//       className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-white/5 scroll-mt-24 ${
//         index % 2 === 0 ? 'bg-[#050505]' : 'bg-[#080808]'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="reveal relative pb-10 md:pb-12 mb-12 md:mb-16 border-b border-white/[0.06]">
//           <div className="absolute right-0 -top-10 text-[7rem] md:text-[11rem] leading-none font-heading font-bold text-white/[0.03] select-none pointer-events-none">
//             0{index + 1}
//           </div>

//           <SectionKicker index={`0${index + 2}`} label="Open Role" />

//           <div className="flex items-center gap-3 mb-5">
//             <span className="px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-sans text-brand-red border border-brand-red/30 bg-brand-red/5 rounded-full">
//               {role.team}
//             </span>
//             <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans">
//               <span className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_#FF0000] animate-pulse"></span>
//               Now hiring
//             </span>
//           </div>

//           <h2 className="relative font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-8 max-w-4xl">
//             {role.title}
//           </h2>

//           <div className="flex flex-wrap items-center gap-2">
//             {role.meta.map(({ icon: MetaIcon, text }) => (
//               <span
//                 key={text}
//                 className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-sans rounded border border-white/5"
//               >
//                 <MetaIcon className="w-3.5 h-3.5 text-brand-red" strokeWidth={1.75} />
//                 {text}
//               </span>
//             ))}
//             <button
//               type="button"
//               onClick={() => scrollToId(formId)}
//               className="lg:hidden inline-flex items-center gap-2 px-4 py-1.5 border border-brand-red text-white text-[10px] uppercase tracking-[0.25em] font-sans font-bold"
//             >
//               Apply Now <ArrowRight className="w-3.5 h-3.5" />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
//           {/* Job content */}
//           <div className="lg:col-span-7 space-y-12">
//             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">{role.summary}</p>

//             {role.highlight && (
//               <p className="reveal font-sans text-white text-base md:text-lg font-light leading-relaxed border-l-2 border-brand-red pl-5 bg-gradient-to-r from-brand-red/[0.06] to-transparent py-3">
//                 {role.highlight}
//               </p>
//             )}

//             {role.groups.map((group) => (
//               <DetailBlock key={group.heading} title={group.heading}>
//                 <BulletList items={group.points} />
//               </DetailBlock>
//             ))}

//             <DetailBlock title="What We’re Looking For">
//               <BulletList items={role.lookingFor} />
//             </DetailBlock>

//             {role.niceToHave && (
//               <DetailBlock title="Nice To Have">
//                 <BulletList items={role.niceToHave} />
//               </DetailBlock>
//             )}

//             {role.offer && (
//               <DetailBlock title="What We Offer">
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {role.offer.map((item) => (
//                     <li
//                       key={item}
//                       className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg text-sm text-gray-300 font-sans font-light leading-relaxed"
//                     >
//                       <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" strokeWidth={2.25} />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 {role.note && <p className="mt-5 text-xs text-gray-500 font-sans tracking-wide">{role.note}</p>}
//               </DetailBlock>
//             )}
//           </div>

//           {/* Application form */}
//           <div className="lg:col-span-5">
//             <div id={formId} className="lg:sticky lg:top-28 scroll-mt-28">
//               <div className="reveal relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-[0_0_80px_-30px_rgba(255,0,0,0.35)] overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent"></div>
//                 <p className="text-[10px] text-brand-red uppercase tracking-[0.3em] mb-2 font-sans font-bold">Apply Now</p>
//                 <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase leading-tight mb-2">{role.title}</h3>
//                 <p className="font-sans text-gray-500 text-sm font-light mb-8">Takes about two minutes.</p>
//                 <ApplicationForm role={role} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ------------------------------------------------------------------ */
// /* Page                                                                */
// /* ------------------------------------------------------------------ */

// export function Careers() {
//   useSEO({
//     title: 'Careers | HYPEDIN - Build India’s Campus Network',
//     description:
//       'Join HYPEDIN as a Community Lead or City Lead. Recruit campus ambassadors, build student communities and run national youth campaigns for leading brands.',
//     canonical: 'https://www.hypedin.co/careers',
//     ogTitle: 'Careers at HYPEDIN',
//     ogDescription: 'Build the campus network behind India’s biggest youth campaigns. Now hiring Community Leads and City Leads.',
//     keywords: 'HYPEDIN careers, campus ambassador jobs, community lead jobs Noida, city lead remote, youth marketing jobs India',
//   })

//   const rootRef = useRef(null)
//   const heroRef = useRef(null)

//   // Entrance + scroll animations
//   useLayoutEffect(() => {
//     const mm = gsap.matchMedia()

//     mm.add(
//       '(prefers-reduced-motion: no-preference)',
//       () => {
//         gsap.fromTo('.careers-glow', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' })

//         const tl = gsap.timeline({ delay: 0.2 })
//         tl.from('.hero-kicker', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
//           .from('.hero-line', { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'power4.out' }, '-=0.5')
//           .from('.hero-handwritten', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', duration: 1, ease: 'power3.out' }, '-=0.7')
//           .from('.hero-fade', { y: 24, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out' }, '-=0.8')

//         gsap.utils.toArray('.reveal').forEach((el) => {
//           gsap.from(el, {
//             y: 40,
//             opacity: 0,
//             duration: 0.9,
//             ease: 'power3.out',
//             scrollTrigger: { trigger: el, start: 'top 90%', once: true },
//           })
//         })
//       },
//       rootRef
//     )

//     return () => mm.revert()
//   }, [])

//   // Subtle glow parallax on the hero (desktop pointer only)
//   useEffect(() => {
//     const hero = heroRef.current
//     if (!hero || !window.matchMedia('(pointer: fine)').matches) return

//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2
//       const y = (e.clientY / window.innerHeight - 0.5) * 2
//       gsap.to('.careers-glow', { x: x * 40, y: y * 40, duration: 2.5 })
//     }

//     hero.addEventListener('mousemove', handleMouseMove)
//     return () => hero.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   return (
//     <div ref={rootRef}>
//       {/* ================= HERO ================= */}
//       <section
//         ref={heroRef}
//         className="relative min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505]"
//         style={{ paddingTop: 'calc(env(safe-area-inset-top) + 130px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 64px)' }}
//       >
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div className="absolute top-0 left-4 md:left-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
//           <div className="absolute top-0 right-4 md:right-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}
//           ></div>
//         </div>

//         <div className="careers-glow absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] bg-brand-red/[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

//         <div className="relative z-10 max-w-7xl mx-auto w-full">
//           <div className="hero-kicker flex items-center gap-4 mb-8 md:mb-10">
//             <span className="w-10 h-[2px] bg-brand-red"></span>
//             <span className="text-[11px] md:text-sm uppercase tracking-[0.45em] text-white/60 font-sans">
//               Careers at <span className="text-white font-bold">HYPEDIN</span>
//             </span>
//           </div>

//           <div className="relative">
//             <h2
//               className="hero-handwritten hidden sm:block absolute -top-8 right-0 md:right-[12%] lg:right-[22%] -rotate-6 font-handwritten text-2xl md:text-4xl text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20"
//               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
//             >
//               we’re hiring <span className="text-brand-red">_</span>
//             </h2>

//             <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.92] text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
//               <span className="block overflow-hidden pb-1">
//                 <span className="hero-line block text-brand-red">Build The</span>
//               </span>
//               <span className="block overflow-hidden pb-1">
//                 <span className="hero-line block text-brand-red">Campus</span>
//               </span>
//               <span className="block overflow-hidden pb-1">
//                 <span className="hero-line block text-white">Network.</span>
//               </span>
//             </h1>
//           </div>

//           <p className="hero-fade mt-8 md:mt-10 max-w-2xl font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
//             <span className="text-white font-medium">HYPEDIN</span> brings brands into student life across India. Behind every
//             campaign is a network of ambassadors, societies and student communities, and the people who keep it moving. That
//             could be you.
//           </p>

//           <div className="hero-fade mt-10 flex flex-col sm:flex-row gap-4">
//             {roles.map((role, i) => (
//               <button
//                 key={role.id}
//                 type="button"
//                 onClick={() => scrollToId(role.id)}
//                 className={`inline-flex items-center justify-center gap-3 px-8 py-4 border text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold transition-colors duration-300 ${
//                   i === 0
//                     ? 'border-brand-red text-white hover:bg-brand-red'
//                     : 'border-white/15 text-white/80 hover:border-white/50 hover:text-white'
//                 }`}
//               >
//                 {role.id === 'city-lead' ? 'City Lead' : role.title}
//                 <ArrowRight className="w-4 h-4" strokeWidth={2} />
//               </button>
//             ))}
//           </div>

//           <div className="hero-fade mt-16 md:mt-24 border-t border-white/[0.08] pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
//             {heroStats.map((stat) => (
//               <div key={stat.label} className="group cursor-default">
//                 <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
//                   {stat.label}
//                 </p>
//                 <div className="font-heading text-xl md:text-3xl text-white font-bold tracking-tight">
//                   {stat.value}
//                   {stat.suffix && <span className="text-brand-red text-lg md:text-2xl align-top">{stat.suffix}</span>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section id="about-hypedin" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#080808] border-t border-white/5 overflow-hidden">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

//         <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
//           <div className="reveal lg:col-span-5">
//             <SectionKicker index="01" label="About" />
//             <h2 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight">
//               About <span className="text-brand-red">HYPEDIN</span>
//             </h2>
//           </div>

//           <div className="lg:col-span-7 space-y-6">
//             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
//               HYPEDIN is a youth marketing agency that connects brands with India’s college students and young adults. We work
//               with brands like Google, Amazon and Blinkit, and bring them to life through campus ambassador programs, influencer
//               and creator campaigns, community building, event amplification, digital promotions and on-ground activations.
//             </p>
//             <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
//               Our strength is the network behind every campaign: thousands of college societies, clubs and student communities
//               across the country, and the ambassadors who represent brands on their own campuses. When a brand wants to be part
//               of student life, we make sure it shows up in the right place, in the right way, with students who genuinely care.
//             </p>

//             <div className="reveal pt-6">
//               <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-2 font-sans">Running right now</p>
//               <ul>
//                 {campaigns.map(({ icon: CampaignIcon, title, partner, desc }) => (
//                   <li key={title} className="group flex gap-5 py-6 border-t border-white/[0.06] last:border-b">
//                     <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
//                       <CampaignIcon className="w-5 h-5 text-brand-red" strokeWidth={1.75} />
//                     </div>
//                     <div>
//                       <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
//                         <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase group-hover:text-brand-red transition-colors">
//                           {title}
//                         </h3>
//                         <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">{partner}</span>
//                       </div>
//                       <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= JOBS ================= */}
//       {roles.map((role, i) => (
//         <JobSection key={role.id} role={role} index={i} />
//       ))}

//       <Footer />
//     </div>
//   )
// }

// export default Careers




import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MapPin,
  Briefcase,
  Wallet,
  ArrowRight,
  Check,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Gamepad2,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const CAREERS_EMAIL = 'careers@hypedin.co'

// Google Apps Script web app that appends each application to the "Applications" sheet.
// Sent as application/x-www-form-urlencoded (a "simple" request), so the browser skips the
// CORS preflight that Apps Script can't answer. Do not add a JSON Content-Type header.
const APPLICATION_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwj8B0JnhiVcSDsoBDBh-GUcFOX9YucxbCaF7Wh6zGtPp0opDoW2bT3B87VV7AnOiEImQ/exec'

const REQUEST_TIMEOUT_MS = 20000

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const heroStats = [
  { label: 'Open Roles', value: '02' },
  { label: 'Brands', value: '24', suffix: '+' },
  { label: 'Since', value: '2022' },
  { label: 'Hiring', value: 'Pan India' },
]

const campaigns = [
  {
    icon: Gamepad2,
    title: 'BGMI Campus MVP',
    partner: 'with KRAFTON India',
    desc: 'Building BGMI gaming communities in colleges. Ambassadors run tournaments and scrims, create gaming content, host campus meetups and take their colleges into inter-college competitions.',
  },
  {
    icon: GraduationCap,
    title: 'Fateh Education Campus Ambassador Program',
    partner: 'Study abroad, UK & Ireland',
    desc: 'Fateh has helped Indian students study in the UK and Ireland since 2004. Our ambassadors take its counselling, scholarship and IELTS/PTE guidance to students, online and offline.',
  },
  {
    icon: Sparkles,
    title: 'Activations, Creators & Brand Programs',
    partner: 'New campaigns launching all the time',
    desc: 'Campus activations, creator campaigns and brand programs for leading names across tech, quick commerce, gaming, education and lifestyle.',
  },
]

const PHONE_PATTERN = '[0-9]{10}'

const roles = [
  {
    id: 'community-lead',
    title: 'Community Lead',
    team: 'Community',
    meta: [
      { icon: MapPin, text: 'Sector 3, Noida' },
      { icon: Briefcase, text: 'Full-time / Internship' },
    ],
    summary:
      'We’re hiring Community Leads to build, manage and grow HYPEDIN’s student and campus community across colleges. This role is for someone who understands college culture, enjoys working with students and can build strong relationships with student leaders, societies, clubs and campus communities. You’ll drive community engagement, manage campus networks, coordinate student ambassadors and make sure participation stays strong across HYPEDIN initiatives.',
    highlight:
      'What matters most is your ability to connect with people, take ownership, coordinate multiple stakeholders and build an active community.',
    groups: [
      {
        heading: 'Community Building & Management',
        points: [
          'Build and maintain strong relationships with college students, societies, clubs and student leaders',
          'Grow and manage HYPEDIN’s network of student communities across campuses',
          'Identify active student communities, influencers, societies and potential campus partners',
          'Drive regular engagement and participation within the community',
          'Create initiatives and engagement opportunities that keep students actively involved',
          'Act as the primary point of contact for student communities and campus representatives',
        ],
      },
      {
        heading: 'Campus Ambassador Programs',
        points: [
          'Recruit, onboard and manage student ambassadors across colleges',
          'Set clear tasks, targets and timelines for ambassadors',
          'Track ambassador performance, engagement and deliverables',
          'Motivate and retain high-performing ambassadors',
          'Build a strong campus leadership network to support HYPEDIN’s campaigns',
        ],
      },
      {
        heading: 'Campaign & Event Support',
        points: [
          'Coordinate with student communities to execute brand campaigns and campus activations',
          'Mobilise students for events, workshops, competitions and promotional initiatives',
          'Make sure campaigns reach the right student audiences and hit participation targets',
          'Coordinate with internal operations and brand teams for smooth execution',
          'Handle on-ground and community-level challenges during campaigns',
        ],
      },
      {
        heading: 'Tracking & Reporting',
        points: [
          'Maintain community, ambassador and engagement trackers',
          'Monitor participation, reach, conversions and other campaign metrics',
          'Share regular updates and reports on community performance',
          'Identify gaps in engagement and take corrective action',
          'Suggest new ideas to improve community growth and participation',
        ],
      },
    ],
    lookingFor: [
      'Prior experience in campus communities, college societies, events, student programs or ambassador programs is a strong plus',
      'Strong understanding of college culture and student communities',
      'Excellent communication and relationship-building skills',
      'Ability to coordinate with multiple people and stakeholders at once',
      'Comfortable reaching out to new people and building relationships from scratch',
      'Strong ownership and follow-through',
      'Ability to work independently and handle fast-moving situations',
      'Organised, proactive and comfortable working with targets and timelines',
      'A self-starter who enjoys working in a dynamic environment',
    ],
    niceToHave: [
      'Experience managing a campus ambassador or student community program',
      'Experience working with college societies, clubs, fests or student bodies',
      'Experience in community building, events, marketing or youth engagement',
      'An existing network across colleges or student communities',
      'Experience managing teams of student ambassadors',
      'Experience scaling communities or programs across multiple campuses',
    ],
    offer: null,
    note: null,
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
      { name: 'city', label: 'Current City', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Noida' },
      { name: 'engagement', label: 'Applying For', type: 'select', required: true, options: ['Full-time', 'Internship'] },
      { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work' },
      { name: 'profileLink', label: 'Resume or LinkedIn Link', type: 'text', inputMode: 'url', required: true, placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
      { name: 'experience', label: 'Campus / Community Experience', type: 'textarea', rows: 3, placeholder: 'Societies, fests, ambassador programs or communities you have run or been part of', full: true },
      { name: 'locationOk', label: 'I can work from HYPEDIN’s office in Sector 3, Noida.', type: 'checkbox', full: true },
    ],
  },
  {
    id: 'city-lead',
    title: 'City Lead, Campus Ambassador Programs',
    team: 'Programs',
    meta: [
      { icon: MapPin, text: 'Remote, based in your own city' },
      { icon: Briefcase, text: 'Program / Project / Full-time' },
      { icon: Wallet, text: '₹5,000 to ₹10,000 / month' },
    ],
    summary:
      'As City Lead, you are the face of HYPEDIN in your city. You’ll recruit and guide campus ambassadors, support them at their events and keep our team informed about what’s happening on the ground. You work from home and step out only for events in your city.',
    highlight:
      'Every campaign we run depends on a dependable person on the ground in each city. That’s the City Lead.',
    groups: [
      {
        heading: 'What You’ll Do',
        points: [
          'Recruit campus ambassadors from colleges in your city',
          'Manage your ambassadors and track their performance',
          'Share a daily performance update with our team',
          'Help ambassadors plan and run events at their colleges',
          'Attend campus events in your city',
          'Resolve ambassador queries quickly',
          'Be the point of contact between your ambassadors and our team',
        ],
      },
    ],
    lookingFor: [
      'Based in the city you’ll lead',
      'A confident communicator who is comfortable with college students',
      'Organised, reliable and strong at follow-ups and reporting',
      'Experience with campus programs, student communities or events is a plus, but not required',
    ],
    niceToHave: null,
    offer: [
      '₹5,000 to ₹10,000 per month',
      '2 casual leaves per month',
      '100% work from home, with no relocation and no office visits',
      'Flexible engagement: program-based, project-based or full-time',
      'Hands-on experience running national campaigns for well-known brands',
    ],
    note: 'Saturdays are working days. Travel is limited to events in your city.',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, autoComplete: 'name', placeholder: 'Your name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', placeholder: '9876543210', pattern: PHONE_PATTERN },
      { name: 'city', label: 'City You’ll Lead', type: 'text', required: true, autoComplete: 'address-level2', placeholder: 'e.g. Jaipur' },
      { name: 'engagement', label: 'Preferred Engagement', type: 'select', required: true, options: ['Program-based', 'Project-based', 'Full-time'] },
      {
        name: 'experience',
        label: 'Campus Program Experience',
        type: 'select',
        required: true,
        options: ['Yes, I have run or managed one', 'Yes, as an ambassador or volunteer', 'Not yet'],
      },
      { name: 'college', label: 'College / Current Organisation', type: 'text', placeholder: 'Where you study or work', full: true },
      { name: 'profileLink', label: 'Resume or LinkedIn Link (optional)', type: 'text', inputMode: 'url', placeholder: 'Google Drive, LinkedIn or portfolio link', full: true },
      { name: 'termsOk', label: 'I understand Saturdays are working days and travel is limited to events in my city.', type: 'checkbox', full: true },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[0-9]{10}$/

// The Submit button stays disabled until these are filled in.
// The consent checkbox is optional: unchecked is saved to the sheet as "No".
// The Community Lead resume link is still required and enforced
// by the browser's native validation when Submit is clicked.
const isReadyToSubmit = (values) =>
  values.fullName.trim() !== '' &&
  EMAIL_RE.test(values.email.trim()) &&
  PHONE_RE.test(values.phone) &&
  values.city.trim() !== '' &&
  values.engagement !== ''

const initialValues = (fields) =>
  fields.reduce((acc, f) => ({ ...acc, [f.name]: f.type === 'checkbox' ? false : '' }), { website: '' })

const toReadable = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : value || '-')

// Clean values for the sheet: Yes/No for checkboxes, trimmed text, blank instead of "-".
const toSheetValue = (field, value) => (field.type === 'checkbox' ? (value ? 'Yes' : 'No') : String(value ?? '').trim())

const buildMailto = (role, values) => {
  const subject = `Application: ${role.title} - ${values.fullName}`
  const body = [`Role: ${role.title}`, '', ...role.fields.map((f) => `${f.label}: ${toReadable(f, values[f.name])}`)].join('\n')
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const submitToSheet = async (role, values) => {
  const payload = { role: role.title, source: 'hypedin.co/careers' }
  role.fields.forEach((f) => {
    payload[f.name] = toSheetValue(f, values[f.name])
  })

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const res = await fetch(APPLICATION_ENDPOINT, {
      method: 'POST',
      body: new URLSearchParams(payload), // form-encoded, no preflight
      redirect: 'follow', // Apps Script answers via a redirect to googleusercontent.com
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)

    // The script returns HTTP 200 even on failure, so check its own success flag.
    const data = await res.json().catch(() => null)
    if (!data?.success) throw new Error(data?.message || 'The sheet did not confirm the save')
  } finally {
    clearTimeout(timer)
  }
}

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const SectionKicker = ({ index, label }) => (
  <div className="inline-flex items-center gap-3 mb-4">
    <span className="w-6 h-[1px] bg-brand-red/40"></span>
    <span className="font-heading text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase">
      [ {index} / {label} ]
    </span>
    <span className="w-6 h-[1px] bg-brand-red/40"></span>
  </div>
)

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm md:text-[15px] text-gray-400 leading-relaxed font-light">
        <span className="mt-[9px] w-1.5 h-1.5 shrink-0 bg-brand-red rounded-full shadow-[0_0_6px_#FF0000]"></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const DetailBlock = ({ title, children }) => (
  <div className="reveal">
    <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase tracking-wide mb-5 flex items-center gap-3">
      <span className="w-4 h-[2px] bg-brand-red"></span>
      {title}
    </h3>
    {children}
  </div>
)

const inputBase =
  'w-full bg-[#0c0c0c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 font-sans font-light outline-none transition-colors duration-300 focus:border-brand-red focus:bg-[#0f0f0f]'

function FormField({ field, id, value, onChange }) {
  if (field.type === 'checkbox') {
    return (
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group/check">
        <span className="relative mt-0.5 shrink-0">
          <input
            id={id}
            name={field.name}
            type="checkbox"
            checked={value}
            onChange={onChange}
            required={field.required}
            className="peer absolute inset-0 opacity-0 cursor-pointer"
          />
          <span className="flex w-5 h-5 items-center justify-center rounded border border-white/20 bg-[#0c0c0c] transition-colors peer-checked:bg-brand-red peer-checked:border-brand-red peer-focus-visible:ring-2 peer-focus-visible:ring-brand-red/50">
            {value && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
          </span>
        </span>
        <span className="text-sm text-gray-400 font-sans font-light leading-relaxed group-hover/check:text-gray-300 transition-colors">
          {field.label}
        </span>
      </label>
    )
  }

  const label = (
    <label htmlFor={id} className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 font-sans">
      {field.label}
      {field.required && <span className="text-brand-red ml-1">*</span>}
    </label>
  )

  if (field.type === 'select') {
    return (
      <div>
        {label}
        <div className="relative">
          <select
            id={id}
            name={field.name}
            value={value}
            onChange={onChange}
            required={field.required}
            className={`${inputBase} appearance-none pr-10 ${value ? '' : 'text-gray-600'}`}
          >
            <option value="" disabled className="bg-[#0c0c0c]">
              Select one
            </option>
            {field.options.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0c0c0c] text-white">
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
    )
  }

  if (field.type === 'textarea') {
    return (
      <div>
        {label}
        <textarea
          id={id}
          name={field.name}
          rows={field.rows || 4}
          value={value}
          onChange={onChange}
          required={field.required}
          placeholder={field.placeholder}
          className={`${inputBase} resize-y min-h-[96px]`}
        />
      </div>
    )
  }

  return (
    <div>
      {label}
      <input
        id={id}
        name={field.name}
        type={field.type}
        value={value}
        onChange={onChange}
        required={field.required}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        inputMode={field.type === 'tel' ? 'numeric' : field.inputMode}
        pattern={field.pattern}
        maxLength={field.type === 'tel' ? 10 : undefined}
        title={field.type === 'tel' ? 'Enter a 10-digit phone number' : undefined}
        className={inputBase}
      />
    </div>
  )
}

function ApplicationForm({ role }) {
  const [values, setValues] = useState(() => initialValues(role.fields))
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [submittedName, setSubmittedName] = useState('')

  const canSubmit = isReadyToSubmit(values)
  const isSending = status === 'sending'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const nextValue = type === 'checkbox' ? checked : type === 'tel' ? value.replace(/\D/g, '').slice(0, 10) : value
    setValues((prev) => ({ ...prev, [name]: nextValue }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (values.website) return // honeypot: bots fill hidden fields
    if (!canSubmit || isSending) return

    const firstName = values.fullName.trim().split(' ')[0]

    setStatus('sending')
    try {
      await submitToSheet(role, values)
      setSubmittedName(firstName)
      setValues(initialValues(role.fields))
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(initialValues(role.fields))
    setStatus('idle')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-10 px-2">
        <div className="mx-auto w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-brand-red" strokeWidth={1.75} />
        </div>
        <h4 className="font-heading text-2xl font-bold text-white uppercase mb-3">Application Received</h4>
        <p className="font-sans text-gray-400 text-sm leading-relaxed font-light max-w-sm mx-auto mb-8">
          Thanks{submittedName ? `, ${submittedName}` : ''}. Our team will go through your application and get in touch if it’s a
          match.
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-white/70 hover:text-white border-b border-white/20 hover:border-brand-red pb-1 transition-colors"
        >
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
        </label>
      </div>

      <fieldset disabled={isSending} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {role.fields.map((field) => (
          <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
            <FormField field={field} id={`${role.id}-${field.name}`} value={values[field.name]} onChange={handleChange} />
          </div>
        ))}
      </fieldset>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 p-3 rounded-lg border border-brand-red/30 bg-brand-red/5 text-sm text-gray-300 font-sans font-light">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" />
          <span>
            Something went wrong. Please try again, or email your details to{' '}
            <a href={buildMailto(role, values)} className="text-white border-b border-brand-red/60">
              {CAREERS_EMAIL}
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit || isSending}
        aria-disabled={!canSubmit || isSending}
        className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand-red text-white text-xs uppercase tracking-[0.3em] font-sans font-bold border border-brand-red transition-colors duration-300 enabled:hover:bg-transparent disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSending ? (
          <>
            Sending <Loader2 className="w-4 h-4 animate-spin" />
          </>
        ) : (
          <>
            Submit Application <Send className="w-4 h-4" strokeWidth={2} />
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-600 font-sans text-center">
        {canSubmit ? (
          <>
            Fields marked <span className="text-brand-red">*</span> are required.
          </>
        ) : (
          'Add your name, email, a 10-digit phone number, city and engagement type to submit.'
        )}
      </p>
    </form>
  )
}

function JobSection({ role, index }) {
  const formId = `${role.id}-apply`

  return (
    <section
      id={role.id}
      className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-white/5 scroll-mt-24 ${
        index % 2 === 0 ? 'bg-[#050505]' : 'bg-[#080808]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal relative pb-10 md:pb-12 mb-12 md:mb-16 border-b border-white/[0.06]">
          <div className="absolute right-0 -top-10 text-[7rem] md:text-[11rem] leading-none font-heading font-bold text-white/[0.03] select-none pointer-events-none">
            0{index + 1}
          </div>

          <SectionKicker index={`0${index + 2}`} label="Open Role" />

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-sans text-brand-red border border-brand-red/30 bg-brand-red/5 rounded-full">
              {role.team}
            </span>
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_#FF0000] animate-pulse"></span>
              Now hiring
            </span>
          </div>

          <h2 className="relative font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-8 max-w-4xl">
            {role.title}
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {role.meta.map(({ icon: MetaIcon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-sans rounded border border-white/5"
              >
                <MetaIcon className="w-3.5 h-3.5 text-brand-red" strokeWidth={1.75} />
                {text}
              </span>
            ))}
            <button
              type="button"
              onClick={() => scrollToId(formId)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-1.5 border border-brand-red text-white text-[10px] uppercase tracking-[0.25em] font-sans font-bold"
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Job content */}
          <div className="lg:col-span-7 space-y-12">
            <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">{role.summary}</p>

            {role.highlight && (
              <p className="reveal font-sans text-white text-base md:text-lg font-light leading-relaxed border-l-2 border-brand-red pl-5 bg-gradient-to-r from-brand-red/[0.06] to-transparent py-3">
                {role.highlight}
              </p>
            )}

            {role.groups.map((group) => (
              <DetailBlock key={group.heading} title={group.heading}>
                <BulletList items={group.points} />
              </DetailBlock>
            ))}

            <DetailBlock title="What We’re Looking For">
              <BulletList items={role.lookingFor} />
            </DetailBlock>

            {role.niceToHave && (
              <DetailBlock title="Nice To Have">
                <BulletList items={role.niceToHave} />
              </DetailBlock>
            )}

            {role.offer && (
              <DetailBlock title="What We Offer">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {role.offer.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg text-sm text-gray-300 font-sans font-light leading-relaxed"
                    >
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-red" strokeWidth={2.25} />
                      {item}
                    </li>
                  ))}
                </ul>
                {role.note && <p className="mt-5 text-xs text-gray-500 font-sans tracking-wide">{role.note}</p>}
              </DetailBlock>
            )}
          </div>

          {/* Application form */}
          <div className="lg:col-span-5">
            <div id={formId} className="lg:sticky lg:top-28 scroll-mt-28">
              <div className="reveal relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-[0_0_80px_-30px_rgba(255,0,0,0.35)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent"></div>
                <p className="text-[10px] text-brand-red uppercase tracking-[0.3em] mb-2 font-sans font-bold">Apply Now</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase leading-tight mb-2">{role.title}</h3>
                <p className="font-sans text-gray-500 text-sm font-light mb-8">Takes about two minutes.</p>
                <ApplicationForm role={role} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function Careers() {
  useSEO({
    title: 'Careers | HYPEDIN - Build India’s Campus Network',
    description:
      'Join HYPEDIN as a Community Lead or City Lead. Recruit campus ambassadors, build student communities and run national youth campaigns for leading brands.',
    canonical: 'https://www.hypedin.co/careers',
    ogTitle: 'Careers at HYPEDIN',
    ogDescription: 'Build the campus network behind India’s biggest youth campaigns. Now hiring Community Leads and City Leads.',
    keywords: 'HYPEDIN careers, campus ambassador jobs, community lead jobs Noida, city lead remote, youth marketing jobs India',
  })

  const rootRef = useRef(null)
  const heroRef = useRef(null)

  // Entrance + scroll animations
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        gsap.fromTo('.careers-glow', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' })

        const tl = gsap.timeline({ delay: 0.2 })
        tl.from('.hero-kicker', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
          .from('.hero-line', { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'power4.out' }, '-=0.5')
          .from('.hero-handwritten', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', duration: 1, ease: 'power3.out' }, '-=0.7')
          .from('.hero-fade', { y: 24, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out' }, '-=0.8')

        gsap.utils.toArray('.reveal').forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          })
        })
      },
      rootRef
    )

    return () => mm.revert()
  }, [])

  // Subtle glow parallax on the hero (desktop pointer only)
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(pointer: fine)').matches) return

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      gsap.to('.careers-glow', { x: x * 40, y: y * 40, duration: 2.5 })
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={rootRef}>
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505]"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 130px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 64px)' }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-4 md:left-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
          <div className="absolute top-0 right-4 md:right-24 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          ></div>
        </div>

        <div className="careers-glow absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] bg-brand-red/[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="hero-kicker flex items-center gap-4 mb-8 md:mb-10">
            <span className="w-10 h-[2px] bg-brand-red"></span>
            <span className="text-[11px] md:text-sm uppercase tracking-[0.45em] text-white/60 font-sans">
              Careers at <span className="text-white font-bold">HYPEDIN</span>
            </span>
          </div>

          <div className="relative">
            {/* <h2
              className="hero-handwritten hidden sm:block absolute -top-8 right-0 md:right-[12%] lg:right-[22%] -rotate-6 font-handwritten text-2xl md:text-4xl text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            >
              we’re hiring <span className="text-brand-red">_</span>
            </h2> */}

            <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.92] text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
              <span className="block overflow-hidden pb-1">
                <span className="hero-line block text-brand-red">Create Culture</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-line block text-brand-red">Inspire Influence</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-line block text-white">Make Impact.</span>
              </span>
            </h1>
          </div>

          <p className="hero-fade mt-8 md:mt-10 max-w-2xl font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
            <span className="text-white font-medium">HYPEDIN</span> brings brands into student life across India. Behind every
            campaign is a network of ambassadors, societies and student communities, and the people who keep it moving. That
            could be you.
          </p>

          <div className="hero-fade mt-10 flex flex-col sm:flex-row gap-4">
            {roles.map((role, i) => (
              <button
                key={role.id}
                type="button"
                onClick={() => scrollToId(role.id)}
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 border text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold transition-colors duration-300 ${
                  i === 0
                    ? 'border-brand-red text-white hover:bg-brand-red'
                    : 'border-white/15 text-white/80 hover:border-white/50 hover:text-white'
                }`}
              >
                {role.id === 'city-lead' ? 'City Lead' : role.title}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
            ))}
          </div>

          <div className="hero-fade mt-16 md:mt-24 border-t border-white/[0.08] pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-red transition-colors">
                  {stat.label}
                </p>
                <div className="font-heading text-xl md:text-3xl text-white font-bold tracking-tight">
                  {stat.value}
                  {stat.suffix && <span className="text-brand-red text-lg md:text-2xl align-top">{stat.suffix}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about-hypedin" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#080808] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <SectionKicker index="01" label="About" />
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-[0.95] tracking-tight">
              About <span className="text-brand-red">HYPEDIN</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
              HYPEDIN is a youth marketing agency that connects brands with India’s college students and young adults. We work
              with brands like Google, Amazon and Blinkit, and bring them to life through campus ambassador programs, influencer
              and creator campaigns, community building, event amplification, digital promotions and on-ground activations.
            </p>
            <p className="reveal font-sans text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Our strength is the network behind every campaign: thousands of college societies, clubs and student communities
              across the country, and the ambassadors who represent brands on their own campuses. When a brand wants to be part
              of student life, we make sure it shows up in the right place, in the right way, with students who genuinely care.
            </p>

            <div className="reveal pt-6">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-2 font-sans">Running right now</p>
              <ul>
                {campaigns.map(({ icon: CampaignIcon, title, partner, desc }) => (
                  <li key={title} className="group flex gap-5 py-6 border-t border-white/[0.06] last:border-b">
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                      <CampaignIcon className="w-5 h-5 text-brand-red" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                        <h3 className="font-heading text-base md:text-lg font-bold text-white uppercase group-hover:text-brand-red transition-colors">
                          {title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">{partner}</span>
                      </div>
                      <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOBS ================= */}
      {roles.map((role, i) => (
        <JobSection key={role.id} role={role} index={i} />
      ))}

      <Footer />
    </div>
  )
}

export default Careers
