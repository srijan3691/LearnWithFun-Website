const question=document.querySelector('#question');
const choices=Array.from(document.querySelectorAll('.choice-text'));
const  progressText=document.querySelector('#progressText');  
const scoreText =document.querySelector('#score');
const progressBarFull=document.querySelector('#progressBarFull');
const audio = document.getElementById("myAudio");
//new  
var resultRight = document.querySelector("#result_right");
var resultWrong = document.querySelector("#result_wrong");

let currentQues= {}
let acceptingAns= true
let qCounter=0
let availQues= []
let score=0

let questions= [
      {
            question: 'what is the value of (566+667+918+868) = ?',
            choice1: '3091',
            choice2: '3011',
            choice3: '3019',
            choice4: '3018',
            answer: 3,
      
      },
      {
            question: "what is the value of (566 x 665) = ?",
            choice1: '376390',
            choice2: '301100',
            choice3: '351957',
            choice4: '370181',
            answer: 1,
      
      },
      {
            question: 'what is the value of (566-87+918-868) = ?',
            choice1: '560',
            choice2: '529',
            choice3: '301',
            choice4: '556',
            answer: 2,
      
      },
      {
            question: 'what is the value of (156+166+191+86) = ?',
            choice1: '591',
            choice2: '511',
            choice3: '599',
            choice4: '598',
            answer: 3,
      
      },
      {
            question: 'what is the value of (11868/11868)x7+2700 = ?',
            choice1: '4000',
            choice2: '2770',
            choice3: '2707',
            choice4: '2900',
            answer: 3,
      
      },
      {
            question: 'what is the value of (7891 x 5689) = ?',
            choice1: '42911810',
            choice2: '43071699',
            choice3: '44891899',
            choice4: '54120687',
            answer: 3,
      
      },
      {
            question: 'what is the value of ( 243576125 + 650726578= ?',
            choice1: '898087523',
            choice2: '312514613',
            choice3: '812895613',
            choice4: '894302703',
            answer: 4,
      
      },
      {
            question: 'what is the value of (53456341 - 22607265) = ?',
            choice1: '30849076',
            choice2: '31545687',
            choice3: '38776456',
            choice4: '29766999',
            answer: 1,
      
      },
      {
            question: 'Divide 12743775 by 5225.',
            choice1: '3439',
            choice2: '2011',
            choice3: '2019',
            choice4: '2439',
            answer: 4,
      
      },
      {
            question: 'what is the value of (9 + 15 X 3 – 12 + 5 – 6 ÷ 2 = ?) = ?',
            choice1: '45',
            choice2: '44',
            choice3: '46',
            choice4: '41',
            answer: 2,
      
      },
      {
            question: 'Simplify 45 + (6X2 – 1) + (18 ÷ 3 + 4) – 20',
            choice1: '46',
            choice2: '122',
            choice3: '456',
            choice4: '47',
            answer: 1,
      
      },
      {
            question: '67589 X 100000 = ________',
            choice1: '675890000',
            choice2: '6759800000',
            choice3: '6758990000',
            choice4: '6758900000',
            answer: 4,
      
      },
      {
            question: 'Find the number 635 x 941782 x 45 = 941782 x 45 x ________',
            choice1: '653',
            choice2: '635',
            choice3: '666',
            choice4: '94117',
            answer: 2,
      
      },
      {
            question: "A box can contain 20 mangoes. What is the minimum number of boxes required to pack 16455460 mangoes?",
            choice1: '822773',
            choice2: '822173',
            choice3: '82773',
            choice4: '827731',
            answer: 1,
      
      },
      {
            question: 'Find by how much is the sum of 632235671 and 245202506 greater than their difference?',
            choice1: '359040501',
            choice2: '494005012',
            choice3: '490405012',
            choice4: '590405012',
            answer: 3,
      
      },
      {
            question: '43575246 ÷ 1000, find the quotient and the remainder. ',
            choice1: '43575 quotient and 246 Remainder',
            choice2: '41575 quotient and 242 Remainder',
            choice3: '42575 quotient and 46 Remainder',
            choice4: 'none of this',
            answer: 1,
      
      },
      {
            question: 'What is the dividend, when the divisor is 125, quotient is 76 and the remainder is 39?',
            choice1: '9357',
            choice2: '9921',
            choice3: '9872',
            choice4: '9539',
            answer: 4,
      
      },
      {
            question: '764218928 _____ 762418928. Fill in the blanks using <, > or =',
            choice1: '=',
            choice2: '<',
            choice3: '>',
            choice4: 'none',
            answer: 3,
      
      },
      {
            question: 'what is the value of 1.2 X 1.2 = ?',
            choice1: '1.144',
            choice2: '14.4',
            choice3: '1144',
            choice4: '1.44',
            answer: 4,
      
      },
      {
            question: 'Which number is divisible by 9?',
            choice1: '11891',
            choice2: '1395936',
            choice3: '13959361',
            choice4: '31395936',
            answer: 2,
      
      },
      
]
const SCORE_POINTS = 5
const MAX_QUES= 20
 
startGame = () =>{
      qCounter = 0
      score = 0
      availQues = [...questions]
      getNewQuestion()
}
//new
const refresh = () => {
      
resultRight.style.display = "none";
resultWrong.style.display = "none";
}

getNewQuestion = () => {
      if(availQues.length=== 0 || qCounter > MAX_QUES){
            localStorage.setItem('mostRecentScore',score)

            return window.location.assign('score.html')
      }
      qCounter++
      progressText.innerText = `Question ${qCounter} of ${MAX_QUES}`
      progressBarFull.style.width = `${(qCounter/MAX_QUES) * 100}%`
      const questionIndex = Math.floor(Math.random() * availQues.length)
      currentQues=availQues[questionIndex]
      question.innerText= currentQues.question

      choices.forEach(choice => {
            const number= choice.dataset['number']
            choice.innerText=currentQues['choice' + number]
      });

      availQues.splice(questionIndex,1)

      acceptingAns=true
}
choices.forEach(choice =>{
      choice.addEventListener('click', e =>{
      if (!acceptingAns) return

      acceptingAns = false
      const selectedChoice=e.target
      const selectedAnswer=selectedChoice.dataset['number']

      let classToApply = selectedAnswer == currentQues.answer ? 'correct' : 'incorrect' 
      if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
            resultRight.style.display = "block"
            
      }
      else{

            audio.play()
            resultWrong.style.display = "block"
      }

      selectedChoice.parentElement.classList.add(classToApply)

      
      setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            refresh()
      },1000)
      
  })

})
incrementScore = num => {
      score += num
      scoreText.innerText = score
    }
    
    startGame()