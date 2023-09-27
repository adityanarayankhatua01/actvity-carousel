import teamsData from "./data.js";
// console.log(teamsData);

const teamPillsContainerId = "teams-container";
const container = document.getElementById("team-content-container");
// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {}
const appendpill = document.getElementById("teams-container");
teamsData.forEach((e) => {
  const builtpill = document.createElement("div");
  builtpill.innerHTML = `<div class="card m-2">
  <div id="${e.id}" class="card-body">${e.name}</div>
</div>`;
  appendpill.appendChild(builtpill);
});
displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  // console.log(e.target);
  const getteamid = e.target.id;
  const getteam = teamsData.find((t) => t.id === getteamid);
  const getImageUrl = getteam.images;
  // console.log(getteam.images);
  container.innerHTML = `<div id="carouselExampleControls" class="carousel slide   border border-1  border-danger " data-bs-ride="carousel">
  <div class="carousel-inner"  id="displayimage">

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
  const getdisplay = document.getElementById("displayimage");
  // console.log(getImageUrl);
  getImageUrl.forEach((e, i) => {
    const creatediv = document.createElement("div");
    i === 0
      ? creatediv.classList.add("carousel-item", "h-100", "active")
      : creatediv.classList.add("carousel-item", "h-100");

    creatediv.innerHTML = `<img src="${e}" class="d-block w-100 h-100"/>`;
    getdisplay.appendChild(creatediv);
  });
});
