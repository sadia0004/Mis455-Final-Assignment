document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');
        
        // Check if any field or rating is empty
        if (!name || !email || !message || !rating) {
            
            const modal = new bootstrap.Modal(document.getElementById("warningModal"));
            modal.show();
        } else {
           
            alert(`Thank you for your feedback, ${name}! You rated us ${rating.value}/5.`);
            
           
            form.reset();
        }
    });
});
