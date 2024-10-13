// Skill descriptions
const skillDescriptions = {
    "HTML": " Skilled in structuring web pages with HTML, ensuring clean, semantic code that supports accessibility and SEO best practices.",
    "CSS": " Proficient in CSS for styling web pages, including responsive design techniques and frameworks like Bootstrap for creating visually appealing and adaptable layouts.",
    "JavaScript": "Experienced in JavaScript for adding interactivity to web pages, with a solid understanding of ES6+ features and building dynamic, user-friendly applications.",
    "React": "Proficient in React for developing scalable and maintainable user interfaces. Skilled in component-based architecture and using state management tools like Redux.",
    "Node.js": "Competent in using Node.js for backend development, including building RESTful APIs, managing databases, and developing server-side applications."
};

// Function to show popup
function showPopup(skill) {
    document.getElementById("popup-text").innerText = skillDescriptions[skill];
    document.getElementById("popup").style.display = "flex";
}

// Function to close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
