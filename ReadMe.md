# Currency Exchange App 

## Contributors

[Victoria Kaszuba](https://github.com/vkaszuba)
  - HTML
  - CSS
  - Semantic UI
  - User Interface

[Marcus Young](https://github.com/DMarcusYoung)
  - JavaScript
  - jQuery
  - Rates API
  - Moment.js

[Jason Taylor](https://github.com/Jwhitemocha)
  - JavaScript
  - jQuery
  - HelloSalut API
  - Flag API

## Description

A currency exchange rate app, providing live conversion rates for various countries based on the users own native currency. Designed with most commonly converted currencies in mind, so the user can find the information they're searching for as efficiently as possible. Basically, an app to best prepare you for your upcoming travel plans!

## Features

**Main Page**
- Application loads with a modal asking for your native currency. Upon selection, this information is displayed at the top of the page. If native currency change is desired, simply click on it and the selection modal will once again pop up.
- "Convert by Currency" section is populated with most common currencies used, as well as currencies that share the same currency symbol. This allows users to quickly locate the conversion they are searching for.
- "Additional Currencies" is a dropdown at the bottom of the page, populated with the remaining currency exchange rates available. Countries listed in the above section are not also listed here, to avoid clutter. The idea is "If the user didn't locate what they are searching for in the primary section, why would they need to see that information repeated in this list?"

**Conversion Page**
- Once a conversion rate is selected, a second modal appears with both your native currency and the desired conversion currency. Conversion is set up with a 1:X ratio.
- At the top of this modal is a heading, displaying the translation for "hello" in the users chosen converted language. Now you know at least one new word to try during your travels!
- Custom number feilds are provided, so the user can input any amount of their native currency, to see how much money they'll attain in the conversion.
- Last weeks currency rates are displayed at the bottom, so the user can see if they are getting a beneficial current exchange rate, or if they should wait for the rate to grow.
- The flag associated with the chosen conversion country is also displayed, for further location information. Must make sure you're in the right country, and to not vote for the wrong soccer team while there!

## Technologies

**Languages** 
- HTML 
- CSS
- Javascript
- Jquery

**Frameworks** 
- Semantic UI 
- Moment.js

**API's** 
- [Currency Exchange Rates](http://ratesapi.io/)
- ["Hello" Translation](https://fourtonfish.com/hellosalut/hello/)
- [Country Flags](https://www.countryflags.io/)