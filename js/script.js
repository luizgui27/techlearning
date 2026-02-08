document.addEventListener('DOMContentLoaded', () => {
    const botaoProposta = document.querySelector('.btn-destaque');

    if (botaoProposta) {
        botaoProposta.addEventListener('click', () => {
            alert('Solicitação recebida com sucesso! Em breve entraremos em contato.');
        });
    }
});
