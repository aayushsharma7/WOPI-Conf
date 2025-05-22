document.addEventListener("DOMContentLoaded", () => {
  const navItems = [
    "Home",
    "about",
    "dates",
    "speakers",
    "schedule",
    "registration",
    "venue",
    "sponsors",
    "faq",
    "contact",
  ];

  const desktopNav = document.getElementById("nav-links-desktop");
  const mobileNav = document.getElementById("nav-links-mobile");

  // Generate navigation links
  navItems.forEach((id) => {
    const linkHTML = `<a href="#${id}" class="nav-link">${capitalize(id)}</a>`;
    desktopNav.innerHTML += linkHTML;
    mobileNav.innerHTML += linkHTML;
  });

  // Capitalize function
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const svgIcon = menuBtn.querySelector("svg");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu-hidden");
    svgIcon.innerHTML = menu.classList.contains("mobile-menu-hidden")
      ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />'
      : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    menuBtn.setAttribute(
      "aria-label",
      menu.classList.contains("mobile-menu-hidden") ? "Open menu" : "Close menu"
    );
  });

  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menu.classList.add("mobile-menu-hidden");
      svgIcon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      menuBtn.setAttribute("aria-label", "Open menu");
    }
  });

  // Slideshow
  let slideIndex = 0;
  const slideCategories = document.querySelectorAll(".slide-category");
  const dotsContainer = document.querySelector(".dots-container");
  const tabs = document.querySelectorAll(".tab");

  function showSlides(index, category) {
    const slides = document.querySelectorAll(`#${category}-slides .slide`);
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");

    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function updateDots(category) {
    dotsContainer.innerHTML = "";
    const slides = document.querySelectorAll(`#${category}-slides .slide`);
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.addEventListener("click", () => showSlides(i, category));
      dotsContainer.appendChild(dot);
    });
  }

  function startSlideshow(category) {
    clearInterval(window.slideInterval);
    window.slideInterval = setInterval(() => {
      const slides = document.querySelectorAll(`#${category}-slides .slide`);
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides(slideIndex, category);
    }, 3000);
  }

  document.querySelector(".next").addEventListener("click", () => {
    const slides = document.querySelectorAll(
      `#${currentCategory}-slides .slide`
    );
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex, currentCategory);
  });

  // Initialize slideshow
  let currentCategory = "conference";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentCategory = tab.getAttribute("data-category");

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      slideCategories.forEach((category) => {
        category.classList.remove("active");
        if (category.id === `${currentCategory}-slides`) {
          category.classList.add("active");
        }
      });

      slideIndex = 0;
      updateDots(currentCategory);
      showSlides(slideIndex, currentCategory);
      startSlideshow(currentCategory);
    });
  });

  updateDots(currentCategory);
  showSlides(slideIndex, currentCategory);
  startSlideshow(currentCategory);

  // Alpine.js fallback
  if (typeof Alpine === "undefined") {
    const tabButtons = document.querySelectorAll("[x-data] button");
    const tabPanels = document.querySelectorAll("[x-show]");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetTab = this.getAttribute("@click").split("'")[1];

        tabButtons.forEach((btn) => {
          btn.classList.toggle(
            "active",
            btn.getAttribute("@click").includes(targetTab)
          );
        });

        tabPanels.forEach((panel) => {
          panel.classList.toggle(
            "hidden",
            !panel.getAttribute("x-show").includes(targetTab)
          );
        });
      });
    });
  }

  emailjs.init({ publicKey: "vq6UY47u87bfIjpHD" });

  // Form submission handler
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_6t10hrb";
    const templateID = "template_vzlqp6j";

    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      inquiry_type: form["inquiry-type"].value,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      () => {
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        console.log("Failed to send message:", error);
      }
    );
  });
});

document.querySelector(".prev").addEventListener("click", () => {
  // const slides = document.querySelectorAll(`#${currentCategory}-slides .slide`);
  // slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.length - 1;
  // showSlides(slideIndex, currentCategory);

  const serviceID = "service_6t10hrb";
  const templateID = "template_vzlqp6j";

  const templateParams = {
    name: "Nitin",
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    () => {
      alert("Message sent successfully!");
      form.reset();
    },
    (error) => {
      console.log("Failed to send message:", error);
    }
  );
});
