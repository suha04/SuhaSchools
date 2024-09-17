// Get the toggle switch element
const lightModeToggle = document.getElementById('themeToggle');

// Check if the user has a previously saved preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        lightModeToggle.checked = true;
    }
}

// Event listener for the toggle switch
lightModeToggle.addEventListener('change', function() {

    //When checked, it is LIGHT MODE
    if (this.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Save user preference
    } else {
        
    //When unchecked, it is DARK MODE 
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save user preference
    }
});