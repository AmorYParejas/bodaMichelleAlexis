   // Countdown Timer
   const targetDate = new Date('2025-02-21T12:17:00');
   const countdownElement = document.getElementById('countdown');

   function updateCountdown() {
       const now = new Date();
       const difference = targetDate - now;

       // Limpiar contenido previo del contador
       countdownElement.innerHTML = '';

       if (difference > 0) {
           // Calcular tiempo restante
           const days = Math.floor(difference / (1000 * 60 * 60 * 24));
           const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
           const minutes = Math.floor((difference / (1000 * 60)) % 60);
           const seconds = Math.floor((difference / 1000) % 60);

           // Crear y agregar elementos `p` para cada unidad de tiempo

           
           const daysElement = document.createElement('p');
           daysElement.textContent = `${days} Días : `;
           countdownElement.appendChild(daysElement);

           const hoursElement = document.createElement('p');
           hoursElement.textContent = ` ${hours} Horas : `;
           countdownElement.appendChild(hoursElement);

           const minutesElement = document.createElement('p');
           minutesElement.textContent = `${minutes} Minutos : `;
           countdownElement.appendChild(minutesElement);

           const secondsElement = document.createElement('p');
           secondsElement.textContent = `${seconds} Segundos`;
           countdownElement.appendChild(secondsElement);
       } else {
           // Mostrar mensaje cuando la fecha haya llegado
           const messageElement = document.createElement('p');
           messageElement.textContent = '¡Ha llegado el gran día!';
           countdownElement.appendChild(messageElement);
       }
   }

   setInterval(updateCountdown, 1000);

       // Slider Functionality
       const slides = document.querySelector('.slides');
       const images = document.querySelectorAll('.slides img');
       let currentIndex = 0;

       document.getElementById('next').addEventListener('click', () => {
           currentIndex = (currentIndex + 1) % images.length;
           slides.style.transform = `translateX(-${currentIndex * 100}%)`;
       });

       document.getElementById('prev').addEventListener('click', () => {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           slides.style.transform = `translateX(-${currentIndex * 100}%)`;
       });