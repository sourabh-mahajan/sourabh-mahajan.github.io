// GSAP Scroll Animations
gsap.from("#about", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  }
});

gsap.from("#skills", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  }
});

gsap.from("#projects", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#projects",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  }
});

gsap.from("#contact", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#contact",
    start