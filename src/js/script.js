$(document).ready(function(){
  var scrollToTop = $('.scrollToTop');
  var docWindow = $(window);

  // Check to see if the window is top if not then display button
  docWindow.scroll(function(){
    if (docWindow.scrollTop() > 100) {
      scrollToTop.fadeIn();
    } else {
      scrollToTop.fadeOut();
    }
  });

  // Click event to scroll to top
  scrollToTop.click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});
