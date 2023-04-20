var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

gsap.to(".sun", { 
    rotation: 360,
    duration: 4,
    repeat: -1,
    ease: "none",
  });