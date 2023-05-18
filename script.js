const form = document.getElementById('booking-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Faça algo com os dados do formulário (por exemplo, envie para um servidor)
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Data:', date);
    console.log('Horário:', time);

    // Limpe o formulário após o envio
    form.reset();
});

