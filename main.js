
const button = document.querySelector(".darkmodetoggle");

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode when button is clicked
button.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Save the user's preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }

});
