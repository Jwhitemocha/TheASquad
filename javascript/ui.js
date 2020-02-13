let nativeCurrency = 'USD';
let convertedCurrency;

$('.ui.dropdown').dropdown();

$('#nativeModal').modal('show')

// Clicking on native currency pops initial modal back up
$('#displayNative').click(function(){
  $('#nativeModal').modal('show');
});

// Changes native currency to Euro
nativeButton('USD');
nativeButton('EUR');
nativeButton('GBP');
nativeButton('JPY');

function nativeButton(currency){
  $(`#nativeBtn-${currency}`).click(function(){
    nativeCurrency = currency;
    $('#displayNative').text(nativeCurrency);
    $('#nativeModal').modal('hide');
  });
}

// Changes coverted currency to Euro
$(`.item`).click(function(){
  convertedCurrency = $(this).attr('id').slice(-3);
  rateExchange();
});

// Getting the Exchange Rate API
function rateExchange(){
  url = "https://api.ratesapi.io/api/latest?base=" + nativeCurrency;
  $.ajax({
    url,
    method: "GET"
  }).then(function(response){
    console.log(response);
    $('#convertedModal').modal('show');
    $('#nativeCurrency').text(nativeCurrency);
    $('#convertedCurrency').text(convertedCurrency);
  })
}
