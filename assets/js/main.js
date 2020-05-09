$( ".photo-card" ).hover(
  function() {
    $(this).addClass('shadow-sm').css('cursor', 'pointer');
  }, function() {
    $(this).removeClass('shadow-sm');
  }
);
