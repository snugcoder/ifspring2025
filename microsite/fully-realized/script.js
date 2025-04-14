document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav .right-side a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove active class from all links
            links.forEach(link => link.classList.remove("active"));

            // Add active class to the clicked link
            event.target.classList.add("active");
        });
    });
});