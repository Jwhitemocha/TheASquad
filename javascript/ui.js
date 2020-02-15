let nativeCurrency;
let convertedCurrency;
let convertedRate;
let nativeSymbol;
let convertedSymbol;

$('.ui.dropdown').dropdown();

$('#nativeModal').modal('show')

// Clicking on native currency pops initial modal back up
$('#displayNative').click(function(){
  $('#nativeModal').modal('show');
});

// Changes native currency
$('.nativeBtn').click(function(){
  nativeCurrency = $(this).attr('id').slice(-3);
  nativeSymbol = $(this).attr('symbol');
  $('#displayNative').text(nativeCurrency);
  $("#nativeRate").text(nativeSymbol + 1);
  $('#nativeModal').modal('hide');
})

// Changes coverted currency
$(`.item`).click(function(){
  convertedCurrency = $(this).attr('id').slice(-3);
  convertedSymbol = $(this).attr('symbol');
  rateExchange();
});

// Getting the Exchange Rate API
function rateExchange(){
  url = "https://api.ratesapi.io/api/latest?base=" + nativeCurrency;
  $.ajax({
    url,
    method: "GET"
  }).then(function(response){
    $('#convertedModal').modal('show');
    $('#nativeCurrency').text(nativeCurrency);
    $('#convertedCurrency').text(convertedCurrency);
    
    convertedRate = roundedToTwoDec(response.rates[convertedCurrency])
    if(nativeCurrency === convertedCurrency){
      convertedRate = 1
    }
    $('#convertedRate').text(convertedSymbol + convertedRate);

    $('#convertBtn').click(function(){
      let convertedInput = roundedToTwoDec($('#checkNative').val() * response.rates[convertedCurrency]);
      $('#checkConverted').val(convertedInput);
    })
  })
}

function roundedToTwoDec(number){
  return Math.round(number * 100) / 100;
}
