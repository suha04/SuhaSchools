// Get the toggle switch element
const darkModeToggle = document.getElementById('themeToggle');

// Check if the user has a previously saved preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        darkModeToggle.checked = true;
    }
}

// Event listener for the toggle switch
darkModeToggle.addEventListener('change', function() {

    //When checked, it is DARK MODE
    if (this.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save user preference
    } else {
        
    //When unchecked, it is LIGHT MODE
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Save user preference
    }
});