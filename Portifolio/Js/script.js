document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito Typed Text (Opcional - Adiciona um toque profissional)
    // O texto deve ser definido no HTML
    const typedTextSpan = document.querySelector(".typed-text");
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay antes de começar a digitar a próxima string
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!typedTextSpan.classList.contains("typing")) typedTextSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            typedTextSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!typedTextSpan.classList.contains("typing")) typedTextSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            typedTextSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Chama o efeito de digitação
    if(typedTextSpan) {
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }

    // 2. Validação básica do Formulário (Front-end)
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Verifica se os campos estão preenchidos
        if (name === '' || email === '' || message === '') {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            return;
        }

        // Validação de e-mail simples (melhor ser validada no back-end também)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'Por favor, insira um endereço de e-mail válido.';
            return;
        }

        // Se a validação Front-end passar, você precisa de uma chamada de Back-end (AJAX/Fetch) aqui.
        // O código abaixo simula o envio e deve ser substituído por código real de back-end.

        formMessage.style.display = 'block';
        formMessage.style.color = 'orange';
        formMessage.textContent = 'Enviando...';

        // Simulação de envio para o servidor
        setTimeout(() => {
            // Se o envio for REALMENTE bem-sucedido (via fetch ou XHR para seu servidor):
            formMessage.style.color = 'green';
            formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
            form.reset(); // Limpa o formulário após o sucesso
            
            // Caso contrário, se falhar:
            // formMessage.style.color = 'red';
            // formMessage.textContent = 'Erro ao enviar a mensagem. Tente novamente mais tarde.';

        }, 2000);
    });
});