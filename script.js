document.addEventListener("DOMContentLoaded", function () {
  var mybutton = document.getElementById("backToTopBtn");

  // Show and hide the button with fade-in and fade-out effects when scrolling
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      setTimeout(function () {
        mybutton.style.opacity = "1"; // Make the button visible
      }, 5); // Add a small delay for better transition effect
    } else {
      mybutton.style.opacity = "0"; // Hide the button
      setTimeout(function () {
        mybutton.style.display = "none";
      }, 300); // Delay hiding to match the transition duration
    }
  }

  // Smooth scroll to the top when the button is clicked
  mybutton.addEventListener("click", function () {
    // For modern browsers
    document.body.scrollIntoView({
      behavior: "smooth",
    });

    // For old browsers
    document.documentElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});
