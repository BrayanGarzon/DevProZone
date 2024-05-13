const cloud = document.getElementById('cloud');
//el queryselectos selecciona la primer clase que encuentre 
const barraLateral = document.querySelector('.barra-lateral');
const spans = document.querySelectorAll('span');
const palanca = document.querySelector('.switch');
const circulo = document.querySelector('.circulo');

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});


cloud.addEventListener("click",()=>{ //funcion que acompaña al evento clic
    //aplica los estilos de mini-barra-lateral
    barraLateral.classList.toggle('mini-barra-lateral');
    spans.forEach((span)=>{
        span.classList.toggle('oculto');
    });
});