import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >{children}</motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        'service_7cc7izn',
        'template_dieokm9',
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        'NCWAU6woRL0x8JIEB'
      )
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+880 1959-984923', href: 'tel:+8801959984923' },
    { icon: Mail, label: 'Email', value: 'shahjahanchy54@gmail.com', href: 'mailto:shahjahanchy54@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Subidbazar, Sylhet, Bangladesh', href: null },
    { icon: Clock, label: 'Opening Hours', value: 'Sun - Thu: 9AM - 5PM', href: null },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFC72C]/3 to-[#C0392B]/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC72C]/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <FadeIn className="text-center mb-16">
          <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#FFC72C',
            letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.7}}>
            — Get In Touch —
          </span>
          <h2 className="mt-3 section-title text-5xl md:text-6xl text-[#F5F0E8]">
            Contact <span style={{color: '#FFC72C'}}>Shahjahan</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#FFC72C] mx-auto mt-4" />
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeIn key={item.label} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 border border-[#F5F0E8]/8 bg-[#0F0F0F] group hover:border-[#FFC72C]/30 transition-colors">
                    <div className="w-10 h-10 border border-[#FFC72C]/25 flex items-center justify-center shrink-0 group-hover:border-[#FFC72C]/60 group-hover:bg-[#FFC72C]/8 transition-all">
                      <Icon size={16} className="text-[#FFC72C] opacity-70" />
                    </div>
                    <div>
                      <div style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', color: '#FFC72C',
                        letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '4px'}}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href}
                          style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px', color: '#F5F0E8', opacity: 0.85}}
                          className="hover:text-[#FFC72C] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px', color: '#F5F0E8', opacity: 0.75}}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                </FadeIn>
              )
            })}

            <FadeIn delay={0.4} className="overflow-hidden border border-[#F5F0E8]/8">
              <div style={{position: 'relative', paddingBottom: '75%', height: 0}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9!2d91.8667!3d24.8949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329b%3A0xf58ef93431f67382!2sSubidbazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', filter: 'grayscale(80%) invert(85%) contrast(0.8)'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Subidbazar, Sylhet"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="lg:col-span-3">
            <div className="bg-[#0F0F0F] border border-[#F5F0E8]/8 p-8">
              <h3 style={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '24px',
                color: '#FFC72C', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px'}}>
                Book a Consultation
              </h3>

              {status === 'sending' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 border border-[#FFC72C]/40 bg-[#FFC72C]/8">
                  <span style={{fontFamily: 'Crimson Pro, serif', fontSize: '16px', color: '#FFC72C'}}>
                    Sending your message...
                  </span>
                </motion.div>
              )}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 border border-[#FFC72C]/40 bg-[#FFC72C]/8">
                  <span style={{fontFamily: 'Crimson Pro, serif', fontSize: '16px', color: '#FFC72C'}}>
                    Message sent! Shahjahan will reply shortly.
                  </span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 border border-[#C0392B]/40 bg-[#C0392B]/8">
                  <span style={{fontFamily: 'Crimson Pro, serif', fontSize: '16px', color: '#C0392B'}}>
                    Failed to send. Please email directly: shahjahanchy54@gmail.com
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                      color: '#FFC72C', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', opacity: 0.7}}>
                      Full Name *
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#0A0A0A] border border-[#F5F0E8]/12 text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none focus:border-[#FFC72C]/50 transition-colors placeholder-[#F5F0E8]/25"
                      style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px'}}
                    />
                  </div>
                  <div>
                    <label style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                      color: '#FFC72C', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', opacity: 0.7}}>
                      Email Address *
                    </label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#0A0A0A] border border-[#F5F0E8]/12 text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none focus:border-[#FFC72C]/50 transition-colors placeholder-[#F5F0E8]/25"
                      style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px'}}
                    />
                  </div>
                </div>

                <div>
                  <label style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                    color: '#FFC72C', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', opacity: 0.7}}>
                    Phone Number
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+880 XXXX-XXXXXX"
                    className="w-full bg-[#0A0A0A] border border-[#F5F0E8]/12 text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none focus:border-[#FFC72C]/50 transition-colors placeholder-[#F5F0E8]/25"
                    style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px'}}
                  />
                </div>

                <div>
                  <label style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                    color: '#FFC72C', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', opacity: 0.7}}>
                    Message *
                  </label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange} rows={5}
                    placeholder="Describe your legal matter..."
                    className="w-full bg-[#0A0A0A] border border-[#F5F0E8]/12 text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none focus:border-[#FFC72C]/50 transition-colors placeholder-[#F5F0E8]/25 resize-none"
                    style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px'}}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,199,44,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#FFC72C] text-[#0A0A0A] px-8 py-4 font-bold tracking-widest uppercase flex items-center gap-3 justify-center hover:bg-[#E6A800] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.14em'}}
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}