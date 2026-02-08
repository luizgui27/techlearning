// Interação para a entrega da Semana 3
document.addEventListener('DOMContentLoaded', () => {
    const botaoProposta = document.querySelector('.btn-destaque');

    if (botaoProposta) {
        botaoProposta.addEventListener('click', () => {
            // Exibe um alerta simples conforme solicitado na missão
            alert('🚀 Missão Semana 3: Sua proposta foi solicitada com sucesso! Nossa equipe entrará em contato em breve.');
            
            // Log no console para conferência do desenvolvedor
            console.log('Botão de proposta clicado e script JS executado corretamente.');
        });
    }
});
