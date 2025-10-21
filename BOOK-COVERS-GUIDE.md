# 📚 Guide: Adding Book Covers and Website Links

## 🎯 What's New?

Your website now supports:
1. ✅ **Book cover images** for teaching materials
2. ✅ **Publisher website links** for each book
3. ✅ **Clickable resource links** to popular English learning websites

---

## 📁 NEW FOLDER STRUCTURE

You now need TWO folders:

```
your-repository/
├── index.html
├── content-loader.js  (NEW VERSION!)
├── styles.css         (UPDATED!)
├── script.js
├── slides/           ← Existing folder
│   └── [your slide files]
└── images/           ← NEW FOLDER - Create this!
    ├── oxford-discover.jpg
    ├── cambridge-young.jpg
    ├── nat-geo.jpg
    └── placeholder-book.jpg  (optional)
```

---

## 📸 STEP 1: Get Book Cover Images

### Option A: Download from Publisher Websites
1. Visit the publisher's website
2. Find the book page
3. Right-click on the cover image
4. Save as JPG or PNG

### Option B: Take Photos
1. Take a clear photo of the physical book cover
2. Crop to show just the cover
3. Save as JPG

### Option C: Screenshot
1. Find the book on Amazon or Google Books
2. Take a screenshot of the cover
3. Crop and save

### Recommended Image Size:
- Width: 300-500px
- Height: 400-700px
- Format: JPG or PNG
- Keep file size under 500KB

---

## 🖼️ STEP 2: Upload Book Cover Images

### Create the Images Folder:
1. Go to your GitHub repository
2. Click "Add file" → "Create new file"
3. Type: `images/README.md`
4. Add content: "Book cover images"
5. Commit

### Upload Your Images:
1. Go into the `images/` folder
2. Click "Upload files"
3. Upload your book cover images:
   - `oxford-discover.jpg`
   - `cambridge-young.jpg`
   - `nat-geo.jpg`
   - (add as many as you need)
4. Commit

---

## 📝 STEP 3: Update content-loader.js

### For Teaching Materials (Books):

Edit the `materials` array (around line 20):

```javascript
const materials = [
    {
        title: 'Your Book Title',
        publisher: 'Publisher Name',
        publisherLink: 'https://publisher-website.com',
        description: 'Description of the book and what it covers.',
        coverImage: 'images/your-book-cover.jpg',  // ← Your image path
        tags: ['Level', 'Type', 'Publisher']
    },
    {
        title: 'Another Book',
        publisher: 'Another Publisher',
        publisherLink: 'https://another-publisher.com',
        description: 'Description here.',
        coverImage: 'images/another-cover.jpg',
        tags: ['Tag1', 'Tag2', 'Tag3']
    }
    // Add more books...
];
```

### Real Example: Oxford Discover

```javascript
{
    title: 'Oxford Discover Level 1',
    publisher: 'Oxford University Press',
    publisherLink: 'https://elt.oup.com/student/oxforddiscover/',
    description: 'A six-level American English course that uses Big Questions to engage students in 21st century learning.',
    coverImage: 'images/oxford-discover-1.jpg',
    tags: ['Elementary', 'Coursebook', 'Oxford']
}
```

---

## 🔗 STEP 4: Resources Already Configured!

The resources section already has 25+ popular English learning websites configured and ready to use!

### Categories Included:
1. **Interactive Learning Websites**
   - Duolingo, BBC Learning English, British Council, etc.

2. **Grammar & Vocabulary Practice**
   - Cambridge English, Perfect English Grammar, etc.

3. **Listening & Speaking**
   - VOA Learning English, ESL Pod, TED-Ed, etc.

4. **Reading Resources**
   - Storyline Online, Oxford Owl, Epic! Books, etc.

5. **Games & Activities**
   - Fun English Games, ESL Games Plus, etc.

### To Add More Websites:

Edit the `resourceCategories` array (around line 180):

```javascript
{
    category: 'Your Category Name',
    websites: [
        { name: 'Website Name', url: 'https://website.com' },
        { name: 'Another Site', url: 'https://another-site.com' },
        { name: 'Third Site', url: 'https://third-site.com' }
    ]
}
```

---

## 🎨 What It Looks Like

### Teaching Materials Section:
```
┌────────────────────────────────┐
│  [Book Cover Image]            │
│                                │
│  Oxford Discover Level 1    🔗 │
│  Publisher: Oxford University  │
│                                │
│  Description of the book...    │
│                                │
│  [Elementary] [Coursebook]     │
└────────────────────────────────┘
```

### Resources Section:
```
Interactive Learning Websites
┌─────────────┐ ┌────────────────────┐
│ Duolingo 🔗 │ │ BBC Learning 🔗    │
└─────────────┘ └────────────────────┘
(Clickable links that open in new tab)
```

---

## 📋 Complete Example Configuration

### Teaching Materials (3 Popular Books):

```javascript
const materials = [
    {
        title: 'Oxford Discover Level 1',
        publisher: 'Oxford University Press',
        publisherLink: 'https://elt.oup.com/student/oxforddiscover/',
        description: 'A six-level American English course using Big Questions to engage students.',
        coverImage: 'images/oxford-discover-1.jpg',
        tags: ['Elementary', 'Coursebook', 'Oxford']
    },
    {
        title: 'Everybody Up 2nd Edition',
        publisher: 'Oxford University Press',
        publisherLink: 'https://elt.oup.com/student/everybodyup/',
        description: 'Seven-level course linking students to the wider world with cross-curricular topics.',
        coverImage: 'images/everybody-up.jpg',
        tags: ['Young Learners', 'Primary', 'Oxford']
    },
    {
        title: 'Cambridge English for Schools',
        publisher: 'Cambridge University Press',
        publisherLink: 'https://www.cambridge.org/elt',
        description: 'Comprehensive course with exam preparation integrated throughout.',
        coverImage: 'images/cambridge-schools.jpg',
        tags: ['Exam Prep', 'Secondary', 'Cambridge']
    }
];
```

---

## 🎯 Quick Start Checklist

### Step-by-Step:
- [ ] Create `images/` folder on GitHub
- [ ] Collect book cover images
- [ ] Upload images to `images/` folder
- [ ] Download NEW `content-loader.js` (v2)
- [ ] Download UPDATED `styles.css`
- [ ] Edit `content-loader.js` with your book information
- [ ] Upload both files to GitHub
- [ ] Wait 3-5 minutes
- [ ] Check your website!

---

## 💡 Tips for Book Covers

### Image Quality:
- ✅ Clear, high-resolution images
- ✅ Good lighting (if photographing)
- ✅ Straight, not tilted
- ✅ Just the cover, no background

### Naming Convention:
- Use lowercase
- Use hyphens, not spaces
- Be descriptive
- Examples:
  - `oxford-discover-level-1.jpg` ✅
  - `everybody-up-starter.jpg` ✅
  - `Book Cover.jpg` ❌

### Placeholder Image:
If you don't have a cover image yet, the code will automatically show a placeholder. You can create one or let it use the default gray gradient.

---

## 🔗 Popular Publisher Websites

Here are some common publisher links you might use:

**Oxford University Press:**
- Main ELT: https://elt.oup.com
- Oxford Discover: https://elt.oup.com/student/oxforddiscover/
- Everybody Up: https://elt.oup.com/student/everybodyup/

**Cambridge University Press:**
- Main ELT: https://www.cambridge.org/elt
- Young Learners: https://www.cambridge.org/elt/english-for/children-and-teens/

**Pearson:**
- https://www.pearson.com/english

**National Geographic Learning:**
- https://ngl.cengage.com/

**Macmillan:**
- https://www.macmillanenglish.com/

---

## 🆘 Troubleshooting

### Image doesn't show:
- Check the filename matches exactly (case-sensitive!)
- Verify the image is in the `images/` folder
- Check the file extension (.jpg or .png)
- Wait 3-5 minutes for GitHub to update

### Link doesn't work:
- Make sure URL starts with `https://`
- Test the link in a browser first
- Check for typos

### Resources not clickable:
- Make sure you uploaded the UPDATED `styles.css`
- Clear browser cache (Ctrl + Shift + R)

---

## 📊 Summary

**What You'll Have:**

### Teaching Materials:
- Book cover images
- Links to publisher websites
- Professional book showcase

### Resources:
- 25+ pre-configured English learning websites
- Organized by category
- All clickable and ready to use

**All automatically loaded from ONE file: content-loader.js!**

---

## 🎉 Result

Your website will now look like a professional teaching resource hub with:
- Beautiful book covers
- Direct links to publishers
- Curated list of learning websites
- Clean, modern design

Students and parents can easily:
- See what books you use
- Visit publisher websites for more info
- Access recommended learning websites
- Browse your lesson slides

Perfect! 📚✨
