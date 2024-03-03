

fetch('https://restcountries.com/v3.1/all')


  .then(countries => countries.json())

  .then(data => {

    const countriesNode = document.getElementById("countries")
   
      for (let i = 0; i < data.length; i++) {
        countriesNode.innerHTML += `<div class="card">
                    <img id="flag-image" src="${data[i].flags.png}" alt="${data[i].flags.alt}"/>
                    <h1 class="center">${(data[i].name.common)}</h1>
                  </div>`;

      }


    }
    


  

  );





