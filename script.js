// Botón "Scroll to Top"
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '⬆';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.backgroundColor = '#007BFF';
scrollToTopButton.style.color = '#FFFFFF';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(scrollToTopButton);

// Mostrar/ocultar el botón según el desplazamiento
window.onscroll = () => {
    scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
};

// Modo oscuro/claro
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = '🌓';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '20px';
toggleThemeButton.style.right = '20px';
toggleThemeButton.style.padding = '10px';
toggleThemeButton.style.borderRadius = '50%';
toggleThemeButton.style.backgroundColor = '#007BFF';
toggleThemeButton.style.color = '#FFFFFF';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.cursor = 'pointer';
document.body.appendChild(toggleThemeButton);

// Alternar entre los modos oscuro y claro
toggleThemeButton.onclick = () => {
    document.body.classList.toggle('dark-mode');
};

// Validación del formulario
const form = document.querySelector('form'); // Asegúrate de que este script se cargue después del formulario
if (form) {
    form.onsubmit = (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Todos los campos son obligatorios');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            e.preventDefault();
            alert('Por favor, introduce un correo válido');
        }
    };
}
