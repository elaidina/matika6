const quizData = [
    {
        question: "10+x = 20",
        a: "20",
        b: "15",
        c: "10",
        d: "0",
        correct: "c",
    },
    {
        question: "18-x = 9",
        a: "7",
        b: "6",
        c: "12",
        d: "9",
        correct: "d",
    },
    {
        question: "12.x = 24",
        a: "7",
        b: "2",
        c: "1",
        d: "4",
        correct: "b",
    },
    {
        question: "8.x = 64",
        a: "8",
        b: "4",
        c: "10",
        d: "6",
        correct: "a",
    },
    {
      question: "5+5+5+x = 20",
      a: "0",
      b: "4",
      c: "5",
      d: "8",
      correct: "c",
  },{
    question: "15.x = 15",
    a: "3",
    b: "0",
    c: "1",
    d: "6",
    correct: "c",
  },{
    question: "x.10 = 100",
    a: "10",
    b: "100",
    c: "1000",
    d: "10 000",
    correct: "a",
  },{
    question: "8+2+3+7 = x",
    a: "30",
    b: "25",
    c: "10",
    d: "20",
    correct: "d",
  },{
    question: "x-2-6 = 0",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    correct: "b",
  },{
    question: "30-x= 25",
    a: "4",
    b: "50",
    c: "5",
    d: "6",
    correct: "c",
  },{
    question: "x-12 = 2",
    a: "24",
    b: "28",
    c: "26",
    d: "18",
    correct: "a",
  },{
    question: "55+x = 64",
    a: "10",
    b: "15",
    c: "9",
    d: "12",
    correct: "c",
  },{
    question: "50+50-50+x = 50",
    a: "50",
    b: "100",
    c: "150",
    d: "0",
    correct: "d",
  },{
    question: "(8:2).x = 4",
    a: "2",
    b: "1",
    c: "6",
    d: "8",
    correct: "b",
  },{
    question: "0,25+0,25+0,25+0,25 = x",
    a: "2",
    b: "6",
    c: "1",
    d: "10",
    correct: "c",
  },{
    question: "10+5+x = 20",
    a: "15",
    b: "5",
    c: "25",
    d: "0",
    correct: "b",
  },{
    question: "10-x = -1",
    a: "-1",
    b: "0",
    c: "1",
    d: "11",
    correct: "d",
  },{
    question: "50+x =110",
    a: "60",
    b: "62",
    c: "64",
    d: "52",
    correct: "a",
  },{
    question: "x+1000 = 1100",
    a: "100",
    b: "110",
    c: "1 100",
    d: "10 000",
    correct: "a",
  },{
    question: "5.x = 30",
    a: "3",
    b: "6",
    c: "12",
    d: "7",
    correct: "b",
  },{
    question: "2.x = 18",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "d",
  },{
    question: "23-x = 5",
    a: "18",
    b: "19",
    c: "20",
    d: "21",
    correct: "a",
  },{
    question: "x-33 = 66",
    a: "90",
    b: "93",
    c: "96",
    d: "99",
    correct: "d",
  },{
    question: "16:x = 2",
    a: "6",
    b: "8",
    c: "10",
    d: "12",
    correct: "b",
  },{
    question: "13+x = 21",
    a: "8",
    b: "21",
    c: "4",
    d: "7",
    correct: "a",
  },{
    question: "20-x = 6",
    a: "12",
    b: "14",
    c: "16",
    d: "18",
    correct: "b",
  },{
    question: "5+5+x = 20",
    a: "10",
    b: "15",
    c: "16",
    d: "20",
    correct: "a",
  },{
    question: "38+x = 50",
    a: "13",
    b: "22",
    c: "12",
    d: "6",
    correct: "c",
  },{
    question: "19-x = 11",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },{
    question: "6+x =18",
    a: "11",
    b: "12",
    c: "13",
    d: "14",
    correct: "b",
  },{
    question: "6.x = 18",
    a: "3",
    b: "2",
    c: "22",
    d: "4",
    correct: "a",
  },{
    question: "x:4 = 8",
    a: "24",
    b: "28",
    c: "32",
    d: "36",
    correct: "c",
  },{
    question: "x-7 =7",
    a: "14",
    b: "15",
    c: "16",
    d: "17",
    correct: "a",
  },{
    question: "7.3 = x",
    a: "14",
    b: "21",
    c: "28",
    d: "35",
    correct: "b",
  },{
    question: "4.x = 20",
    a: "8",
    b: "5",
    c: "6",
    d: "2",
    correct: "b",
  },{
    question: "5:x = 2,5",
    a: "2",
    b: "2,5",
    c: "3",
    d: "4",
    correct: "a",
  },{
    question: "10+20+x =100",
    a: "40",
    b: "50",
    c: "60",
    d: "70",
    correct: "d",
  },{
    question: "x-10 = 89",
    a: "90",
    b: "99",
    c: "89",
    d: "80",
    correct: "b",
  },{
    question: "6.x = 36",
    a: "12",
    b: "24",
    c: "6",
    d: "8",
    correct: "c",
  },{
    question: "2+x = 104",
    a: "99",
    b: "100",
    c: "101",
    d: "102",
    correct: "d",
  },
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text">${question.d}</label>
                  </li>
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })