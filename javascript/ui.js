let nativeCurrency;
let convertedCurrency;
let convertedRate;
let lastWeekConvertedRate;
let nativeSymbol;
let convertedSymbol;
const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');

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
  $(".nativeRate").text(nativeSymbol + 1);
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
  let currentUrl = "https://api.ratesapi.io/api/latest?base=" + nativeCurrency;
  let lastWeekUrl = "https://api.ratesapi.io/api/" + lastWeek + "?base=" + nativeCurrency;

  $.ajax({
    url: currentUrl,
    method: "GET"
  }).then(function(response){
    $.ajax({
      url: lastWeekUrl,
      method: "GET"
    }).then(function(response2){
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
        console.log(response2);
        lastWeekConvertedRate = roundedToTwoDec(response2.rates[convertedCurrency])
        $('#convertedPreviousRate').text(convertedSymbol + lastWeekConvertedRate);
      })
  })
}

function roundedToTwoDec(number){
  return Math.round(number * 100) / 100;
}


