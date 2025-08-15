# Jordi Osarenkhoe - Portfolio

A modern, interactive portfolio built with Vue 3, TypeScript, and Tailwind CSS, featuring a unique code editor theme design.

## ✨ Features

### 🎨 Design & UX
- **Code Editor Theme**: Unique design inspired by modern code editors
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: CSS animations and Vue transitions
- **Interactive Elements**: Hover effects and micro-interactions

### 🚀 Performance & Technical
- **Vue 3 Composition API**: Modern Vue.js development
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Vite**: Fast development and build tooling
- **Optimized Loading**: Lazy loading and performance optimizations

### 📱 Pages & Sections
- **Home**: Animated hero section with typing effect
- **Projects**: Interactive project cards with live demos
- **About**: Skills visualization and experience timeline

## 🛠️ Technologies Used

- **Frontend**: Vue 3, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Font**: JetBrains Mono
- **Icons**: Lucide Icons (SVG)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/jordiop/tab-portfolio.git
cd tab-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   └── icons/          # Icon components
├── views/              # Page components
│   ├── Home.vue        # Home page
│   ├── Projects.vue    # Projects page
│   └── About.vue       # About page
├── router/             # Vue Router configuration
├── assets/             # Static assets
│   ├── images/         # Images
│   └── main.css        # Global styles
└── main.ts             # App entry point
```

## 🎯 Key Improvements Made

### Enhanced User Experience
- **Loading States**: Smooth loading transitions between pages
- **Interactive Navigation**: Active tab highlighting and route watching
- **Smooth Transitions**: Page transitions and component animations
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Visual Enhancements
- **Typography**: Improved font loading and hierarchy
- **Color Scheme**: Enhanced color palette with better contrast
- **Animations**: Staggered animations and hover effects
- **Icons**: Consistent iconography throughout

### Content Improvements
- **Project Showcase**: Enhanced project cards with live demos
- **Skills Visualization**: Interactive skill bars with progress indicators
- **Experience Timeline**: Professional experience timeline
- **Social Links**: Better social media integration

### Technical Improvements
- **SEO Optimization**: Meta tags and Open Graph support
- **Performance**: Optimized loading and rendering
- **Code Quality**: TypeScript types and better structure
- **Responsive Design**: Mobile-first approach

## 🎨 Customization

### Colors & Themes
The portfolio uses CSS custom properties for easy theming. Modify the variables in `src/assets/main.css`:

```css
:root {
  --accent-color: #9075c9;
  --accent-secondary: #7ab2bd;
  --accent-tertiary: #e6b26e;
  /* ... more variables */
}
```

### Content Updates
- **Projects**: Update the `projects` array in `src/views/Projects.vue`
- **Skills**: Modify the `skills` array in `src/views/About.vue`
- **Experience**: Update the `experience` array in `src/views/About.vue`
- **Personal Info**: Update content in `src/views/Home.vue`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

The project is ready for deployment on any static hosting service:

### Vercel
```bash
npm run build
# Deploy the dist folder
```

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **LinkedIn**: [jordiop](https://www.linkedin.com/in/jordiop/)
- **GitHub**: [jordiop](https://github.com/jordiop)
- **Twitter**: [jordiscript](https://twitter.com/jordiscript)

---

Built with ❤️ using Vue 3, TypeScript, and Tailwind CSS 


