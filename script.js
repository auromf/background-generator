//SELECTORS
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var css = document.querySelector(".currentCSS")
var initial_css = document.querySelector(".initialCSS")
var body = document.getElementById("gradiant")

//EVENT LISTNER
color1.addEventListener("input",setGradiant)    
color2.addEventListener("input",setGradiant)
// document.addEventListener('DOMContentLoaded',getGradiant)
color1.addEventListener("input",getGradiant)    
color2.addEventListener("input",getGradiant)




//FUNCTIONS
function setGradiant(){
    body.style.background = "linear-gradient(to right," + color1.value +", "+ color2.value +")"
    css.textContent=body.style.background+";"
}
function getGradiant(){
    // console.log('hi')
    // console.log(body.style)

    initial_css.textContent=body.style.background+";"
}

//TEST
// console.log(color1)
// console.log(color2)
// console.log(css)
