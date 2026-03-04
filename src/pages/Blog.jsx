import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

const categories = ['All', 'Law', 'Football', 'Travelling', 'Cricket']

const posts = [
  {
    id: 1, category: 'Law',
    title: 'Understanding the Basics of Contract Law in Bangladesh',
    excerpt: 'Contract law forms the backbone of commercial and personal legal agreements. In Bangladesh, the Contract Act of 1872 governs most contractual relationships. Here\'s what every citizen should know about forming valid, enforceable contracts.',
    date: 'February 12, 2025', readTime: '6 min read',
    tag: 'Legal Education',
    color: '#C0392B',
  },
  {
    id: 2, category: 'Law',
    title: 'The Role of Model UN in Shaping Future Lawyers',
    excerpt: 'Participating in a Model United Nations conference isn\'t just an extracurricular activity — it\'s a masterclass in international law, diplomacy, and argumentation. After serving as Minister of Industries at Daffodil International MUN 2025, here\'s what I learned.',
    date: 'January 28, 2025', readTime: '5 min read',
    tag: 'MUN & Diplomacy',
    color: '#C0392B',
  },
  {
    id: 3, category: 'Football',
    title: 'Why Football is the Most Strategic Sport on the Planet',
    excerpt: 'Beyond the beautiful goals and thunderous stadiums lies an intricate strategic game — one that mirrors legal thinking more than most realize. Pattern recognition, reading opponents, and adapting mid-game are skills shared by great lawyers and great footballers alike.',
    date: 'January 10, 2025', readTime: '4 min read',
    tag: 'Football Analysis',
    color: '#2E7D32',
  },
  {
    id: 4, category: 'Cricket',
    title: 'Bangladesh Cricket: Rising Through the Ranks',
    excerpt: 'The Bangladesh national cricket team has undergone a remarkable transformation over the past decade. From Test cricket underdogs to genuine contenders on the global stage — what this means for national pride and the future of the sport in our country.',
    date: 'December 18, 2024', readTime: '7 min read',
    tag: 'Cricket Analysis',
    color: '#1565C0',
  },
  {
    id: 5, category: 'Travelling',
    title: 'Exploring the Tea Gardens of Sylhet: A Journey Through Green',
    excerpt: 'Sylhet\'s tea gardens are among the most breathtaking landscapes in all of Bangladesh. Rolling hills draped in emerald green, misty mornings, and the quiet rhythm of life in the gardens — a complete guide to experiencing this natural wonder.',
    date: 'November 30, 2024', readTime: '5 min read',
    tag: 'Sylhet Travel',
    color: '#6A1F8E',
  },
  {
    id: 6, category: 'Travelling',
    title: 'Hakaluki Haor: Bangladesh\'s Hidden Wetland Treasure',
    excerpt: 'One of South Asia\'s largest freshwater wetlands sits quietly in the heart of Sylhet division. Hakaluki Haor is an ecosystem teeming with migratory birds, rare fish species, and a local community whose livelihoods are intimately tied to this magnificent water body.',
    date: 'October 22, 2024', readTime: '6 min read',
    tag: 'Nature & Adventure',
    color: '#6A1F8E',
  },
  {
    id: 7, category: 'Cricket',
    title: 'The Art of Reading the Game: Cricket\'s Tactical Revolution',
    excerpt: 'Modern cricket has evolved from a gentleman\'s pastime into a data-driven tactical battle. T20 cricket especially has revolutionized how we think about match-winning strategies, role-specific batting orders, and death bowling innovations.',
    date: 'September 15, 2024', readTime: '8 min read',
    tag: 'Cricket Tactics',
    color: '#1565C0',
  },
  {
    id: 8, category: 'Football',
    title: 'Champions League Dreams: Following European Football from Sylhet',
    excerpt: 'Thousands of miles from the roaring stadiums of Madrid and Manchester, football fans in Bangladesh experience the beautiful game with equal passion. How streaming transformed football culture and built global communities of supporters.',
    date: 'August 8, 2024', readTime: '4 min read',
    tag: 'Football Culture',
    color: '#2E7D32',
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <div style={{background: '#0A0A0A', minHeight: '100vh', fontFamily: 'Crimson Pro, Georgia, serif'}}>
      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Share+Tech+Mono&display=swap" rel="stylesheet" />

      {/* Header */}
      <div className="relative overflow-hidden" style={{background: '#080808', borderBottom: '1px solid rgba(255,199,44,0.15)'}}>
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 30% 50%, rgba(255,199,44,0.05) 0%, transparent 70%)'}} />
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 50px'}}>
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-xs mb-10"
            style={{color: '#FFC72C', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.15em', textDecoration: 'none', opacity: 0.7}}
          >
            <ArrowLeft size={14} />
            BACK TO MAIN SITE
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#FFC72C', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '12px'}}>
              — Thoughts & Perspectives —
            </div>
            <h1 style={{fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(40px, 8vw, 80px)',
              color: '#F5F0E8', letterSpacing: '-0.01em', lineHeight: 0.95, marginBottom: '16px'}}>
              THE <span style={{color: '#FFC72C'}}>BRIEF</span>
            </h1>
            <p style={{fontFamily: 'Crimson Pro, serif', fontStyle: 'italic', fontSize: '18px', color: '#F5F0E8', opacity: 0.55, maxWidth: '480px'}}>
              Writings on law, the beautiful game, travel, and the sport of cricket — by Shahjahan Chowdhury.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(10px)', zIndex: 10}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'flex', gap: '0', overflowX: 'auto'}}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'Oswald, sans-serif', fontWeight: 400,
                  fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '16px 20px',
                  color: activeCategory === cat ? '#FFC72C' : 'rgba(245,240,232,0.4)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: activeCategory === cat ? '2px solid #FFC72C' : '2px solid transparent',
                  transition: 'all 0.25s', whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px'}}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px'}}
          >
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: `0 16px 50px rgba(0,0,0,0.6)` }}
                onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                style={{
                  background: '#0F0F0F', border: '1px solid rgba(245,240,232,0.08)',
                  padding: '28px', cursor: 'pointer', transition: 'all 0.3s',
                  borderLeft: `3px solid ${post.color}20`, position: 'relative', overflow: 'hidden'
                }}
              >
                {/* Top color accent */}
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(to right, ${post.color}, transparent)`}} />

                {/* Category tag */}
                <div style={{display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px'}}>
                  <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: post.color, opacity: 0.9, background: `${post.color}15`,
                    padding: '3px 8px'}}>
                    {post.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '20px',
                  color: '#F5F0E8', letterSpacing: '0.02em', lineHeight: 1.25, marginBottom: '12px',
                  textTransform: 'uppercase'}}>
                  {post.title}
                </h2>

                {/* Meta */}
                <div style={{display: 'flex', gap: '16px', marginBottom: '14px'}}>
                  <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                    color: 'rgba(245,240,232,0.35)', display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <Calendar size={10} />
                    {post.date}
                  </span>
                  <span style={{fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
                    color: 'rgba(245,240,232,0.35)', display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>

                {/* Divider */}
                <div style={{width: '32px', height: '1px', background: `${post.color}50`, marginBottom: '14px'}} />

                {/* Excerpt */}
                <p style={{fontFamily: 'Crimson Pro, serif', fontSize: '15px', lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.6)', marginBottom: '16px'}}>
                  {expandedId === post.id ? post.excerpt : post.excerpt.slice(0, 120) + '...'}
                </p>

                {/* Read more */}
                <span style={{fontFamily: 'Oswald, sans-serif', fontSize: '12px', letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: '#FFC72C', opacity: 0.8}}>
                  {expandedId === post.id ? '↑ Show Less' : 'Read More →'}
                </span>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div style={{textAlign: 'center', padding: '80px 0', color: 'rgba(245,240,232,0.3)',
            fontFamily: 'Crimson Pro, serif', fontSize: '18px', fontStyle: 'italic'}}>
            No posts in this category yet. Check back soon.
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{background: '#080808', borderTop: '1px solid rgba(255,199,44,0.1)', padding: '24px',
        textAlign: 'center', fontFamily: 'Share Tech Mono, monospace', fontSize: '10px',
        color: 'rgba(245,240,232,0.25)', letterSpacing: '0.15em', textTransform: 'uppercase'}}>
        © {new Date().getFullYear()} Shahjahan Chowdhury · The Brief ·{' '}
        <a href="/" style={{color: '#FFC72C', opacity: 0.6, textDecoration: 'none'}}>Return to Main Site</a>
      </div>
    </div>
  )
}
