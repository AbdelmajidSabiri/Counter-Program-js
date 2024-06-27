
let numberValue = 0;


// TO increase number
document.getElementById("decreaseBtn").onclick = function(){

    // Take number from Label
    numberValue = Number(document.getElementById("countLabel").textContent);

    // Increase number and change Label content
    document.getElementById("countLabel").textContent = String(numberValue - 1)
}

// To decrease number
document.getElementById("increaseBtn").onclick = function(){

    // Take number from Label
    numberValue = Number(document.getElementById("countLabel").textContent);

    // Decrease number and change Label content
    document.getElementById("countLabel").textContent = String(numberValue + 1)
}

// To reset Number
document.getElementById("resetBtn").onclick = function(){

    // Take number from Label
    numberValue = Number(document.getElementById("countLabel").textContent);

    // Reset number to 0 and change Label content
    document.getElementById("countLabel").textContent = String(0)
}