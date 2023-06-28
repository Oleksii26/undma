

upInteractive = false;

function autoToggle() {
  $('.arrow-up').toggleClass('auto');
}

$('.arrow-up').hover(function() {
  upInteractive = true;
  $('.arrow-up').removeClass('auto');
});

setInterval(function(){ 
  
  console.log(upInteractive);
  
  if(upInteractive === false) {
    autoToggle();
  }

},2000);