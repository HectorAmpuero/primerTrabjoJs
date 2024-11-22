let precio = 40000
let cantidad = 0

const precioSpan = document.querySelector ('.precio-inicial')
const cantidadSpan = document.querySelector ('.cantidad')
const valorSpan = document.querySelector ('.valor-total')

const sumaBtn = document.querySelector ('#suma')
const restaBtn = document.querySelector ('#resta')

precioSpan.innerHTML = precio;

sumaBtn.addEventListener ("click", () => {
    cantidadSpan.innerHTML++;
    valorSpan.innerHTML = cantidadSpan.innerHTML * precioSpan.innerHTML;
}
 );

 restaBtn.addEventListener ("click" , () => {
    cantidadSpan.innerHTML--;
    valorSpan.innerHTML = cantidadSpan.innerHTML * precioSpan.innerHTML;
 }
);