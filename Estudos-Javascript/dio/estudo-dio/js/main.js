var nome = "Witer Mendonça.";
var idade = 30;
//alert("Meu primeiro aleta!!!" + nome + " Tenho " + idade + " anos");

//Listas
var list = ["Uva", "Perâ", "Maça"]

//alert(list[0]);
list.push("Banana");
list.pop();
list.length;
list.reverse();
console.log(list.toString())
console.log(list.join("-"));

console.log(list)

//Dicionarios/Json
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.cor)

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas[0])

//Condicionais, Laços de Repetição, Date

/*var idade = prompt("Qual sua idade?")
if(idade >=18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/

var count = 0
while(count < 5){
    console.log(count);
    count++;
}

for(var i = 1; i <= 5; i++){
    console.log(i);
}

var dataAtual = new Date();
//console.log(dataAtual)
console.log(dataAtual.getMonth());

function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));

function setReplace(frase, name, new_name){
    return frase.replace(name, new_name);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"))

function clicou(){
    //alert("Você Clicou no Botão.")
    document.getElementById("agradecimento").innerHTML = "<b>Você Clicou no Botão.</b>";
}

function redirecionar(){
    window.open("https://google.com");
    window.location.href = "https://google.com" //abre na msm janela

}


function trocar(){
    document.getElementById("mousemove"). innerHTML = "Você passou o mouse aqui."
    document.getElementById("mousemove2"). innerHTML = "Você passou o mouse aqui."

   //element.innerHTML = "Você passou o mouse aqui."
}

function voltar(element){
    //document.getElementById("mousemove"). innerHTML = "Você passou o mouse aqui."
    element.innerHTML = "Passe o mouse aqui."
}