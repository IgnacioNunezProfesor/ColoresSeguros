window.onload = SetupPage;

const coloresSegurosRGB = [ 
    [255, 87, 51], [204, 255, 0], [204, 255, 51], [204, 255, 102], 
    [204, 255, 153], [204, 255, 204], [204, 255, 255], [255, 255, 255], 
    [255, 255, 204], [255, 255, 153], [255, 255, 102], [255, 255, 51], 
    [255, 255, 0], [204, 204, 0], [204, 204, 51], [204, 204, 102], 
    [204, 204, 153], [204, 204, 204], [204, 204, 255], [255, 204, 255], 
    [255, 204, 204], [255, 204, 153], [255, 204, 102], [255, 204, 51], 
    [255, 204, 0], [204, 153, 0], [204, 153, 51], [204, 153, 102], 
    [204, 153, 153], [204, 153, 204], [204, 153, 255], [255, 153, 255], 
    [255, 153, 204], [255, 153, 153], [255, 153, 102], [255, 153, 51], 
    [255, 153, 0] 
];
var mouseSpan;

 function SetupPage() {
    setMouseMoveEvent();
    mouseSpan= createSpanInfo("Mueve el mouse para cambiar el color de fondo");
}

function getCoordinates(event, doSomething) {
        const x = event.clientX;
        const y = event.clientY;
        doSomething(x, y);
}


function setMouseMoveEvent() {
    document.addEventListener("mousemove", function(event){
        getCoordinates(event, setBackgroundColorSafe);
    });
}


function setBackgroundColor(r,g,b) {
    const color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
}

function setBackgroundColorSafe(x,y) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const colorAreasWidth = Math.floor(viewportWidth / coloresSegurosRGB.length);
    const colorIndex = Math.min(
        Math.floor(x / colorAreasWidth),
        coloresSegurosRGB.length - 1
    );
    let spanText=`(X=${x}, Y=${y}) Color index: ${colorIndex} de viewportAreas: ${coloresSegurosRGB.length} de colorAreasWidth: ${colorAreasWidth} `;
    setSpanText(x, y, spanText);
    const color = coloresSegurosRGB[colorIndex];
    setBackgroundColor(color[0], color[1], color[2]);
}

function createSpanInfo(text) {
    const spanInfo = document.createElement('span');
    spanInfo.style.position = 'fixed';
    spanInfo.style.top = '10px';
    spanInfo.style.left = '10px';
    spanInfo.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    spanInfo.style.color = 'white';
    spanInfo.style.padding = '5px';
    spanInfo.style.borderRadius = '5px';
    spanInfo.style.zIndex = '10000';
    spanInfo.textContent = text;
    document.body.appendChild(spanInfo);
    return spanInfo;
}

function setSpanText(x,y,textSpan) {
    mouseSpan.style.left = (x + 10) + 'px';
    mouseSpan.style.top = (y + 10) + 'px';    
    mouseSpan.textContent = textSpan;    
}
