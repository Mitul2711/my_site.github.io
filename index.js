function myFunction(event) {
  if (event.key == 'Enter') {
    let co = confirm("Confirm to send a message!");
    if (co == 1) {
      document.getElementById("f1").action = "mailto:mitulgondaliya27@gmail.com";
    }else{
      event.preventDefault();
    }
  }
}



var typed = new Typed(".typing",{
  strings : ["Web Designer.", "Web Developer.", "Freelancer.", "Student."],
  typeSpeed : 80,
  backSpeed : 80,
});


window.addEventListener("scroll", function() {
  var homeSection = document.getElementById("home");
  if (homeSection) {
    var scrollTop = window.scrollY;
    var maxBlur = 15;
    var blurValue = (scrollTop / window.innerHeight) * maxBlur;
    homeSection.style.filter = `blur(${blurValue}px)`;
  }
});

window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  var homeSection = document.getElementById("home");

  if (homeSection) {
    var scrollTop = window.scrollY;
    var homeSectionHeight = homeSection.offsetHeight;

    if (scrollTop >= homeSectionHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});
