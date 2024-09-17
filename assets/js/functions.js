// Get the toggle switch element
const lightModeToggle = document.getElementById('themeToggle');

// Check if the user has a previously saved preference
const currentTheme = localStorage.getItem('theme');

// If there's a saved theme, apply it; otherwise, check the system preference
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        lightModeToggle.checked = true;
    } else {
        lightModeToggle.checked = false;
    }
} else {
    // If no theme is saved, check for the system's dark mode preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!prefersDarkMode) {
        document.body.classList.add('light-mode');
        lightModeToggle.checked = true; // Set toggle to match light mode
    } else {
        document.body.classList.remove('light-mode');
        lightModeToggle.checked = false; // Set toggle to match dark mode
    }
}

// Event listener for the toggle switch
lightModeToggle.addEventListener('change', function() {

    // When checked, it is LIGHT MODE
    if (this.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Save user preference
    } else {
        
        // When unchecked, it is DARK MODE
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save user preference
    }
});
