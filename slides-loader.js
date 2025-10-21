// Auto-load slides from the slides folder
// This script automatically displays all HTML files in the slides folder

function loadSlides() {
    console.log('loadSlides function called');
    
    const slidesContainer = document.getElementById('slides-container');
    
    if (!slidesContainer) {
        console.error('Slides container not found! Make sure there is an element with id="slides-container"');
        return;
    }
    
    console.log('Slides container found!');

    // List of your slide files - UPDATE THIS LIST when you add new slides
    const slideFiles = [
        {
            filename: 'present-perfect.html',
            title: 'Grammar Lesson: Present Perfect',
            description: 'Interactive slides covering the present perfect tense with examples, practice exercises, and common usage patterns.',
            tags: ['Grammar', 'Intermediate', 'Interactive']
        },
        {
            filename: 'daily-routines.html',
            title: 'Vocabulary: Daily Routines',
            description: 'Beginner-level slides teaching vocabulary related to daily activities and routines with visual aids and practice exercises.',
            tags: ['Vocabulary', 'Beginner', 'Visual']
        },
        {
            filename: 'reading-skills.html',
            title: 'Reading Comprehension Skills',
            description: 'Slides focused on developing reading comprehension strategies including skimming, scanning, and inference techniques.',
            tags: ['Reading', 'All Levels', 'Strategies']
        },
        {
            filename: 'conversation.html',
            title: 'Conversation Practice',
            description: 'Interactive conversation prompts and discussion activities for intermediate and advanced students to practice speaking skills.',
            tags: ['Speaking', 'Intermediate+', 'Discussion']
        },
        {
            filename: 'writing-workshop.html',
            title: 'Writing Workshop',
            description: 'Step-by-step guidance on essay writing, including structure, organization, and advanced writing techniques.',
            tags: ['Writing', 'Advanced', 'Essay Skills']
        },
        {
            filename: 'pronunciation.html',
            title: 'Pronunciation Guide',
            description: 'Comprehensive pronunciation guide covering phonetics, common mistakes, and practice exercises for Chinese English learners.',
            tags: ['Pronunciation', 'All Levels', 'Phonetics']
        }
        // ADD NEW SLIDES HERE - just copy the format above
        // Example:
        // {
        //     filename: 'your-lesson.html',
        //     title: 'Your Lesson Title',
        //     description: 'Brief description of what students will learn',
        //     tags: ['Category', 'Level', 'Topic']
        // }
    ];

    console.log(`Processing ${slideFiles.length} slides...`);

    // Generate HTML for each slide
    let slidesHTML = '';
    
    slideFiles.forEach((slide, index) => {
        console.log(`Processing slide ${index + 1}: ${slide.title}`);
        
        const tagsHTML = slide.tags.map(tag => 
            `<span class="tech-tag">${tag}</span>`
        ).join('');

        slidesHTML += `
            <div class="project-card">
                <div class="project-header">
                    <h3>${slide.title}</h3>
                    <div class="project-links">
                        <a href="slides/${slide.filename}" class="project-link" aria-label="View Slides">
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

    // Update the container
    slidesContainer.innerHTML = slidesHTML;
    
    console.log(`✅ Successfully loaded ${slideFiles.length} slides!`);
    console.log('Slides are now visible on the website.');
}

// Run when the DOM is fully loaded
if (document.readyState === 'loading') {
    // Still loading, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', loadSlides);
} else {
    // DOM already loaded, run immediately
    loadSlides();
}
