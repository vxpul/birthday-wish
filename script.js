function showSurprise() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "flex";
}
function cutCake() {
  document.getElementById("cakeMessage").innerText = "🎂 Cake is cut! 🎂";
  setTimeout(() => {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "flex";
  }, 3000);
}