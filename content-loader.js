// Auto-load all content: Teaching Materials, Lesson Slides, and Resources
// This script automatically displays content from your lists

function loadAllContent() {
    console.log('🚀 Loading all content...');
    
    loadMaterials();
    loadSlides();
    loadResources();
}

// ========================================
// TEACHING MATERIALS SECTION
// ========================================
function loadMaterials() {
    console.log('📚 Loading teaching materials...');
    
    const materialsContainer = document.getElementById('materials-container');
    
    if (!materialsContainer) {
        console.error('Materials container not found!');
        return;
    }

    // ADD YOUR TEACHING MATERIALS HERE
    const materials = [
        {
            title: 'Beginner Level Materials',
            description: 'Comprehensive materials for beginner students including vocabulary worksheets, basic grammar exercises, and foundational reading materials.',
            link: '#',  // Add your link here (Google Drive, PDF, etc.)
            tags: ['Vocabulary', 'Grammar Basics', 'Worksheets']
        },
        {
            title: 'Intermediate Materials',
            description: 'Materials for intermediate learners focusing on complex grammar structures, expanded vocabulary, and reading comprehension exercises.',
            link: '#',  // Add your link here
            tags: ['Reading', 'Writing', 'Grammar']
        },
        {
            title: 'Advanced Resources',
            description: 'Advanced materials including academic writing guides, discussion topics, debate materials, and advanced literature analysis.',
            link: '#',  // Add your link here
            tags: ['Academic English', 'Discussion', 'Literature']
        }
        // ADD MORE MATERIALS HERE:
        // {
        //     title: 'Your Material Title',
        //     description: 'Description of your material',
        //     link: 'https://your-link.com',
        //     tags: ['Tag1', 'Tag2', 'Tag3']
        // }
    ];

    let materialsHTML = '';
    
    materials.forEach((material, index) => {
        console.log(`  Processing material ${index + 1}: ${material.title}`);
        
        const tagsHTML = material.tags.map(tag => 
            `<span class="tech-tag">${tag}</span>`
        ).join('');

        materialsHTML += `
            <div class="project-card">
                <div class="project-header">
                    <h3>${material.title}</h3>
                    <div class="project-links">
                        <a href="${material.link}" class="project-link" aria-label="View Materials">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <p class="project-description">${material.description}</p>
                <div class="project-tech">
                    ${tagsHTML}
                </div>
            </div>
        `;
    });

    materialsContainer.innerHTML = materialsHTML;
    console.log(`✅ Successfully loaded ${materials.length} teaching materials!`);
}

// ========================================
// LESSON SLIDES SECTION
// ========================================
function loadSlides() {
    console.log('🎓 Loading lesson slides...');
    
    const slidesContainer = document.getElementById('slides-container');
    
    if (!slidesContainer) {
        console.error('Slides container not found!');
        return;
    }

    // ADD YOUR LESSON SLIDES HERE
    const slideFiles = [
        {
            filename: 'Grade 2 Period 1.html',
            title: 'Grade 2 - Period 1',
            description: 'English lesson for Grade 2 students, Period 1 curriculum materials and activities.',
            tags: ['Grade 2', 'Beginner', 'Classroom']
        },
        {
            filename: 'Grade 2 Period 2.html',
            title: 'Grade 2 - Period 2',
            description: 'English lesson for Grade 2 students, Period 2 curriculum materials and activities.',
            tags: ['Grade 2', 'Beginner', 'Classroom']
        },
        {
            filename: 'interactive_reading_writing_lesson_ Reflect Unit 2.html',
            title: 'Reading & Writing: Reflect Unit 2',
            description: 'Interactive reading and writing activities with reflection exercises for Unit 2.',
            tags: ['Reading', 'Writing', 'Interactive']
        },
        {
            filename: 'irregular_verbs_learning.html',
            title: 'Irregular Verbs Learning',
            description: 'Learn and practice common irregular verbs with examples and exercises.',
            tags: ['Grammar', 'Verbs', 'Practice']
        }
        // ADD MORE SLIDES HERE:
        // {
        //     filename: 'your-lesson.html',
        //     title: 'Your Lesson Title',
        //     description: 'Brief description of what students will learn',
        //     tags: ['Category', 'Level', 'Topic']
        // }
    ];

    let slidesHTML = '';
    
    slideFiles.forEach((slide, index) => {
        console.log(`  Processing slide ${index + 1}: ${slide.title}`);
        
        const tagsHTML = slide.tags.map(tag => 
            `<span class="tech-tag">${tag}</span>`
        ).join('');

        slidesHTML += `
            <div class="project-card">
                <div class="project-header">
                    <h3>${slide.title}</h3>
                    <div class="project-links">
                        <a href="slides/${encodeURIComponent(slide.filename)}" class="project-link" aria-label="View Slides">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <p class="project-description">${slide.description}</p>
                <div class="project-tech">
                    ${tagsHTML}
                </div>
            </div>
        `;
    });

    slidesContainer.innerHTML = slidesHTML;
    console.log(`✅ Successfully loaded ${slideFiles.length} lesson slides!`);
}

// ========================================
// RESOURCES SECTION
// ========================================
function loadResources() {
    console.log('📖 Loading resources...');
    
    const resourcesContainer = document.getElementById('resources-container');
    
    if (!resourcesContainer) {
        console.error('Resources container not found!');
        return;
    }

    // ADD YOUR RESOURCES HERE
    const resourceCategories = [
        {
            category: 'Study Tips',
            items: ['Time Management', 'Memory Techniques', 'Practice Methods', 'Self-Study', 'Note-Taking']
        },
        {
            category: 'Recommended Tools',
            items: ['Online Dictionaries', 'Language Apps', 'Listening Practice', 'Grammar Checkers', 'Flashcard Apps']
        },
        {
            category: 'Learning Resources',
            items: ['Reading Materials', 'Podcasts', 'Videos', 'Practice Tests', 'Writing Guides']
        }
        // ADD MORE RESOURCE CATEGORIES HERE:
        // {
        //     category: 'Your Category Name',
        //     items: ['Resource 1', 'Resource 2', 'Resource 3']
        // }
    ];

    let resourcesHTML = '';
    
    resourceCategories.forEach((category, index) => {
        console.log(`  Processing resource category ${index + 1}: ${category.category}`);
        
        const itemsHTML = category.items.map(item => 
            `<span class="skill-tag">${item}</span>`
        ).join('');

        resourcesHTML += `
            <div class="skill-category">
                <h3>${category.category}</h3>
                <div class="skill-tags">
                    ${itemsHTML}
                </div>
            </div>
        `;
    });

    resourcesContainer.innerHTML = resourcesHTML;
    console.log(`✅ Successfully loaded ${resourceCategories.length} resource categories!`);
}

// ========================================
// RUN WHEN PAGE LOADS
// ========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllContent);
} else {
    loadAllContent();
}

console.log('✨ Content loader initialized!');
