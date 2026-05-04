function validarLogin(){
    let login = document.getElementById("login").value; // em um escopo de funçãon se usa let por conta do ECMAscript // o let não permite redeclaração 
    let senha = document.getElementById("senha").value;

    if(senha === "" || login === ""){  // === é igualdade estrita, quando tanto o dado quanto o valor dele tem que ser iguais
        window.alert("Preencha todos os campos")
    }else if (senha == "123" && login === "adm"){
        window.alert("Acesso consedido");
        window.location.href="produtos.html" // troca de pagina
        login = document.getElementById("login").value = "";
    } else {
        window.alert("Acesso negado")
        login = document.getElementById("login").value = "";
        senha = document.getElementById("senha").value = "";
    }
}

let lista = [12,13,23,343,45,56,675]
/*
for(let i = 0, i < lista.length, i++){
    document.write(i) 
}

document.write("asasasa")*/
