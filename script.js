document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            alert('Error sending message. Please try again later.');
            console.error('Error:', error);
        });
    });
});
