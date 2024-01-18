var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")



document.addEventListener('mousemove', function(dets){
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
    cursorBlur.style.left = dets.x-200 +'px';
    cursorBlur.style.top = dets.y-200 +'px';
})

var h4all =  document.querySelectorAll('#nav h4');
h4all.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        cursor.style.transform = 'scale(3)';
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    element.addEventListener("mouseleave", function() {
        cursor.style.transform = 'scale(1)';
        cursor.style.border = "1px solid #95c11e";
        cursor.style.backgroundColor = "#95c11e";
    });
});


gsap.to('#nav',{
    backgroundColor :'black',
    duration:0.5,
    height:'120px',
    scrollTrigger:{
        trigger:"#nav",
        scroller:'body',
        // markers:true,
        start:"top -10%",      
        end:"top -11%",
        scrub:1
    }
})

gsap.to('#main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:"#main",
        scroller:" body",
        // markers:true,
        start:"top -25%",      
        end:"top -70%",
        scrub:2
    }
})

gsap.from('#about-us img , #about-us-in',{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:'top 60%',
        end:'top 55%',
        scrub:2,

    }
})

gsap.from('.card',{
    y:90,
    scale:0.8,
    duration:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:'top 70%',
        end:'top 65%',
        scrub:1,

    }
})

gsap.from('#colon1',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:'top 45%',
        scrub:4
    }
})

gsap.from('#colon2',{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:'top 45%',
        scrub:4
    }
})

gsap.from('#page4 h1',{
    y:50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 75%",
        end:'top 70%',
        scrub:3
    }
})