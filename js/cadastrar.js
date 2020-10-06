
function cad(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    window.alert(`${nome} ${sobrenome} ${email} ${senha}`);

    document.getElementById("cadastrar").submit();
}



