let tamanhoFonte = 16;

function entrar(){

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
    "Olá, " + nome + "!";
}

function aumentarFonte(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

}

function diminuirFonte(){

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}
