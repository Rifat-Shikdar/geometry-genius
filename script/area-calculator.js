
function calculateTriangleArea() {
    // console.log("connected");

    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    baseField.value = '';
    // console.log(base);

    // get triangle base value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    heightField.value = '';
    //  console.log(height);

    const area = 0.5 * base * height;
    //  console.log(area);

    // show area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea() {
    // get rectangle width value

    const widthField = document.getElementById('rectangle-weight');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    widthField.value = '';
    // console.log(width);

    // get rectangle length value

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    lengthField.value = '';
    // console.log(width);

    const area = width * length;
    //  console.log(area);

    // show area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}


// ---------------- Reuseable Function ---------------

// Parallelogram

function calculateParallelogramArea(){
    // console.log('para');
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const  area =  3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
    
}

// reuseable set span, p , div etc text

function setElementInnerText(elementId, area){

    const element = document.getElementById(elementId);
    element.innerText = area;
}