
const isActive = false;
const focusedElements = [];

document.querySelectorAll('input').forEach((elem) => {
elem.addEventListener('focusin', coloringNowFocusing)
elem.addEventListener('focusout' , focusOut)})


function coloringNowFocusing(e) {
    const $nowActive = document.activeElement;
    const classAlphaName = $nowActive.className[0]
    const classNumberName = $nowActive.className.slice(2)

    focusedElements.push([classAlphaName, classNumberName])

    // cell 설정
    const $cell = document.getElementById('cellName');
    $cell.innerHTML = `CELL : ${classAlphaName.toUpperCase()}${stringToNumber(classNumberName)}`


    const $alpha = document.querySelector('.' + classAlphaName);
    $alpha.style.background = '#2A4B2F';

    const $number = document.querySelector("." + classNumberName)
    $number.style.background = '#2A4B2F';



}

function focusOut(e){
    focusedElements.forEach((el) => {

    const $nowAlpha = document.querySelector('.' + el[0]);
  
    $nowAlpha.style.background = '#cad5cb';
    const $number = document.querySelector("." + el[1])
    $number.style.background = '#cad5cb';

    focusedElements.pop()

    }
    )
}


function stringToNumber(str) {
    switch(str) {
        case 'one':
            return '1'
        case 'two' :
            return '2'
        case 'three' :
            return '3'
        case 'four' :
            return '4'
        case 'five' :
            return '5'
        case 'six':
            return '6'
        case 'seven' :
            return '7'
        case 'eight' :
            return '8'
  
        case 'nine' :
            return '9'
        
        
            
    }
}