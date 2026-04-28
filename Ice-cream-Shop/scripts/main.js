/**
 * JOJO Ice Cream - Main Javascript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    if (hamburgerBtn && hamburgerMenu) {
        hamburgerBtn.addEventListener('click', function () {
            hamburgerBtn.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const menuLinks = hamburgerMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburgerBtn.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-right')) {
                hamburgerBtn.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    }

    // Scroll Reveal Animation (Index Page)
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(element => {
            observer.observe(element);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // If it's a hash link on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
