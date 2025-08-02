import { generateToggle, toggleColors } from './toggles.js';
import { timelineEntries } from './timeline-entries.js';

// ########## Menu Bar ##########
// Toggle mobile menu
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu-2');

toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
});


// ########## About Me ##########
// Toggle dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// Add hover effect to skill tags
const skillTags = document.querySelectorAll('.bg-indigo-100');
skillTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.classList.remove('bg-indigo-100', 'text-indigo-800');
        tag.classList.add('bg-blue-900', 'text-white');
    });
    tag.addEventListener('mouseout', () => {
        tag.classList.remove('bg-blue-900', 'text-white');
        tag.classList.add('bg-indigo-100', 'text-indigo-800');
    });
});


// Generate timeline toggles:
const toggleContainer = document.getElementById("timeline-toggle-container");
toggleContainer.innerHTML += generateToggle("education-toggle", "Education", "true", toggleColors.education);
toggleContainer.innerHTML += generateToggle("career-toggle", "Career", "true", toggleColors.career);
toggleContainer.innerHTML += generateToggle("achievements-toggle", "Achievements", "true", toggleColors.achievements);
toggleContainer.innerHTML += generateToggle("research-toggle", "Research", "true", toggleColors.research);
toggleContainer.innerHTML += generateToggle("projects-toggle", "Projects", "true", toggleColors.projects);


// Generate timeline icons:
const timelineContainer = document.getElementById("timeline-container");
timelineEntries.forEach(element => {
    timelineContainer.innerHTML += element
});