

function PrecioMetroBarraAluminio(m){return 4*(m*12000)};




function PrecioMetroCuadradoVidrio(m){return Math.pow(m,2)*30000};





function PrecioVentana(m){return PrecioMetroBarraAluminio(m)+ PrecioMetroCuadradoVidrio(m)};

console.log(PrecioVentana(3));
console.log(PrecioVentana(5));