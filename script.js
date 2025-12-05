document.addEventListener("DOMContentLoaded", function () {

    // 1. Select the form
    const form = document.getElementById("registration-form");

    // 2. Select the feedback div
    const feedbackDiv = document.getElementById("form-feedback");

    // 3. Add submit event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop form submission

        // 4. Retrieve and trim values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // 5. Validation tracking
        let isValid = true;
        const messages = [];

        // 6. Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 7. Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // 8. Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 9. Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red
        }
        if (isValid) {
    feedbackDiv.className = "success";
    feedbackDiv.textContent = "Registration successful!";
} else {
    feedbackDiv.className = "error";
    feedbackDiv.innerHTML = messages.join("<br>");
}
    });
});
