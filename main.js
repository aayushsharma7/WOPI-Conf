// Navigation Items
const navItems = ["Home", "about", "dates", "speakers", "schedule", "registration", "venue", "sponsors", "faq", "contact"];
const desktopNav = document.getElementById('nav-links-desktop');
const mobileNav = document.getElementById('nav-links-mobile');

// Dynamically generate navigation links for desktop and mobile
navItems.forEach(id => {
  const linkHTML = `<a href="#${id}" class="nav-link">${capitalize(id)}</a>`;
  desktopNav.innerHTML += linkHTML;
  mobileNav.innerHTML += linkHTML;
});

// Capitalize the first letter of each navigation item
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Toggle mobile menu visibility
const menuBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const svgIcon = menuBtn.querySelector('svg');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu-hidden');
  svgIcon.innerHTML = menu.classList.contains('mobile-menu-hidden')
    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />'
    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
  menuBtn.setAttribute('aria-label', menu.classList.contains('mobile-menu-hidden') ? 'Open menu' : 'Close menu');
});

// Close mobile menu when a navigation link is clicked
mobileNav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.add('mobile-menu-hidden');
    svgIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
    menuBtn.setAttribute('aria-label', 'Open menu');
  }
});

// Particles animation
const particlesContainer = document.querySelector('.particles-container');
for (let i = 0; i < 50; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  Object.assign(p.style, {
    position: 'absolute',
    width: `${Math.random() * 4 + 1}px`,
    height: `${Math.random() * 4 + 1}px`,
    backgroundColor: 'white',
    borderRadius: '50%',
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.3,
    boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
    animation: `particleFloat ${Math.random() * 10 + 10}s linear infinite`
  });
  particlesContainer.appendChild(p);
}

// Append animation keyframes for particles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes particleFloat {
    0% { transform: translate(0, 0); }
    50% { transform: translate(10px, -10px); }
    100% { transform: translate(0, 0); }
  }
`;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    let slideInterval;
    let currentCategory = 'conference';
  
    const tabs = document.querySelectorAll('.tab');
    const slideCategories = document.querySelectorAll('.slide-category');
    const dotsContainer = document.querySelector('.dots-container');
  
    function showSlides(index, category) {
      slideIndex = index;
      const slides = document.querySelector(`#${category}-slides`).querySelectorAll('.slide');
      slides.forEach(s => s.classList.remove('active'));
      slides[slideIndex].classList.add('active');
  
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    }
  
    function updateDots(category) {
      dotsContainer.innerHTML = '';
      const slides = document.querySelector(`#${category}-slides`).querySelectorAll('.slide');
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => showSlides(i, category));
        dotsContainer.appendChild(dot);
      });
    }
  
    function startSlideshow() {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        const slides = document.querySelector(`#${currentCategory}-slides`).querySelectorAll('.slide');
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides(slideIndex, currentCategory);
      }, 5000);
    }
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        currentCategory = tab.getAttribute('data-category');
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        slideCategories.forEach(cat => cat.classList.remove('active'));
        document.getElementById(`${currentCategory}-slides`).classList.add('active');
  
        slideIndex = 0;
        updateDots(currentCategory);
        showSlides(slideIndex, currentCategory);
        startSlideshow();
      });
    });
  
    document.querySelector('.prev').addEventListener('click', () => {
      const slides = document.querySelector(`#${currentCategory}-slides`).querySelectorAll('.slide');
      slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
      showSlides(slideIndex, currentCategory);
    });
  
    document.querySelector('.next').addEventListener('click', () => {
      const slides = document.querySelector(`#${currentCategory}-slides`).querySelectorAll('.slide');
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides(slideIndex, currentCategory);
    });
  
    updateDots(currentCategory);
    showSlides(slideIndex, currentCategory);
    startSlideshow();
  });

// Alpine.js initialization for tabs
document.addEventListener('alpine:init', () => {
    Alpine.data('speakersData', () => ({
      activeTab: 'keynote',
      setActiveTab(tab) {
        this.activeTab = tab;
      }
    }))
  });
  
  // Fallback for non-Alpine implementation
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof Alpine === 'undefined') {
      const tabButtons = document.querySelectorAll('[x-data] button');
      const tabPanels = document.querySelectorAll('[x-show]');
      
      // Initially show only keynote speakers
      tabPanels.forEach(panel => {
        if (panel.getAttribute('x-show') === "activeTab === 'keynote'") {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
      
      // Handle tab switching
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          const targetTab = this.getAttribute('@click').split("'")[1];
          
          // Update button styles
          tabButtons.forEach(btn => {
            if (btn.getAttribute('@click').includes(targetTab)) {
              btn.classList.add('bg-[#8e44ad]', 'border-[#8e44ad]');
              btn.classList.remove('bg-transparent', 'border-gray-600', 'hover:border-gray-400');
            } else {
              btn.classList.remove('bg-[#8e44ad]', 'border-[#8e44ad]');
              btn.classList.add('bg-transparent', 'border-gray-600', 'hover:border-gray-400');
            }
          });
          
          // Show/hide content
          tabPanels.forEach(panel => {
            if (panel.getAttribute('x-show').includes(targetTab)) {
              panel.classList.remove('hidden');
            } else {
              panel.classList.add('hidden');
            }
          });
        });
      });
    }
  });
  
  