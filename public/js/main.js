console.log("JavaScript file connected!");

const thingsToDo = [
  "Visit the Dallas Museum of Art",
  "Explore the Dallas Arboretum and Botanical Garden",
  "Experience the Sixth Floor Museum at Dealey Plaza",
  "Enjoy a concert at the American Airlines Center",
  "Go on a food tour in Deep Ellum",
  "Shop at the Galleria Dallas",
  "Watch a movie at the Alamo Drafthouse Cinema",
  "Take a stroll at the Katy Trail",
  "Visit the Dallas World Aquarium",
  "Go on a Segway tour of Dallas"
];

const generateIdeaBtn = document.getElementById("generate-idea-btn");
const idea = document.getElementById("idea");

generateIdeaBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * thingsToDo.length);
  idea.innerHTML = thingsToDo[randomIndex];
});



// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

//Live time and date displayed to DOM
// `use strict`;
// function refreshTime() {
//   const timeDisplay = document.getElementById("dateTime");
//   const dateString = new Date().toLocaleString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
// }
//   setInterval(refreshTime, 1000);

