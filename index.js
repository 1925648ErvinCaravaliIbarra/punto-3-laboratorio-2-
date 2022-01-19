
/*
Esta  function Calcula el precio, por metro, de las cuatro barras de aluminio  para construir la ventana. En esta  funcion se ingresa la longitud de una barra de aluminio. 
*/
function PrecioMetroBarraAluminio(m){return 4*(m*12000)};
console.log(PrecioMetroBarraAluminio(3));
console.log(PrecioMetroBarraAluminio(5));


/*
Esta  function Calcula el precio, por metro cuadrado,de la ventana de vidrio. En  esta funcion se ingresa la longitud de un lado de la ventana de vidrio.

*/
function PrecioMetroCuadradoVidrio(m){return Math.pow(m,2)*30000};
console.log(PrecioMetroCuadradoVidrio(3));
console.log(PrecioMetroCuadradoVidrio(5));


/*
Esta  function Calcula el precio total de la ventana de vidrio, esto teniendo en cuenta  el precio, por metro, de las cuatro barras de aluminio y el precio, por metro cuadrado,de la ventana de vidrio. En esta funcion se ingresa  la longitud del lado de la ventana de vidrio o el de una barra de aluminio. 
*/

function PrecioVentana(m){return PrecioMetroBarraAluminio(m)+ PrecioMetroCuadradoVidrio(m)};

console.log(PrecioVentana(3));
console.log(PrecioVentana(5));