document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const formSuccess = document.getElementById("form-success");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let form = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name:";
            nameError.style.display = "block";
            form = false;
        } else {
            nameError.style.display = "none";
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email:";
            emailError.style.display = "block";
            form = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address:";
            emailError.style.display = "block";
            form = false;
        } else {
            emailError.style.display = "none";
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter your message:";
            messageError.style.display = "block";
            form = false;
        } else {
            messageError.style.display = "none";
        }

        if (form) {
            alert("Thank you for your message! We will get in touch with we soon.");
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


   


