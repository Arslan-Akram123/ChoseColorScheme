let buttons=document.querySelectorAll(".button")
console.log(buttons)
let body=document.querySelector("body")
buttons.forEach(function(btn){
    console.log(btn)
btn.addEventListener("click",function(e){
    body.style.background=e.target.id
    // console.log(e);
    // console.log(e.target)
    // if(e.target.id==='grey'){
    //  body.style.background=e.target.id;
    // }
    // if(e.target.id==='blue'){
    //     body.style.background=e.target.id;
    //    }
    //    if(e.target.id==='white'){
    //     body.style.background=e.target.id;
    //    }
    //    if(e.target.id==='yellow'){
    //     body.style.background=e.target.id;
    //    }
    //    if(e.target.id==='green'){
    //     body.style.background=e.target.id;
    //    }
    //    if(e.target.id==='purple'){
    //     body.style.background=e.target.id;
    //    }
})
}
)