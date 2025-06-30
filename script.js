const players = [
  { name: "Virat Kohli", role: "Batsman", credit: 10, img: "cricket/virat-kohli.jpg" },
  { name: "Rohit Sharma", role: "Batsman", credit: 9.5 },
  { name: "Hardik Pandya", role: "All-Rounder", credit: 8 },
  { name: "Ravindra Jadeja", role: "All-Rounder", credit: 9 },
  { name: "KL Rahul", role: "Wicketkeeper", credit: 9 },
  { name: "Jasprit Bumrah", role: "Bowler", credit: 9 },
  { name: "Yuzvendra Chahal", role: "Bowler", credit: 8.5 },
  { name: "Shubman Gill", role: "Batsman", credit: 8.5 },
  { name: "Rishabh Pant", role: "Wicketkeeper", credit: 8 },
  { name: "Mohammed Shami", role: "Bowler", credit: 8 },
  { name: "Sanju Samson", role: "Wicketkeeper", credit: 8.5 },
  { name: "Player 11", role: "Wicketkeeper", credit: 10.1 },
  { name: "Player 12", role: "Batsman", credit: 7.2 },
  { name: "Player 13", role: "Bowler", credit: 8.3 },
  { name: "Player 14", role: "All-Rounder", credit: 9.4 },
  { name: "Player 15", role: "Wicketkeeper", credit: 10.0 },
  { name: "Player 16", role: "Batsman", credit: 7.1 },
  { name: "Player 17", role: "Bowler", credit: 8.2 },
  { name: "Player 18", role: "All-Rounder", credit: 9.3 },
  { name: "Player 19", role: "Wicketkeeper", credit: 10.4 },
  { name: "Player 20", role: "Batsman", credit: 7.0 },
  { name: "Player 21", role: "Bowler", credit: 8.1 },
  { name: "Player 22", role: "All-Rounder", credit: 9.2 },
  { name: "Player 23", role: "Wicketkeeper", credit: 10.3 },
  { name: "Player 24", role: "Batsman", credit: 7.4 },
  { name: "Player 25", role: "Bowler", credit: 8.0 },
  { name: "Player 26", role: "All-Rounder", credit: 9.1 },
  { name: "Player 27", role: "Wicketkeeper", credit: 10.2 },
  { name: "Player 28", role: "Batsman", credit: 7.3 },
  { name: "Player 29", role: "Bowler", credit: 8.4 },
  { name: "Player 30", role: "All-Rounder", credit: 9.0 },
  { name: "Player 31", role: "Wicketkeeper", credit: 10.1 },
  { name: "Player 32", role: "Batsman", credit: 7.2 },
  { name: "Player 33", role: "Bowler", credit: 8.3 },
  { name: "Player 34", role: "All-Rounder", credit: 9.4 },
  { name: "Player 35", role: "Wicketkeeper", credit: 10.0 },
  { name: "Player 36", role: "Batsman", credit: 7.1 },
  { name: "Player 37", role: "Bowler", credit: 8.2 },
  { name: "Player 38", role: "All-Rounder", credit: 9.3 },
  { name: "Player 39", role: "Wicketkeeper", credit: 10.4 },
  { name: "Player 40", role: "Batsman", credit: 7.0 },
  { name: "Player 41", role: "Bowler", credit: 8.1 },
  { name: "Player 42", role: "All-Rounder", credit: 9.2 },
  { name: "Player 43", role: "Wicketkeeper", credit: 10.3 },
  { name: "Player 44", role: "Batsman", credit: 7.4 },
  { name: "Player 45", role: "Bowler", credit: 8.0 },
  { name: "Player 46", role: "All-Rounder", credit: 9.1 },
  { name: "Player 47", role: "Wicketkeeper", credit: 10.2 },
  { name: "Player 48", role: "Batsman", credit: 7.3 },
  { name: "Player 49", role: "Bowler", credit: 8.4 },
  { name: "Player 50", role: "All-Rounder", credit: 9.0 },
  { name: "Player 51", role: "Wicketkeeper", credit: 10.1 },
  { name: "Player 52", role: "Batsman", credit: 7.2 },
  { name: "Player 53", role: "Bowler", credit: 8.3 },
  { name: "Player 54", role: "All-Rounder", credit: 9.4 },
  { name: "Player 55", role: "Wicketkeeper", credit: 10.0 },
  { name: "Player 56", role: "Batsman", credit: 7.1 },
  { name: "Player 57", role: "Bowler", credit: 8.2 },
  { name: "Player 58", role: "All-Rounder", credit: 9.3 },
  { name: "Player 59", role: "Wicketkeeper", credit: 10.4 },
  { name: "Player 60", role: "Batsman", credit: 7.0 },
  { name: "Player 61", role: "Bowler", credit: 8.1 },
  { name: "Player 62", role: "All-Rounder", credit: 9.2 },
  { name: "Player 63", role: "Wicketkeeper", credit: 10.3 },
  { name: "Player 64", role: "Batsman", credit: 7.4 },
  { name: "Player 65", role: "Bowler", credit: 8.0 },
  { name: "Player 66", role: "All-Rounder", credit: 9.1 },
  { name: "Player 67", role: "Wicketkeeper", credit: 10.2 },
  { name: "Player 68", role: "Batsman", credit: 7.3 },
  { name: "Player 69", role: "Bowler", credit: 8.4 },
  { name: "Player 70", role: "All-Rounder", credit: 9.0 },
  { name: "Player 71", role: "Wicketkeeper", credit: 10.1 },
  { name: "Player 72", role: "Batsman", credit: 7.2 },
  { name: "Player 73", role: "Bowler", credit: 8.3 },
  { name: "Player 74", role: "All-Rounder", credit: 9.4 },
  { name: "Player 75", role: "Wicketkeeper", credit: 10.0 },
  { name: "Player 76", role: "Batsman", credit: 7.1 },
  { name: "Player 77", role: "Bowler", credit: 8.2 },
  { name: "Player 78", role: "All-Rounder", credit: 9.3 },
  { name: "Player 79", role: "Wicketkeeper", credit: 10.4 },
  { name: "Player 80", role: "Batsman", credit: 7.0 },
  { name: "Player 81", role: "Bowler", credit: 8.1 },
  { name: "Player 82", role: "All-Rounder", credit: 9.2 },
  { name: "Player 83", role: "Wicketkeeper", credit: 10.3 },
  { name: "Player 84", role: "Batsman", credit: 7.4 },
  { name: "Player 85", role: "Bowler", credit: 8.0 },
  { name: "Player 86", role: "All-Rounder", credit: 9.1 },
  { name: "Player 87", role: "Wicketkeeper", credit: 10.2 },
  { name: "Player 88", role: "Batsman", credit: 7.3 },
  { name: "Player 89", role: "Bowler", credit: 8.4 },
  { name: "Player 90", role: "All-Rounder", credit: 9.0 },
  { name: "Player 91", role: "Wicketkeeper", credit: 10.1 },
  { name: "Player 92", role: "Batsman", credit: 7.2 },
  { name: "Player 93", role: "Bowler", credit: 8.3 },
  { name: "Player 94", role: "All-Rounder", credit: 9.4 },
  { name: "Player 95", role: "Wicketkeeper", credit: 10.0 },
  { name: "Player 96", role: "Batsman", credit: 7.1 },
  { name: "Player 97", role: "Bowler", credit: 8.2 },
  { name: "Player 98", role: "All-Rounder", credit: 9.3 },
  { name: "Player 99", role: "Wicketkeeper", credit: 10.4 },
  { name: "Player 100", role: "Batsman", credit: 7.0 },

];

let selectedPlayers = [];
let creditsLeft = 100;

const playerListDiv = document.getElementById("player-list");
const selectedTeamUl = document.getElementById("selected-team");
const creditsLeftSpan = document.getElementById("credits-left");
const playerCountSpan = document.getElementById("player-count");
const captainSelect = document.getElementById("captain-select");
const viceCaptainSelect = document.getElementById("vice-captain-select");

function renderPlayers() {
  playerListDiv.innerHTML = "";
  players.forEach((p, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="player-info">
        <img src="${p.img || 'cricket/default-player.jpg'}" alt="${p.name}" class="player-img">
        <span>${p.name} (${p.role}) - ${p.credit} cr</span>
      </div>
      <button onclick="addPlayer(${index})">Add</button>
    `;
    playerListDiv.appendChild(div);
  });
}

function addPlayer(index) {
  const player = players[index];
  if (selectedPlayers.includes(player)) return alert("Already selected!");
  if (selectedPlayers.length >= 11) return alert("Max 11 players allowed.");
  if (creditsLeft < player.credit) return alert("Not enough credits.");

  selectedPlayers.push(player);
  creditsLeft -= player.credit;
  updateSelectedTeam();
}

function removePlayer(index) {
  const player = selectedPlayers[index];
  creditsLeft += player.credit;
  selectedPlayers.splice(index, 1);
  updateSelectedTeam();
}

function updateSelectedTeam() {
  selectedTeamUl.innerHTML = "";

  selectedPlayers.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="player-info">
        <img src="${p.img || 'cricket/default-player.jpg'}" alt="${p.name}" class="player-img">
        <span>${p.name} - ${p.role} (${p.credit} cr)</span>
        <button onclick="removePlayer(${index})" class="remove-btn">Remove</button>
      </div>
    `;
    selectedTeamUl.appendChild(li);
  });

  creditsLeftSpan.textContent = creditsLeft.toFixed(1);
  playerCountSpan.textContent = selectedPlayers.length;

  renderCaptainOptions();
}


//function updateSelectedTeam() {
//  selectedTeamUl.innerHTML = "";

//  selectedPlayers.forEach((p, index) => {
//    const li = document.createElement("li");
//    li.innerHTML = `
//      <div class="player-info">
//        <img src="${p.img || 'cricket/default-player.jpg'}" alt="${p.name}" class="player-img">
//        <span>${p.name} - ${p.role} (${p.credit} cr)</span>
//      </div>
//      <button onclick="removePlayer(${index})" class="remove-btn">Remove</button>
//    `;
//    selectedTeamUl.appendChild(li);
//  });

//  creditsLeftSpan.textContent = creditsLeft.toFixed(1);
//  playerCountSpan.textContent = selectedPlayers.length;

//  renderCaptainOptions();
//}
function renderPlayers() {
  playerListDiv.innerHTML = "";
  players.forEach((p, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="player-info">
        <img src="${p.img || 'cricket/default-player.jpg'}" alt="${p.name}" class="player-img">
        <span>${p.name} (${p.role}) - ${p.credit} cr</span>
      </div>
      <button onclick="addPlayer(${index})">Add</button>
    `;

    playerListDiv.appendChild(div);
  });
}

//function renderCaptainOptions() {
// captainSelect.innerHTML = "";
// viceCaptainSelect.innerHTML = "";

// selectedPlayers.forEach(p => {
// const option1 = document.createElement("option");
//option1.value = p.name;
//  option1.textContent = p.name;
//   captainSelect.appendChild(option1);
//
//  const option2 = document.createElement("option");
//  option2.value = p.name;
//   option2.textContent = p.name;
//    viceCaptainSelect.appendChild(option2);
//  });
//}

function submitTeam() {
  if (selectedPlayers.length !== 11) {
    alert("Please select exactly 11 players.");
    return;
  }

  const captain = captainSelect.value;
  const viceCaptain = viceCaptainSelect.value;

  if (captain === viceCaptain) {
    alert("Captain and Vice-Captain cannot be the same!");
    return;
  }

  alert(`Team submitted!\nCaptain: ${captain}\nVice Captain: ${viceCaptain}`);
}

renderPlayers();
