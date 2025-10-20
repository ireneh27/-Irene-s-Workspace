# Irene's English Teaching Workspace

A modern, responsive personal teaching portfolio website showcasing English learning materials, lesson slides, and educational resources for students of all levels in China.

## ✨ Features

### Design & UX
- ✅ **Fully responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Smooth animations** - Fade-in effects, parallax scrolling, and hover interactions
- ✅ **Modern gradient hero** section with animated scroll indicator
- ✅ **Professional color scheme** - Education-friendly design
- ✅ **Easy navigation** - Quick access to materials and slides

### Sections
- ✅ **Hero Section** - Welcome message and introduction
- ✅ **About Section** - Your teaching background and areas of expertise
- ✅ **Teaching Materials** - Organized by level (Beginner, Intermediate, Advanced)
- ✅ **Lesson Slides** - Interactive HTML presentations for your classes
- ✅ **Resources Section** - Additional learning tools and study tips
- ✅ **Contact Section** - Easy way for students and colleagues to reach you
- ✅ **Mobile Navigation** - Hamburger menu with smooth transitions

## 🚀 Quick Start - Deploying to Your GitHub Pages

### Step 1: Update Your Repository

1. Go to your GitHub repository: `https://github.com/lkk2114/-Irene-s-Workspace`
2. Click on "Add file" → "Upload files"
3. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Commit the changes

### Step 2: Create a Slides Folder

1. In your repository, create a new folder called `slides`
2. This is where you'll upload your lesson presentation HTML files
3. You can use the provided `example-presentation.html` as a template

### Step 3: Enable GitHub Pages (if not already enabled)

1. Go to Settings → Pages
2. Under "Source", select your main branch
3. Click "Save"
4. Your site will be live at: `https://lkk2114.github.io/-Irene-s-Workspace/`

## 📝 Customization Guide

### Update Your Contact Information

In `index.html`, find and replace:
```html
<a href="mailto:irene.teacher@example.com" class="btn btn-primary">Contact Me</a>
```
Replace `irene.teacher@example.com` with your actual email address.

### Add Your Own Lesson Slides

#### Option 1: Use the Template
1. Copy the `example-presentation.html` file
2. Rename it to match your lesson (e.g., `grammar-lesson1.html`)
3. Edit the content:
   - Change the title
   - Update slide content
   - Modify the number of slides
   - Customize colors if desired

#### Option 2: Upload Existing Slides
If you already have HTML slides (like PowerPoint exports or Reveal.js presentations):
1. Upload them to the `slides/` folder
2. Update the links in `index.html` to point to your files

### Updating Lesson Links in index.html

Find the Lesson Slides section and update each card:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Lesson Title</h3>
        <div class="project-links">
            <a href="slides/your-lesson-file.html" class="project-link" aria-label="View Slides">
                <!-- SVG icon -->
            </a>
        </div>
    </div>
    <p class="project-description">Description of your lesson...</p>
    <div class="project-tech">
        <span class="tech-tag">Grammar</span>
        <span class="tech-tag">Intermediate</span>
    </div>
</div>
```

### Add More Lesson Cards

To add more lessons, copy the entire project-card div and paste it in the Lesson Slides section:

```html
<div class="project-card">
    <div class="project-header">
        <h3>New Lesson Title</h3>
        <div class="project-links">
            <a href="slides/new-lesson.html" class="project-link" aria-label="View Slides">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>
    </div>
    <p class="project-description">Your lesson description here...</p>
    <div class="project-tech">
        <span class="tech-tag">Topic</span>
        <span class="tech-tag">Level</span>
    </div>
</div>
```

### Update Teaching Materials Section

You can modify the teaching materials cards to link to:
- PDF files you upload
- Google Drive folders with your materials
- Other resources you want to share

Replace the `#` in the href with your actual link:
```html
<a href="your-link-here.pdf" class="project-link" aria-label="View Materials">
```

## 📁 File Structure

```
-Irene-s-Workspace/
├── index.html              # Main homepage
├── styles.css              # All styling
├── script.js               # Interactive features
├── README.md               # This file
└── slides/                 # Create this folder for your presentations
    ├── grammar-lesson1.html
    ├── vocabulary-lesson.html
    ├── reading-practice.html
    └── ...                 # Add more lesson files here
```

## 🎨 Creating Lesson Slides

### Using the Template

The `example-presentation.html` file is a simple slide template with:
- Title slide
- Content slides
- Navigation buttons (Previous/Next)
- Keyboard navigation (arrow keys)
- Responsive design

### Customizing Slides

1. **Add a new slide:**
```html
<div class="slide">
    <h2>Your Slide Title</h2>
    <p>Your content here...</p>
    <ul>
        <li>Point 1</li>
        <li>Point 2</li>
    </ul>
</div>
```

2. **Update the total number of slides:**
Find this line and change the number:
```html
<span id="totalSlides">7</span>  <!-- Change this number -->
```

3. **Change colors:**
Edit the background gradient in the style section:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 💡 Tips for Success

### For Materials
1. **Organize by level** - Keep beginner, intermediate, and advanced materials separate
2. **Use clear names** - Name your files descriptively (e.g., `beginner-grammar-present-tense.pdf`)
3. **Upload to cloud** - Consider using Google Drive for large PDF files and link to them

### For Slides
1. **Keep it simple** - One main idea per slide
2. **Use visuals** - Add images to make slides more engaging
3. **Test on mobile** - Many students may view on phones

### For Your Website
1. **Update regularly** - Add new materials as you create them
2. **Get feedback** - Ask students what materials are most helpful
3. **Keep it organized** - Use consistent naming and categorization

## 🔗 Adding External Links

To link to external resources (PDFs, Google Drive, etc.):

1. Upload files to Google Drive or another hosting service
2. Get the shareable link
3. Update the href in your HTML:

```html
<a href="https://drive.google.com/file/d/YOUR-FILE-ID/view" class="project-link">
```

## 📱 Mobile Optimization

The website is fully responsive and works great on:
- Mobile phones
- Tablets
- Desktop computers

Students can access your materials from any device!

## 🆘 Need Help?

If you encounter issues:
1. Check that all file names match exactly (including `.html` extension)
2. Ensure files are in the correct folders
3. Wait a few minutes after uploading for GitHub Pages to update
4. Clear your browser cache if changes don't appear

## ✅ Checklist for Going Live

- [ ] Replace email address with your real email
- [ ] Update the About section with your teaching background
- [ ] Create the `slides/` folder
- [ ] Upload at least one lesson slide
- [ ] Update lesson links to point to your actual files
- [ ] Add links to your teaching materials
- [ ] Test the website on mobile and desktop
- [ ] Share the link with your students!

## 🎉 Your Website URL

Once deployed, share this link with your students:
**https://lkk2114.github.io/-Irene-s-Workspace/**

Good luck with your teaching website! 📚✨
