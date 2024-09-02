// Código JavaScript que maneja eventos
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('img').addEventListener('error', function() {
        alert('XSS');
    });
});
