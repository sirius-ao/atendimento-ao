

   


        // coomeca aqui 

document.addEventListener('DOMContentLoaded', function() {

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Simple animation for feature cards on scroll
        const featureCards = document.querySelectorAll('.feature-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        featureCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });

        // Demo form interaction
        document.addEventListener('DOMContentLoaded', function() {
            const demoButtons = document.querySelectorAll('[href="#demo"]');
            const signupButtons = document.querySelectorAll('[href="#signup"]');
            
            demoButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert("Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato para agendar uma demonstração personalizada.");
                });
            });
            
            signupButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert("Redirecionando para o formulário de cadastro... Em breve você poderá experimentar gratuitamente nossa plataforma!");
                });
            });
        });

});