// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navBG a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navBG a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
    darkToggle.classList.add("active");
  } else {
    toTop.classList.remove("active");
    darkToggle.classList.remove("active");
  }
});

let darkToggle = document.querySelector("#darkToggle");
let icon = document.querySelector("#dark-icon")


darkToggle.addEventListener('click', function() {
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
  document.body.classList.toggle("dark");
});
