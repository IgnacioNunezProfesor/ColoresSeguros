window.onload = SetupPage;

const coloresSegurosRGB = [ 
    [255, 87, 51], [204, 255, 0], [204, 255, 51], [204, 255, 102], [204, 255, 153], 
    [204, 255, 204], [204, 255, 255], [255, 255, 255], [255, 255, 204], [255, 255, 153], 
    [255, 255, 102], [255, 255, 51], [255, 255, 0], [204, 204, 0], [204, 204, 51], 
    [204, 204, 102], [204, 204, 153], [204, 204, 204], [204, 204, 255], [255, 204, 255], 
    [255, 204, 204], [255, 204, 153], [255, 204, 102], [255, 204, 51], [255, 204, 0], [204, 153, 0], 
    [204, 153, 51], [204, 153, 102], [204, 153, 153], [204, 153, 204], [204, 153, 255], 
    [255, 153, 255], [255, 153, 204], [255, 153, 153], [255, 153, 102], [255, 153, 51], [255, 153, 0] 
];


 function SetupPage() {
    setMouseMoveEvent();
}

function getCoordinates(event, doSomething) {
        const x = event.clientX;
        const y = event.clientY;
        doSomething(x, y);
        console.log(`Mouse position: X=${x}, Y=${y}`);
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
    console.log(`Color index: ${colorIndex} de viewportAreas: ${colorAreasWidth}`);
    const color = coloresSegurosRGB[colorIndex];
    setBackgroundColor(color[0], color[1], color[2]);
}