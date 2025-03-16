gsap.from("#Section1 .Nama", {
    opacity: 0,
    y: 200,
    duration: 1.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger:"#Section1 .Nama",
        scroller: "body",
        start:"top 80%",
        end:"top 50%",
        scrub: true,
        markers:true
    }

})
