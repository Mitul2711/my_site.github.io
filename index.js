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
  strings : ["Web Designer", "Web Developer", "Freelancer", "Student"],
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




function show(){
  document.querySelector('.hamburger').classList.toggle('open')
  document.querySelector('.navigation').classList.toggle('active')
}


//download cv

function downloadCV() {
  var link = document.createElement('a');
  link.href = 'port.pdf'; // Replace with the actual URL of your resume file
  link.download = 'Mitulgondaliya_CV.pdf'; // Replace with the desired file name 
  link.click();
}

//changable title

let docTitle = document.title;
let alertShow = false;

window.addEventListener("blur", () => {
    document.title = "Hey! See You Soon :(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
  clearInterval(intervalId);
});


// load animation

var loader = document.getElementById("prealoade");

window.addEventListener("load", function(){
loader.style.display = "none";

})