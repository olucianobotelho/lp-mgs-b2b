// MGS Personalizados - JavaScript otimizado
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
    
    // Main CTA Button
    const mainCtaButton = document.querySelector('.main-cta-button');
    if (mainCtaButton) {
        mainCtaButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = '', 150);
            openWhatsApp('Olá! Gostaria de fazer um orçamento para produtos personalizados.');
        });
    }
    
    // Video Player
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const playButton = document.querySelector('.play-button');
    if (videoPlaceholder && playButton) {
        videoPlaceholder.addEventListener('click', function() {
            playButton.style.transform = 'scale(0.9)';
            setTimeout(() => playButton.style.transform = 'scale(1)', 150);
            setTimeout(() => alert('Carregando vídeo dos produtos personalizados...'), 200);
        });
        
        playButton.addEventListener('mouseenter', () => playButton.style.transform = 'scale(1.1)');
        playButton.addEventListener('mouseleave', () => playButton.style.transform = 'scale(1)');
    }
    
    // Kit buttons
    const kitButtons = document.querySelectorAll('.kit-button-img');
    kitButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = '', 150);
            openWhatsApp('Olá! Gostaria de saber mais sobre os kits personalizados.');
        });
    });
    
    // Social media icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            const socialLinks = [
                'https://instagram.com/mgspersonalizados',
                'https://facebook.com/mgspersonalizados',
                'https://whatsapp.com/mgspersonalizados'
            ];
            if (socialLinks[index]) window.open(socialLinks[index], '_blank');
        });
    });
    
    // Scroll animations
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
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Não aplicar animação de scroll na seção de redes sociais
        if (!section.classList.contains('social-media')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });
});

// WhatsApp integration
function openWhatsApp(message = 'Olá! Gostaria de saber mais sobre os kits personalizados.') {
    const phoneNumber = '5521999999999';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}