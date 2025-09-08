document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
      .then(res => res.json())
      .then(projects => {
        const container = document.getElementById("project-info");

        projects.map(project => {
            const card = document.createElement("div");
            card.className = "lg:w-1/4 mb-10 px-4 py-4 shadow-2xl shadow-sky-300";

            card.innerHTML = `
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-contain object-center h-full w-full " src=${project.img}>
                </div>
                <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">${project.title}</h2>
                <p class="leading-relaxed text-base">
                  <ul>
                    <li class="font-bold text-xl m-4">Technology :</li>
                    <li class="text-md font-bold">${project.techStack}</li>
                  </ul>
                </p>
                <a href=${project.link}
                  target="_blank"
                >
                  <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" >Click Here</button>
                </a>  
            `
            container.appendChild(card);
        });
      })
      .catch(err => console.error("Error loading projects:", err));
      
    fetch("Achievements.json")
      .then(res => res.json())
      .then(Achievements => {
        const container = document.getElementById('achievement-info');

        Achievements.map(Achievement => {
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
          `

          container.appendChild(card);
        });
      })
    .catch(err => console.error("Error loading projects:", err));
})
