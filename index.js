document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then((res) => res.json())
    .then((projects) => {
      const container = document.getElementById("project-info");

      projects.map((project) => {
        const card = document.createElement("div");
        card.className =
          "lg:w-1/4 mb-10 px-4 py-4 shadow-2xl shadow-sky-300 bg-blue-900 rounded-lg";

        const links = project.link ? project.link : "#";

        card.innerHTML = `
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src=${project.img} alt="blog">
                  <div class="p-2 pt-4 flex justify-around items-center">
                    <a href = ${links}
                     class="text-indigo-500 inline-flex items-center" target="_blank">🚀 Live Project </a>
                    <a href = ${project.GitHub_Link} class="text-indigo-500 inline-flex items-center" target="_blank">💻 GitHub Link </a>
                  </div>
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-white mb-3">Tech Stack : </h1>
                    <h2 class=" text-sm title-font text-white mb-2 pb-4 font-bold">${project.techStack}</h2>
                    <p class="leading-relaxed mb-3">${project.description}</p>
                  </div>
                  
                </div>


            `;
        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Error loading projects:", err));

  fetch("Achievements.json")
    .then((res) => res.json())
    .then((Achievements) => {
      const container = document.getElementById("achievement-info");

      Achievements.map((Achievement) => {
        const card = document.createElement("div");
        card.className = "p-4 lg:w-1/4";

        card.innerHTML = `
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 rounded-lg overflow-hidden text-center relative">
              <h1 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${Achievement.title}</h2>
              <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${Achievement.Rank}<small>st</small> Place </h1>
              <p class="leading-relaxed mb-3">${Achievement.description}</p>
              <a class="text-indigo-500 inline-flex items-center " href=${Achievement.link}>Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          `;

        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Error loading projects:", err));

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  // Initialize menu position
  menu.style.left = "-100%";

  toggle.addEventListener("click", function () {
    if (menu.style.left === "0px") {
      // Menu is currently visible, hide it
      menu.style.left = "-100%";
    } else {
      // Menu is currently hidden, show it
      menu.style.left = "0px";
    }
  });
});
