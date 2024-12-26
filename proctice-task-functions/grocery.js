var grocery1;
var grocery2;
var grocery3;

function amount(){

    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    let amounti = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `the total sum is ${amounti}`;
}