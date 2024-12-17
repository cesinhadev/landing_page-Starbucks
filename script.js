document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Exibe a mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";

    // Limpa os campos do formulário
    document.getElementById("contactForm").reset();
});