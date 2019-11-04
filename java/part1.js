function criaLink(cidade){
    var busca = document.getElementById('busca').value;
    return "https://api.mapbox.com/geocoding/v5/mapbox.places/"+busca+".json?access_token=pk.eyJ1IjoiY2ZsYmVkdWNhdG9yIiwiYSI6ImNrMTZrYm1vNTA1dWEzaGxqN2tmMTZlazcifQ.XXsWkpgiguegb-C7WQpGBA" //link do mapa
}
var resultado; //variavel pra ser salvo o link gerado 
function pegarconteudo () {

var consulta = new XMLHttpRequest();
var url = criaLink();
consulta.open('GET', url, true); //0

consulta.onreadystatechange = function(e) {
    //console.log(this.readyState );
    if (this.readyState == 4){
        resultado = JSON.parse(this.response);
        console.log(resultado); 
        visualizar(); //função para vizualizar cidades

    }
}


consulta.send(); //2

}


function criarUl() {
    var nova_ul = document.createElement('ul');
    nova_ul.setAttribute('id','lista-ordenada');
    document.getElementById('principal').appendChild(nova_ul); //funcao para criar ul e ordernar lista
}

function inserirItem(nome_do_item, id) {
    var nova_li = document.createElement('li'); //Criando LI
    nova_li.setAttribute('id', id); //definindo ID para LI



    geramapa = 'gerarmapa(lat,long)';
   
    
    


    nova_li.setAttribute('onclick', geramapa);
    var nova_link = document.createElement('a'); //Criando Link (tag <a>)
    nova_link.setAttribute('href', '#'); //Definingo um link (href)
    var texto = document.createTextNode(nome_do_item); //Criando o texto do Link
    nova_link.appendChild(texto); //Adcionando texto a tag <a>
    nova_li.appendChild(nova_link); //Adcionando tag <a> ao LI

    document.getElementById('lista-ordenada').appendChild(nova_li); //Adcionando LI ao OL

}


// Lista de funcoes a serem executadas ao carregaar a pagina
function visualizar (){
    limpatela();
criarUl();
for (var i=0; i<5; i++){
    inserirItem (resultado.features[i].place_name,i);
    long=resultado.features[0].center;
    lat=resultado.features[1].center;
}
document.getElementById
}
function limpatela(){
    document.getElementById("principal").innerHTML="";
}


function gerarmapa(latitude, longitude){

    var mymap = L.map('mapid').setView([latitude,longitude], 15);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZsYmVkdWNhdG9yIiwiYSI6ImNrMTZrYm1vNTA1dWEzaGxqN2tmMTZlazcifQ.XXsWkpgiguegb-C7WQpGBA', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
    
   // L.marker([-14.2221, -42.7800]).addTo(mymap)
     //   .bindPopup("<b>Seja Bem vindo!</b><br />Você está em Guanambi.").openPopup();
}