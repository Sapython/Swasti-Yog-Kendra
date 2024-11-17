var SIDEBAR_VISIBLE = false;
function openSidebar(){
    // document.getElementById('navigation').style.transform
    if (SIDEBAR_VISIBLE){
        document.getElementById('navigation').style.transform = "translateX(0%)";
        document.getElementById('overlay').style.display = "none"
    } else {
        document.getElementById('navigation').style.transform = "translateX(-100%)"
        document.getElementById('overlay').style.display = "block"
    }
    SIDEBAR_VISIBLE = !SIDEBAR_VISIBLE
}