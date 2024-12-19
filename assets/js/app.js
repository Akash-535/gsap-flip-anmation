gsap.fromTo("#boxOne",{
    x:-window.innerWidth,
    backgroundColor:"yellow",
    borderRadius:"99",
  },{
    x:window.innerWidth,
    backgroundColor:"blue",
    repeat:-1,
    duration:3,
    ease:'linear',
    rotate:360,
})
gsap.registerPlugin(ScrollTrigger);

gsap.from("#boxTwo", {
  x: -1140,
  borderRadius: "99",
  backgroundColor: "blue",
  duration: 3,
  ease: "linear",
  rotate: 360,
  scrollTrigger: {
    trigger: "#boxTwo",
    markers: true,
    start: "top center",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});