//import {animate, hover, inView, scrol} from "Https://cdn.skypack.dev/motion";
import { animate, hover, inView, scroll } from "https://cdn.skypack.dev/motion";


/* button hover*/

document.querySelectorAll("button:not(.prev):not(.next)").forEach((btn) => {
    hover(btn, () => {
        animate(btn, { scale: 1.08}, { duration: 0.2})
        return () => {
            animate(btn, {scale: 1}, {duration: 0.2})
        }
    })
});

/* section B */ 

document.querySelectorAll("#section-b .card").forEach((card) => {
    //Set initial state immediately
    card.style.opacity = 0;
    card.style.transform = "translateY(60px)";

    inView(card, () =>{
        animate(card,
        {
            opacity: 1,
            transform: "translateY(0px)"
        },
        {
            duration: 0.8,
            easing: "ease-out"
        })

    })
});

/* section D */ 
document.querySelectorAll("#section-d .box").forEach((box, index) => {

    box.style.opacity = 0;
    box.style.transform = 
    index === 0
        ? "translateX(-80px)"
        : "translateX(80px)";

    inView(box, () => {
        animate(box,
        {
            opacity: 1, transform: "translateX(0px)"
        },
        {
            duration: 1, easing: "ease-in-out"
        }
        )
    })
});

/* scroll progress bar */
scroll(
    animate(".progress",
        {scaleX: [0,1]},
        {ease: "linear"}
    )
);