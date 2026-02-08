document.addEventListener('DOMContentLoaded', () => {
    const btnProposta = document.getElementById('btnProposta');
    const btnCompartilhar = document.getElementById('btnCompartilhar');
    const btnBuscar = document.getElementById('btnBuscar');
    const btnLogin = document.getElementById('btnLogin');
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

    if (btnCompartilhar) {
        btnCompartilhar.addEventListener('click', (e) => {
            e.preventDefault();
            if (navigator.share) {
                navigator.share({ 
                    title: 'Tech Learning', 
                    text: 'Confira a melhor agência de educação digital!',
                    url: window.location.href 
                });
            } else {
                alert("Link copiado para a área de transferência!");
            }
        });
    }

    if (btnBuscar) {
        btnBuscar.addEventListener('click', (e) => {
            e.preventDefault();
            const termo = prompt("O que você deseja buscar no site?");
            
            if (termo && termo.trim() !== "") {
                alert(`Buscando por: "${termo}"...`);
            } else if (termo !== null) {
                alert("Por favor, digite algo para buscar.");
            }
        });
    }

    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            const email = prompt("Digite seu e-mail de aluno:");
            
            if (email && email.trim() !== "") {
                alert(`Bem-vindo de volta, ${email}!`);
            } else if (email !== null) {
                alert("O campo de e-mail não pode ficar vazio.");
            }
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
