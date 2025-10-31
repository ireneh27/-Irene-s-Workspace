// Category Page Loader - Loads slides for a specific category
// This script identifies which category to display based on the page filename

// Get category data from content-loader.js structure
const slideCategories = [
    {
        category: 'Basic Skills',
        description: 'Foundation building blocks for English learners',
        slides: [
            {
                filename: 'irregular_verbs_learning.html',
                title: 'Irregular Verbs Learning',
                description: 'Learn and practice common irregular verbs with examples and exercises. This comprehensive lesson covers the most commonly used irregular verbs in English, providing clear explanations, conjugation tables, and interactive practice exercises to help students master verb forms.',
                tags: ['Grammar', 'Verbs', 'Practice']
            }
        ]
    },
    {
        category: 'Primary Level',
        description: 'Elementary level lessons for young learners',
        slides: [
            {
                filename: 'Grade_2_Class_1_Presentation.html',
                title: 'Grade 2 - Class 1 Presentation',
                description: 'English lesson presentation for Grade 2 students, Class 1 curriculum materials and activities. This lesson introduces basic vocabulary and simple sentence structures through engaging visuals and interactive activities designed for young learners.',
                tags: ['Grade 2', 'Beginner', 'Classroom']
            },
            {
                filename: 'Grade_2_Class_2_Presentation.html',
                title: 'Grade 2 - Class 2 Presentation',
                description: 'English lesson presentation for Grade 2 students, Class 2 curriculum materials and activities. Building on the foundation from Class 1, this lesson expands vocabulary and introduces more complex sentence patterns with fun games and exercises.',
                tags: ['Grade 2', 'Beginner', 'Classroom']
            },
            {
                filename: 'Grade_2_Class_3_Presentation.html',
                title: 'Grade 2 - Class 3 Presentation',
                description: 'English lesson presentation for Grade 2 students, Class 3 curriculum materials and activities. This lesson focuses on reading comprehension and basic writing skills, encouraging students to express themselves in English.',
                tags: ['Grade 2', 'Beginner', 'Classroom']
            },
            {
                filename: 'Grade_2_Worksheets.html',
                title: 'Grade 2 Worksheets',
                description: 'Practice worksheets and exercises for Grade 2 English learning. A collection of printable worksheets covering vocabulary, grammar, reading, and writing exercises to reinforce classroom learning.',
                tags: ['Grade 2', 'Worksheets', 'Practice']
            }
        ]
    },
    {
        category: 'Intermediate Level',
        description: 'Intermediate lessons for developing language skills',
        slides: [
            {
                filename: 'interactive_reading_writing_lesson_ Reflect Unit 2.html',
                title: 'Reading & Writing: Reflect Unit 2',
                description: 'Interactive reading and writing activities with reflection exercises for Unit 2. This comprehensive lesson combines reading comprehension with structured writing practice, helping students develop critical thinking skills and express their ideas clearly in written English.',
                tags: ['Reading', 'Writing', 'Interactive']
            }
        ]
    },
    {
        category: 'Advanced Level',
        description: 'Advanced lessons for proficient learners',
        slides: []
    },
    {
        category: 'Family Education',
        description: 'Resources and materials for family learning and parenting',
        slides: [
            {
                filename: 'parenting_assessment.html',
                title: '育儿风格深度评估',
                description: '帮助您了解您的真实育儿画像。这个评估工具帮助家长深入了解自己的育儿风格，提供个性化的教育建议，促进家庭教育的有效性。通过科学的评估和专业的指导，帮助家长建立更健康的亲子关系。',
                tags: ['正面管教', '家庭教育', '育儿']
            }
        ]
    }
];

function loadCategoryPage() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Extract category from filename (e.g., "category-primary-level.html" -> "primary-level")
    const categoryMatch = currentPage.match(/category-(.+)\.html/);
    
    if (!categoryMatch) {
        console.error('Could not determine category from page name');
        document.getElementById('category-title').textContent = 'Category Not Found';
        return;
    }
    
    const categorySlug = categoryMatch[1];
    
    // Find the matching category
    const category = slideCategories.find(cat => {
        const slug = cat.category.toLowerCase().replace(/\s+/g, '-');
        return slug === categorySlug;
    });
    
    if (!category) {
        console.error(`Category not found: ${categorySlug}`);
        document.getElementById('category-title').textContent = 'Category Not Found';
        return;
    }
    
    // Update page title and description
    document.getElementById('category-title').textContent = category.category;
    document.getElementById('category-description').textContent = category.description;
    document.title = `${category.category} - Irene's Workspace`;
    
    // Load slides
    const slidesContainer = document.getElementById('category-slides-container');
    
    if (!slidesContainer) {
        console.error('Category slides container not found!');
        return;
    }
    
    let slidesHTML = '';
    
    if (category.slides.length === 0) {
        slidesHTML = `
            <div class="project-card" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="color: #6b7280; font-size: 1.125rem;">No slides available in this category yet. Check back soon!</p>
            </div>
        `;
    } else {
        category.slides.forEach((slide) => {
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
    }
    
    slidesContainer.innerHTML = slidesHTML;
    console.log(`✅ Loaded ${category.slides.length} slides for category: ${category.category}`);
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCategoryPage);
} else {
    loadCategoryPage();
}

console.log('✨ Category loader initialized!');

