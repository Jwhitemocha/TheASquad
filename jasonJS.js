// Getting helloSalut API 

//var languageCode = [
 //   "en", //english
  //  "fr", //french
  //  "ja", //japanese
  //  "es", //spanish
  //  "de", //german
// ]

//Getting Country Class via click function **note Alert is just to test**
$(".fr").click(function() { 
    alert('France Was Clicked');
});
$(".en").click(function() { 
    alert('USA was clicked');
});
$(".ja").click(function() { 
    alert('JAPAN was clicked');
});
$(".en-gb").click(function() { 
    alert('England was clicked');
});

var languageCode = $(".item").click(function();

var helloUrl = "https://fourtonfish.com/hellosalut/?lang=" + languageCode; 

$.ajax({
    url: helloUrl,
    method: 'GET'
}).then(function(response) { 
    console.log(helloUrl);
    console.log(response.hello);
});

