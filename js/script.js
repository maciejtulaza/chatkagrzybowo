// Hero image carousel
const heroImages = ['images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg'];
let currentHeroIndex = 0;

function changeHeroImage() {
    const hero = document.querySelector('.hero');
    if (hero) {
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        hero.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
    }
}

// Set initial hero image and start rotation
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundImage = `url('${heroImages[0]}')`;
        setInterval(changeHeroImage, 5000); // Change every 5 seconds
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 150;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.room-card, .amenity-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality removed - using CSS-only responsive menu
});

// Gallery functionality
const galleries = {
    'pokoj4': [
        'images/pokoje/pokoj 4 osobowy/P3104836.jpg',
        'images/pokoje/pokoj 4 osobowy/P3104861.jpg',
        'images/pokoje/pokoj 4 osobowy/P6063800.JPG',
        'images/pokoje/pokoj 4 osobowy/P6063802.JPG',
        'images/pokoje/pokoj 4 osobowy/P6063806.JPG',
        'images/pokoje/pokoj 4 osobowy/P6063810.JPG',
        'images/pokoje/pokoj 4 osobowy/P6063811.JPG',
        'images/pokoje/pokoj 4 osobowy/P6063875.JPG',
        'images/pokoje/pokoj 4 osobowy/P6103929.JPG'
    ],
    'pokoj4balkon': [
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_112506.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_112531.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_112655.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_112704.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_112740.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_112813.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_113106.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_113142.jpg',
        'images/pokoje/pokoj 4 osobowy z balkonem/IMG_20200612_113215.jpg'
    ],
    'pokoj3balkon': [
        'images/pokoje/pokoj 3 osobowy z balkonem/1-8.jpg',
        'images/pokoje/pokoj 3 osobowy z balkonem/IMG_20250513_200738.jpg',
        'images/pokoje/pokoj 3 osobowy z balkonem/IMG_20250513_200808.jpg',
        'images/pokoje/pokoj 3 osobowy z balkonem/IMG_20250513_200902.jpg',
        'images/pokoje/pokoj 3 osobowy z balkonem/IMG_20250513_201016.jpg',
        'images/pokoje/pokoj 3 osobowy z balkonem/IMG_20250513_201034.jpg'
    ],
    'kuchnia': [
        'images/pokoje/aneks kuchenny/aneks-kuchenny-1.jpg',
        'images/pokoje/aneks kuchenny/aneks-kuchenny-2.jpg',
        'images/pokoje/aneks kuchenny/aneks-kuchenny-3.jpg'
    ],
    'galeria': [
        'images/pokoje/galeria/galeria-1-1.jpg',
        'images/pokoje/galeria/galeria-2-1.jpg',
        'images/pokoje/galeria/galeria-3-1.jpg',
        'images/pokoje/galeria/galeria-4-1.jpg',
        'images/pokoje/galeria/galeria-5.jpg',
        'images/pokoje/galeria/galeria-6.jpg',
        'images/pokoje/galeria/galeria-7.jpg',
        'images/pokoje/galeria/galeria-11.jpg',
        'images/pokoje/galeria/galeria-12.jpg',
        'images/pokoje/galeria/galeria-13.jpg',
        'images/pokoje/galeria/galeria-14.jpg',
        'images/pokoje/galeria/galeria-15.jpg',
        'images/pokoje/galeria/galeria-16.jpg',
        'images/pokoje/galeria/galeria-17.jpg',
        'images/pokoje/galeria/IMG_20180519_155846.jpg'
    ]
};

let currentGallery = [];
let currentImageIndex = 0;

function openGallery(galleryName) {
    currentGallery = galleries[galleryName] || [];
    currentImageIndex = 0;

    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const thumbnailsContainer = document.getElementById('modalThumbnails');

    if (currentGallery.length === 0) return;

    // Display first image
    modalImage.src = currentGallery[0];

    // Create thumbnails
    thumbnailsContainer.innerHTML = '';
    currentGallery.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.onclick = () => showImage(index);
        if (index === 0) thumb.classList.add('active');
        thumbnailsContainer.appendChild(thumb);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
    } else if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
    }

    showImage(currentImageIndex);
}

function showImage(index) {
    currentImageIndex = index;
    const modalImage = document.getElementById('modalImage');
    const thumbnails = document.querySelectorAll('.modal-thumbnails img');

    modalImage.src = currentGallery[index];

    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGallery();
    } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    }
});

// Close modal when clicking outside the image
document.getElementById('galleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'galleryModal') {
        closeGallery();
    }
});
