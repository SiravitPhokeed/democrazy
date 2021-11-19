function floatDownExit(element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(1rem)";
}

function floatRightExit(element) {
    element.style.opacity = "0";
    element.style.transform = "translateX(1rem)";
}

function floatUpEntrance(element) {
    element.style.opacity = "100";
    element.style.transform = "translateY(0)";
}

function floatLeftEntrance(element) {
    element.style.opacity = "100";
    element.style.transform = "translateX(0)";
}