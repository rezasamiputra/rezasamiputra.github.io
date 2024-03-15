// toggle button
const toggleBtn = document.querySelector(".toggle-btn");
const linkContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  linkContainer.classList.toggle("show");
});

// links
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((ele) => ele.classList.remove("active"));
    link.classList.add("active");
  });
});

// creating dynamic project card

const projectContainer = document.querySelector(".project-container");

projects.forEach((project) => {
  projectContainer.innerHTML += `
    <section class="project-card" data-tags="#all, ${project.tags}">
        <img src="assets/img/${project.image}" alt="">
        <section class="content">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">${project.tags}</span>
        </section>
    </section> 
    `;
});

// filters
const filters = document.querySelectorAll(".filter-btn");

filters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    let id = filterBtn.getAttribute("id");
    let projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      if (card.getAttribute("data-tags").includes(id)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
    filters.forEach((btn) => btn.classList.remove("active"));
    filterBtn.classList.add("active");
  });
});

// contact form
const contactBtn = document.querySelector(".contact-btn");
const firstName = document.querySelector(".first-name");
const email = document.querySelector(".email");
const hp = document.querySelector(".hp");
const psn = document.querySelector(".pesan");

contactBtn.addEventListener("click", () => {
  if (
    firstName.value.length &&
    email.value.length &&
    hp.value.length &&
    psn.value.length
  ) {
    fetch("/mail", {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        firstName: firstName.value,
        hp: hp.value,
        email: email.value,
        psn: psn.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  }
});
