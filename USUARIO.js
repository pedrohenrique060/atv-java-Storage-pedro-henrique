addEventListener("DOMContentLoaded", () => {
    // Recebendo os dados armazenados no localStorage
    var nomeRecebido = localStorage.getItem("nome");
    document.getElementById("inputNome").innerHTML = nomeRecebido;

    var emailRecebido = localStorage.getItem("email");
    document.getElementById("inputEmail").innerHTML = emailRecebido;

    var telefoneRecebido = localStorage.getItem("telefone");
    document.getElementById("inputTelefone").innerHTML = telefoneRecebido;

    var cpfRecebido = localStorage.getItem("cpf");
    document.getElementById("inputCpf").innerHTML = cpfRecebido;

    var senhaRecebida = localStorage.getItem("senha");
    document.getElementById("inputSenha").innerHTML = senhaRecebida;
});
