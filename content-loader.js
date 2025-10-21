// Auto-load all content: Teaching Materials, Lesson Slides, and Resources
// This script automatically displays content from your lists

function loadAllContent() {
    console.log('🚀 Loading all content...');
    
    loadMaterials();
    loadSlides();
    loadResources();
}

// ========================================
// TEACHING MATERIALS SECTION (with book covers!)
// ========================================
function loadMaterials() {
    console.log('📚 Loading teaching materials...');
    
    const materialsContainer = document.getElementById('materials-container');
    
    if (!materialsContainer) {
        console.error('Materials container not found!');
        return;
    }

    // ADD YOUR TEACHING MATERIALS HERE
    // Include book cover images and publisher website links
    const materials = [
        {
            title: 'Oxford Discover',
            publisher: 'Oxford University Press',
            publisherLink: 'https://elt.oup.com/student/oxforddiscover/',
            description: 'A six-level American English course that uses Big Questions to engage students in 21st century learning.',
            coverImage: 'images/oxford-discover.jpg',  // Put image in images/ folder
            tags: ['Coursebook', 'Elementary', 'Oxford']
        },
        {
            title: 'Cambridge English for Young Learners',
            publisher: 'Cambridge University Press',
            publisherLink: 'https://www.cambridge.org/elt',
            description: 'Comprehensive series for young learners with engaging activities and clear progression.',
            coverImage: 'images/cambridge-young.jpg',  // Put image in images/ folder
            tags: ['Coursebook', 'Young Learners', 'Cambridge']
        },
        {
            title: 'National Geographic Learning',
            publisher: 'National Geographic Learning',
            publisherLink: 'https://ngl.cengage.com/',
            description: 'Bring the world to the classroom with authentic National Geographic content.',
            coverImage: 'images/nat-geo.jpg',  // Put image in images/ folder
            tags: ['Content-Based', 'All Levels', 'Authentic']
        }
        // ADD MORE BOOKS HERE:
        // {
        //     title: 'Book Title',
        //     publisher: 'Publisher Name',
        //     publisherLink: 'https://publisher-website.com',
        //     description: 'Description of the book',
        //     coverImage: 'images/book-cover.jpg',
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
            <div class="project-card book-card">
                <div class="book-cover-container">
                    <img src="${material.coverImage}" alt="${material.title} cover" class="book-cover" onerror="this.src='images/placeholder-book.jpg'">
                </div>
                <div class="book-info">
                    <div class="project-header">
                        <h3>${material.title}</h3>
                        <div class="project-links">
                            <a href="${material.publisherLink}" target="_blank" class="project-link" aria-label="Publisher Website">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p class="publisher-name">Publisher: ${material.publisher}</p>
                    <p class="project-description">${material.description}</p>
                    <div class="project-tech">
                        ${tagsHTML}
                    </div>
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
// RESOURCES SECTION (with website links!)
// ========================================
function loadResources() {
    console.log('📖 Loading resources...');
    
    const resourcesContainer = document.getElementById('resources-container');
    
    if (!resourcesContainer) {
        console.error('Resources container not found!');
        return;
    }

    // ADD YOUR RESOURCE LINKS HERE
    // Popular English learning websites
    const resourceCategories = [
        {
            category: 'Interactive Learning Websites',
            websites: [
                { name: 'Duolingo', url: 'https://www.duolingo.com' },
                { name: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish' },
                { name: 'British Council LearnEnglish Kids', url: 'https://learnenglishkids.britishcouncil.org' },
                { name: 'Starfall', url: 'https://www.starfall.com' },
                { name: 'ABCmouse', url: 'https://www.abcmouse.com' }
            ]
        },
        {
            category: 'Grammar & Vocabulary Practice',
            websites: [
                { name: 'Cambridge English', url: 'https://www.cambridgeenglish.org' },
                { name: 'Grammarly Blog', url: 'https://www.grammarly.com/blog' },
                { name: 'Perfect English Grammar', url: 'https://www.perfect-english-grammar.com' },
                { name: 'English Grammar Online', url: 'https://www.ego4u.com' },
                { name: 'Vocabulary.com', url: 'https://www.vocabulary.com' }
            ]
        },
        {
            category: 'Listening & Speaking',
            websites: [
                { name: 'VOA Learning English', url: 'https://learningenglish.voanews.com' },
                { name: 'ESL Pod', url: 'https://www.eslpod.com' },
                { name: 'TED-Ed', url: 'https://ed.ted.com' },
                { name: 'Randall\'s ESL Cyber Listening Lab', url: 'https://www.esl-lab.com' },
                { name: 'Elllo', url: 'https://www.elllo.org' }
            ]
        },
        {
            category: 'Reading Resources',
            websites: [
                { name: 'Storyline Online', url: 'https://www.storylineonline.net' },
                { name: 'Oxford Owl', url: 'https://www.oxfordowl.co.uk' },
                { name: 'Epic! Books for Kids', url: 'https://www.getepic.com' },
                { name: 'International Children\'s Digital Library', url: 'http://www.childrenslibrary.org' },
                { name: 'ReadWorks', url: 'https://www.readworks.org' }
            ]
        },
        {
            category: 'Games & Activities',
            websites: [
                { name: 'Fun English Games', url: 'https://www.funenglishgames.com' },
                { name: 'ESL Games Plus', url: 'https://www.eslgamesplus.com' },
                { name: 'Cambridge English Games', url: 'https://www.cambridgeenglish.org/learning-english/games-social/' },
                { name: 'ESL Kids Games', url: 'https://www.eslkidsgames.com' },
                { name: 'Digital Dialects', url: 'https://www.digitaldialects.com' }
            ]
        }
        // ADD MORE CATEGORIES HERE:
        // {
        //     category: 'Your Category Name',
        //     websites: [
        //         { name: 'Website Name', url: 'https://website.com' },
        //         { name: 'Another Website', url: 'https://another.com' }
        //     ]
        // }
    ];

    let resourcesHTML = '';
    
    resourceCategories.forEach((category, index) => {
        console.log(`  Processing resource category ${index + 1}: ${category.category}`);
        
        const websitesHTML = category.websites.map(site => 
            `<a href="${site.url}" target="_blank" class="skill-tag resource-link" rel="noopener noreferrer">
                ${site.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 4px;">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>`
        ).join('');

        resourcesHTML += `
            <div class="skill-category">
                <h3>${category.category}</h3>
                <div class="skill-tags">
                    ${websitesHTML}
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
