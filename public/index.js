$(document).on('ready', function(){
  $('.projects').click(function(){
    $('.ruby-projects').bPopup({
      speed: 650,
      transition: 'slideIn',
      transitionClose: 'slideBack'
    });
  });
  $('.projects-ii').click(function(){
    $('.rails-projects').bPopup({
      speed: 650,
      transition: 'slideIn',
      transitionClose: 'slideBack'
    });
  });
  $('.contact-info-top').click(function(){
    $('.contact-info').bPopup();
  });
  $('.aboutme').click(function(){
    $('.aboutme-box').bPopup();
  });
});
