// Getting helloSalut API 

let languageCode;

// Function to change to proper languageCode based on country clicked
$(".item").click(function() { 

    languageCode = $(this).attr('class').split(" ")[0];

    let helloUrl = "https://fourtonfish.com/hellosalut/?lang=" + languageCode; 

    $.ajax({
    url: helloUrl,
    method: 'GET'
    }).then(function(response) { 
        
// Displaying 'Hello' based on Country Clicked 

    $('#helloDisplay').text(response.hello);

// GET JAPANESE CHARACTERS & DISPLAY PROPER CHARACTERS      
    const japaneseHello = "こんにちは (Kon'nichiwa)"; 
    if (response.hello === "&#12371;&#12435;&#12395;&#12385;&#12399;") { 
        $('#helloDisplay').html(japaneseHello); 
    };

    const polishHello = "Cześć";
    if (response.hello === "Cze&#347;&#263;") { 
        $('#helloDisplay').html(polishHello);
    };

    const russianHello = "Здравствуйте (Zdravstvuyte)";
    if (response.hello === "&#1087;&#1088;&#1080;&#1074;&#1077;&#1090;") { 
        $('#helloDisplay').html(russianHello);
    };

    const italianHello = "Ciao"; 
    if (response.hello === "Ci&agrave;o") { 
        $('#helloDisplay').html(italianHello); 
    };

    const chineseHello = "你好 (Nǐ hǎo)"; 
    if (response.hello === "&#20320;&#22909;") { 
        $('#helloDisplay').html(chineseHello); 
    };

    const icelandicHello = "Halló"; 
    if (response.hello === "H&aelig;") { 
        $('#helloDisplay').html(icelandicHello); 
    };
    
});
});

// Countryflag.io API (for flag) "JP" = JAPAN || "FR" = FRANCE  || "US" = USA  || "GB" = UNITED KINGDOM

// countryCode = "JP";
$(".item").click(function() { 
$('#flagPic').empty() 
    let countryCode = $(this).attr("flag");
    let flags = "<img class= 'flagSize' src=https://www.countryflags.io/" + countryCode + "/flat/64.png>"

    $('#flagPic').prepend(flags);
}); 





