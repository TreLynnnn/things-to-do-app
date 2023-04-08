console.log("JavaScript file connected!");

const activities = [
  {
    name: "Visit the Dallas Arboretum",
    image: "https://example.com/arboretum.jpg"
  },
  {
    name: "Explore the Dallas Museum of Art",
    image: "https://example.com/dma.jpg"
  },
  {
    name: "Shop at the Dallas Farmers Market",
    image: "https://example.com/farmers-market.jpg"
  }
];

const generateIdeaBtn = document.querySelector("#generateBtn");
const activityName = document.querySelector("#activity");
const activityImage = document.querySelector("#activityImage");

generateIdeaBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const { name, image } = activities[randomIndex];
  activityName.textContent = name;
  activityImage.setAttribute("src", image);
});