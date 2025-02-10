var x; 
    var y;
        function sum(x, y) { 
    x = parseFloat(document.getElementById('num1').value); 
    y = parseFloat(document.getElementById('num2').value);
    const sum = plus(x, y);  

    document.getElementById("result").innerHTML = "The sum of "+ x + " and " + y + " is " + sum;
} 

function diff(x, y) { 
    x = parseFloat(document.getElementById('num1').value); 
    y = parseFloat(document.getElementById('num2').value);
    const diff = minus(x, y); 

    document.getElementById("result").innerHTML = "The difference of "+ x + " and " + y + " is " + diff;
} 

function prod(x, y) { 
    x = parseFloat(document.getElementById('num1').value); 
    y = parseFloat(document.getElementById('num2').value);
    const prod = times(x, y); 
    

    document.getElementById("result").innerHTML = "The product of "+ x + " and " + y + " is " + prod;
} 
 
function quo(x, y) { 
    x = parseFloat(document.getElementById('num1').value); 
    y = parseFloat(document.getElementById('num2').value);
    const quo = divide(x, y);
    
    
    if(y > 0 || y < 0) { 
    document.getElementById("result").innerHTML = "The quotient of "+ x + " and " + y + " is " + quo; 
    } 
    else {
        document.getElementById("result").innerHTML = "Invalid operation";
    }
} 
 
function rem(x, y) { 
    x = parseFloat(document.getElementById('num1').value); 
    y = parseFloat(document.getElementById('num2').value);
    const rem = remainder(x, y); 
    
    document.getElementById("result").innerHTML = "The remainder from the quotient of "+ x + " and " + y + " is " + rem; 
} 
 
function plus(num1, num2) {
    return num1 + num2;
} 
function minus(num1, num2) {
    return num1 - num2;
} 
function times(num1, num2) {
    return num1 * num2;
} 
function divide(num1, num2) {
    return num1 / num2;
} 
function remainder(num1, num2) {
    return num1 % num2;
}