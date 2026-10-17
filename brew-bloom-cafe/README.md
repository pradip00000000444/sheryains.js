# Brew & Bloom - Premium Café Website

A modern, responsive, production-quality website for a fictional specialty café in Kathmandu, Nepal. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Pages
- **Home** - Hero section, story, featured menu, gallery, testimonials, location info, newsletter
- **Menu** - Complete menu with filtering, search, and add-to-cart functionality
- **About** - Brand story, values, team members, and mission
- **Reservations** - Fully validated reservation form with date/time selection
- **Contact** - Contact information and validated contact form

### Interactive Features
- ✅ Responsive mobile navigation with hamburger menu
- ✅ Shopping cart with localStorage persistence
- ✅ Menu category filtering and search
- ✅ Add-to-cart with toast notifications
- ✅ Form validation (reservation, contact, newsletter)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Accessible keyboard navigation
- ✅ Reduced motion support
- ✅ Loading and success states
- ✅ SEO optimization with metadata

### Design System
- **Colors:**
  - Espresso Brown: `#2B1D18`
  - Cream: `#F7F1E8`
  - Caramel: `#B77945`
  - Sage Green: `#78866B`
  
- **Typography:**
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

- **Components:**
  - Premium editorial layouts
  - Generous whitespace
  - Rounded corners and subtle shadows
  - Smooth hover effects and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd brew-bloom-cafe
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
brew-bloom-cafe/
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── menu/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── reservation/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Story.tsx
│   │   ├── FeaturedMenu.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── LocationInfo.tsx
│   │   └── Newsletter.tsx
│   ├── menu/
│   │   ├── MenuHero.tsx
│   │   └── MenuGrid.tsx
│   ├── cart/
│   │   └── CartDrawer.tsx
│   └── ui/
│       └── Toast.tsx
├── data/
│   ├── menu.ts
│   ├── team.ts
│   ├── testimonials.ts
│   └── opening-hours.ts
├── lib/
│   ├── utils.ts
│   ├── validation.ts
│   └── useCart.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

## 🛠️ Technology Stack

- **Framework:** Next.js 16.4 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 14
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Playfair Display, Inter)

## 🎨 Design Features

- **Responsive Design:** Mobile-first approach, optimized for all screen sizes
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation, focus indicators
- **Performance:** Optimized images, lazy loading, minimal dependencies
- **SEO:** Meta tags, Open Graph, structured data placeholders
- **UX:** Loading states, error handling, success feedback, smooth transitions

## 📝 Content Management

All content is centralized in the `data/` directory for easy updates:

- `menu.ts` - Menu items with prices in NPR (Nepalese Rupees)
- `team.ts` - Team member profiles
- `testimonials.ts` - Customer reviews
- `opening-hours.ts` - Operating hours

## ⚙️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
This is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Any platform supporting Node.js

Build command: `npm run build`  
Output directory: `.next`

## 📋 Demo Notes

This website is built for demonstration purposes:

- **Images:** Uses Unsplash URLs. Replace with your own images in production.
- **Location:** Sample address in Kathmandu (fictional).
- **Cart:** Demo only—no real checkout or payment processing.
- **Forms:** Validated but don't send data to a backend. Connect to your API/database.
- **Reservations:** Client-side only. Integrate with a booking system for production.

## 🔌 Production Checklist

Before deploying to production:

- [ ] Replace demo images with actual café photography
- [ ] Update contact information (address, phone, email)
- [ ] Connect reservation form to booking system or database
- [ ] Connect contact form to email service (SendGrid, Mailgun, etc.)
- [ ] Connect newsletter to email marketing platform (Mailchimp, ConvertKit, etc.)
- [ ] Implement real cart checkout with payment gateway (Stripe, PayPal, etc.)
- [ ] Add Google Maps integration with real coordinates
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure domain and SSL certificate
- [ ] Add real business schema markup
- [ ] Test with screen readers and accessibility tools
- [ ] Optimize images and set up CDN

## 🤝 Credits

Built with:
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📄 License

This project is built for educational and demonstration purposes.

---

**Brew & Bloom** - Your Daily Ritual, Beautifully Brewed ☕
