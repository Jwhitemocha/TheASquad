$('.ui.dropdown')
  .dropdown();

  $('.ui.modal')
  .modal('show')



// Clicking on native currency pops initial modal back up
$('#changeNativeCurrency').click(function(){
  $('#nativeCurrencyModal').modal('show');    
});


// Changes native currency to Euro
$('#nativeCurrencyEuro').click(function(){
  $('#changeNativeCurrency').text("Euro")
  $('.ui.modal')
  .modal('hide')
});

