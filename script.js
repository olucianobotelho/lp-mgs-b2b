// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Video Player functionality
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const playButton = document.querySelector('.play-button');
    
    if (videoPlaceholder && playButton) {
        videoPlaceholder.addEventListener('click', function() {
            // Add click animation
            playButton.style.transform = 'scale(0.9)';
            setTimeout(() => {
                playButton.style.transform = 'scale(1)';
            }, 150);
            
            // Here you can add functionality to load actual video
            // For now, we'll show an alert
            setTimeout(() => {
                alert('Carregando vídeo dos produtos personalizados...');
                // You can replace this with actual video loading logic
                // Example: loadVideo('your-video-url-here');
            }, 200);
        });
        
        // Add hover effect to play button
        playButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        playButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Smooth scrolling for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .kit-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you can add functionality to scroll to contact form or open WhatsApp
            // For now, we'll just show an alert
            setTimeout(() => {
                alert('Redirecionando para WhatsApp ou formulário de contato...');
            }, 200);
        });
    });
    
    // Add hover effects to product images
    const productImages = document.querySelectorAll('.caneca-img, .canetas-img, .kit-img');
    
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Social media icons click handlers
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            // Add your social media links here
            const socialLinks = [
                'https://instagram.com/mgspersonalizados',
                'https://facebook.com/mgspersonalizados',
                'https://whatsapp.com/mgspersonalizados'
            ];
            
            if (socialLinks[index]) {
                window.open(socialLinks[index], '_blank');
            }
        });
    });
    
    // Intersection Observer for animations on scroll
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
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Kit card hover effects
    const kitCards = document.querySelectorAll('.kit-card');
    
    kitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Client logos hover effects
    const clientLogos = document.querySelectorAll('.client-logo');
    
    clientLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Utility function to handle WhatsApp integration
function openWhatsApp(message = 'Olá! Gostaria de saber mais sobre os kits personalizados.') {
    const phoneNumber = '5511999999999'; // Replace with actual phone number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Function to handle video loading (placeholder for future implementation)
function loadVideo(videoUrl) {
    // This function can be expanded to handle actual video loading
    // Example implementation:
    /*
    const videoContainer = document.querySelector('.video-container');
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    
    // Replace placeholder with actual video
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
    */
    console.log('Loading video:', videoUrl);
}

// Function to handle form submissions (if needed later)
function handleFormSubmit(formData) {
    // This function can be expanded to handle contact form submissions
    console.log('Form submitted:', formData);
}