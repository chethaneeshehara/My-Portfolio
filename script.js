```javascript
// ============================================================
// CHETHANEE SHEHARA - PORTFOLIO JAVASCRIPT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // SELECT ELEMENTS
  // ==========================================================

  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  const backToTop = document.querySelector(".back-to-top");


  // ==========================================================
  // MOBILE MENU
  // ==========================================================

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("open");

      const icon = menuToggle.querySelector("i");

      if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

      } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      }

    });

  }


  // ==========================================================
  // CLOSE MOBILE MENU WHEN LINK IS CLICKED
  // ==========================================================

  navItems.forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      const icon = menuToggle?.querySelector("i");

      if (icon) {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      }

    });

  });


  // ==========================================================
  // NAVBAR SCROLL EFFECT
  // ==========================================================

  function handleNavbarScroll() {

    if (!header) return;

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener("scroll", handleNavbarScroll);

  handleNavbarScroll();


  // ==========================================================
  // ACTIVE NAVIGATION
  // ==========================================================

  function updateActiveNav() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {

        currentSection = section.getAttribute("id");

      }

    });


    navItems.forEach((link) => {

      link.classList.remove("active");

      const linkTarget = link.getAttribute("href");

      if (linkTarget === `#${currentSection}`) {

        link.classList.add("active");

      }

    });

  }

  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();


  // ==========================================================
  // SCROLL REVEAL ANIMATION
  // ==========================================================

  const revealElements = document.querySelectorAll(
    `
    .section-title,
    .about-content,
    .education-card,
    .skill-card,
    .project-card,
    .certificate-card,
    .achievement-card,
    .contact-content,
    .contact-socials
    `
  );


  revealElements.forEach((element) => {

    element.classList.add("reveal");

  });


  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });


  // ==========================================================
  // BACK TO TOP
  // ==========================================================

  if (backToTop) {

    backToTop.addEventListener("click", (event) => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  // ==========================================================
  // SHOW / HIDE BACK TO TOP BUTTON
  // ==========================================================

  function handleBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

      backToTop.style.opacity = "1";
      backToTop.style.visibility = "visible";
      backToTop.style.transform = "translateY(0)";

    } else {

      backToTop.style.opacity = "0";
      backToTop.style.visibility = "hidden";
      backToTop.style.transform = "translateY(10px)";

    }

  }

  window.addEventListener("scroll", handleBackToTop);

  handleBackToTop();


  // ==========================================================
  // CURRENT YEAR
  // ==========================================================

  const footerText = document.querySelector("footer p");

  if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
      `© ${currentYear} Chethanee Shehara Pathinayake. All Rights Reserved.`;

  }


  // ==========================================================
  // EXTERNAL LINKS
  // ==========================================================

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach((link) => {

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


  // ==========================================================
  // BUTTON CLICK EFFECT
  // ==========================================================

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      button.classList.add("clicked");

      setTimeout(() => {

        button.classList.remove("clicked");

      }, 200);

    });

  });


  // ==========================================================
  // PROJECT CARD STAGGER ANIMATION
  // ==========================================================

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

  });


  // ==========================================================
  // SKILL CARD STAGGER ANIMATION
  // ==========================================================

  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

  });


  // ==========================================================
  // CERTIFICATE CARD STAGGER ANIMATION
  // ==========================================================

  const certificateCards =
    document.querySelectorAll(".certificate-card");

  certificateCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

  });


  // ==========================================================
  // ACHIEVEMENT CARD STAGGER ANIMATION
  // ==========================================================

  const achievementCards =
    document.querySelectorAll(".achievement-card");

  achievementCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.1}s`;

  });


  // ==========================================================
  // ESC KEY - CLOSE MOBILE MENU
  // ==========================================================

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (navLinks) {

        navLinks.classList.remove("open");

      }

      const icon = menuToggle?.querySelector("i");

      if (icon) {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      }

    }

  });


  // ==========================================================
  // PREVENT BROKEN IMAGE EXPERIENCE
  // ==========================================================

  const profileImage =
    document.querySelector(".profile-pic");

  if (profileImage) {

    profileImage.addEventListener("error", () => {

      profileImage.style.display = "none";

    });

  }


  // ==========================================================
  // PAGE LOADED
  // ==========================================================

  document.body.classList.add("loaded");

});
```
