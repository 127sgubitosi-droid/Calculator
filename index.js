console.log('Happy developing ✨')
let currentExpression = "";
let historyList = [];
let historyIndex = 0;
function updateDisplay() {
    document.getElementById("expressionDisplay").innerText = currentExpression;
}

function addCharacter(char) {
    currentExpression = currentExpression + char;
    document.getElementById("resultDisplay").innerText = "";
    updateDisplay();
}

function calculateResult() {
    if (currentExpression === "") {
        return;
    }

    try {
        let evalExpression = "";
        for (let i = 0; i < currentExpression.length; i++) {
            if (currentExpression[i] === "^") {
                evalExpression = evalExpression + "**";
            } else {
                evalExpression = evalExpression + currentExpression[i];
            }
        }

        let answer = eval(evalExpression);
        document.getElementById("resultDisplay").innerText = answer;
        historyList.push(currentExpression);
        historyIndex = historyList.length;
    } catch (error) {
        document.getElementById("resultDisplay").innerText = "cant do that";
    }
}

function prevHistory() {
    if (historyList.length > 0 && historyIndex > 0) {
        historyIndex = historyIndex - 1;
        currentExpression = historyList[historyIndex];
        document.getElementById("resultDisplay").innerText = "";
        updateDisplay();
    }
}

function nextHistory() {
    historyIndex = historyList.length;
    currentExpression = "";
    document.getElementById("resultDisplay").innerText = "";
    updateDisplay();
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

    if ((key >= "0" && key <= "9") || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "(" || key === ")" || key === "%" || key === "^") {
        addCharacter(key);
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        let shorterExpression = "";
        for (let i = 0; i < currentExpression.length - 1; i++) {
            shorterExpression = shorterExpression + currentExpression[i];
        }
        currentExpression = shorterExpression;
        document.getElementById("resultDisplay").innerText = "";
        updateDisplay();
    } else if (key === "ArrowLeft") {
        prevHistory();
    } else if (key === "ArrowRight") {
        nextHistory();
    }
});