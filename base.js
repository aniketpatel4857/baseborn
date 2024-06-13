var tl=gsap.timeline()


tl.to("#circle-cover",{
    height:"0",
    delay:1,
    duration:1.2,
    // borderRadius:""
})

tl.to("#circle-cover",{
    height:"0",
    // delay:1,
    duration:1.2,
    // borderRadius:""
})
tl.to("#circle",{
    opacity:0,
    // delay:2
})
tl.to("#circle",{
    display:"none",
    // delay:3
})

tl.to("#loader",{
    height:"0",
    duration:1,
    // delay:2,
})

tl.to("#big-text-cover div",{
    height:"0",
    stagger:0.2,
    duration:1.2,
    // delay:1,
  
  },"annu")
tl.to("#center-right-cover",{
    height:"0",
    duration:1.5,

},"annu")


tl.to("#center-right",{
    y:"-550vh",
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        // markers:true,
        start:"top 0%",
        end:"top -500%",
        scrub:1,
        pin:true
    }
})