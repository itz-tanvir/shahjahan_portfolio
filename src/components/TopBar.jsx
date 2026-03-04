import { motion } from 'framer-motion'
import { Clock, Phone } from 'lucide-react'

export default function TopBar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#FFC72C] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="flex items-center gap-1.5">
            <Phone size={13} />
            <a href="tel:+8801959984923" className="hover:underline font-mono tracking-tight">
              +880 1959-984923
            </a>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Clock size={13} />
            <span style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em', fontSize: '12px'}}>
              Sun – Thu: 9AM – 5PM
            </span>
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToContact}
          className="bg-[#0A0A0A] text-[#FFC72C] px-4 py-1 text-xs font-bold tracking-widest uppercase hover:bg-[#C0392B] transition-colors duration-300"
          style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.12em'}}
        >
          Make an Appointment
        </motion.button>
      </div>
    </div>
  )
}
