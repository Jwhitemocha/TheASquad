// Getting helloSalut API 

var languageCode = [
    "en", //english
    "fr", //french
    "ja", //japanese
    "es", //spanish
    "de", //german
]
var helloUrl = "https://fourtonfish.com/hellosalut/?lang=" + languageCode;

$.ajax({
    url: helloUrl,
    method: 'GET'
}).then(function(response) { 
    console.log(helloUrl);
    console.log(response.hello);
})

