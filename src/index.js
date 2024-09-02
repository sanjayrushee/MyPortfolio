const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');
const navMobileClose = document.getElementById('nav-close');



navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
});

navMobileClose.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
});


document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const formData = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    alert("Under develpoment")
    return

    try {
        const response = await fetch('link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit the form. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
