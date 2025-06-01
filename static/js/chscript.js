let mainfnav = document.getElementById("mainfnav");
let bfnavi = document.getElementById("bfnavi");
let mainfnavHandled = false;
let mathBoxes = document.querySelectorAll(".mathbox");


if(mainfnav){
    mainfnav.addEventListener("click", function(){
        if(!mainfnavHandled){
            if(bfnavi.style.display == "none"){
                bfnavi.style.display = "block";
            }
            else{
                bfnavi.style.display = "none";
            }
        }
        mainfnavHandled = true;
        setTimeout(() => {
            mainfnavHandled = false
        }, 300);
    })



    mainfnav.addEventListener("mouseenter", function() {
        if(!mainfnavHandled){
            bfnavi.style.display = "block";
        }
        mainfnavHandled = true;
        setTimeout(() => {
            mainfnavHandled = false
        }, 300);
    });


    mainfnav.addEventListener("mouseleave", function() {
        bfnavi.style.display = "none";
    });
}



["load", "resize"].forEach(event => {
    window.addEventListener(event, () => {
        MathJax.typesetPromise().then(() => {
            mathBoxes.forEach(mathbox => {
                const mjx = mathbox.querySelector("mjx-container");

                if (mjx) {
                    requestAnimationFrame(() => {
                        const contentWidth = mjx.scrollWidth;
                        const boxWidth = mathbox.clientWidth;

                        if (contentWidth > boxWidth) {
                            mathbox.style.overflowX = "auto";
                        }
                        else {
                            mathbox.style.overflowX = "hidden";
                        }
                    });
                }
            });
        });
    });
});

