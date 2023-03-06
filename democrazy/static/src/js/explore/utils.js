function resetBtns(btnsContainer) {
    btnsContainer.innerHTML = `
        <button class="btn btn-primary text-xl xl:text-2xl" id="back-btn">Back</button>
        <button class="btn btn-secondary text-xl xl:text-2xl" id="next-btn">Next</button>
    `;
}

function setBtnsToEnd(btnsContainer, type) {
    btnsContainer.innerHTML = `
        <button class="btn btn-primary text-xl xl:text-2xl" id="back-btn">Back</button>
        <a href="/explore/${type}" class="btn btn-primary text-xl xl:text-2xl">End</a>
        <a href="/explore/${type}/share" class="btn btn-secondary text-xl xl:text-2xl">Share</a>
    `;
}

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