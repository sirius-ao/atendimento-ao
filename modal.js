document.addEventListener('DOMContentLoaded', function() {


     // Elementos do modal
        const modal = document.getElementById('demo-modal');
        const closeModal = document.getElementById('close-modal');
        const demoForm = document.getElementById('demo-form');
        const confirmation = document.getElementById('confirmation');
        const requestForm = document.getElementById('demo-request-form');
        const userEmail = document.getElementById('user-email');
        const backToSite = document.getElementById('back-to-site');
        
        const demoBtn = document.getElementById('demo-btn');
        
        // Abrir modal
        demoBtn.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede scroll da página principal
        });
        
        // Fechar modal
        closeModal.addEventListener('click', closeModalFunc);
        backToSite.addEventListener('click', closeModalFunc);
        
        function closeModalFunc() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Permite scroll da página principal
            // Resetar formulário e exibir novamente
            requestForm.reset();
            confirmation.style.display = 'none';
            demoForm.style.display = 'block';
        }
        
        // Fechar modal clicando fora dele
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModalFunc();
            }
        });
        
        // Enviar formulário
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const email = document.getElementById('email').value;
            const name = document.getElementById('name').value;
            const whatsapp = document.getElementById('whatsapp').value;
            
            // Aqui normalmente enviaria os dados para o servidor
            console.log('Dados da demonstração:', { name, email, whatsapp });
            
            // Exibir email do usuário na confirmação
            userEmail.textContent = email;
            
            // Esconder formulário e mostrar confirmação
            demoForm.style.display = 'none';
            confirmation.style.display = 'block';
            
            // Simular envio para o WhatsApp (em um caso real, isso seria uma integração API)
            simulateWhatsAppNotification(name, whatsapp);
        });
        
        function simulateWhatsAppNotification(name, number) {
            // Esta função simula o envio de uma notificação para o WhatsApp
            // Em um cenário real, isso seria feito através da API do WhatsApp Business
            console.log(`Simulando mensagem para ${number} (${name}) via WhatsApp`);
            
            // Aqui você pode adicionar uma integração real com a API do WhatsApp
            // Por exemplo: https://developers.facebook.com/docs/whatsapp/cloud-api
        }
        
        // Formatação do número de telefone
        const phoneInput = document.getElementById('whatsapp');
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value) {
                if (value.length <= 3) {
                    value = value.replace(/(\d{0,3})/, '+$1');
                } else if (value.length <= 5) {
                    value = value.replace(/(\d{3})(\d{0,2})/, '+$1 $2');
                } else if (value.length <= 8) {
                    value = value.replace(/(\d{3})(\d{2})(\d{0,3})/, '+$1 $2 $3');
                } else if (value.length <= 11) {
                    value = value.replace(/(\d{3})(\d{2})(\d{3})(\d{0,3})/, '+$1 $2 $3 $4');
                } else {
                    value = value.replace(/(\d{3})(\d{2})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
                }
                e.target.value = value;
            }
        });



});