import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scale, Shield, FileText, Briefcase, Key, Gavel } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Estate Planning',
    tagline: "Protect What You've Built",
    desc: 'Estate planning is the process of arranging for the management and disposal of your assets during your life and after death. Shahjahan helps you structure a comprehensive plan that ensures your loved ones are protected, your wishes are honored, and unnecessary legal complications are avoided.',
  },
  {
    icon: Shield,
    title: 'Trusts',
    tagline: 'Secure Generational Wealth',
    desc: 'A trust is a legal arrangement where a trustee holds assets for the benefit of another party. Whether you need a revocable living trust, testamentary trust, or special needs trust, Shahjahan can guide you through choosing the right structure to protect your family\'s financial future.',
  },
  {
    icon: FileText,
    title: 'Wills',
    tagline: 'Your Last Word, Legally Bound',
    desc: 'A will is the cornerstone of any estate plan. It specifies how your property should be distributed and who will care for your minor children. Shahjahan ensures your will is legally sound, unambiguous, and reflective of your true intentions — reducing disputes among heirs.',
  },
  {
    icon: Briefcase,
    title: 'Business Law',
    tagline: 'Build & Protect Your Business',
    desc: 'Navigating business legal matters — from formation and contracts to disputes and compliance — requires expert guidance. Shahjahan assists entrepreneurs and established businesses with incorporation, partnership agreements, contract drafting, and regulatory compliance in Bangladesh.',
  },
  {
    icon: Key,
    title: 'Power of Attorney',
    tagline: 'Authority When It Matters Most',
    desc: 'A Power of Attorney grants a trusted individual the legal authority to act on your behalf in financial or medical matters. Shahjahan helps you draft durable, limited, or healthcare POA documents that are legally enforceable and precisely tailored to your specific needs.',
  },
  {
    icon: Gavel,
    title: 'Probate Attorney',
    tagline: 'Guiding Estates Through Court',
    desc: 'Probate is the court-supervised process of authenticating a will and distributing a deceased person\'s assets. Shahjahan provides clear, empathetic legal counsel to guide families through this complex process — minimizing delays, protecting beneficiaries, and resolving estate disputes.',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(255,199,44,0.12)' }}
      className="group relative bg-[#0F0F0F] border border-[#F5F0E8]/8 p-7 flex flex-col gap-4 transition-all duration-400 overflow-hidden" style={{userSelect: "none"}}
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC72C]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-[#FFC72C]/20 border-r-transparent group-hover:border-t-[#FFC72C]/50 transition-all duration-300" />

      {/* Icon */}
      <div className="relative">
        <div className="w-12 h-12 border border-[#FFC72C]/25 flex items-center justify-center group-hover:border-[#FFC72C]/60 group-hover:bg-[#FFC72C]/8 transition-all duration-300">
          <Icon size={22} strokeWidth={1.5} className="text-[#FFC72C] opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Number */}
      <div className="absolute top-6 right-7"
        style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#FFC72C', opacity: 0.2, letterSpacing: '0.1em'}}>
        0{index + 1}
      </div>

      {/* Content */}
      <div>
        <div style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', color: '#C0392B',
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '6px', opacity: 0.9}}>
          {service.tagline}
        </div>
        <h3 style={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '22px',
          color: '#F5F0E8', letterSpacing: '0.04em', textTransform: 'uppercase'}}>
          {service.title}
        </h3>
      </div>

      <div className="w-8 h-px bg-[#FFC72C]/30 group-hover:w-16 group-hover:bg-[#FFC72C]/70 transition-all duration-400" />

      <p style={{fontFamily: 'Crimson Pro, serif', fontSize: '15.5px', lineHeight: 1.7,
        color: '#F5F0E8', opacity: 0.6, flexGrow: 1}}>
        {service.desc}
      </p>

      {/* CTA */}
      <a
        href="tel:+8801959984923"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 border border-[#FFC72C]/30 text-[#FFC72C] px-5 py-2.5 text-xs mt-2 hover:bg-[#FFC72C] hover:text-[#0A0A0A] transition-all duration-300 w-fit group-hover:border-[#FFC72C]/70"
        style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase', position: 'relative', zIndex: 10}}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
          <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.085-1.391l-4.065-3.696z"/>
        </svg>
        Call Now
      </a>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFC72C]/3 via-transparent to-[#C0392B]/3" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC72C]/20 to-transparent" />

      {/* Background text */}
      <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden"
        style={{fontFamily: 'Oswald, sans-serif', fontSize: '180px', fontWeight: 900,
          color: 'transparent', WebkitTextStroke: '1px rgba(255,199,44,0.03)', lineHeight: 1, letterSpacing: '-0.05em'}}>
        LEGAL
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#FFC72C',
            letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.7}}>
            — Practice Areas —
          </span>
          <h2 className="mt-3 section-title text-5xl md:text-6xl text-[#F5F0E8]">
            Legal <span style={{color: '#FFC72C'}}>Services</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#FFC72C] mx-auto mt-4" />
          <p style={{fontFamily: 'Crimson Pro, serif', fontStyle: 'italic', fontSize: '18px',
            color: '#F5F0E8', opacity: 0.55, marginTop: '16px', maxWidth: '520px', margin: '16px auto 0'}}>
            Comprehensive legal guidance across six critical practice areas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p style={{fontFamily: 'Crimson Pro, serif', fontSize: '17px', color: '#F5F0E8', opacity: 0.5}}>
            Not sure which service you need?
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 bg-[#FFC72C] text-[#0A0A0A] px-10 py-3 font-bold tracking-widest uppercase text-sm hover:bg-[#E6A800] transition-colors"
            style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.14em'}}
          >
            Free Consultation
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC72C]/20 to-transparent" />
    </section>
  )
}
