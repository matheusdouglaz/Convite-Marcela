document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer
    const menuHamburger = document.querySelector('.menu-hamburguer');
    const navResponsive = document.querySelector('.nav-responsive');
    
    if (menuHamburger && navResponsive) {
        menuHamburger.addEventListener('click', function() {
            menuHamburger.classList.toggle('change');
            navResponsive.style.display = navResponsive.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // TypeWriter Effect
    const typedTextElement = document.getElementById("typed-text");
    if (typedTextElement) {
        const texts = [
            "da Marcela!",
            "de Magia!"
        ];
        let textIndex = 0;
        let index = 0;
        let isDeleting = false;
        let speed = 100;
        const fixedText = "12 Anos ";
        
        function typeWriter() {
            const currentText = texts[textIndex];
            let fullText = fixedText + currentText;
            
            if (isDeleting) {
                if (index > fixedText.length) {
                    typedTextElement.textContent = fixedText + currentText.substring(0, index - fixedText.length - 1);
                    index--;
                    speed = 50;
                } else {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    speed = 200;
                }
            } else {
                typedTextElement.textContent = fixedText + currentText.substring(0, index - fixedText.length + 1);
                index++;
                speed = 100;
                
                if (index === fullText.length) {
                    isDeleting = true;
                    speed = 1500;
                }
            }
            
            setTimeout(typeWriter, speed);
        }
        
        typedTextElement.textContent = fixedText;
        index = fixedText.length;
        setTimeout(typeWriter, 1000);
    }

    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const eventDate = new Date("June 22, 2025 15:30:00 GMT-0300");
        const distance = eventDate - now;

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        const timerElement = document.getElementById("timer");

        if (daysElement && hoursElement && minutesElement && secondsElement) {
            if (distance < 0) {
                clearInterval(countdownInterval);
                if (timerElement) {
                    timerElement.innerHTML = `
                        <div class="party-started">
                            <p>A festa começou!</p>
                            <i class='bx bxs-party'></i>
                        </div>
                    `;
                }
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
    }

    // Iniciar cronômetro
    let countdownInterval;
    if (document.getElementById("days")) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    // Botão de confirmação - Redirecionar para WhatsApp
    const confirmBtn = document.getElementById("confirm-btn");
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            // Número de telefone (remova espaços, traços, parênteses)
            const phoneNumber = "61995734065";
            // Mensagem pré-definida (codificada para URL)
            const message = encodeURIComponent("Olá! Confirmo minha presença na festa de 12 anos da Marcela no dia 22/06/2025!");
            
            // Link do WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }

    // Efeito de flutuação nos elementos de tempo
    const timeSegments = document.querySelectorAll('.time-segment');
    timeSegments.forEach(segment => {
        segment.addEventListener('mouseover', () => {
            segment.style.transform = 'translateY(-5px)';
        });
        segment.addEventListener('mouseout', () => {
            segment.style.transform = 'translateY(0)';
        });
    });

    // Fechar menu ao clicar em um link (mobile)
    const navLinks = document.querySelectorAll('.nav-responsive a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1200) {
                menuHamburger.classList.remove('change');
                navResponsive.style.display = 'none';
            }
        });
    });
});