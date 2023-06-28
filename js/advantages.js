function initAccordeon () {
    document.querySelectorAll('.js-toggle-accordeon').forEach(accordeonToggle => {
      accordeonToggle.addEventListener('click', event => {
        toggleAccordeon(event);
      })
    });
  }

  const allElements = document.querySelector('.js-toggle-accordeon')
  
  function toggleAccordeon (event) {
    const currentAccordeon = event.currentTarget;
    const contentHeight= currentAccordeon.querySelector('.accordeon__content .accordeon__content-wrapper').offsetHeight;
    const contentHolder= currentAccordeon.querySelector('.accordeon__content');
  
    if ( currentAccordeon.classList.contains('is-active') ) {
      currentAccordeon.classList.remove('is-active');
      contentHolder.style.maxHeight = 0;
    } else {
      contentHolder.style.maxHeight = `${contentHeight}px`;
      allElements.classList.remove('is-active')
      currentAccordeon.classList.add('is-active');
    }
  }
  
  (function() {
    initAccordeon()
  })();