function countriesFlagName() {

  /* Need the provide API URL to get all countries */
  //fetch('https://restcountries.com/v3.1/all')

  return fetch('https://restcountries.com/v3.1/all')

    //fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()
    .then(countries => countries.json())
    // Here is where you'll need to add into the DOM all the countries received from API 
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements

    .then(countriesObj => {
      const countriesNode = document.getElementById("countries")
      const cardTemplate = data => {
        for (let i = 0; i < data.length; i++) {
          `<div class="card">
                    <img id="flag-image" src="${data[i].flags.png}" alt="${data[i].flags.alt}"/>
                    <h1 class="center">${(data[i].name.common)}</h1>
                  </div>`;
          countriesNode.appendChild.cardTemplate
        }
        countriesNode.innerHTML += cardTemplate


      }

    });

} 
