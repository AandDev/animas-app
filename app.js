window.addEventListener('load', () => {

  // Variables

  const tabs = document.querySelectorAll('.tabs div');
  const sounds = document.querySelectorAll('.sound');
  const  head = document.querySelector('.head');


  // Eventos

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      sounds[index].currentTime = 0;
      sounds[index].play();

      // changeColor(index);

      // tab.classList.add('active');
      // tab.classList.add('expand');
    });

    // tab.addEventListener('animationend', () => {
    //   tab.classList.remove('expand');
    // });
  });

  // white.addEventListener('click', () => {
  //   white.classList.add('blank');
  //   document.body.style.backgroundColor = "#fff";
  //   head.style.color = '#000';
  // });

  // white.addEventListener('animationend', () => {
  //   white.classList.remove('blank');
  //   white.style.display = 'none';
  // });

  // Funciones

  // const changeColor = index => {
  //   head.style.color = '#fff';
  //   document.body.style.backgroundColor = colors[index];
  // }
});

