document.addEventListener('DOMContentLoaded', () => {
    let answer = "";
    let operator =""; 
    let firstNum = "";
    let secondNum = "";

const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');
numbers.forEach(button => {
    
    if(button.id !== "zero") {
    button.addEventListener('click', () => {
        if (answer === "0" && button.textContent !== ".") {
            answer = "";  // Clear only if not typing a decimal point
        }
        
        answer += button.textContent;
       if(operator === "") {
       firstNum = answer;
       } else {
        secondNum = answer;
       }
       console.log("First:" + firstNum);
       console.log("Second" + secondNum);
        if(answer.length > 15) {
            result.textContent = answer.slice(0,15);
        } else {
        result.textContent = answer;
        }
        })
    } else {
        button.addEventListener('click', () => {
            if(!answer.startsWith("00")) {
                answer = answer + button.textContent;
                if(operator == "") {
                    firstNum = answer;
                    } else {
                     secondNum = answer;
                    }
                console.log("First:" + firstNum);
                if(answer.length > 15) {
                    result.textContent = answer.slice(0,15);
                } else {
                result.textContent = answer;
                }
            }
        })
    }
    })

const addButton = document.querySelector("#add");

addButton.addEventListener('click', () => {
    if(firstNum && secondNum) {
        const sum = add(parseFloat(firstNum), parseFloat(secondNum));
        if(sum.toString().toString().length > 15) {
            result.textContent = sum.toString().slice(0,15);
        } else {
        result.textContent = sum;
        }
        answer = ""; 
        firstNum = sum.toString();
        secondNum = "";
    } else if(firstNum && operator === "add") {
        // If only the first number exists and the operator was already set
        secondNum = firstNum; 
        const sum = add(parseFloat(firstNum), parseFloat(secondNum));
        if(sum.toString().toString().length > 15) {
            result.textContent = sum.toString().slice(0,15);
        } else {
        result.textContent = sum;
        }
        // Prepare for next calculation
        firstNum = sum.toString();
        secondNum = "";
        answer = "";
    } else if(firstNum) {
        operator = "add";
        answer = "";
    }
})

const multiplyButton = document.querySelector("#multiply");

multiplyButton.addEventListener('click', () => {
    if(firstNum && secondNum) {
        const product = multiply(parseFloat(firstNum), parseFloat(secondNum));
        if(product.toString().toString().length > 15) {
            result.textContent = product.toString().slice(0,15);
        } else {
            result.textContent = product;
        }
        answer = ""; 
        firstNum = product.toString();
        secondNum = "";
    } else if(firstNum && operator === "multiply") {
        // If only the first number exists and the operator was already set
        secondNum = firstNum; 
        const product = multiply(parseFloat(firstNum), parseFloat(secondNum));
        if(product.toString().length > 15) {
            result.textContent = product.toString().slice(0,15);
        } else {
            result.textContent = product;
        }

        // Prepare for next calculation
        firstNum = product.toString();
        secondNum = "";
        answer = "";
    } else if(firstNum) {
        operator = "multiply";
        answer = "";
    }
})

const divideButton = document.querySelector("#divide");

divideButton.addEventListener('click', () => {
    if(firstNum && secondNum) {
        const quotient = divide(parseFloat(firstNum), parseFloat(secondNum));
        if(quotient.toString().length > 15) {
            result.textContent = quotient.toString().slice(0,15);
        } else {
            result.textContent = quotient;
        }
        answer = ""; 
        firstNum = quotient.toString();
        secondNum = "";
    } else if(firstNum && operator === "divide") {
        // If only the first number exists and the operator was already set
        secondNum = firstNum; 
        const quotient = divide(parseFloat(firstNum), parseFloat(secondNum));
        if(quotient.toString().length > 15) {
            result.textContent = quotient.toString().slice(0,15);
        } else {
            result.textContent = quotient;
        }
        // Prepare for next calculation
        firstNum = quotient.toString();
        secondNum = "";
        answer = "";
    } else if(firstNum) {
        operator = "divide";
        answer = "";
    }
})

const subtractButton = document.querySelector("#subtract");

subtractButton.addEventListener('click', () => {
    if(firstNum && secondNum) {
        const difference = subtract(parseFloat(firstNum), parseFloat(secondNum));
        if(difference.toString().length > 15) {
            result.textContent = difference.toString().slice(0,15);
        } else {
            result.textContent = difference;
        }
        answer = ""; 
        firstNum = difference.toString();
        secondNum = "";
    } else if(firstNum && operator === "subtract") {
        // If only the first number exists and the operator was already set
        secondNum = firstNum; 
        const difference = subtract(parseFloat(firstNum), parseFloat(secondNum));
        if(difference.toString().length > 15) {
            result.textContent = difference.toString().slice(0,15);
        } else {
            result.textContent = difference;
        }
        // Prepare for next calculation
        firstNum = difference.toString();
        secondNum = "";
        answer = "";
    } else if(firstNum) {
        operator = "subtract";
        answer = "";
    }
})

const percent = document.querySelector("#percent");

percent.addEventListener('click', () => {
    if (answer) {
        answer = (parseFloat(answer) / 100).toString();
        if (operator === "") {
            firstNum = answer;
        } else {
            secondNum = answer;
        }
        
        // Check and display result, truncating if necessary
        if (answer.length > 15) {
            answer = answer.slice(0, 15);  // Update answer to truncated value
            result.textContent = answer;
        } else {
            result.textContent = answer;
        }
    }
});


const decimal = document.querySelector("#decimal");

decimal.addEventListener('click', () => {
    if (!answer.includes(".") && answer != "") {
        answer += ".";
        if (operator === "") {
            firstNum = answer;
        } else {
            secondNum = answer;
        }
        if(answer.length > 15) {
            result.textContent = answer.slice(0,15);
        } else {
            result.textContent = answer;
        }
    }
})

const equalButton = document.querySelector("#equal");

equalButton.addEventListener('click', () => {
    if(firstNum && secondNum) {
        if(operator === "add") {
        const sum = add(parseFloat(firstNum), parseFloat(secondNum));
        if(sum.toString().length > 15) {
            result.textContent = sum.toString().slice(0,15);
        } else {
        result.textContent = sum;
        }
        answer = "";
        operator = ""; 
        firstNum = sum.toString();
        secondNum = "";
        } else if(operator === "multiply") {
            const product = multiply(parseFloat(firstNum), parseFloat(secondNum));
            if(product.toString().length > 15) {
                result.textContent = product.toString().slice(0,15);
            } else {
            result.textContent = product;
            }
            answer = "";
            operator = "";
            firstNum = product.toString();
            secondNum = "";
        } else if(operator === "divide") {
            const quotient = divide(parseFloat(firstNum), parseFloat(secondNum));
            if(quotient.toString().length > 15) {
                result.textContent = quotient.toString().slice(0,15);
            } else {
            result.textContent = quotient;
            }
            answer = "";
            operator = "";
            firstNum = quotient.toString();
            secondNum = "";
        } else if(operator === "subtract") {
            const difference = subtract(parseFloat(firstNum), parseFloat(secondNum));
            if(difference.toString().length > 15) {
                result.textContent = difference.toString().slice(0,15);
            } else {
                result.textContent = difference;
            }
            answer = "";
            operator = "";
            firstNum = difference.toString();
            secondNum = "";
        }
    }
})

const AC = document.querySelector("#AC");
AC.addEventListener('click', () => {
    answer = "";
    operator = "";
    secondNum = "";
    firstNum = "";
    result.textContent = answer;
})


const neg = document.querySelector("#negative");
neg.addEventListener('click', () => {
    if (answer) {
        answer = (parseFloat(answer) * -1).toString();
        if (operator === "") {
            firstNum = answer;
        } else {
            secondNum = answer;
        }
        
        // Check and display result, truncating if necessary
        if (answer.length > 15) {
            answer = answer.slice(0, 15);  // Update answer to truncated value
            result.textContent = answer;
        } else {
            result.textContent = answer;
        }
    }
});


function subtract(number1, number2) {
    return number1 - number2;
}
function divide(number1, number2) {
    return number1 / number2; 
}

function multiply(number1, number2) {
    return number1 * number2;
}

function add(number1, number2) {
    return number1 + number2;
}

document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Mapping number keys to corresponding button IDs
    const numberMap = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    };

    // Handle number keys using the map
    if (numberMap[key]) {
        const button = document.querySelector(`#${numberMap[key]}`);
        if (button) button.click();
    }

    // Handle operator keys
    if (key === '+') {
        document.querySelector("#add").click();
    } else if (key === '-') {
        document.querySelector("#subtract").click();
    } else if (key === '*') {
        document.querySelector("#multiply").click();
    } else if (key === '/') {
        document.querySelector("#divide").click();
    }

    // Handle decimal point
    if (key === '.') {
        document.querySelector("#decimal").click();
    }

    // Handle equal sign (enter key)
    if (key === 'Enter' || key === '=') {
        document.querySelector("#equal").click();
    }

    // Handle AC (clear all)
    if (key === 'Backspace') {
        document.querySelector("#AC").click();
    }

    // Handle negative (negate number)
    if (key === 'n' || key === '-') {
        document.querySelector("#negative").click();
    }

    // Handle percentage
    if (key === '%') {
        document.querySelector("#percent").click();
    }
});

});