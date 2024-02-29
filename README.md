# Light/Dark Theme Toggler

This JavaScript code allows users to toggle between light and dark themes on a webpage. The selected theme preference is persisted even after page refreshes using the browser's localStorage.

## Usage

1. Include the JavaScript code in your webpage.

2. Ensure you have the necessary HTML elements with appropriate IDs:
   - `<body>`: To apply background color changes.
   - `<h1>`: To change text color.
   - `<div id="container">`: Container for theme toggle and theme-specific styling.
   - `<div id="theme-toggle">`: Toggle button for switching themes.

3. Customize your CSS to define light and dark theme styles.

4. When the user clicks on the toggle button (`#theme-toggle`), the theme switches between light and dark modes. The selected theme preference is stored in the browser's localStorage, ensuring it persists across page refreshes.

## JavaScript Code

```javascript
// JavaScript code for toggling between light and dark themes with localStorage persistence

// Initialize theme preference from localStorage
let toggled = localStorage.getItem("theme") === "dark";

// Function to enable dark mode
function enableDarkMode() {
    // Add classes to elements for dark mode styles
}

// Function to disable dark mode
function disableDarkMode() {
    // Remove classes for dark mode styles
}

// Event listener for theme toggle button click
container.onclick = function () {
    // Toggle between light and dark modes
    // Update localStorage with the current theme preference
}
