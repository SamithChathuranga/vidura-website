// Vidura.lk Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    smoothScrolling();
    scrollToTopButton();
    animateCardsOnView();
    formHandler();
    contentButtonHandler();
    buttonClickAnimation();
    teachersSliderPauseOnHover();
    loadingAnimation();
    navActiveOnScroll();
});

function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function scrollToTopButton() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

function animateCardsOnView() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.card, .teacher-card, .facility-card').forEach(card => {
        observer.observe(card);
    });
}

function formHandler() {
    const form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const grade = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        if (!name || !phone || !grade || !message) {
            alert('කරුණාකර සියලුම ක්ෂේත්‍ර පුරවන්න');
            return;
        }
        alert('ඔබේ පණිවිඩය සාර්ථකව යවන ලදී! අපි ඉක්මණින් ඔබව සම්බන්ධ කර ගනිමු.');
        this.reset();
    });
}

function contentButtonHandler() {
    document.querySelectorAll('.content-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const subject = this.querySelector('div').textContent;
            alert(`${subject} සඳහා නොමිලේ අධ්‍යාපන අන්තර්ගතය ඉක්මණින් ලබා ගැනීමට අප සමඟ සම්බන්ධ වන්න!`);
        });
    });
}

function buttonClickAnimation() {
    document.querySelectorAll('.cta-button, .content-button').forEach(button => {
        button.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

function teachersSliderPauseOnHover() {
    const slider = document.querySelector('.teachers-track');
    if (!slider) return;
    slider.addEventListener('mouseenter', function () {
        this.style.animationPlayState = 'paused';
    });
    slider.addEventListener('mouseleave', function () {
        this.style.animationPlayState = 'running';
    });
}

function loadingAnimation() {
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

function navActiveOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
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
}

// Mobile menu toggle (future use)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
