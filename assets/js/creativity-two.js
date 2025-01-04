gsap.to(".cube", {
  rotationX: 360, 
  rotationY: 360,
  rotationZ: 30, 
  duration:15, 
  repeat: -1, 

});
Draggable.create(".cube", {
  type: "x,y",
      bounds: "section",
      inertia: true,
      onDrag: function () {
        let rotateX = this.y;
        let rotateY = this.x;
        gsap.to(".cube", {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: .1,})}
});