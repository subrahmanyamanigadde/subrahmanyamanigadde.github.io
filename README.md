# STARSHIP // SUBRAHMANYA

**Immersive Spacecraft Portfolio Experience**

Welcome aboard! This is a cinematic, interactive portfolio website built as a spacecraft operating system.

## 🚀 Features

- **Boot Sequence**: Immersive terminal initialization
- **Visitor Identification**: Personalized access authentication
- **Spacecraft Entry**: Hyperspace tunnel animation
- **Command Center**: Mission dashboard
- **Mission Timeline**: Career journey through planets/stations
- **Tech Constellation**: Interactive technology nodes
- **Incident Command Center**: Enterprise incident handling showcase
- **Transmission Terminal**: Contact form
- **Visitor Tracking**: Supabase integration for analytics

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, React 18
- **Styling**: Tailwind CSS, custom animations
- **3D/Animations**: Framer Motion, Three.js (Phase 2)
- **Backend**: Supabase (PostgreSQL + Auth)
- **Hosting**: GitHub Pages (static export)
- **Domain**: https://subrahmanyamanigadde.github.io

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/subrahmanyamanigadde/subrahmanyamanigadde.github.io
cd subrahmanyamanigadde.github.io

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Add your Supabase credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the boot sequence.

## 📝 Configuration

### Supabase Setup

1. Create a [Supabase](https://supabase.com) project
2. Create these tables:

```sql
-- Visitors table
CREATE TABLE visitors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  visit_time TIMESTAMP,
  location VARCHAR(255),
  device VARCHAR(255),
  session_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transmissions table
CREATE TABLE transmissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mission events table
CREATE TABLE mission_events (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255),
  event_type VARCHAR(255),
  page VARCHAR(255),
  timestamp TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. Update `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 🎨 Design System

### Color Palette
- **Primary**: #0a0e27 (Space Black)
- **Accent 1**: #00d9ff (Neon Cyan)
- **Accent 2**: #b366ff (Neon Purple)
- **Accent 3**: #39ff14 (Neon Green)
- **Warning**: #ff6600 (Neon Orange)

### Typography
- **Headings**: Orbitron
- **Body**: Space Grotesk
- **Terminal/Code**: Rajdhani

## 📦 Folder Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with state management
│   └── globals.css         # Global styles & animations
├── components/
│   ├── BootSequence.tsx    # Terminal boot animation
│   ├── VisitorIdentification.tsx  # Name input form
│   └── SpacecraftEntry.tsx # Hyperspace tunnel effect
├── hooks/
│   └── useTracking.ts      # Analytics hooks
├── lib/
│   └── supabase.ts         # Supabase client & functions
├── public/
│   ├── audio/              # Sound effects
│   ├── models/             # 3D models
│   └── textures/           # Textures
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── .env.local              # Environment variables
```

## 🚀 Deployment

### GitHub Pages Static Export

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for GitHub Pages.

### Vercel (Alternative)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Auto-deploy on push

## 🎬 Development Phases

- **Phase 1** ✅ Project foundation, boot sequence, visitor identification
- **Phase 2** 🔄 3D command center, mission timeline, tech constellation
- **Phase 3** Mission events tracking, Supabase integration
- **Phase 4** Sound design, AI assistant chatbot
- **Phase 5** Performance optimization, mobile polish

## 🔗 Quick Links

- [GitHub Repository](https://github.com/subrahmanyamanigadde/subrahmanyamanigadde.github.io)
- [Portfolio Site](https://subrahmanyamanigadde.github.io)
- [Supabase Docs](https://supabase.com/docs)

## 📄 License

MIT License - Feel free to fork and customize!

---

**Mission Status**: ACTIVE ✓
