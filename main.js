// $('#para2').addClass('hide');
// $('#para3').addClass('hide');

// $('#head1').on ('click', function () {
//   $('#para1').toggleClass('hide');
//   $('#para2').addClass('hide');
//   $('#para3').addClass('hide');
// });

// $('#head2').on ('click', function () {
//   $('#para2').toggleClass('hide');
//   $('#para1').addClass('hide');
//   $('#para3').addClass('hide');
// });

// $('#head3').on ('click', function () {
//   $('#para3').toggleClass('hide');
//   $('#para1').addClass('hide');
//   $('#para2').addClass('hide');
// });

$('section').on ('click', function(){
  $('section').removeClass('thissection');
  $(this).addClass('thissection');
});
