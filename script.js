// Email obfuscation and interaction handling
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('emailLink');
    const emailText = document.getElementById('emailText');
    const emailCharCodes = [115,105,116,101,99,111,110,116,97,99,116,64,118,97,110,100,97,97,108,46,105,111];
    const realEmail = String.fromCharCode(...emailCharCodes);

    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const mailtoLink = `mailto:${realEmail}`;
        window.location.href = mailtoLink;
        emailText.textContent = realEmail;
        emailText.style.transition = 'color 0.3s ease';
        emailText.style.color = '#667eea';
        setTimeout(() => {
            emailText.style.color = '';
        }, 2000);
    });

    emailLink.addEventListener('mouseenter', function() {
        emailText.textContent = 'Click to email';
    });

    emailLink.addEventListener('mouseleave', function() {
        emailText.textContent = 'Contact';
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.backgroundPosition = `center ${speed}px`;
        }
    });
    
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 100);
    }

    window.addEventListener('scroll', function() {
        const btn = document.getElementById('scrollToTopBtn');
        if (!btn) return;
        if (window.scrollY > 200) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
