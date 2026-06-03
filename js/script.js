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

//Validação de cadastro e login

function cadastro() {

    var usuarioCad = document.getElementById("usuario-cad").value;
    var emailCad = document.getElementById("email").value;
    var senhaCad = document.getElementById("senha-cad").value;

    //Validação simples
    if (usuarioCad === "" || emailCad === "" || senhaCad === "") {
        alert("Por favor, preencha todos os campos do cadastro!");
        return;
    }

    //Memória temporária
    localStorage.setItem("usuarioSalvo", usuarioCad);
    localStorage.setItem("senhaSalva", senhaCad);

    alert("Cadastro realizado com sucesso! Agora faça o seu Login.");

    //Limpa os campos de cadastro
    document.getElementById("cadastro").reset();

    //Esconder a section de cadastro e mostrar a de login
    var sectionLogin = document.getElementById("section-login");
    var sectionCadastro = document.getElementById("section-cadastro");

    sectionCadastro.style.display = "none";
    sectionCadastro.classList.add("escondido");
    sectionLogin.style.display = "block";

    //Um opacit para dar um estilo
    setTimeout(function () {
        sectionLogin.style.opacity = "1";
    }, 10);
}

function login() {

    //Valores digitados
    var usuarioLogin = document.getElementById("usuario").value;
    var senhaLogin = document.getElementById("senha").value;

    //Dados guardados do cadastro (localStorage)
    var usuarioRegistrado = localStorage.getItem("usuarioSalvo");
    var senhaRegistrada = localStorage.getItem("senhaSalva");

    //Validação dos dados
    if (usuarioLogin === usuarioRegistrado && senhaLogin === senhaRegistrada) {
        alert("Login realizado com sucesso! Bem-vindo à GameStore Pro.");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }

}
