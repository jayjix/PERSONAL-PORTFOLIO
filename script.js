// ========================================
// WAIT FOR DOM TO BE FULLY LOADED
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // NAVIGATION VARIABLES
    // ========================================
    // Get all navigation buttons
    const viewExperienceBtn = document.querySelector('.btn-2');
    const getInTouchBtn = document.querySelector('.btn-1');
    
    // Get the sections
    const aboutMeSection = document.querySelector('.about-me');
    const experienceSection = document.querySelector('.experience-section');
    const skillsSection = document.querySelector('.skills-section');
    const awardsSection = document.querySelector('.awards-container');
    const contactSection = document.querySelector('.contact-wrapper');
    
    // Hide experience, skills, awards, and contact sections by default
    experienceSection.classList.add('section-hidden');
    skillsSection.classList.add('section-hidden');
    awardsSection.classList.add('section-hidden');
    contactSection.classList.add('section-hidden');
    
    // Get all header navigation links
    const headerNavLinks = document.querySelectorAll('.nav-links li');
    
    // Get all bottom navigation buttons
    const bottomNavBtns = document.querySelectorAll('.bottom-nav button');
    
    // ========================================
    // NAVIGATION FUNCTIONS
    // ========================================
    
    // Function to remove active class from all header nav links
    function removeAllHeaderActive() {
        headerNavLinks.forEach(link => link.classList.remove('active'));
    }
    
    // Function to remove active class from all bottom nav buttons
    function removeAllBottomActive() {
    bottomNavBtns.forEach(btn => btn.classList.remove('active'));
}
    
    // Function to sync focus between navigations
function syncNavigationFocus(index) {
    // Remove active class from all header nav links
    removeAllHeaderActive();
    
    // Add active class to the corresponding header nav link
    headerNavLinks[index].classList.add('active');
    
    // Remove active class from all bottom nav buttons first
    removeAllBottomActive();
    
    // Add active class to the corresponding bottom nav button
    bottomNavBtns[index].classList.add('active');
}
    
    // Function to hide all sections
    function hideAllSections() {
        aboutMeSection.classList.add('section-hidden');
        aboutMeSection.classList.remove('section-visible');
        experienceSection.classList.add('section-hidden');
        experienceSection.classList.remove('section-visible');
        skillsSection.classList.add('section-hidden');
        skillsSection.classList.remove('section-visible');
        awardsSection.classList.add('section-hidden');
        awardsSection.classList.remove('section-visible');
        contactSection.classList.add('section-hidden');
        contactSection.classList.remove('section-visible');
    }
    
    // Function to show About Me section
    function showAboutSection() {
        hideAllSections();
        aboutMeSection.classList.remove('section-hidden');
        aboutMeSection.classList.add('section-visible');
    }
    
    // Function to show Experience section
    function showExperienceSection() {
        hideAllSections();
        experienceSection.classList.remove('section-hidden');
        experienceSection.classList.add('section-visible');
    }
    
    // Function to show Skills section
    function showSkillsSection() {
        hideAllSections();
        skillsSection.classList.remove('section-hidden');
        skillsSection.classList.add('section-visible');
    }
    
    // Function to show Awards section
    function showAwardsSection() {
        hideAllSections();
        awardsSection.classList.remove('section-hidden');
        awardsSection.classList.add('section-visible');
    }
    
    // Function to show Contact section
    function showContactSection() {
        hideAllSections();
        contactSection.classList.remove('section-hidden');
        contactSection.classList.add('section-visible');
    }
    
    // ========================================
    // NAVIGATION EVENT LISTENERS
    // ========================================
    
    // Add click events to header navigation links
    headerNavLinks.forEach((link, index) => {
        link.addEventListener('click', function() {
            // Sync focus with bottom nav
            syncNavigationFocus(index);
            
            // Handle section switching based on index
            if (index === 0) { // About
                showAboutSection();
            } else if (index === 1) { // Experience
                showExperienceSection();
            } else if (index === 2) { // Skills
                showSkillsSection();
            } else if (index === 3) { // Awards
                showAwardsSection();
            } else if (index === 4) { // Contact
                showContactSection();
            }
        });
    });
    
    // Add click events to bottom navigation buttons
        bottomNavBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
        // Sync focus with header nav
        removeAllHeaderActive();
        headerNavLinks[index].classList.add('active');
        
        // Sync active state with bottom nav
        removeAllBottomActive();
        bottomNavBtns[index].classList.add('active');
        
        // Just handle section switching
        if (index === 0) { // About
            showAboutSection();
        } else if (index === 1) { // Experience
            showExperienceSection();
        } else if (index === 2) { // Skills
            showSkillsSection();
        } else if (index === 3) { // Awards
            showAwardsSection();
        } else if (index === 4) { // Contact
            showContactSection();
        }
    });
});
    
    // Add click event to View Experience button
    viewExperienceBtn.addEventListener('click', function() {
        // Show Experience section
        showExperienceSection();
        
        // Sync focus to Experience button in bottom nav
        syncNavigationFocus(1); // Index 1 = Experience
    });
    
    // Add click event to Get in Touch button
    getInTouchBtn.addEventListener('click', function() {
        // Show Contact section
        showContactSection();
        
        // Sync focus to Contact button in bottom nav
        syncNavigationFocus(4); // Index 4 = Contact
    });
    
    // Set default active state to "About" on page load
    syncNavigationFocus(0);
    
    // ========================================
    // DARK MODE / LIGHT MODE TOGGLE
    // ========================================
    
    // Get the dark mode toggle button
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    // Moon SVG icon (shows in dark mode - default)
    const moonIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(27, 26, 26);">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        
        
    `;
    
    // Sun SVG icon (shows in light mode)
    const sunIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(255, 255, 255);">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        
    `;
    
    // Set initial icon (moon for dark mode)
    darkModeToggle.innerHTML = moonIcon;
    
    // Function to toggle between dark and light mode
    function toggleDarkMode() {
        // Toggle the 'light-mode' class on the body
        document.body.classList.toggle('light-mode');
        
        // Check if light mode is active
        const isLightMode = document.body.classList.contains('light-mode');
        
        // Change the icon based on the current mode
        // Change the icon based on the current mode
if (isLightMode) {
    // If light mode is active, show sun icon
    darkModeToggle.innerHTML = moonIcon;
    // Save light mode preference
    localStorage.setItem('theme', 'light');
} else {
    // If dark mode is active, show moon icon
    darkModeToggle.innerHTML = sunIcon;
    // Save dark mode preference
    localStorage.setItem('theme', 'dark');
}
        
    }
    
    // Add click event listener to dark mode toggle button
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    
// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');

// Remove the temporary loading class from html
document.documentElement.classList.remove('light-mode-loading');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    darkModeToggle.innerHTML = moonIcon;
} else if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
    darkModeToggle.innerHTML = sunIcon;
} else {
    // If no saved preference, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light-mode');
        darkModeToggle.innerHTML = moonIcon;
    }
}
    
    
});