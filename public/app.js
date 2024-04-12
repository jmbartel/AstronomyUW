// Sample officer data (replace with Firestore data)
let officersData = [
  {
    name: "John Doe",
    title: "President",
    year: "Senior",
    major: "Astronomy",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Smith",
    title: "Vice President",
    year: "Junior",
    major: "Physics",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

let officersContainer = document.getElementById("officers-container");

officersData.forEach((officer) => {
  let card = document.createElement("div");
  card.className = "officer-card columns";

  card.innerHTML = `<div class="column is-one-third"><figure class="image"><img class="officer-image" src="placeholder-image.jpg" alt="${officer.name}"></figure></div><div class="officer-info column"><h2 class="title is-4 has-text-danger-dark is-bold">${officer.name}</h2><h3 class="subtitle is-5">${officer.title}</h3><p><strong class="has-text-danger-dark">Year: </strong> ${officer.year}</p><p><strong class="has-text-danger-dark">Major: </strong>${officer.major}</p><p>${officer.bio}</p></div>`;

  officersContainer.appendChild(card);
});
