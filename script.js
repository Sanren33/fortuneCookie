const fortuneCookie = document.getElementById("fortuneCookie");
const fortuneText = document.getElementById("word");
const warning = document.getElementById("warning");
const sentences = [
  "Your code will never lie",
  "S for Sheridan, also for Ctrl+S",
  "GPA isn't everything",
  "Your friend will help you get a seat",
  "You will pass the exam",
  "Don't forget your stuff in labs",
  "Take every assignment seriously",
  "Every late-night coffee is worth it",
  "Take a deep breath and go the gym",
  "You will get a good grade",
  "Internships are coming to you",
  "J-wing is your lucky place today",
  "Squirall is a sign of good luck", 
  "You will meet the one in SSU",
  "Sheridan is a good start to your life",
  "Every BRUIN is talented"]

fortuneCookie.addEventListener("click", function() {
  const lastOpenTime = localStorage.getItem("lastOpenTime");

  // Check if the user has opened a cookie today
  if (!lastOpenTime || isPast24Hours(lastOpenTime)) {
    fortuneCookie.src = "img/openedCookie.png";
    localStorage.setItem("lastOpenTime", new Date().toISOString());

    setTimeout(() => {
      generateFortune();
      fortuneText.style.display = "block";
    }, 300);
  } else {
    // Display warning if the user has already opened a cookie today
    warning.style.display = "block";
  }
});

function generateFortune() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const sentence = sentences[randomIndex];
  fortuneText.innerHTML = sentence;
}

function isPast24Hours(lastOpenTime) {
  const lastOpenDate = new Date(lastOpenTime);
  const currentTime = new Date();
  const millisecondsIn24Hours = 24 * 60 * 60 * 1000;

  return currentTime - lastOpenDate >= millisecondsIn24Hours;
}