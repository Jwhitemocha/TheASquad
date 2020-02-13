// Getting helloSalut API 

var languageCode 

// Function to change to proper languageCode based on country clicked
$(".item").click(function() { 

    languageCode = $(this).attr('class').split(" ")[0]

    console.log(languageCode);
    var helloUrl = "https://fourtonfish.com/hellosalut/?lang=" + languageCode; 

    $.ajax({
    url: helloUrl,
    method: 'GET'
    }).then(function(response) { 
    console.log(helloUrl);
    console.log(response.hello);
    });


});


