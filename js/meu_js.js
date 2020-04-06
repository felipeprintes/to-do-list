//Criando um botão para fechar a lista
var minhaLista = document.getElementsByTagName("li");
var i=0;
for(i=0; i<minhaLista.length; i++){
	console.log("entrei no for");
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	minhaLista[i].appendChild(span);
}

//Criar no 'x' e esconder o elemento da lista
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Adicionar um check no elemento clicado
var lista = document.querySelector('ul');
lista.addEventListener('click', function(ev){
	if(ev.target.tagName==='LI'){
		ev.target.classList.toggle('checked');
	}
}, false);


//Adicionar um novo elemento a lista, ao clicar no botão
function newElement(){
	var li = document.createElement("li");
	var conteudo = document.getElementById("myInput").value	
	var t = document.createTextNode(conteudo)
	li.appendChild(t);

	if(conteudo===""){
		alert("Você deve escrever alguma coisa antes de criar uma nova tarefa");
	}else{
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value="";

	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className = "close";
  	span.appendChild(txt);
  	li.appendChild(span);

  	for (i = 0; i < close.length; i++) {
	    close[i].onclick = function() {
	      var div = this.parentElement;
	      div.style.display = "none";
	    }
  	}

}
