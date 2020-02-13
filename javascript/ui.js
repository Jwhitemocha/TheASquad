let nativeCurrency = 'USD';
let convertedCurrency;
let convertedRate;

$('.ui.dropdown').dropdown();

$('#nativeModal').modal('show')

// Clicking on native currency pops initial modal back up
$('#displayNative').click(function(){
  $('#nativeModal').modal('show');
});

// Changes native currency
$('.nativeBtn').click(function(){
  nativeCurrency = $(this).attr('id').slice(-3);
  $('#displayNative').text(nativeCurrency);
  $('#nativeModal').modal('hide');
})

// Changes coverted currency to Euro
$(`.item`).click(function(){
  convertedCurrency = $(this).attr('id').slice(-3);
  rateExchange();
});

$('.currencyIcon').click(function(){
  convertedCurrency = $(this).attr('id').slice(-3);
  rateExchange();
})

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
    
    convertedRate = roundedToTwoDec(response.rates[convertedCurrency])
    if(nativeCurrency === convertedCurrency){
      convertedRate = 1
    }
    $('#convertedRate').text(convertedRate);

    $('#convertBtn').click(function(){
      let convertedInput = roundedToTwoDec($('#checkNative').val() * response.rates[convertedCurrency]);
      $('#checkConverted').val(convertedInput);
    })
  })
}

function roundedToTwoDec(number){
  return Math.round(number * 100) / 100;
}
