window.onload = ()=>{
    mostrarUsuarios();
    let lista = document.querySelector(".listausuario");
    let cont = document.createElement("ol");
    let titulo = document.createElement("h2");
    titulo.textContent= "Lista usuarios";
    lista.appendChild(titulo);
    lista.appendChild(cont);

}

const mostrarUsuarios = ()=>{
    const url = "http://localhost:3000/";
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
        .then(data => {
            data.forEach(i => {
                crearusu(i);
            });
        });
}

function crearusu(i){

    let cont = document.querySelector("ol")
    let nombre = document.createElement("li");
    nombre.textContent = i.nombre;
    cont.appendChild(nombre);
}

function mostarusu(i){
    
    let caja = document.querySelector(".datos")
    caja.display = "relatice";
    let nombre = document.createElement("p");
    nombre.textContent= "Nombre :"+i.nombre;
    let login = document.createElement("p");
    login.textContent= "Login :"+i.login;
    let vehiculos = document.createElement("p");
    vehiculos.textContent= "N vehiculos :"+i.num_vehiculos;
    caja.appendChild(nombre);
    caja.appendChild(login);
    caja.appendChild(vehiculos);
}

function buscarusu(){

    let caja = document.querySelector("input");
    let texto = caja.value;
    
    const url = "http://localhost:3000/"+texto;

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
        .then(data => {
            if(data.length!=0){
                data.forEach(i => {
                    mostarusu(i);
                });
            }else{
               alert('El usuario no existe');
            }
        });
}