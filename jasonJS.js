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
    
    const portugueseHello = "Olá"; 
    if (response.hello === "Ol&aacute;") { 
        $('#helloDisplay').html(portugueseHello); 
    };

    const thaiHello = "สวัสดี (S̄wạs̄dī)"; 
    if (response.hello === "&#3626;&#3623;&#3633;&#3626;&#3604;&#3637;") { 
        $('#helloDisplay').html(thaiHello); 
    };

    const koreanHello = "여보세요 (yeoboseyo)"; 
    if (response.hello === "&#4306;&#4304;&#4315;&#4304;&#4320;&#4335;&#4317;&#4305;&#4304;") { 
        $('#helloDisplay').html(koreanHello); 
    };

    const hindiHello = "नमस्कार (namaskaar)"; 
    if (response.hello === "&#2344;&#2350;&#2360;&#2381;&#2340;&#2375;") { 
        $('#helloDisplay').html(hindiHello); 
    };

    const hebrewHello = "שלום"; 
    if (response.hello === "&#1513;&#1500;&#1493;&#1501;") { 
        $('#helloDisplay').html(hebrewHello); 
    };

    const greekHello = "Γεια σου"; 
    if (response.hello === "&#915;&#949;&#953;&#945; &#963;&#959;&#965;") { 
        $('#helloDisplay').html(greekHello); 
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





