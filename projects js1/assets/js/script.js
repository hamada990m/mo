const test = document.getElementById("test");
const bird1 = document.getElementById("bird1");
const bird2 = document.getElementById("bird2");
const btn = document.getElementById("btn");
const rocks = document.getElementById("rocks");
const forest = document.getElementById("forest");
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    let scrolling = window.scrollY;

    text.style.top = 50 + scrolling * -0.5 + "%"; 
    bird1.style.top = scrolling * -1.5 + "px"; 
    bird1.style.left = scrolling * 2 + "px"; 
    bird2.style.top = scrolling * -1.5 + "px"; 
    bird2.style.left = scrolling * -3 + "px"; 

    btn.style.marginTop = scrolling * 1.5 + "px"; 

    rocks.style.top = scrolling * -0.12 + "px";
    forest.style.top = scrolling * 0.25 + "px";

    header.style.top = scrolling * 0.5 + "px";    
})


function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex"    
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
}