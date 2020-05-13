//1. computer picks a random number:
let computerNum = Math.floor(Math.random() * 100) + 1;
console.log(computerNum);

let history = [];

let remainingGuess = 5;

//2. when user click the guess, it will fire the user guess
function guess() {

    //3. grab the value from the user
    let userNum = document.getElementById("guessNumber").value;
    //After the user enters a guess, the textbox is cleared. 
    document.getElementById("guessNumber").value = "";
    //save the result message
    let resultMessage = ''
        //4. compare with the value the comp picked
        //5. if comp's num > user's num, "too low"
    if (computerNum > userNum) {
        resultMessage = 'too low';
        //6. if comp's num < user's num, "too high"
    } else if (computerNum < userNum) {
        resultMessage = 'too high';
        //7. if comp's num === user's num, "correct"
    } else if (computerNum == userNum) {
        resultMessage = 'correct!';
        document.getElementById("resultArea").style.backgroundColor = "green";
        document.getElementById("guessButton").disabled = true;
        timeOut()
        alert("You win!");

    }

    remainingGuess--;

    history.push(userNum)

    //8. show the result to the user
    document.getElementById("resultArea").innerHTML = `Result is ${resultMessage}`;
    document.getElementById("historyArea").innerHTML = `History of you guess: ${history}`;
    document.getElementById("remainGuess").innerHTML = `${remainingGuess}`

    // 1. make only 5 chance
    // 3. if user win, or lose the guess button will be disabled
    if (history.length == 5) {
        document.getElementById("guessButton").disabled = true;
        document.getElementById("resultArea").innerHTML = "You lose :(";
        alert("You don't have any guess left");
    }
}


// 2. reset feature
function resetEverything() {
    // generate a different computerNum
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log(computerNum);
    document.getElementById("guessNumber").value = "";
    document.getElementById("historyArea").innerHTML = `History of you guess:`;
    document.getElementById("guessButton").disabled = false;
    history = [];

    //Clear result
    document.getElementById("resultArea").innerHTML = "Show result";
    document.getElementById("resultArea").style.backgroundColor = "transparent";
    //Remaining guess is clear
    document.getElementById("remainGuess").innerHTML = "";
    remainingGuess = 5;
    //Clear time
    timeOut();
    timecounting();
}

// 4. add timer (if you can't finish the game within 20s, you'll lose)
let time = 0 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
            time += 1;
            if (time >= 20) {
                document.getElementById("guessButton").disabled = true;
                alert("you have run out of time!");
                resetEverything();
            }

            document.getElementById('timecount').innerHTML = time
        }, 1000) // every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()

function timeOut() {
    clearInterval(myTime);
    time = 0;
}
