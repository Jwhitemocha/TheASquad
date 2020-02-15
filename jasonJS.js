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
        
// Displaying 'Hello' based on Country Clicked 

    $('#displayConverted').text(JSON.stringify(response.hello));

    console.log(helloUrl);
    console.log(response.hello);
// GET JAPANESE CHARACTERS & DISPLAY PROPER CHARACTERS      
var japhello = "こんにちは (Kon'nichiwa)"; 
    if (response.hello === "&#12371;&#12435;&#12395;&#12385;&#12399;") { 
        $('#displayConverted').html(japhello); 

};


});

    
    // こんにちは -- 'Kon'nichiwa 

});






