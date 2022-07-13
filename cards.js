const fetchPromise = fetch("https://restcountries.com/v2/all");
const main = document.getElementById("cards");
// Loading Placeholder
main.innerHTML = "<p>Loading...";
let data = "";
fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    result.map((val) => {
      data += `<div class="card">
                    <p class="name">${val.name}</p>
                    <div class="img">
                        <img src=${val.flag} alt="flag">
                    </div>
                    <div class="lang">The language is : ${val.languages[0].name}</div>
                </div>`;
    });
    main.innerHTML = data;
  });
