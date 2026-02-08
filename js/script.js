document.addEventListener('DOMContentLoaded', () => {
    const btnProposta = document.getElementById('btnProposta');
    const header = document.querySelector('header');

    if (btnProposta) {
        btnProposta.addEventListener('click', () => {
            const originalText = btnProposta.innerText;
            btnProposta.innerText = "✅ Enviado!";
            btnProposta.style.backgroundColor = "#28a745";
            
            setTimeout(() => {
                btnProposta.innerText = originalText;
                btnProposta.style.backgroundColor = "";
            }, 3000);
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});
