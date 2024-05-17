const cloud = document.getElementById('cloud');
//el queryselectos selecciona la primer clase que encuentre 
const barraLateral = document.querySelector('.barra-lateral');
const spans = document.querySelectorAll('span');
const palanca = document.querySelector('.switch');
const circulo = document.querySelector('.circulo');
const menu = document.querySelector(".menu");

const main = document.querySelector('main');






const changeMode = document.querySelector('#spanMode');
const icon = document.querySelector('#DarkMode');


menu.addEventListener("click", ()=>{
    barraLateral.classList.toggle('max-barra-lateral');
    if(barraLateral.classList.contains('max-barra-lateral')){
        menu.children[0].style.display = 'none';
        menu.children[1].style.display = 'block';
    }else{
        menu.children[0].style.display = 'block';
        menu.children[1].style.display = 'none';
    }

    if(window.innerWidth<=320){
        barraLateral.classList.add('mini-barra-lateral');
        main.classList.add('min-main');
        span.forEach((span) =>{
            span.classList.add('oculto');
        });
    }
});




palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

    //cambio del contenido 
    if (body.classList.contains('dark-mode')){
        changeMode.textContent = 'Light Mode';
    }else{
        changeMode.textContent = "Dark Mode";
    }

    //cambiar el icono
    if(icon.name === "moon"){
        icon.name = "sunny"
    }else{
        icon.name = "moon";
    }
});


cloud.addEventListener("click",()=>{ //funcion que acompaña al evento clic
    //aplica los estilos de mini-barra-lateral
    barraLateral.classList.toggle('mini-barra-lateral');
    main.classList.toggle('min-main');
    spans.forEach((span)=>{
        span.classList.toggle('oculto');
    });
});