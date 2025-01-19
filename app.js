//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    var opcao = document.getElementById("amigo").value

    if (opcao == "") {
        alert("Por favor, insira um nome")
    } else {
        amigos.push(opcao)
        document.set
        document.getElementById("amigo").value = ""

        var lista = document.getElementById("listaAmigos")
        lista.innerHTML = ""

        for (i = 0; i < amigos.length; i++) {

            let li = document.createElement("li")

            li.innerHTML = amigos[i]

            lista.appendChild(li)


        }


    }

}

function sortearAmigo() {
    if (amigos.length != 0) {
        randomNumber = Math.floor(Math.random() * amigos.length)

        result = amigos[randomNumber]

        var resultado = document.getElementById("resultado")
        resultado.innerHTML = ""

        let li = document.createElement("li")

        li.innerHTML = "O amigo secreto sorteado é: " + result
        resultado.appendChild(li)
        var lista = document.getElementById("listaAmigos")
        lista.innerHTML = ""

    } else {
        alert("Você precisa primeiro adicionar um nome")
    }

}
