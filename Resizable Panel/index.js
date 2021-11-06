let isResizing = false;


const panel = document.querySelector(".c-panel");
const panelLeft = document.querySelector(".c-panel__left");
const resizeBar = document.querySelector(".js-resize-bar");

const resizePanel = (e) => {
    if(isResizing){
        panelLeft.style.width = `${e.clientX}px`;
    }
}

const activeResizeBar = (e) => {
    isResizing = true;
}

const stopResizing = (e) => {
    isResizing = false;
}


document.addEventListener("mousemove", resizePanel);

resizeBar.addEventListener("mousedown",activeResizeBar);

document.addEventListener("mouseup",stopResizing);


