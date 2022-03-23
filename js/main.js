"use strict";

// Seleccionamos el formulario (elemento "form" del HTML con clase "js-new-form") donde agregamos nuevos gatitos
const form = document.querySelector('.js-new-form');

// A este elemento que hemos seleccionado le quitamos la clase "collapsed" que hacía que el formulario permaneciera oculto
form.classList.remove('collapsed');




// AÑADIR LOS GATITOS DESDE EL JAVASCRIPT y no desde el html directamente


// Seleccionamos el elemento "ul" (con clase "js-list") que contiene los distintos "li" (cada "li" tiene una ficha del gatito: imagen, nombre, raza y descripción)
const list = document.querySelector('.js-list');


// Declaramos las variables de href de la imagen, nombre, raza y descripción del gatito 1 para escribirlas luego en la ficha que tiene el "li"
const kittenImage1= "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "Anastacio";
const kittenRace1 = "British Shorthair";
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

// Llamamos las variables que acabamos de crear en la ficha que contiene el elemento "li". Esto hace que en el HTML se cree la ficha del gatito 1 en un "li", aunque no lo veamos en el HTML. Para acceder más fácilmente a este "li" cuando lo necesitemos luego, lo declaramos dentro de una variable "kittenOne"
const kittenOne = `<li class="card"> <article> <img class="card_img"src=${ kittenImage1}  alt="gatito" /><h3 class="card_title">${ kittenName1}</h3> <h4 class="card_race">${kittenRace1 }</h4> <p class="card_description">${kittenDesc1} </p> </article> </li>`;


// Repetimos el proceso para el gatito 2

// Declaramos las variables
const kittenImage2= "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenName2 = "Fiona";
const kittenRace2 = "British Shorthair";
const kittenDesc2 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

  // Llamamos las variables
const kittenTwo = `<li class="card"> <img class="card_img" src=${kittenImage2} alt="gatito" /> <h3 class="card_title"> ${kittenName2}</h3> <h4 class="card_race">
${kittenRace2}</h4> <p class="card_description">
${kittenDesc2 }
</p> </li>`;


// Y lo mismo para el gatito 3

// Declaramos las varibles
const kittenImage3= "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenName3= "Cielo";
const kittenRace3 = "British Shorthair";
const kittenDesc3 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! ";

// Llamamos a las variables
const kittenThree = `<li class="card"> <img class="card_img" src=${kittenImage3} alt="gatito" /> <h3 class="card_title"> ${kittenName3}</h3> <h4 class="card_race">
${kittenRace3}</h4> <p class="card_description">
${kittenDesc3 }
</p> </li>`;


// En este punto le decimos que nos meta todos los "li" (kittenOne, kittenTwo y kittenThree) dentro de la etiqueta de apertura y de cierre del del elemento "ul" (lo hemos definido al princio como variable "list"), aunque no lo escribe el el propio HTML, lo hace desde JS. 
// Al escribir los "li" dentro del "ul", en la página lanzada por el Live Server se nos pintan las fichas del gatito 1, del gatito 2 y del gatito 3
list.innerHTML = kittenOne + kittenTwo + kittenThree;




// BUSCAR POR DESCRIPCIÓN --> En este punto lo que vamos a hacer es que nos busque un gatito en función de si encuentra una palabra en su descripción (la palabra que nosotros le digamos que tiene que buscar)

// En este paso seleccionamos el input de tipo texto del formularío de búsqueda (section search), donde escribiríamos la palabra que tiene que buscar en la descripción
const input_search_desc = document.querySelector('.js_in_search_desc');


// Cómo no sabemos "validar" (decirle que palabra hemos escrito) el elemento input de tipo text, lo que le asignaría un "value" con la palabra que hemos escrito, lo hacemos a mano asignándole nosotros un valor, ¿cómo? con el siguiente código
input_search_desc.value = 'cariñoso';
// esto es lo mismo que si escribieramos "cariñoso" en el cuadrito de texto de buscar en la descripción en la página web


// En este paso declaramos una variable y le damos el valor de ese value que hemos definido en el codigo de la linea de arriba, es decir, le asignamos a la variable la palabra cariñoso
const descrSearchText = input_search_desc.value;


// Ahora creamos un condicional (if...else) para que nos muestre el gatito 1 si la palabra cariñoso está en su descripción, el gatito 2 si está en la descripción del gatito 2 y el gatito 3 si está en la descripción del gatito 3
if( kittenDesc1.includes(descrSearchText) ) {
// En la linea del código del if anterior le estamos diciendo: si la variable kittenDesc1 (la descripción del gatito 1) incluye la palabra "cariñoso", entonces...

  list.innerHTML = kittenOne;
// este sería el código que se ejecuta si se cumple la condición anterior Es decir, que si se cumple la condición anterior, muestrame la ficha del gatito 1 en la página web

} else if( kittenDesc2.includes(descrSearchText) ) {
  // En esta linea del código le decimos que si no se ha cumplido la condición anterior (la del if)entonces mira si la variable kittenDesc2 (la descripción del gatito 2) incluye la palabra "cariñoso", entonces...

  list.innerHTML = kittenTwo;
  // Y ahora lo mismo: si se cumple la condición anterior muestrame la ficha del gatito 2 en la página web

} else if( kittenDesc3.includes(descrSearchText) ) {

  list.innerHTML = kittenThree;
  // Los mismo pasos que seguimos para el gatito 2 pero para el gatito 3

} else {
  // Ahora le estamos diciendo que, si no se ha cumplido ninguna de las condiciones anteriores, entonces ejecutamente el siguiente código:

  list.innerHTML = '<li>No hay ningún gatito que tenga las características que estas buscando.</li>';
  // y aquí le decimos que si ningún gatito tiene la palabra "cariñoso" en su descripción, entonces muestrame la frase que te pongo. 
  // Hay que acordarse que estamos escribiendo las fichas dentro de un "ul"(list). Por tanto, si queremos que nos ponga una frase, deberá ir dentro de la etiqueta "li"

};





// EVENTO CLICK PARA EL +

const find = document.querySelector('.js-plus');

find.addEventListener('click', () => {
  form.classList.toggle("collapsed");
});


// EVENTO AÑADIR

const add = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const labelMesageError = document.querySelector(".js-label-error");

add.addEventListener('click', () => {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === "" && valuePhoto === "" && valueName === "" && valueRace === "") {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    labelMesageError.innerHTML = "Ahora mismo te añado el nuevo gatito";
  }
});