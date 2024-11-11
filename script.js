const { technologies, hearted, projects, tieredProjects, passions } = copy;

const addEventListeners = () => {
  const closeDrawerContainer = document.getElementById("cpd");
  closeDrawerContainer.addEventListener("click", () => closeDrawer());
  document.getElementById("nav-menu").addEventListener("click", () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
  });
  document.getElementById("nav").childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      const nav = document.getElementById("nav");
      nav.classList.remove("open");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
};


const onLoad = () => {
  appendTags();
  appendProjects();
  addEventListeners();
  appendPassions();
};

const appendTags = () => {
  const container = document.getElementById("tech-tags-container");
  technologies.sort().forEach((tech) => {
    const techTag = document.createElement("div");
    techTag.classList.add("tech-tag");
    techTag.textContent = tech;
    container.appendChild(techTag);
    if (hearted.includes(tech)) {
      const heart = document.createElement("span");
      heart.textContent = "❤️";
      techTag.appendChild(heart);
    }
  });
};

const appendPassions = () => {
  const container = document.getElementById("passions");

  passions.map((passion) => {
    const passionContainer = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const name = document.createElement("h3");

    passionContainer.classList.add("passion");
    passionContainer.classList.add("closed");
    name.textContent = passion.name;
    span.appendChild(name);
    const chevron = document.createElement("span");
    chevron.innerHTML = heartEmojiHtml;
    span.appendChild(chevron);
    container.appendChild(passionContainer);
    contentContainer = document.createElement("span");
    p.innerText = passion.content;
    contentContainer.classList.add("passion-content");
    contentContainer.appendChild(p);
    passionContainer.appendChild(span);
    passionContainer.appendChild(contentContainer);
    passionContainer.addEventListener("click", () => {
      // Check if has class name 'closed' if so then remove it and add "open" if so and then add the content to the container
      const isClosed = passionContainer.classList.contains("closed");
      if (isClosed) {
        passionContainer.classList.remove("closed");
        passionContainer.classList.add("open");
        // contentContainer.style.display = 'visible'
      } else {
        passionContainer.classList.remove("open");
        passionContainer.classList.add("closed");
        // contentContainer.style.display = 'none'
      }
    });
  });
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const appendProjectToContainer = (container, project) => {
  if (!projects[project]) return;
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-thumbnail");
  const title = document.createElement("h4");
  title.textContent = projects[project].title;
  const image = document.createElement("img");
  image.src = `./images/${projects[project].img}`;
  if (projects[project].imgStyleProps) {
    Object.entries(projects[project].imgStyleProps).map(([key, value]) => {
      image.style[key] = value;
    });
  }
  projectDiv.appendChild(image);
  projectDiv.appendChild(title);
  container.appendChild(projectDiv);
  projectDiv.addEventListener("click", () => displayDrawer(project));
  projectDiv.style.transform = `rotate(${
    Math.random() > 0.5 ? getRandomNumber(18) : -getRandomNumber(18)
  }deg)`;
};

const displayDrawer = (projectKey) => {
  const drawer = document.getElementById("pd");
  drawer.classList.remove("closed");
  drawer.classList.add("open");
  const span = document.createElement("span");
  span.innerText = "Project title";
  displayProjectInDrawer(projectKey);
};

const displayProjectInDrawer = (projectKey) => {
  const container = document.getElementById("pdcc");

  // Append project title to container
  const title = document.createElement("h2");
  title.innerText = projects[projectKey].title;
  // append carousel container to container
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carousel-container");
  const img = document.createElement("img");
  createCarousel(
    carouselContainer,
    projects[projectKey].images.map(
      (img) => `./images/${img.source}.${img?.type ?? "png"}`
    )
  );

  carouselContainer.appendChild(img);
  // append description to container
  const description = document.createElement("p");
  description.innerText = projects[projectKey].description;

  // append technologies to container
  const technologies = document.createElement("div");
  technologies.classList.add("technologies");
  projects[projectKey].technologies.forEach((tech) => {
    const techTag = document.createElement("div");
    techTag.classList.add("tech-tag");
    techTag.innerText = tech;
    technologies.appendChild(techTag);
  });

  container.appendChild(title);
  container.appendChild(carouselContainer);
  container.appendChild(description);
  container.appendChild(technologies);
};

const closeDrawer = () => {
  const contentContainer = document.getElementById("pdcc");
  contentContainer.innerHTML = "";
  const drawer = document.getElementById("pd");
  drawer.classList.remove("open");
  drawer.classList.add("closed");
};

const appendProjects = () => {
  const juniorContainer = document.getElementById("jp");
  const intermediateContainer = document.getElementById("ip");
  const advancedContainer = document.getElementById("ap");

  tieredProjects.junior.forEach((project) => {
    appendProjectToContainer(juniorContainer, project);
  });

  tieredProjects.intermediate.forEach((project) => {
    appendProjectToContainer(intermediateContainer, project);
  });

  tieredProjects.advanced.forEach((project) => {
    appendProjectToContainer(advancedContainer, project);
  });
};
window.addEventListener("load", onLoad);

function createCarousel(container, images) {
  // Clear the container
  container.innerHTML = "";

  // Create the carousel wrapper
  const carouselWrapper = document.createElement("div");
  carouselWrapper.className = "carousel-wrapper";

  // Create the modal for the carousel
  const modal = document.createElement("div");
  modal.className = "carousel-modal";

  // Carousel content
  const carouselContent = document.createElement("div");
  carouselContent.className = "carousel-content";

  // If only one image, just display it
  if (images.length === 1) {
    const img = document.createElement("img");
    img.src = images[0];
    img.className = "carousel-image";
    carouselContent.appendChild(img);
  } else {
    // Create the carousel images
    images.forEach((imageSrc, index) => {
      if (!imageSrc) return;
      const container = document.createElement("div");
      const img = document.createElement("img");
      img.src = imageSrc;
      img.className = "carousel-image";
      container.className = "carousel-image-container";
      container.style.left = `${index * 100}%`; // Arrange images in a row
      container.appendChild(img);
      carouselContent.appendChild(container);
      if (index === 0) {
        container.style.position = "absolute";
        container.style.opacity = 1;
      }
    });

    // Navigation buttons
    const prevButton = document.createElement("button");
    prevButton.className = "carousel-nav prev";
    prevButton.innerHTML = "&#10094;"; // Left arrow

    const nextButton = document.createElement("button");
    nextButton.className = "carousel-nav next";
    nextButton.innerHTML = "&#10095;"; // Right arrow

    let currentIndex = 0;

    // Function to update carousel position
    const updateCarousel = (index) => {
      currentIndex = index;
      const images = document.querySelectorAll(".carousel-image-container");
      images.forEach((img, i) => {
        img.style.left = `${(i - currentIndex) * 100}%`;
        img.style.position = i === currentIndex ? "absolute" : "relative";
        img.style.opacity = i === currentIndex ? 1 : 0;
      });
    };

    // Button functionality
    prevButton.onclick = () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      updateCarousel(currentIndex);
    };

    nextButton.onclick = () => {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      updateCarousel(currentIndex);
    };

    modal.appendChild(prevButton);
    modal.appendChild(nextButton);
    updateCarousel(currentIndex);
  }

  modal.appendChild(carouselContent);
  carouselWrapper.appendChild(modal);
  container.appendChild(carouselWrapper);
}
