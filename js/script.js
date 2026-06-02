//efeito do botão voltar ao Topo

const botaoTopo = document.getElementById("voltar-topo");

// Avisa o navegador para rodar uma função sempre que o usuário rolar a página
window.onscroll = function() {
    exibirBotao();
};

function exibirBotao() {
    // Se a rolagem passar de 300 pixels (equivalente a passar do cabeçalho/banner)
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botaoTopo.style.display = "block"; // Mostra o botão no HTML
        setTimeout(() => { botaoTopo.style.opacity = "1"; }, 10); // Faz o efeito de surgir suave
    } else {
        botaoTopo.style.opacity = "0"; // Faz o efeito de sumir suave
        setTimeout(() => { botaoTopo.style.display = "none"; }, 400); // Esconde do HTML após a transição
    }
}

function topo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Validação de Login

//Ativar alert no botão cadastrar
