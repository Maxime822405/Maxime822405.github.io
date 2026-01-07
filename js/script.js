// ===========================
// NAVIGATION
// ===========================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navigation on scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
const animatedElements = document.querySelectorAll('.about-card, .service-card, .value-card, .principle-item, .vision-box');

animatedElements.forEach((el, index) => {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;

    // Observe element
    observer.observe(el);
});

// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    // Validate consent
    if (!data.consent) {
        alert('Veuillez accepter la politique de confidentialité');
        return;
    }

    // Disable submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = 'Envoi en cours...';

    try {
        // Here you would normally send the data to a server
        // For now, we'll simulate a successful submission

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted:', data);

        // Show success message
        formSuccess.classList.add('show');

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);

    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }
});

// ===========================
// DYNAMIC GRADIENT ORBS
// ===========================

const orbs = document.querySelectorAll('.gradient-orb');

// Add random movement to orbs on mouse move
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * 50 * speed;
        const y = (mouseY - 0.5) * 50 * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===========================
// ACTIVE NAV LINK
// ===========================

// Highlight active section in navigation
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-light)';
            } else {
                navLink.style.color = '';
            }
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ===========================
// STATS COUNTER ANIMATION
// ===========================

const stats = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateStats = () => {
    if (hasAnimated) return;

    const statsSection = document.querySelector('.hero-stats');
    const rect = statsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        hasAnimated = true;

        stats.forEach(stat => {
            const text = stat.textContent;
            const isNumber = !isNaN(text.replace('+', ''));

            if (isNumber) {
                const target = parseInt(text.replace('+', ''));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        stat.textContent = text;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
                    }
                }, 16);
            }
        });
    }
};

window.addEventListener('scroll', animateStats);

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ===========================
// CURSOR EFFECT (OPTIONAL)
// ===========================

// Create custom cursor effect for desktop
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    cursorFollower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorFollower);

    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;

        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '0.5';
    });

    // Animate cursor
    function animateCursor() {
        // Cursor position
        cursor.style.left = cursorX - 5 + 'px';
        cursor.style.top = cursorY - 5 + 'px';

        // Follower position with delay
        followerX += (cursorX - followerX) * 0.1;
        followerY += (cursorY - followerY) * 0.1;

        cursorFollower.style.left = followerX - 20 + 'px';
        cursorFollower.style.top = followerY - 20 + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .value-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Lazy load images (if any are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ===========================
// EASTER EGG - KONAMI CODE
// ===========================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiPattern.join('')) {
        // Activate special effect
        document.body.style.animation = 'rainbow 2s linear infinite';

        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%c🤖 chAInge - Bienvenue !', 'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cVous êtes curieux ? Nous aussi ! 🚀', 'font-size: 14px; color: #667eea;');
console.log('%cRejoignez-nous : contact@chainge.ai', 'font-size: 12px; color: #a1a1aa;');
