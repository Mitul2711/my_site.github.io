function myFunction(event) {
  if (event.keyCode === 13) { // Check if the Enter key was pressed
    // Get the value of the input field
    var input = document.getElementById("ghost-input").value;

    // Make an HTTP request to your server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/send-email", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Prepare the data to be sent in the request body
    var data = JSON.stringify({
      to: "mitulgondaliya27@gmail.com",
      subject: "Email Subject",
      message: input
    });

    // Handle the server's response
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("Email sent successfully");
        // Optionally, display a success message to the user
      }
    };

    // Send the request
    xhr.send(data);

    // Clear the input field
    document.getElementById("ghost-input").value = "";
  }
}

function myFunction(event) {
  if (event.key === 'Enter') {
    let co = confirm("Confirm to send a message!");
    if (co) {
      document.getElementById("ghost-input").action = "mailto:mitulgondaliya27@gmail.com";
    } else {
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



// edit by jbodn
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



//enter element in site enimation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show')
      }

  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//ghost input feald

const input = document.getElementById('ghost-input');
const bubble = document.getElementById('ghost-bubble');

const mouth = document.querySelector('.ghost__mouth');

input.onkeydown = e => {
  if (e.keyCode == 13) {
    bubble.innerText = e.target.value;
    e.target.value = '';

    // mouth chatter
    let i = 0;
    if (mouthChatter) clearInterval(mouthChatter);

    const mouthChatter = setInterval(() => {
      mouth.classList.toggle('ghost__mouth--open');
      if (i === 6) clearInterval(mouthChatter);
      i++;
    }, 300);
  }
};


