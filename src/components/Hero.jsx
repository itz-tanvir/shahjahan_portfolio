import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import profileImg from '../assets/fullbody.jpeg'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{paddingTop: '80px'}}>
      {/* Background layers */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Deep cinematic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111005] to-[#0A0A0A]" />
        {/* Subtle yellow glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFC72C]/6 to-transparent" />
        {/* Bottom crimson glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#C0392B]/8 to-transparent" />
        {/* Diagonal lines – cinematic texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'repeating-linear-gradient(45deg, #FFC72C 0px, #FFC72C 1px, transparent 1px, transparent 40px)'}} />
      </motion.div>

      {/* Large decorative letter */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 select-none pointer-events-none"
        style={{fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(200px, 35vw, 500px)', fontWeight: 900,
          color: 'transparent', WebkitTextStroke: '1px rgba(255,199,44,0.04)', lineHeight: 1}}>
        LAW
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-80px)]">

          {/* LEFT – Text Content */}
          <motion.div style={{ opacity }} className="flex flex-col justify-center py-16 lg:py-0">

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#FFC72C]" />
              <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#FFC72C', letterSpacing: '0.2em'}}>
                LLB · LEADING UNIVERSITY · SYLHET
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{fontFamily: 'Oswald, sans-serif', fontWeight: 300, fontSize: 'clamp(16px, 3vw, 22px)',
                color: '#F5F0E8', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '4px', opacity: 0.6}}>
                Better Call
              </div>
              <h1 style={{fontFamily: 'Oswald, sans-serif', fontWeight: 700,
                fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: 0.9, letterSpacing: '-0.02em',
                color: '#FFC72C', textShadow: '0 0 60px rgba(255,199,44,0.25), 4px 4px 0px rgba(192,57,43,0.3)'}}>
                SHAHJAHAN
              </h1>
              <div style={{fontFamily: 'Crimson Pro, serif', fontStyle: 'italic', fontWeight: 300,
                fontSize: 'clamp(28px, 5vw, 56px)', color: '#F5F0E8', marginTop: '4px', letterSpacing: '0.02em', opacity: 0.85}}>
                Chowdhury
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="origin-left my-8 flex items-center gap-4"
            >
              <div className="h-px bg-[#FFC72C] flex-1 max-w-[80px]" />
              <div className="w-2 h-2 bg-[#C0392B] rotate-45" />
              <div className="h-px bg-[#F5F0E8]/20 flex-1" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{fontFamily: 'Crimson Pro, serif', fontSize: '18px', lineHeight: 1.7,
                color: '#F5F0E8', opacity: 0.75, maxWidth: '480px'}}
            >
              A future legal professional with a sharp mind and sharper arguments.
              Currently pursuing LLB — building the foundation to advocate, protect, and prevail.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(255,199,44,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="bg-[#FFC72C] text-[#0A0A0A] px-8 py-3.5 font-bold tracking-widest uppercase text-sm transition-all"
                style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.14em'}}
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, borderColor: '#FFC72C', color: '#FFC72C' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[#F5F0E8]/30 text-[#F5F0E8]/70 px-8 py-3.5 tracking-widest uppercase text-sm transition-all"
                style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.14em'}}
              >
                Our Services
              </motion.button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex gap-10 mt-14 pt-10 border-t border-[#F5F0E8]/10"
            >
              {[
                { num: 'LLB', label: 'In Progress' },
                { num: 'MUN', label: "2025 Participant" },
                { num: '6+', label: 'Practice Areas' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '24px', color: '#FFC72C'}}>
                    {stat.num}
                  </div>
                  <div style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#F5F0E8', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase'}}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT – Cinematic poster-style photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative flex justify-center lg:justify-end items-end h-full"
          >
            {/* Background shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] h-[460px] lg:w-[420px] lg:h-[560px]"
              style={{background: 'linear-gradient(135deg, rgba(255,199,44,0.08) 0%, transparent 60%)',
                border: '1px solid rgba(255,199,44,0.12)'}}>
            </div>
            {/* Accent corner lines */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] h-[460px] lg:w-[420px] lg:h-[560px]">
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#FFC72C]" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#FFC72C]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C0392B]" />
            </div>

            {/* Photo */}
            <div className="relative z-10 overflow-hidden"
              style={{width: 'clamp(260px, 35vw, 380px)', aspectRatio: '3/4'}}>
              <img
                src={profileImg}
                alt="Shahjahan Chowdhury"
                className="w-full h-full object-cover object-top"
                style={{filter: 'contrast(1.05) brightness(0.95) saturate(0.9)'}}
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/10" />
              {/* Bottom name strip */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{background: 'linear-gradient(to top, rgba(10,10,10,0.95), transparent)'}}>
                <div style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#FFC72C', letterSpacing: '0.2em'}}>
                  MINISTER OF INDUSTRIES · DIU MUN 2025
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[15%] right-[-10px] lg:right-[-30px] z-20 bg-[#C0392B] px-4 py-3 text-white"
              style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', fontSize: '12px',
                boxShadow: '4px 4px 20px rgba(192,57,43,0.4)'}}>
              <div className="font-bold">FUTURE</div>
              <div className="opacity-80 text-xs">LEGAL EAGLE</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#FFC72C', opacity: 0.5, letterSpacing: '0.2em'}}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#FFC72C]/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
