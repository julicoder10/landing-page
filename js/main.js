window.addEventListener('scroll', function(){
  let animacion = document.getElementById('img-2');
  let posicion = animacion.getBoundingClientRect().top;
  let tamañoWindow = window.innerHeight;

  if(posicion < tamañoWindow){
    animacion.style.animation = "mover 1s ease-out";
  }
})
