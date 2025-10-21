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
