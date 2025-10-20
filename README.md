# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, gradient designs, and a professional layout perfect for showcasing your work.

## ✨ Features

### Design & UX
- ✅ **Fully responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Smooth animations** - Fade-in effects, parallax scrolling, and hover interactions
- ✅ **Modern gradient hero** section with animated scroll indicator
- ✅ **Glass morphism effects** - Contemporary backdrop blur effects
- ✅ **Professional color scheme** - Customizable CSS variables

### Sections
- ✅ **Hero Section** - Eye-catching introduction with multiple CTAs
- ✅ **About Section** - Bio, stats grid, and technology list
- ✅ **Projects Showcase** - Feature your best work with hover effects
- ✅ **Presentations Section** - Dedicated area for your talks and slides
- ✅ **Skills Categories** - Organized by Frontend, Backend, and Tools
- ✅ **Contact Section** - Email and social media links
- ✅ **Mobile Navigation** - Hamburger menu with smooth transitions

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ Active navigation highlighting
- ✅ Staggered reveal animations
- ✅ Parallax hero effect
- ✅ Hover state micro-interactions

## 🚀 Quick Start

1. **Customize the content:**
   - Open `index.html` and replace all placeholder text with your information
   - Update your name, bio, projects, skills, and contact information
   - Replace placeholder links with your actual social media profiles

2. **Deploy to GitHub Pages:**
   - Create a new repository named `yourusername.github.io` (replace with your GitHub username)
   - Upload all files (index.html, styles.css, script.js) to the repository
   - Go to Settings → Pages
   - Select your main branch as the source
   - Your site will be live at `https://yourusername.github.io`

## 📝 Customization Guide

### Update Your Information

**In `index.html`, replace:**
- `Your Name` - Your actual name (appears in multiple places)
- `Full-Stack Developer | Problem Solver | Tech Enthusiast` - Your professional title/tagline
- `your.email@example.com` - Your email address
- `yourusername` - Your GitHub/social media usernames
- `[Your Location]` - Your location
- `[Year]` - When you started coding

### Update Stats (About Section)

Customize the statistics in the stats grid:
```html
<div class="stat-card">
    <h3>5+</h3>
    <p>Years Experience</p>
</div>
```

Change the numbers and labels to reflect your experience.

### Modify Projects

Each project card includes:
- Project title
- Description
- Technologies used (tech tags)
- Links to GitHub repo and live demo

Replace the placeholder projects with your own work. To add more projects, copy the entire `<div class="project-card">...</div>` block.

### Add Your Presentations

In the Presentations section:
1. Update presentation titles
2. Change descriptions
3. Update links: `slides/your-presentation.html`
4. Modify tech tags to match your stack

### Update Skills

In the Skills section, add or remove technologies based on your expertise:
- Frontend skills
- Backend skills  
- Tools and other technologies

Each skill tag is interactive with hover effects.

### Change Colors

To customize the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --secondary-color: #8b5cf6;    /* Accent color */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text color */
}
```

### Customize Animations

You can adjust animation speeds and effects in `styles.css`:
- Hero animations: Search for `@keyframes fadeInUp`
- Scroll indicator: Adjust `@keyframes bounce`
- Hover effects: Modify transition durations in respective sections

## 📦 File Structure

```
yourusername.github.io/
├── index.html              # Main HTML file with all sections
├── styles.css              # Complete styling with animations
├── script.js               # Interactive features
├── README.md               # Documentation
└── slides/                 # (Create this) Your presentation files
    ├── presentation1.html
    ├── presentation2.html
    └── workshop.html
```

## 🎨 Design Features

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Amber (#fbbf24)
- Uses a beautiful gradient hero background

### Typography
- **Font**: Inter (Google Fonts)
- Clean, modern, and highly readable
- Responsive font sizes

### Components
- Gradient hero section with parallax effect
- Stats cards with gradient backgrounds
- Project cards with top border reveal
- Skill tags with hover animations
- Smooth mobile hamburger menu

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Feel free to use this template for your own portfolio! No attribution required.

## 💡 Tips

1. **Add a favicon:** Create a `favicon.ico` file and add it to your repository
2. **Optimize images:** If you add images, compress them for faster loading (use tools like TinyPNG)
3. **SEO:** Update the meta description in the HTML head section for better search visibility
4. **Analytics:** Add Google Analytics if you want to track visitors
5. **Custom domain:** You can add a custom domain in GitHub Pages settings
6. **Performance:** The site is optimized for performance with minimal dependencies
7. **Accessibility:** All interactive elements have proper ARIA labels

## 🚀 Performance

- **Lightweight**: No heavy frameworks or libraries
- **Fast loading**: Minimal external dependencies (only Google Fonts)
- **Optimized animations**: CSS-based animations for smooth performance
- **Mobile-first**: Responsive design prioritizes mobile experience

## ♿ Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels for icon links
- Sufficient color contrast
- Keyboard navigation support
- Smooth focus indicators

## 🤝 Need Help?

If you encounter any issues:
1. Check the browser console for JavaScript errors
2. Ensure all files are in the same directory
3. Verify that your repository is public
4. Wait a few minutes after pushing changes for GitHub Pages to update

## 🎉 You're All Set!

Once you've customized the content and deployed to GitHub Pages, your personal website will be live and ready to share with the world!

Good luck with your portfolio! 🚀
