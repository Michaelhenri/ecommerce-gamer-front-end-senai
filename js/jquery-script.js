//efeito de esconder formulário de cadastro

$(document).ready(function () {

    //Clicar em "Não é cadastrado ainda? Cadastre-se"
    $("#link-ir-cadastro").click(function (e) {
        e.preventDefault();

        $("#section-login").fadeOut(400, function () {

            $("#section-cadastro").removeClass("escondido").fadeIn(400);
        });
    });

    //Clicar em "Já tem uma conta? Faça Login"
    $("#link-ir-login").click(function (e) {
        e.preventDefault();

        $("#section-cadastro").fadeOut(400, function () {

            $("#section-login").fadeIn(400);
        });
    });
});