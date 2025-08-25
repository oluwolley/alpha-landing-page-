# Front Landing Page

A professional, responsive landing page built with Next.js, React, and TailwindCSS. This landing page showcases a customer service platform with AI-powered features.

## 🚀 Features

### Navigation Bar
- Dark purple background (#2A0A4A)
- "Front" logo on the left
- Navigation links: Product, Solutions, Resources, Pricing
- Action buttons: Sign in, Request a demo, Try for free
- Mobile-responsive hamburger menu

### Hero Section
- Dark purple background with compelling headline
- "Customer-first service at scale. Powered by AI, built for people."
- Descriptive subheading
- Two call-to-action buttons: Request a demo (yellow) and Start free trial (outlined)

### Feature Tabs
- Horizontal feature showcase with icons
- Features: Shared Inbox, Ticketing, AI Agent, Automation, Insights
- Uses Lucide React icons for clean, modern appearance
- Hover effects and smooth transitions

### Product Preview
- White card overlay on purple background
- Interactive inbox mockup
- Email list with badges (VIP, Urgent)
- Selected message preview
- Responsive design for mobile and desktop

### Footer
- Comprehensive site navigation
- Company information and support links
- Clean, organized layout

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.0
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)
- **Responsive**: Mobile-first design

## 📦 Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd front-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The landing page is fully responsive and includes:
- Mobile-first approach
- Collapsible navigation menu for mobile devices
- Flexible layouts that adapt to different screen sizes
- Touch-friendly interactive elements

## 🎨 Customization

### Colors
- Primary purple: `#2A0A4A`
- Accent yellow: `#FBBF24` (yellow-400)
- Text colors: White, gray variants
- Background: White, purple, gray variants

### Components
All components are modular and can be easily customized:
- `Navigation.tsx` - Header navigation
- `Hero.tsx` - Main hero section
- `FeatureTabs.tsx` - Feature showcase
- `ProductPreview.tsx` - Product mockup
- `Footer.tsx` - Site footer

### Styling
- Uses TailwindCSS utility classes
- Custom CSS variables for consistent theming
- Smooth transitions and hover effects
- Modern shadows and rounded corners

## 🔧 Development

### Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── FeatureTabs.tsx # Feature tabs
│   ├── ProductPreview.tsx # Product preview
│   └── Footer.tsx      # Footer component
```

### Adding New Components
1. Create a new component in `src/components/`
2. Import and use it in `src/app/page.tsx`
3. Follow the existing component patterns

## 📄 License

This project is for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using Next.js and TailwindCSS
