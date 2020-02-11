$('.ui.dropdown')
  .dropdown();

  $('#nativeCurrencyModal')
  .modal('show')


// Clicking on native currency pops initial modal back up
$('#changeNativeCurrency').click(function(){
  $('#nativeCurrencyModal').modal('show');    
});


// Changes native currency to Euro
$('#nativeCurrencyEuro').click(function(){
  $('#changeNativeCurrency').text("Euro")
  $('#nativeCurrencyModal')
  .modal('hide')
});

// Changes native currency to Euro
$('#convertedCurrencyEuro').click(function(){
  $('#convertedCurrency').text("Euro")
  $('#convertedCurrencyModal')
  .modal('show')
});