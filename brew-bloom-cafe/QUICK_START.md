# 🚀 Quick Start Guide - Brew & Bloom

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit [http://localhost:3000](http://localhost:3000)

## 🎯 What's Included

- **Home Page** - Full landing page
- **Menu** - Searchable menu with cart
- **About** - Story and team
- **Reservations** - Booking form
- **Contact** - Contact form

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

## 📁 Project Structure

```
app/              # Pages (Next.js App Router)
components/       # Reusable components
data/            # Menu, team, testimonials
lib/             # Utilities and hooks
types/           # TypeScript definitions
```

## 🎨 Customize Content

Edit these files to update content:
- `data/menu.ts` - Menu items
- `data/team.ts` - Team members
- `data/testimonials.ts` - Reviews
- `data/opening-hours.ts` - Hours

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import in [Vercel Dashboard](https://vercel.com).

## 📝 Notes

- Forms are demo only (no backend)
- Cart uses localStorage
- Images from Unsplash
- Ready for production deployment

**Built with Next.js 16 + TypeScript + Tailwind CSS**
