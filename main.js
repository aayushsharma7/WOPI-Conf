document.addEventListener("DOMContentLoaded", () => {
  const scheduleData = {
    day1: [
      {
        time: "05:00 PM - 06:00 PM",
        activity: "Conference Registration & High Tea",
      },
      {
        time: "06:00 PM - 06:30 PM",
        activity: "Inaugural Session",
      },
      {
        time: "06:30 PM - 07:00 PM",
        activity: "Talk by Chief Guest (Kiran Bedi/Sudha Murti/Kiran Shaw)",
      },
      {
        time: "07:00 PM - 07:30 PM",
        activity: "Rangla Punjab (Cultural event)",
      },
      {
        time: "07:30 PM Onwards",
        activity: "Gala Dinner",
      },
    ],
    day2: [
      {
        time: "09:00 AM - 09:45 AM",
        activity: "Plenary Talk-1 (CSIR Director Gen/...)",
      },
      {
        time: "10:00 AM - 10:30 AM",
        activity:
          "Session I: Integrated and On-Chip Optics - Technical talk 1: Dr. Geetanjali Yadav, Dr. Manju Rani",
      },
      {
        time: "10:30 AM - 11:00 AM",
        activity:
          "Session I: Integrated and On-Chip Optics - Technical talk 2: Dr. Pratibha Singhal, Dr. Harveen Kaur",
      },
      {
        time: "11:00 AM - 11:15 AM",
        activity: "Tea Break",
      },
      {
        time: "11:15 AM - 12:15 PM",
        activity: "Workshop by Prof. Anita Mahadevan",
      },
      {
        time: "12:15 PM - 12:45 PM",
        activity:
          "Session II: Biophotonics and Optical Sensors - Technical talk 3: Dr. Sarita Aggarwal, Dr. Neetu Bhardwaj",
      },
      {
        time: "12:45 PM - 01:15 PM",
        activity:
          "Session II: Biophotonics and Optical Sensors - Technical talk 4: Dr. Ritu Soni, Dr. Anju Pandey, Dr. Jyoti K. Sharma",
      },
      {
        time: "01:30 PM - 02:30 PM",
        activity: "Lunch",
      },
      {
        time: "02:30 PM - 03:30 PM",
        activity:
          "Session III: Photonic Computing and Artificial Intelligence - Panel Discussion I: Discussing the paradigm shifts in research driven by AI",
      },
      {
        time: "03:30 PM - 04:30 PM",
        activity: "3 in 1 Thesis presentation",
      },
      {
        time: "04:30 PM - 04:45 PM",
        activity: "Tea Break",
      },
      {
        time: "05:00 PM - 07:30 PM",
        activity: "Poster Presentation-I",
      },
      {
        time: "07:30 PM Onwards",
        activity: "Dinner",
      },
    ],
    day3: [
      {
        time: "09:00 AM - 09:45 AM",
        activity: "Plenary Talk-2",
      },
      {
        time: "10:00 AM - 10:30 AM",
        activity:
          "Wellness workshop: Strength & Confidence: Building Mental & Emotional Resilience",
      },
      {
        time: "10:30 AM - 11:00 AM",
        activity:
          "Session IV: Quantum Technology and Optical Communication - Technical talk 5: Dr. Neha K. Gupta, Dr. Shubhra Bansal",
      },
      {
        time: "11:00 AM - 11:30 AM",
        activity:
          "Session IV: Quantum Technology and Optical Communication - Technical talk 6: Dr. Amrita Roy, Dr. Shubhee Sharma",
      },
      {
        time: "11:30 AM - 11:45 AM",
        activity: "Tea Break",
      },
      {
        time: "11:45 AM - 02:00 PM",
        activity: "Poster Presentation-II",
      },
      {
        time: "02:00 PM - 03:00 PM",
        activity: "Lunch",
      },
      {
        time: "03:00 PM - 03:30 PM",
        activity:
          "Session V: Optical materials and Devices - Technical talk 7: Dr. Anjali Tyagi, Dr. Jyothi Yadav",
      },
      {
        time: "03:30 PM - 04:30 PM",
        activity:
          "Panel Discussion II: Life after PhD-Navigating the research careers",
      },
      {
        time: "04:30 PM - 04:45 PM",
        activity: "Valedictory & Prize Distribution",
      },
      {
        time: "05:00 PM - 07:00 PM",
        activity: "Guided visit to Sukhna Lake & Recreational activity",
      },
      {
        time: "07:30 PM onwards",
        activity: "Dinner",
      },
    ],
  };

  function getActivityColor(activity) {
    if (activity.includes("Inaugural Session")) {
      return "bg-yellow-300";
    } else if (activity.includes("Technical talk")) {
      return "bg-pink-200";
    } else if (activity.includes("Workshop")) {
      return "bg-green-300";
    } else if (activity.includes("Panel Discussion")) {
      return "bg-yellow-200";
    } else if (activity.includes("Plenary Talk")) {
      return "bg-orange-300";
    } else if (activity.includes("Cultural event")) {
      return "bg-purple-200";
    } else if (
      activity.includes("Gala Dinner") ||
      activity.includes("Dinner")
    ) {
      return "bg-purple-200";
    } else if (activity.includes("Poster Presentation")) {
      return "bg-purple-200";
    }

    // Default color for other activities
    return "bg-gray-50";
  }

  function createSchedule(day, data) {
    const dayDiv = document.getElementsByClassName(`schedule-${day}`)[0];

    const dayContent = data
      .map((session) => {
        const colorClass = getActivityColor(session.activity);
        return `<div class="grid grid-cols-8 border-b border-gray-100">
                <div class="col-span-2 px-4 py-3 ${colorClass} font-semibold text-gray-700">
                  ${session.time}
                </div>
                <div class="col-span-6 px-4 py-3 ${colorClass}">
                  <span class="font-medium">${session.activity}</span>
                </div>
              </div>`;
      })
      .join("");

    dayDiv.innerHTML = `<div class="max-w-5xl mx-auto bg-white dark:bg-white shadow-md rounded-xl overflow-hidden">
                          ${dayContent}
                        </div>`;
  }

  for (let [day, data] of Object.entries(scheduleData)) {
    console.log(day, data);
    createSchedule(day, data);
  }

  const navItems = [
    "Home",
    "about",
    "dates",
    "speakers",
    "schedule",
    "registration",
    "venue",
    "Organisers",
    "sponsors",
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

  document.querySelector(".prev").addEventListener("click", () => {
    const slides = document.querySelectorAll(
      `#${currentCategory}-slides .slide`
    );
    slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.length - 1;
    showSlides(slideIndex, currentCategory);
  });

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

  addSlides("conference-slides", "sd", 1, 10);
  updateDots(currentCategory);
  showSlides(slideIndex, currentCategory);

  function addSlides(categoryId, imgPrefix, startIndex, endIndex) {
    let category = document.getElementById(categoryId);
    for (let i = startIndex; i <= endIndex; i++) {
      let slide = document.createElement("div");
      slide.className = "slide";

      let img = document.createElement("img");
      console.log(`images/${imgPrefix}${i}.jpeg`);
      img.src = `images/${imgPrefix}${i}.jpeg`; // Adjust this path and extension as needed
      img.alt = `Slide ${i}`;

      let caption = document.createElement("div");
      caption.className = "caption";

      let heading = document.createElement("h3");
      heading.textContent = `Slide ${i} Title`;

      let paragraph = document.createElement("p");
      paragraph.textContent = `Description for slide ${i}`;

      // caption.appendChild(heading);
      // caption.appendChild(paragraph);

      slide.appendChild(img);
      slide.appendChild(caption);
      category.appendChild(slide);
    }
  }
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

    console.log(templateParams);

    emailjs.send(serviceID, templateID, templateParams).then(
      () => {
        form.reset();
      },
      (error) => {
        console.log("Failed to send message:", error);
      }
    );
  });
});
