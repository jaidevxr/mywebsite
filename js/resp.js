burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
// JavaScript for click-triggered dropdown
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the dropdown from closing immediately
            this.classList.toggle("active");

            // Close other dropdowns when a dropdown is clicked
            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("active");
                }
            });
        });
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
});
function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/jaidev.xx';
}
function openGmail() {
    
    window.location.href = 'mailto:jaiy9956@gmail.com';
}

function submitForm() {
    // Basic form validation
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var text = document.getElementById("text").value.trim();

    if (!name || !phone || !email || !text) {
        alert("Please fill in all fields");
        return;
    }

    // Simulated form submission
    alert("Form submitted!\nName: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nText: " + text);
    // You would typically send this data to your server here for processing
}
function search() {
    var searchTerm = document.getElementById("search").value.trim().toLowerCase();
    var paragraphs = document.querySelectorAll('.content p');

    paragraphs.forEach(function (paragraph) {
        var text = paragraph.textContent.toLowerCase();
        var isMatch = text.includes(searchTerm);
        paragraph.style.display = isMatch ? 'block' : 'none';
    });
}




