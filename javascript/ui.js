let nativeCurrency = 'USD';
$('.ui.dropdown')
.dropdown();

  $('#nativeCurrencyModal').modal('show')


// Clicking on native currency pops initial modal back up
$('#changeNativeCurrency').click(function(){
  $('#nativeCurrencyModal').modal('show');
});

// Changes native currency to Euro
$(`#nativeCurrencyEuro`).click(function(){
  nativeCurrency = "EUR";
  $('#changeNativeCurrency').text(nativeCurrency);
  $('#nativeCurrencyModal').modal('hide');
  rateExchange();
});

// Changes coverted currency to Euro
$('#convertedCurrencyEuro').click(function(){
  $('#convertedCurrency').text("Euro")
  $('#convertedCurrencyModal').modal('show')
});

// Getting the Exchange Rate API
function rateExchange(){
  url = "https://api.ratesapi.io/api/latest?base=" + nativeCurrency;
  $.ajax({
    url,
    method: "GET"
  }).then(function(response){
    console.log(response);
  })
}