const Questions =[
    {
        q:"Best, Average, Worst time complexity of Selection sort?",
        a: [{text:"O(nlogn)",isCorrect:false},
            {text:"O(n^2)",isCorrect:true},
            {text:"O(n)",isCorrect:false},
            {text:"O(logn)",isCorrect:false}]
    },
    {
        q:"Best case time complexity of Bubble sort",
        a:[{text:"O(n^2)",isCorrect:false},
           {text:"O(logn)",isCorrect:true},
           {text:"O(n)",isCorrect:true},
           {text:"O(nlogn)",isCorrect:false}]
    },
    {
        q:"Worst and Average case time complexity of Bubble sort",
        a:[{text:"O(nlogn)",isCorrect:false},
           {text:"O(logn)",isCorrect:false},
           {text:"O(n)",isCorrect:false},
           {text:"O(n^2)",isCorrect:true}]
    },
    {
        q:"Worst and Average case time complexity of Insertion sort",
        a:[{text:"O(nlogn)",isCorrect:false},
           {text:"O(logn)",isCorrect:false},
           {text:"O(n^2)",isCorrect:true},
           {text:"O(1)",isCorrect:false}]
    },
    {
        q:"Best case time complexity of Insertion sort",
        a:[{text:"O(n)",isCorrect:true},
           {text:"O(logn)",isCorrect:false},
           {text:"O(1)",isCorrect:false},
           {text:"O(n^2)",isCorrect:false}]
    },
    {
        q:"Best, Worst and Average case time complexity of Merge sort",
        a:[{text:"O(n)",isCorrect:false},
           {text:"O(logn)",isCorrect:false},
           {text:"O(nlogn)",isCorrect:true},
           {text:"O(n^2)",isCorrect:false}]
    },
    {
        q:"Worst case time complexity of Quick sort",
        a:[{text:"O(nlogn)",isCorrect:false},
           {text:"O(n^2)",isCorrect:true},
           {text:"O(n)",isCorrect:false},
           {text:"O(logn)",isCorrect:false}]
    },
    {
        q:"Best and Average case time complexity of Quick sort",
        a:[{text:"O(nlogn)",isCorrect:true},
           {text:"O(1)",isCorrect:false},
           {text:"O(n)",isCorrect:false},
           {text:"O(n^2)",isCorrect:false}]
    },
    {
        q:"Best, Worst and Average case time complexity of Heap sort",
        a:[{text:"O(n+k)",isCorrect:false},
           {text:"O(logn)",isCorrect:false},
           {text:"O(n*k)",isCorrect:false},
           {text:"O(nlogn)",isCorrect:true}]
    },
    {
        q:"Best, Worst and Average case time complexity of Counting sort",
        a:[{text:"O(n*k)",isCorrect:false},
           {text:"O(logn)",isCorrect:false},
           {text:"O(n+k)",isCorrect:true},
           {text:"O(1)",isCorrect:false}]
    }
]

let currQuestion = 0;
let score = 0;

function loadQuestion()
{
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQuestion();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}

function nextQuestion()
{
    if(currQuestion < Questions.length-1)
    {
        currQuestion++;
        loadQuestion();
    }
    else
    {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkans()
{
    const selectedans = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if(Questions[currQuestion].a[selectedans].isCorrect)
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}