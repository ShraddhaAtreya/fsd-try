// onboarding.js

document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next-button");
    const stepContainers = document.querySelectorAll(".onboarding-step");
    let currentStep = 0;

    function showStep(stepIndex) {
        stepContainers.forEach((step, index) => {
            step.style.display = index === stepIndex ? "block" : "none";
        });
    }

    function updateProgress() {
        const progressBar = document.getElementById("progress-bar");
        const progressPercentage = ((currentStep + 1) / stepContainers.length) * 100;
        progressBar.style.width = progressPercentage + "%";
    }

    nextButton.addEventListener("click", function() {
        if (currentStep < stepContainers.length - 1) {
            currentStep++;
            showStep(currentStep);
            updateProgress();
        } else {
            // Final step logic, e.g., redirect to dashboard
            window.location.href = "dashboard.html";
        }
    });

    // Initialize the onboarding steps
    showStep(currentStep);
    updateProgress();
});