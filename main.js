var criacao = document.querySelector('.start');
const elemento =  document.querySelector('#som_tecla_pom');
const introducao = document.querySelector('header');
const corpo = document.querySelector('body')




var msgs = 1; 




function start(){

    if(msgs === 1){
    criacao.textContent = 'ESSA PODE SER SUA OPORTUNIDADE!';
    msgs ++;}


    else{
    elemento.play();
    criacao.remove();
    abrir();
    
}
}

function abrir(){
    var div0 = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var escolhaTema = document.createElement("h1");
    var conteudo1 = document.createTextNode("Escolha o Tema Inicial!");
    


    div1.classList.add("tema1");

    introducao.appendChild(div1); //header

    escolhaTema.appendChild(conteudo1); //coloquei o texto no h1
    escolhaTema.classList.add("texto2"); //adicinei uma classse no h1
    div1.appendChild(escolhaTema); //adicionei o h1 com o texto na div

    
    introducao.appendChild(div0);
    div0.classList.add("imagens");

    div0.appendChild(div2);
    div2.classList.add("img1");
    div0.appendChild(div3);
    div3.classList.add("img2");
    div0.appendChild(div4);
    div4.classList.add("img3");
    
    div2.addEventListener("click", ()=>{
        div1.classList.remove("tema1");
        div1.classList.add("carta-branca");
        escolhaTema.remove();
        div0.remove();
        
        
        var titulomaior = document.createElement('h1');
        var conteudo2 = document.createTextNode(prompt("DIGITE O SEU TÍTULO"));
        titulomaior.appendChild(conteudo2);
        introducao.appendChild(titulomaior);
        titulomaior.classList.add('ultimo-titulo');
        final();

    })
    div3.addEventListener("click", ()=>{
        div1.classList.remove("tema1");
        div1.classList.add("grunge-azul");
        escolhaTema.remove();
        div0.remove();
        
        
        var titulomaior = document.createElement('h1');
        var conteudo2 = document.createTextNode(prompt("DIGITE O SEU TÍTULO"));
        titulomaior.appendChild(conteudo2);
        introducao.appendChild(titulomaior);
        titulomaior.classList.add('ultimo-titulo');
        final();

    })
    div4.addEventListener("click", ()=>{
        div1.classList.remove("tema1");
        div1.classList.add("pintura-fluida"
        );escolhaTema.remove();
        div0.remove();
        
        
        var titulomaior = document.createElement('h1');
        var conteudo2 = document.createTextNode(prompt("DIGITE O SEU TÍTULO"));
        titulomaior.appendChild(conteudo2);
        introducao.appendChild(titulomaior);
        titulomaior.classList.add('ultimo-titulo');
        final();

    })
    
}
function final(){
    corpo.style.backgroundColor = prompt("Digite a cor do copor em inglês");
    alert("vamos criar um formulário?");

    var fim = document.createElement("h2");
    var conteudo2 = document.createTextNode("EU MENTI NÃO VAI TER FOMULÁRIO, É O FIM POR HOJE");
    corpo.appendChild(fim);
    fim.appendChild(conteudo2);
    
    if(corpo.style.backgroundColor == "black"){
        fim.classList.add('fimB');
        
    }
else{
    fim.classList.add('fimW');
}

}
