// Navigation HTML
const navigationHTML = `
    <nav class="bg-white border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <a href="index.html" class="text-2xl font-bold logo-link">Aamir</a>
                <div class="hidden md:flex space-x-8">
                    <a href="about.html" class="nav-link text-gray-700 hover:text-gray-900 transition" data-page="about">About</a>
                    <a href="project.html" class="nav-link text-gray-700 hover:text-gray-900 transition" data-page="project">Projects</a>
                    <a href="resume.html" class="nav-link text-gray-700 hover:text-gray-900 transition" data-page="resume">Resume</a>
                    <a href="tools.html" class="nav-link text-gray-700 hover:text-gray-900 transition" data-page="tools">Tools</a>
                    <a href="ama.html" class="nav-link text-gray-700 hover:text-gray-900 transition" data-page="ama">AMA</a>
                </div>
                <button class="md:hidden text-gray-700" id="mobile-menu-btn">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
`;

// Footer HTML
const footerHTML = `
    <footer class="bg-gray-50 border-t border-gray-100 mt-20">
        <div class="max-w-6xl mx-auto px-6 py-12 text-center">
            <p class="text-gray-600">© 2024 by Mohammed Aamir. All rights reserved.</p>
        </div>
    </footer>
`;

// Function to inject common elements
function injectCommonElements() {
    // Create and inject navigation
    const navContainer = document.createElement('div');
    navContainer.innerHTML = navigationHTML;
    document.body.insertBefore(navContainer.firstElementChild, document.body.firstChild);

    // Create and inject footer
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer.firstElementChild);

    // Set active navigation link
    setActiveNavLink();
    
    // Mobile menu toggle
    setupMobileMenu();
}

// Function to highlight active navigation link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop().replace('.html', '') || 'index';
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageName) {
            link.classList.add('text-gray-900', 'font-semibold');
            link.classList.remove('text-gray-700');
        } else {
            link.classList.add('text-gray-700', 'hover:text-gray-900', 'transition');
            link.classList.remove('font-semibold');
        }
    });

    // For index.html
    const logo = document.querySelector('nav a.text-2xl');
    if (pageName === 'index' || currentPath.endsWith('/')) {
        logo.classList.add('font-semibold');
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            const navDiv = document.querySelector('nav .hidden');
            if (navDiv) {
                navDiv.classList.toggle('hidden');
                navDiv.classList.toggle('flex');
            }
        });
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCommonElements);
} else {
    injectCommonElements();
}
