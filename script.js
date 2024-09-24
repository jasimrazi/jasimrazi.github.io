// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

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
let icon = document.querySelector("#dark-icon");

darkToggle.addEventListener("click", function () {
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

// Functionality for the rocket emoji
$(document).ready(function () {
  const emojis = ["🚀", "✨", "🌟", "🌈", "🎉", "🛸"]; // Array of emojis
  const rocket = $("#rocket");

  // Function to handle rocket click
  rocket.on("click", function () {
    // Fade out the current emoji
    $(this).addClass("fade-out");

    // Randomize emoji after fade out completes
    setTimeout(() => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      $(this).text(randomEmoji); // Change the emoji

      // Fade in the new emoji
      $(this).removeClass("fade-out").addClass("fade-in");

      // Remove fade-in class after animation ends
      setTimeout(() => {
        $(this).removeClass("fade-in");
      }, 500); // Duration should match your CSS animation duration
    }, 500); // Delay to allow the fade-out animation to complete
  });
});

$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzpT6Naf24uX_WAveGLWJwxgWc36ipyKYdQGVnx92HdRUrlPSAOy8lVWsqLwzvwdK6l/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Message Sent");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});
