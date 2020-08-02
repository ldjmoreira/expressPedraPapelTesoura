
var escolha1 = ""
var escolha2 =""
var pontos1=0;
var pontos2=0;


function myFunction1(){
    var var3 = document.getElementById("mySelect1").value;

    var propriedade1 = document.getElementById("jogador11");
        propriedade1.style.display = "none"


    var propriedade2 = document.getElementById("jogador22");
        propriedade2.style.display = "block"
        escolha1 = var3
    }

    function myFunction2(){
    var var4 = document.getElementById("mySelect2").value;

    var propriedade1 = document.getElementById("jogador11");
        propriedade1.style.display = "block"


    var propriedade2 = document.getElementById("jogador22");
        propriedade2.style.display = "block"
        escolha2 =var4

        document.getElementById("mySelect1").value ="select"
        document.getElementById("mySelect2").value ="select"

        depois(escolha1,escolha2)
}

function depois(escolha1,escolha2){
var vt = [escolha1,escolha2]

var propriedade1 = document.getElementById("jogador11");
    propriedade1.style.display = "block"


var propriedade2 = document.getElementById("jogador22");
    propriedade2.style.display = "none"

    var propriedade3 = document.querySelector('#algo');

    if( vt[0] == vt[1]){
    
    propriedade3.innerHTML = "O jogador 1 e 2 empataram!"
    }else{
        if(vt[0] == 'papel' ) {
            if(vt[1]=='pedra'){
            pontos1=pontos+5;
            propriedade3.innerHTML = "O jogador 1 venceu!"
            window.document.getElementById('ponto1').innerHTML=pontos1.toString();
            }else{
            pontos2=pontos2+5;
            propriedade3.innerHTML = "O jogador 2 venceu!"
            window.document.getElementById('ponto2').innerHTML=pontos2.toString();
            }
        }
        if(vt[0] == 'pedra' ) {
            if(vt[1]=='tesoura'){
            pontos1=pontos1+5;
            propriedade3.innerHTML = "O jogador 1 venceu!"
            window.document.getElementById('ponto1').innerHTML=pontos1.toString();
            }else{
            pontos2=pontos2+5;
            propriedade3.innerHTML = "O jogador 2 venceu!"
            window.document.getElementById('ponto2').innerHTML=pontos2.toString();
            }
        }
        if(vt[0] == 'tesoura' ) {
            if(vt[1]=='papel'){
            pontos1=pontos1+5;
            propriedade3.innerHTML = "O jogador 1 venceu!"
            window.document.getElementById('ponto1').innerHTML=pontos1.toString();
            }else{
            pontos2=pontos2+5;
            propriedade3.innerHTML = "O jogador 2 venceu!"
            window.document.getElementById('ponto2').innerHTML=pontos2.toString();
            }
        }   
    }
}