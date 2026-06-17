function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.getElementById("year").textContent =
new Date().getFullYear();