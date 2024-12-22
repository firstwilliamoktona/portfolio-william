document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling to sections
    const navLinks = document.querySelectorAll(".navbar a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Animation on scroll using IntersectionObserver
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.classList.contains("hidden-left")) {
                    target.classList.add("fade-in-left");
                } else if (target.classList.contains("hidden-right")) {
                    target.classList.add("fade-in-right");
                } else {
                    target.classList.add("fade-in");
                }
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        if (section.classList.contains("hidden") || 
            section.classList.contains("hidden-left") || 
            section.classList.contains("hidden-right")) {
            observer.observe(section);
        }
    });

    // Modal functionality for zoom images
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll(".zoom-image");

    images.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = image.src;
            captionText.textContent = image.alt; // Show the alt text as caption
        });
    });

    // Close modal when clicking on <span> (x)
    const closeModal = document.getElementsByClassName("close")[0];
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside the image
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
