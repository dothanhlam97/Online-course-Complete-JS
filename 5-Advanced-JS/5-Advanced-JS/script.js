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

const listQuestion = [question1, question2, question3];

while (true) {
    var index = Math.floor(Math.random() * listQuestion.length);
    if (index == listQuestion.length)
        index-=1;
    const currentQuestion = listQuestion[index];
    currentQuestion.showQuestion();
    const answer = prompt('Your answer ?');
    if (answer === 'exit') {
        console.log("Good bye! See you again!");
        break;
    }
    currentQuestion.checkAnswer(answer);
}