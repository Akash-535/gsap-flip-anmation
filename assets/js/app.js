gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pin-section",
        start: "center 80%",
        scrub: 5,
        pin: true,
        invalidateOnRefresh: true,
    }
});
if (window.innerWidth > 769) {
    tl.fromTo(".cardOne",
        { rotationY: 0, x: 440, rotationX: 0, y: -500 },
        { rotationY: -40, duration: 2, ease: "power1.inOut", x: -100, rotationX: 10, y: -200 }
    ).fromTo(".cardOne",
        { rotationY: -40, x: -100, rotationX: 10, y: -200 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    ).fromTo(".cardTwo",
        { rotationY: 0, x: 100, y: -500, rotationX: 0 },
        { rotationY: -40, duration: 2, ease: "power1.inOut", x: 0, y: -200, rotationX: 10 }
    ).fromTo(".cardTwo",
        { rotationY: -40, x: 0, y: -200, rotationX: 10 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, y: 0, rotationX: 0 }
    ).fromTo(".cardThree",
        { rotationY: 0, x: -260, rotationX: 0, y: -500 },
        { rotationY: -40, duration: 2, ease: "power1.inOut", x: 100, rotationX: 10, y: -200 }
    ).fromTo(".cardThree",
        { rotationY: -40, x: 100, rotationX: 10, y: -200 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    ).fromTo(".cardFour",
        { rotationY: 0, x: -585, rotationX: 0, y: -500 },
        { rotationY: -40, duration: 2, ease: "power1.inOut", x: 100, rotationX: 10, y: -200 }
    ).fromTo(".cardFour",
        { rotationY: -40, x: 100, rotationX: 10, y: -200 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    );
} else {
    tl.fromTo(".cardOne",
        { rotationY: 0, x: 0, rotationX: 0, y: 0 },
        { rotationY: -20, duration: 2, ease: "power1.inOut", x: 0, rotationX: 5, y: 0 }
    ).fromTo(".cardOne",
        { rotationY: -20, x: 0, rotationX: 5, y: 0 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    );
    tl.fromTo(".cardTwo",
        { rotationY: 0, x: 0, rotationX: 0, y: 0 },
        { rotationY: -20, duration: 2, ease: "power1.inOut", x: 0, rotationX: 5, y: 0 }
    ).fromTo(".cardTwo",
        { rotationY: -20, x: 0, rotationX: 5, y: 0 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    );
    tl.fromTo(".cardThree",
        { rotationY: 0, x: 0, rotationX: 0, y: 0 },
        { rotationY: -20, duration: 2, ease: "power1.inOut", x: 0, rotationX: 5, y: 0 }
    ).fromTo(".cardThree",
        { rotationY: -20, x: 0, rotationX: 5, y: 0 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    );
    tl.fromTo(".cardFour",
        { rotationY: 0, x: 0, rotationX: 0, y: 0 },
        { rotationY: -20, duration: 2, ease: "power1.inOut", x: 0, rotationX: 5, y: 0 }
    ).fromTo(".cardFour",
        { rotationY: -20, x: 0, rotationX: 5, y: 0 },
        { rotationY: 180, duration: 2, ease: "power1.inOut", x: 0, rotationX: 0, y: 0 }
    );
}