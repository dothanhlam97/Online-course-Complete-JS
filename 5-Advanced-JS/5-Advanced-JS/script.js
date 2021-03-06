// CODING CHALLENGE

/*
 --- Let's build a fun quiz game in the console! ---

 1. Build a function constructor called Question to describe a question. A question should include:
 a) question itself
 b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
 c) correct answer (I would use a number for this)

 2. Create a couple of questions using the constructor

 3. Store them all inside an array

 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
 */

/*
 --- Expert level ---

 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

 11. Display the score in the console. Use yet another method for this.
 */

var currentScore = 0;

var question = {
    name: "",
    options: [],
    answer: -1,
    checkAnswer: function (value) {
        if (value == this.answer)
            console.log("Right!");
        else
            console.log("Wrong answer");
        return value == this.answer;
    },
    showQuestion: function() {
        console.log(this.name);
        for (var i = 0; i < this.options.length; i++) {
            console.log(this.options[i]);
        }
    }
};

question1 = Object.create(question, {
    name: { value: 'How many kinds of classes are there in c++?' },
    options: { value: ['1', '2', '3', '4'] },
    answer: { value: 2 }
});

question2 = Object.create(question, {
    name: { value: 'Which of the following function prototype is perfectly acceptable?' },
    options: { value: [  'A. int Function(int Tmp = Show());',
                        'B.	float Function(int Tmp = Show(int, float));',
                        'C.	Both A and B.',
                        'D.	float = Show(int, float) Function(Tmp);'] },
    answer: { value: 'A' }
});

question3 = Object.create(question, {
    name: { value: 'Which of the following function / type of function cannot be overloaded?' },
    options: { value:      ['A. Member function',
                            'B.	Static function',
                            'C.	Virtual function',
                            'D.	Both B and C'] },
    answer: { value: 'C' }
});

showScore = function () {
  console.log("Your current Score is: " + currentScore);
  console.log("---------------------------------------");
};

endGame = function () {
    console.log("Your total Score is: " + currentScore);
    console.log("Good bye! See you again!");
}

const listQuestion = [question1, question2, question3];

while (true) {
    var index = Math.floor(Math.random() * listQuestion.length);
    if (index == listQuestion.length)
        index-=1;
    const currentQuestion = listQuestion[index];
    currentQuestion.showQuestion();
    const answer = prompt('Your answer ?');
    if (answer === 'exit') {
        endGame();
        break;
    }
    currentScore += currentQuestion.checkAnswer(answer);
    showScore();
}