function mascaraTelefone() {
    // Limitador
    var telefone = document.getElementById("inputTelefone").value;
    console.log(telefone);
    telefone = telefone.slice(0, 14); // Limita a quantidade de caracteres na entrada
    console.log(telefone);
    document.getElementById("inputTelefone").value = telefone;
    telefone = document.getElementById("inputTelefone").value.slice(0, 10);
    console.log(telefone);

    // Máscara
    var telefoneFormatado = document.getElementById("inputTelefone").value;
    if (telefoneFormatado[0] != "(") {
        if (telefoneFormatado[0] != undefined) {
            document.getElementById("inputTelefone").value = "(" + telefoneFormatado[0];
        }
    }

    if (telefoneFormatado[3] != ")") {
        if (telefoneFormatado[3] != undefined) {
            document.getElementById("inputTelefone").value = telefoneFormatado.slice(0, 3) + ")" + telefoneFormatado[3];
        }
    }

    if (telefoneFormatado[9] != "-") {
        if (telefoneFormatado[9] != undefined) {
            document.getElementById("inputTelefone").value = telefoneFormatado.slice(0, 9) + "-" + telefoneFormatado[9];
        }
    }
    localStorage.setItem("telefone", telefoneFormatado);
}

function mascaraCpf() {
    var cpfFormatado = document.getElementById("inputCpf").value;
    if (cpfFormatado[3] != ".") {
        if (cpfFormatado[3] != undefined) {
            document.getElementById("inputCpf").value = cpfFormatado.slice(0, 3) + "." + cpfFormatado[3];
        }
    }

    if (cpfFormatado[7] != ".") {
        if (cpfFormatado[7] != undefined) {
            document.getElementById("inputCpf").value = cpfFormatado.slice(0, 7) + "." + cpfFormatado[7];
        }
    }
    if (cpfFormatado[11] != "-") {
        if (cpfFormatado[11] != undefined) {
            document.getElementById("inputCpf").value = cpfFormatado.slice(0, 11) + "-" + cpfFormatado[11];
        }
    }
    localStorage.setItem("cpf", cpfFormatado);
}

function mascaraNome() {
    var nomeFormatado = document.getElementById("inputNome").value;
    localStorage.setItem("nome", nomeFormatado);
}

function mascaraEmail() {
    var emailFormatado = document.getElementById("inputEmail").value;
    localStorage.setItem("email", emailFormatado);
}

function mascaraSenha() {
    var senhaFormatada = document.getElementById("inputSenha").value;
    localStorage.setItem("senha", senhaFormatada);
}

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal1");
var closeButton = document.querySelector("#btnFechar");
var openButton = document.querySelector("#btnAbrirModal");

function fecharModal() {
    modal.classList.add("closed");
    modalOverlay.classList.add("closed");
}

function abrirModal() {
    modal.classList.remove("closed");
    modalOverlay.classList.remove("closed");
}

function enviarFormulario() {
    window.alert("Seu cadastro está concluído!!");
}
