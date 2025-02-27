// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Define actual social media links
    const socialMediaLinks = [
        { icon: '.fa-meta', url: 'https://www.meta.com/your-actual-profile' }, 
        { icon: '.fa-linkedin', url: 'https://www.linkedin.com/in/antony-mantiri' }, 
        { icon: '.fa-x-twitter', url: 'https://www.twitter.com/your-actual-profile' },
    ];

    // Loop through each social media link and add event listeners
    socialMediaLinks.forEach((socialMedia) => {
        const iconElement = document.querySelector(socialMedia.icon);

        if (iconElement) {
            iconElement.parentElement.addEventListener('click', (event) => {
                // Prevent the default behavior (opening in a new tab)
                event.preventDefault();

                // Redirect the user to the social media URL
                window.open(socialMedia.url, '_blank');
            });
        }
    });
});

// Initialize Flatpickr for date and time selection
flatpickr("#appointment-date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
});

// Handle form submission
document.getElementById('appointment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const dateTime = document.getElementById('appointment-date').value;
    alert(`Appointment scheduled for ${dateTime}`);
});