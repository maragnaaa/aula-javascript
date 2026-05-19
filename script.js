const idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");  
}

const senhaTeste = "1234"

const mensagem = senhaTeste === "1234"
    ? "Senha correta"
    : "Senha incorreta";

    console.log(mensagem);

const nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

const logado = true;
const admin = true;

if (logado && admin) {
    console.log("Admin liberado");   
} else {
    console.log("Acesso negado");
}

const usuario = "admin";
const senha = "123";

if (usuario === "admin" && senha === "123") {
    console.log("Login realizado");
} else {
    console.log("Acesso negado");
}
