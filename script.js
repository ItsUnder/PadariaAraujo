let darkMode = localStorage.getItem("dark-mode");

window.addEventListener('scroll', function () {
  const header = document.getElementById("headerContent");
  const homeButton = document.getElementById("homeButton");
  const stickyClass = 'stickyHeader';
  if (window.scrollY > 100) {
    header.classList.add(stickyClass);
    homeButton.style.display = "block";
  } else {
    header.classList.remove(stickyClass);
    homeButton.style.display = "none";
  }
});

window.onload = function themeChecker() {
  if (darkMode === "enabled") {
    changeThemes();
    localStorage.setItem("dark-mode", "enabled");
  }
}

function changeThemes() {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
      document.body.classList.toggle("dark");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.toggle("dark");
      localStorage.setItem("dark-mode", "disabled");
    }
}
function splashScreenChecker() {
  if(!localStorage.getItem("splash-shown")) {
    splashScreen(); 
    console.log("WE")
  } else {  
    document.getElementById("splash").style.opacity = "0";
    document.getElementById("splash").style.display = "none";
    document.getElementById("content").classList.add("show-content");
  }
}
splashScreenChecker();

function splashScreen() {
setTimeout(() => {
  document.getElementById("splash").style.opacity = "0";
  localStorage.setItem("splash-shown", "yes");
  setTimeout(() => {
   document.getElementById("content").classList.add("show-content");
   document.getElementById("splash").style.display = "none";
  }, 1000);
 }, 2000);
}
