document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[type="email"]');
    if (!email.value.includes('@')) {
        alert('Te rog să introduci o adresă de email validă!');
        e.preventDefault();
    }
});
