var myVar;
var curEl;
var closed = false;
var closing = false;

function showChild(el) {
    el.style.opacity = 1;
    if (closing == true) {
        closing = false;
        return;
    }
    if (el == curEl) {
        clearTimeout(myVar);
    }
    curEl = el;
    if (el.hasChildNodes()) {
        var children = el.childNodes;
        el.parentNode.classList.add("overlayShown");
        el.classList.add("currentOverlay");
        if (closed == false) {
            children[1].style.display = "block";
        }
        else {
            closed = false;
        }
    }
}



function fadeChild(el) {
    el.removeAttribute("style");
    myVar = setTimeout(function(){
        if (el.hasChildNodes()) {
        el.parentNode.classList.remove("overlayShown");
        el.classList.remove("currentOverlay");

        var children = el.childNodes;
            children[1].style.display = "none";
        }
    }, 300);

}


function closeParent(el) {
    closed = true;
    var next = el.parentNode.nextSibling;
    el.parentNode.style.display = "none";
}
