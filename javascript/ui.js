let nativeCurrency = 'USD';

$('.ui.dropdown').dropdown();

$('#nativeModal').modal('show')

// Clicking on native currency pops initial modal back up
$('#displayNative').click(function(){
  $('#nativeModal').modal('show');
});

// Changes native currency to Euro
$(`#nativeBtn-${nativeCurrency}`).click(function(){
  $('#displayNative').text(nativeCurrency);
  $('#nativeModal').modal('hide');
  rateExchange();
});

// Changes coverted currency to Euro
$(`#convertedList-EUR`).click(function(){
  $('#convertedModal').modal('show')
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