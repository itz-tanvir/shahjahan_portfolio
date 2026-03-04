import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-[#080808] border-t border-[#FFC72C]/15 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span style={{fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '20px', color: '#FFC72C', letterSpacing: '0.06em'}}>
              SHAHJAHAN
            </span>
            <span style={{fontFamily: 'Crimson Pro, serif', fontStyle: 'italic', fontSize: '12px', color: '#F5F0E8', opacity: 0.5, marginLeft: '8px'}}>
              Chowdhury · Legal Counsel
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#F5F0E8]/40 hover:text-[#FFC72C] transition-colors text-xs tracking-widest uppercase"
                style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em'}}
              >
                {item}
              </button>
            ))}
            <a href="/blog" target="_blank" rel="noopener noreferrer"
              className="text-[#F5F0E8]/40 hover:text-[#FFC72C] transition-colors text-xs tracking-widest uppercase"
              style={{fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em'}}>
              Blog ↗
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F5F0E8]/6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#F5F0E8', opacity: 0.3, letterSpacing: '0.12em'}}>
            © {new Date().getFullYear()} SHAHJAHAN CHOWDHURY. ALL RIGHTS RESERVED.
          </p>
          <p style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#FFC72C', opacity: 0.4, letterSpacing: '0.12em'}}>
            BETTER CALL SHAHJAHAN
          </p>
        </div>
      </div>
    </footer>
  )
}
