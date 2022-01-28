document.getElementById("name").addEventListener("input", function (e) {
  document.getElementById("res-name").innerHTML = e.target.value;
});

document.getElementById("gender").addEventListener("change", function (e) {
  document.getElementById("res-gender").innerHTML = e.target.value;
});

document.getElementById("test").addEventListener("mouseover", function (e) {
  document.getElementById("mouse-x").innerHTML = e.offsetX;

  document.getElementById("mouse-y").innerHTML = e.offsetY;
});
