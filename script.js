 

document.addEventListener('DOMContentLoaded', function() {

                // Elementos do modal
        const modal = document.getElementById('signup-modal');
        const closeModal = document.getElementById('close-modal');
        const signupForm = document.getElementById('signup-form');
        const confirmation = document.getElementById('confirmation');
        const registrationForm = document.getElementById('registration-form');
        const userEmail = document.getElementById('user-email');
        const backToSite = document.getElementById('back-to-site');
        
        // Botões que abrem o modal
        const signupButtons = document.querySelectorAll('.signup-btn, #header-signup, #cta-signup');
        
        // Abrir modal
        signupButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Se for um botão de plano, pre-selecionar o plano no formulário
                if (this.dataset.plan) {
                    document.getElementById('plan').value = this.dataset.plan;
                }
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Impede scroll da página principal
            });
        });
        
        // Fechar modal
        closeModal.addEventListener('click', closeModalFunc);
        backToSite.addEventListener('click', closeModalFunc);
        
        function closeModalFunc() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Permite scroll da página principal
            // Resetar formulário e exibir novamente
            registrationForm.reset();
            confirmation.style.display = 'none';
            signupForm.style.display = 'block';
        }
        
        // Fechar modal clicando fora dele
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModalFunc();
            }
        });
        
        // Enviar formulário
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui normalmente enviaria os dados para o servidor
            // Vamos simular o sucesso do cadastro
            
            // Exibir email do usuário na confirmação
            const email = document.getElementById('email').value;
            userEmail.textContent = email;
            
            // Esconder formulário e mostrar confirmação
            signupForm.style.display = 'none';
            confirmation.style.display = 'block';
        });
        
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
        document.getElementById('hero-demo').addEventListener('click', function(e) {
            e.preventDefault();
            alert("Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato para agendar uma demonstração personalizada.");
        });

});