const character = document.getElementById('character');

document.addEventListener('mousemove', (event) => {
  // Obtener la posición del mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Obtener la posición del personaje
  const characterX = character.offsetLeft + (character.offsetWidth / 2);
  const characterY = character.offsetTop + (character.offsetHeight / 2);

  // Calcular el ángulo entre el personaje y el mouse
                //             Calcular angulos en radianes      // //Pasar a grados//
  const angle = Math.atan2(mouseY - characterY, mouseX - characterX) * (180 / Math.PI);

  // Girar el personaje hacia el ángulo calculado
  character.style.transform = `rotate(${angle}deg)`;
});
