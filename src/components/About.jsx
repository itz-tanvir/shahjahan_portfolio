import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import munImg from '../assets/mun.jpeg'
import sittingImg from '../assets/sitting.jpeg'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B]/4 via-transparent to-[#FFC72C]/4" />

      {/* Horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC72C]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#FFC72C',
            letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.7}}>
            — Know Your Counsel —
          </span>
          <h2 className="mt-3 section-title text-5xl md:text-6xl text-[#F5F0E8]">
            About <span style={{color: '#FFC72C'}}>Shahjahan</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#FFC72C] mx-auto mt-4" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image collage */}
          <FadeIn delay={0.2} className="relative h-[500px] lg:h-[600px]">
            {/* Main image – MUN group */}
            <div className="absolute top-0 left-0 w-[75%] h-[70%] overflow-hidden"
              style={{boxShadow: '8px 8px 40px rgba(0,0,0,0.6)', border: '1px solid rgba(255,199,44,0.15)'}}>
              <img src={munImg} alt="Daffodil International MUN 2025" className="w-full h-full object-cover object-top"
                style={{filter: 'contrast(1.05) saturate(0.85)'}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', color: '#FFC72C',
                  letterSpacing: '0.18em', background: 'rgba(10,10,10,0.85)', padding: '3px 8px'}}>
                  DAFFODIL INTERNATIONAL MUN '25 · GALA DINNER
                </span>
              </div>
            </div>

            {/* Secondary image – sitting/working */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] overflow-hidden"
              style={{boxShadow: '8px 8px 40px rgba(0,0,0,0.7)', border: '1px solid rgba(192,57,43,0.25)'}}>
              <img src={sittingImg} alt="Minister of Industries at MUN" className="w-full h-full object-cover object-top"
                style={{filter: 'contrast(1.05) saturate(0.85)'}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', color: '#F5F0E8',
                  letterSpacing: '0.12em', background: 'rgba(192,57,43,0.85)', padding: '3px 8px'}}>
                  MINISTER OF INDUSTRIES
                </span>
              </div>
            </div>

            {/* Gold accent block */}
            <div className="absolute top-[68%] left-0 w-[20%] h-px bg-[#FFC72C]" />
            <div className="absolute top-[calc(68%+8px)] left-0">
              <span style={{fontFamily: 'Oswald, sans-serif', fontSize: '11px', color: '#FFC72C', letterSpacing: '0.15em'}}>
                DIU MUN 2025
              </span>
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.3}>
              <h3 style={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#FFC72C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px'}}>
                The Counsel
              </h3>
              <p style={{fontFamily: 'Crimson Pro, serif', fontSize: '19px', lineHeight: 1.8, color: '#F5F0E8', opacity: 0.85}}>
                Shahjahan Chowdhury is a law student at Leading University, Sylhet, pursuing an LLB with a commitment to excellence in legal practice. With a sharp analytical mind and a passion for justice, he is building the expertise to become a formidable legal professional.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p style={{fontFamily: 'Crimson Pro, serif', fontSize: '18px', lineHeight: 1.8, color: '#F5F0E8', opacity: 0.7}}>
                His dedication extends beyond the classroom — Shahjahan participated in the <strong style={{color: '#FFC72C'}}>Daffodil International MUN 2025</strong>, representing his nation as <strong style={{color: '#FFC72C'}}>Minister of Industries</strong>. This experience honed his diplomatic reasoning, public speaking, and policy-drafting skills — essential tools for any future legal counsel.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { label: 'Institution', value: 'Leading University, Sylhet' },
                  { label: 'Degree', value: 'LLB (In Progress)' },
                  { label: 'MUN Role', value: 'Minister of Industries' },
                  { label: 'Location', value: 'Subidbazar, Sylhet' },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#FFC72C]/40 pl-4 py-1">
                    <div style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                      color: '#FFC72C', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7}}>
                      {item.label}
                    </div>
                    <div style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px', color: '#F5F0E8', marginTop: '2px'}}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(255,199,44,0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 inline-flex items-center gap-3 bg-transparent border border-[#FFC72C]/50 text-[#FFC72C] px-6 py-3 text-sm hover:bg-[#FFC72C] hover:text-[#0A0A0A] transition-all duration-300"
                style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase'}}
              >
                Work With Me
                <span>→</span>
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC72C]/20 to-transparent" />
    </section>
  )
}
