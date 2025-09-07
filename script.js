document.addEventListener("DOMContentLoaded", function () {

    // "Let's Talk" Button Click Event
    let talkBtn = document.querySelector('.talk-btn');
    if (talkBtn) {
        talkBtn.addEventListener('click', () => {
            alert("Thanks for reaching out! Let's discuss your project.");
        });
    } else {
        console.warn("Button with class 'talk-btn' not found.");
    }

    // "Hire Me" Button Click Event
    let hireMeBtn = document.querySelector('.hire-me-btn');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', showMessage);
    }

    function showMessage() {
        alert('Thank you for your interest! More details coming soon.');
    }

    // Contact Form Submission
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            console.log("Form submitted!"); // Debugging log

            let successMessage = document.getElementById("successMessage");
            if (successMessage) {
                successMessage.style.display = "block"; // Show success message
                successMessage.style.opacity = "1"; // Ensure it's fully visible
                console.log("Success message displayed!");
            } else {
                console.error("Success message element not found!");
            }

            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        });
    } else {
        console.error("Form with ID 'contactForm' not found.");
    }
});