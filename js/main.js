const listaDellaSpesa = ["mele" , "pere" , "banane" , "kiwi" , "mandarini" , "ananas"];

console.log(listaDellaSpesa);

let listaDom = document.getElementById('lista_della_spesa');
let i = 0 
while(i < listaDellaSpesa.length - 1){
    i++;
    
    listaDom.innerHTML +=`<li>${listaDellaSpesa[i]}</li>`;

}