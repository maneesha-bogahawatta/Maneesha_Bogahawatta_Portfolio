# Maneesha's Portfolio

A modern, interactive portfolio built with React and Vite, featuring 3D tilt effects and smooth animations.

## Features

- 🎨 **Interactive 3D Tilt Effects** – Mouse-driven perspective transforms on project cards
- ⚡ **Fast & Responsive** – Built with Vite for instant HMR and optimized production builds
- 🎭 **Smooth Animations** – Powered by Framer Motion for elegant transitions
- 📧 **Contact Form** – Integrated with EmailJS for direct messaging
- 📱 **Mobile-Friendly** – Fully responsive design using Tailwind CSS

## Tech Stack

- **React** – UI library
- **Vite** – Build tool & dev server
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Animation library
- **React Router** – Client-side routing
- **EmailJS** – Email service integration
- **Lucide React** – Icon library

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
├── hooks/            # Custom React hooks (e.g., useTilt)
├── pages/            # Page components
├── App.jsx           # Main app component
├── App.css           # Global styles & Tailwind config
└── data.jsx          # Portfolio data (projects, blogs, certifications)
```

## Features in Detail

### 3D Tilt Hook
The `useTilt` hook enables smooth 3D perspective transforms on hover. Used on project cards for interactive depth perception.

### Contact Form
Send feedback directly from project detail pages via integrated EmailJS service.

### Responsive Design
Built entirely with Tailwind CSS for seamless mobile, tablet, and desktop experiences.

## License

MIT
