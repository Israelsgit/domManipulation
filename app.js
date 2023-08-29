
function getRange() {
    let x = document.getElementById('input').value;
    let text;

    if ( x % 2 === 0 ) {
        text = "The number is even";
    } 
    else if (isNaN(x)) {
        text = "invalid input"
    }
    else {
        text = "The number is odd";
    }

    document.getElementById('answer').innerHTML = text;
}
