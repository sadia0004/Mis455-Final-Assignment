
    document.addEventListener("DOMContentLoaded", function () {
        // Add click event to all list group items
        document.querySelectorAll('#list-example a').forEach(anchor => {
            anchor.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default anchor click behavior

                // Scroll to the target section smoothly
                const targetId = this.getAttribute('href').substring(1); // Get target id
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Adjust 80px for header (modify if needed)

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

