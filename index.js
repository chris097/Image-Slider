let slideImage = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    // Clear all images
    function reset(){
        for(let i = 0; i < slideImage.length; i++){
            slideImage[i].style.display = 'none';
        }
    }

  // Init slider
  function startSlide(){
      reset()
      slideImage[0].style.display = 'block';
  }

  //Show prev
  function slideLeft(){
      reset();
      slideImage[current -1].style.display = 'block';
      current--;
  }

  // Show next
  function slideRight(){
      reset()
      slideImage[current + 1].style.display = 'block';
      current++;
  }

  // Left arrow click
  arrowLeft.addEventListener('click', function(){
      if(current === 0){
          current = slideImage.length;
      }
      slideLeft()
  });

  // Right arrow click
  arrowRight.addEventListener('click', function(){
    if(current === slideImage.length - 1){
        current = -1;
    }
    slideRight()
});

  startSlide()