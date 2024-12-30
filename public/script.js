    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        disable: 'mobile'
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Header Animation
    gsap.from('.gsap-header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.gsap-nav li', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out'
    });

    // Hero Section Animation
    gsap.from('.gsap-hero', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power4.out'
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => cursor.classList.add('active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('active'));

    // Add hover effect to all links and buttons
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('active'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    // Portfolio Image Hover Effect with GSAP
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const image = item.querySelector('img');
        const overlay = item.querySelector('.absolute');
        
        item.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3
            });
        });
    });

    // Scroll Animations for Sections
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#hero');
        const heroBackground = hero.querySelector('img');
        
        if (scrolled <= hero.offsetHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Form Animation
    const form = document.querySelector('form');
    const formElements = form.querySelectorAll('input, textarea');

    formElements.forEach(element => {
        element.addEventListener('focus', () => {
            gsap.to(element, {
                borderColor: '#10b981',
                duration: 0.3
            });
        });

        element.addEventListener('blur', () => {
            if (!element.value) {
                gsap.to(element, {
                    borderColor: '#374151',
                    duration: 0.3
                });
            }
        });
    });

    // Preloader Animation (optional)
    window.addEventListener('load', () => {
        gsap.to('body', {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Performance Optimization
    window.addEventListener('resize', () => {
        AOS.refresh();
    });

    // Mobile Menu Toggle (if needed)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden text-white';
    mobileMenuButton.innerHTML = '☰';
    document.querySelector('header .container').appendChild(mobileMenuButton);

    const nav = document.querySelector('nav');
    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('hidden');
        nav.classList.toggle('block');
    });

    AOS.init({
    disable: 'mobile',
});
