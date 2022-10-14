document.querySelector('button').addEventListener('click', TraerDatos);

function TraerDatos(){

const xhttp = new XMLHttpRequest();
xhttp.open('GET', ('./json/Peliculas.json'), true);
xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        let res = document.querySelector('#res');
        res.innerHTML = '';

        for(let dt of datos){
            res.innerHTML += `
            <div class="Principal"><img src="img/Pelis.jpeg" width="200" height="150">
            <p><b>" ${dt.Pelicula}"</b></p><br><br>
            <p>Clasificacion: ( <b>${dt.Clasificacion}</b> )</p>
            <p>Duracion de la pelicula en minutos: ${dt.Duracion}</p><br><br>
            <p>Formato de pelicula: ${dt.Formato}</p>
            <p>Butacas: Normales</p><br><br>
            <p>Horarios:</p><p class="Fondo">${dt.Horarios}</p></div>
            `
        } 
    }
}

}