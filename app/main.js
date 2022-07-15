const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgApi = "https://image.tmdb.org/t/p/w1280";
const apiSearch =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const el = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("h3");

        text.innerHTML = `Title: ${element.title}`;
        image.src = imgApi + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;

  if (searchTerm) {
    showMovies(apiSearch + searchTerm);
    search.value = "";
  }
});




// const elForm = document.querySelector(".js-form") 
// const elInput = document.querySelector(".js-input")
// const elBtn = document.querySelector(".js-btn") 
// const elList = document.querySelector(".films-list") 
// const apiUrl =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const imgApi = "https://image.tmdb.org/t/p/w1280";
// const apiSearch =
//   "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// elBtn.addEventListener("click" , function(e){
//   e.preventDefault() 
//   console.log(elInput.value);
//   func()
// })



// showMovies(apiUrl);
// function showMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then(function (data) {
//       console.log(data.results);
//       data.results.forEach((element) => {
//         const ellisttitle = document.createElement("li");
//         const image = document.createElement("img");
//         const text = document.createElement("h3");

//         text.innerHTML = `Title: ${element.title}` ;
//         image.src = imgApi + element.poster_path;
//         ellisttitle.appendChild(image);
//         el.appendChild(text);
//         main.appendChild(el);
//       });
//     });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   main.innerHTML = "";

//   const searchTerm = search.value;

//   if (searchTerm) {
//     showMovies(apiSearch + searchTerm);
//     search.value = "";
//   }
// });

// const getTodos = (array, node) => {
//   console.log(array);

//   array.forEach(e => {
//     console.log(e);
//   })
  
// }

// async function func() {
//   const response = await fetch(`https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1`)
//   const data = await response.json();
//   console.log(data);
//   getTodos(data, elList)
// }




//98604f92