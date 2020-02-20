// Variable declaration
let nativeCurrency;
let convertedCurrency;
let convertedRate;
let lastWeekConvertedRate;
let nativeSymbol;
let convertedSymbol;
const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
const rightSideSymbols = ['CZK', 'PLN', 'CHF', 'RUB', 'MXN', 'SEK', 'ISK', 'DKK', 'NOK', 'RON', 'HUF', 'BGN', 'HRK'];

// Initial displays
$('.ui.dropdown').dropdown();
$('#nativeModal').modal('show')

// Clicking on native currency pops initial modal back up
$('#displayNative').click(function(){
  $('#nativeModal').modal('show');
});

// Sets native currency on click and places the text for native currency
$('.nativeBtn').click(function(){
  nativeCurrency = $(this).attr('id').slice(-3);
  nativeSymbol = $(this).attr('symbol');
  $('#displayNative').text(nativeCurrency);
  placeCurrencySymbol('.nativeRate', nativeCurrency, 1, nativeSymbol);
  $('#nativeModal').modal('hide');
})

// Changes coverted currency when clicked
$(`.item`).click(function(){
  convertedCurrency = $(this).attr('id').slice(-3);
  convertedSymbol = $(this).attr('symbol');
  rateExchange();
});

// Getting the Exchange Rate API
function rateExchange(){
  // Two calls are made becuase the current data and previous data require two API calls
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
        // Shows modal with corresponding text
        $('#convertedModal').modal('show');
        $('#nativeCurrency').text(nativeCurrency);
        $('#convertedCurrency').text(convertedCurrency);
        
        // Gets and displays the conversion rate based on what the native currency is set two
        convertedRate = roundedToTwoDec(response.rates[convertedCurrency])
        if(nativeCurrency === convertedCurrency){
          convertedRate = 1
        }
        placeCurrencySymbol('#convertedRate', convertedCurrency, convertedRate, convertedSymbol);
        
        // Shows the conversion amount based on what is inputed 
        $('#convertBtn').click(function(){
          let convertedInput = roundedToTwoDec($('#checkNative').val() * response.rates[convertedCurrency]);
          $('#checkConverted').val(convertedInput);
        })
        // Gets and displays the conversion rate from last week
        lastWeekConvertedRate = roundedToTwoDec(response2.rates[convertedCurrency])
        placeCurrencySymbol('#convertedPreviousRate', convertedCurrency, lastWeekConvertedRate, convertedSymbol);

        // Shows the appropriate arrow depending on if the rate has increased/decreased
        $('#rateIcon').removeClass();
        if(response.rates[convertedCurrency] > response2.rates[convertedCurrency]){
          $('#rateIcon').addClass("green caret up icon");
        } else if(response.rates[convertedCurrency] < response2.rates[convertedCurrency]){
          $('#rateIcon').addClass("red caret down icon");
        }
      })
  })
}

// Simple rounding function used to shorten the conversion rates
function roundedToTwoDec(number){
  return Math.round(number * 100) / 100;
}

// Places the currency symbol either on the left or right of the number depending on the currency
function placeCurrencySymbol(targetedEl, currencyType, amount, symbol){
  if(rightSideSymbols.includes(currencyType)){
    $(targetedEl).text(amount + symbol);
  }
  else{
    $(targetedEl).text(symbol + amount);
  }
}