let constraint = 45;
document.addEventListener("mousemove", (e) => {
  e.preventDefault();

  mousePosition = {
    x: e.clientX,
    y: e.clientY,
  };
  let box = document.getElementById("aboutmain");
  let boxBoundingRect = box.getBoundingClientRect();
  let boxCenter = {
    x: boxBoundingRect.left + boxBoundingRect.width / 2,
    y: boxBoundingRect.top + boxBoundingRect.height / 2,
  };

  box.style.transform =
    "perspective(500px)" +
    `rotateY(${(e.x - boxCenter.x - boxBoundingRect.width / 2) / constraint}deg)` +
    `rotateX(${-(e.y - boxCenter.y - boxBoundingRect.height / 2) / constraint}deg)`;
});
