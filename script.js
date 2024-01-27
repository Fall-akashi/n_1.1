
//let helloWord = "hello,word";
//console.log(helloWord);

//let userName = prompt("digite o seu nome")
//console.log(userName);

//let menssage = "bem vindo"
//console.log(`ola ${userName} seja bem vindo`)

//let age = 20;
//let student = false;

//console.log("meu nome é " + userName + " e tenho " + age + " anos ")

//console.log(`meu nome é ${userName} e tenho ${age} anos`);

//let firstNumber = +prompt("digite o primeiro numero")

//let secondNumber = +prompt("digite o segundo numero")

//console.log(firstNumber + secondNumber)

//let base = +prompt("digite o numero da base")
//let altura = +prompt("digite a aulura")

//console.log(`à area do rentangulo é: ${base * altura} cm²`);
let userName = "fall"
let number = 20
let isStudent = false

let user = [userName, number, isStudent, "valor direto", 18, true];

user[0] = "test"
console.log(user.length)

function acessIndex() {

    let index = +prompt(`digite o index de ( 0 a ${user.length - 1})`)

    alert(`o elemento do idex desejado é ${user[index]}. o primeiro elemento desse array é ${user[0]}.o ultimo elemento do index é ${user[user.length - 1]} `)

}

