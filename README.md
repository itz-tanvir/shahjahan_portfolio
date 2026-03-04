# Shahjahan Chowdhury – Portfolio Website
### "Better Call Shahjahan" – Legal Portfolio

A cinematic, Better Call Saul-inspired portfolio website for law student Shahjahan Chowdhury.

---

## 🛠 Tech Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **React Router DOM 6**
- **Lucide React** (icons)

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js v18+ installed → [nodejs.org](https://nodejs.org)
- npm v9+ (comes with Node.js)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open: http://localhost:5173

---

## 📁 Project Structure
```
shahjahan-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── profile.jpeg       # Close-up profile photo
│   │   ├── fullbody.jpeg      # Full body photo (used in hero)
│   │   ├── mun.jpeg           # MUN group photo
│   │   └── sitting.jpeg       # MUN sitting/working photo
│   ├── components/
│   │   ├── TopBar.jsx         # Sticky top bar with phone + appointment button
│   │   ├── Navbar.jsx         # Sticky navigation
│   │   ├── Hero.jsx           # "Better Call Shahjahan" hero section
│   │   ├── About.jsx          # About + MUN photos
│   │   ├── Services.jsx       # 6 service cards
│   │   ├── Contact.jsx        # Form + map + info
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Blog.jsx           # /blog route (opens separately)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🌐 Deploy on Vercel

### Option A – Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts. Select **Vite** as the framework.

### Option B – GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite. Click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

**Build Settings (auto-detected):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## ✏️ How to Customize Content

### Update Personal Info
Edit directly in the component files:

| What to change | File |
|---|---|
| Name, bio text | `src/components/Hero.jsx`, `src/components/About.jsx` |
| Phone, email | `src/components/Contact.jsx`, `src/components/TopBar.jsx` |
| Opening hours | `src/components/TopBar.jsx` |
| Services | `src/components/Services.jsx` (edit the `services` array) |
| Blog posts | `src/pages/Blog.jsx` (edit the `posts` array) |

### Replace Photos
Put your new images in `src/assets/` and update the import paths in:
- `src/components/Hero.jsx` → `fullbody.jpeg`
- `src/components/About.jsx` → `mun.jpeg`, `sitting.jpeg`

### Change Colors
Edit `tailwind.config.js` and `src/index.css`:
- **Gold**: `#FFC72C`
- **Crimson/Red**: `#C0392B`
- **Black**: `#0A0A0A`

---

## 📧 Contact Form Setup

The form currently uses `mailto:` which opens the user's email client.

### To use EmailJS (send emails directly without opening email app):
1. Create account at [emailjs.com](https://www.emailjs.com)
2. `npm install @emailjs/browser`
3. Replace the `handleSubmit` function in `src/components/Contact.jsx`:

```js
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message },
      'YOUR_PUBLIC_KEY'
    )
    setStatus('success')
    setForm({ name: '', email: '', phone: '', message: '' })
  } catch (err) {
    setStatus('error')
  }
}
```

---

## 🗺 Google Map

The map in Contact section shows Subidbazar, Sylhet. To change location:
1. Go to [Google Maps](https://maps.google.com)
2. Search your address → Share → Embed a map → Copy iframe src URL
3. Paste it in `src/components/Contact.jsx` (look for the `<iframe src=` line)

---

## 📱 Blog Page

Blog lives at `/blog` and opens in a new tab.
Add new posts by editing the `posts` array in `src/pages/Blog.jsx`:

```js
{
  id: 9, category: 'Law',          // Law | Football | Cricket | Travelling
  title: 'Your Post Title',
  excerpt: 'Your post content...',
  date: 'March 5, 2026', readTime: '5 min read',
  tag: 'Your Tag',
  color: '#C0392B',                // Red for Law, green for Football, blue for Cricket, purple for Travel
}
```

---

## 🔧 Build for Production
```bash
npm run build
```
Files will be in the `dist/` folder. Ready to deploy anywhere.

---

## 📞 Contact
- **Phone**: +880 1959-984923
- **Email**: shahjahanchy54@gmail.com
- **Location**: Subidbazar, Sylhet, Bangladesh
