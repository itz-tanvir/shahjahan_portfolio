import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`fixed top-[36px] left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#FFC72C]/20 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="flex items-baseline gap-2"
        >
          <span style={{fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '22px', color: '#FFC72C', letterSpacing: '0.04em'}}>
            SHAHJAHAN
          </span>
          <span style={{fontFamily: 'Crimson Pro, serif', fontStyle: 'italic', fontSize: '13px', color: '#F5F0E8', opacity: 0.7}}>
            Chowdhury
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-[#F5F0E8]/80 hover:text-[#FFC72C] transition-colors duration-300 text-sm tracking-widest uppercase"
              style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.12em', fontWeight: 400}}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F0E8]/80 hover:text-[#FFC72C] transition-colors duration-300 text-sm tracking-widest uppercase"
            style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.12em', fontWeight: 400}}
          >
            Blog ↗
          </a>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contact')}
            className="border border-[#FFC72C] text-[#FFC72C] px-5 py-1.5 text-xs hover:bg-[#FFC72C] hover:text-[#0A0A0A] transition-all duration-300"
            style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em'}}
          >
            Consult Now
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#FFC72C] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-t border-[#FFC72C]/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[#F5F0E8]/80 hover:text-[#FFC72C] text-sm tracking-widest uppercase py-2 border-b border-[#FFC72C]/10"
                  style={{fontFamily: 'Oswald, sans-serif'}}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/80 hover:text-[#FFC72C] text-sm tracking-widest uppercase py-2 border-b border-[#FFC72C]/10"
                style={{fontFamily: 'Oswald, sans-serif'}}
              >
                Blog ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
