/* ============================================
   JavaScript Principal - Git desde Cero
   ============================================ */

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // Toggle del menú móvil
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animación del icono hamburguesa
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Cerrar menú al hacer click en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de scroll en el header
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(30, 30, 30, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--dark-bg)';
            header.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.content-card, .topic-card, .example-card, .component-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Highlight de código Bash/Git
    const codeBlocks = document.querySelectorAll('code.language-bash');

    codeBlocks.forEach(block => {
        const bash = block.textContent;

        let highlighted = bash;

        // Resaltar comentarios
        highlighted = highlighted.replace(/#.*/g, '<span class="comment">$&</span>');

        // Resaltar comandos git
        const gitCommands = ['git', 'init', 'clone', 'add', 'commit', 'push', 'pull', 'branch', 'checkout', 'merge', 'status', 'log', 'diff', 'remote', 'fetch', 'reset', 'rebase', 'stash', 'tag'];
        gitCommands.forEach(cmd => {
            const regex = new RegExp('\\b' + cmd + '\\b', 'g');
            highlighted = highlighted.replace(regex, `<span class="command">${cmd}</span>`);
        });

        // Resaltar strings (URLs y mensajes)
        highlighted = highlighted.replace(/"[^"]*"/g, '<span class="string">$&</span>');
        highlighted = highlighted.replace(/'[^']*'/g, '<span class="string">$&</span>');

        // Resaltar variables
        highlighted = highlighted.replace(/\$(\w+)/g, '<span class="variable">$$$1</span>');

        block.innerHTML = highlighted;
    });

    // Console welcome message
    console.log('%c📦 Git desde Cero', 'font-size: 20px; font-weight: bold; color: #f05032;');
    console.log('%c¡Bienvenido al curso de Git!', 'font-size: 14px; color: #666;');
    console.log('%cExplora la documentación y ejemplos para aprender.', 'font-size: 12px; color: #999;');

});
