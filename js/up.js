(function () {
    var accordeon = document.querySelector('.accordeon');
    var accordeonTitles = accordeon.querySelectorAll('.accordeon__title');
  
    [].forEach.call(accordeonTitles, function (accordeonTitle) {
      accordeonTitle.addEventListener('click', function () {
        var activeTitle = accordeon.querySelector('.accordeon__title--active');
        var activeDescr = accordeon.querySelector('.accordeon__descr.accordeon__descr--visible');
        var clickedDescr = accordeonTitle.parentElement.querySelector('.accordeon__descr');
  
        if (activeTitle) {
          activeTitle.classList.remove('accordeon__title--active');
        }
  
        accordeonTitle.classList.toggle('accordeon__title--active');
  
        if (activeDescr) {
          activeDescr.classList.remove('accordeon__descr--visible');
          activeDescr.style.maxHeight = null;
        }
  
        clickedDescr.classList.toggle('accordeon__descr--visible');
        clickedDescr.style.maxHeight = clickedDescr.scrollHeight + "px";
      });
    });
  })();