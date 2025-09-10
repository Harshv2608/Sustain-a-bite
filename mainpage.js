// Function to show overlay during navigation
function showLoading() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

// Function to hide overlay after navigating
function hideLoading() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Function to navigate based on the user role
function navigateToContinue(role) {
    showLoading();
    setTimeout(() => {
        if (role === 'donor') {
            window.location.href = 'donor-form.html'; // Redirect to donor form page
        } else if (role === 'recipient') {
            window.location.href = 'recipient-form.html'; // Redirect to recipient form page
        }
    }, 1000); // Simulate a loading time
}