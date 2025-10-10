// Email obfuscation and interaction handling
document.addEventListener('DOMContentLoaded', function() {
    // Email obfuscation
    const emailLink = document.getElementById('emailLink');
    const emailText = document.getElementById('emailText');
    
    // Obfuscated email (reversed)
    const obfuscatedEmail = 'oi.laadnav@tcatnocetis';
    const realEmail = obfuscatedEmail.split('').reverse().join('');
    
    // Set up email link functionality
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create mailto link
        const mailtoLink = `mailto:${realEmail}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Update text to show email was revealed
        emailText.textContent = realEmail;
        
        // Add a subtle animation
        emailText.style.transition = 'color 0.3s ease';
        emailText.style.color = '#667eea';
        
        // Reset after a moment
        setTimeout(() => {
            emailText.style.color = '';
        }, 2000);
    });
    
    // Add hover effect to show email
    emailLink.addEventListener('mouseenter', function() {
        emailText.textContent = 'Click to email';
    });
    
    emailLink.addEventListener('mouseleave', function() {
        emailText.textContent = 'Contact';
    });
    
    // Smooth scroll for any anchor links (future-proofing)
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
    
    // Add subtle parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.backgroundPosition = `center ${speed}px`;
        }
    });
    
    // Add loading animation
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
});
