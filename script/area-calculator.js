
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

    addToCalculationEntry('Triangle', area);
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
    // validate input -----------
    if (isNaN(width) || isNaN(length)) {
        // console.log('width is not a number');
        alert('Please insert Numbers only');
        return;
    }

    const area = width * length;
    //  console.log(area);

    // show area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);

}




// ---------------- Reuseable Function ---------------

// Parallelogram

function calculateParallelogramArea() {
    // console.log('para');
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    // validate
    // validate input -----------
    if (isNaN(base) || isNaN(height)) {
        // console.log('width is not a number');
        alert('Please insert Numbers only');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);

}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;

}

// reuseable set span, p , div etc text

function setElementInnerText(elementId, area) {

    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry
/*
    1.  get the element where you want to add the dynamic HTML
    2. create an element you want to add 
    3. if needed add some class
    4. set innerHTML . it could be dynamic template string
    5. append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area) {
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">Convert</button>`;
    calculationEntry.appendChild(p);
    p.classList.add('my-4');

}

// data validation

/* 
    1. set the proper type of the input field.(ex -> num, data, email)
    2. check type using typeof
    3. isNaN is checking whether the input is not a number or not

*/