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
            question: 'Convert 9⁄25 into percent.',
            choice1: '30',
            choice2: '26',
            choice3: '36',
            choice4: '62',
            answer: 3,
      
      },
      {
            question: "Convert 75% into common fraction.",
            choice1: '3/4',
            choice2: '1/4',
            choice3: '2/4',
            choice4: '5/16',
            answer: 1,
      
      },
      {
            question: '75% of Rs 1200 is equal to ________.',
            choice1: '800',
            choice2: '900',
            choice3: '750',
            choice4: '1125',
            answer: 2,
      
      },
      {
            question: '10% of plants in a garden are pink rose plants, 30% are red rose plants, 40% are white rose plants and the remaining are jasmine plants. If there are 400 plants in the garden, how many jasmine plants are there in the garden?',
            choice1: '160',
            choice2: '140',
            choice3: '80',
            choice4: '400',
            answer: 3,
      
      },
      {
            question: ' Rahul scored 396 out of 450 marks. What is his percentage marks?',
            choice1: '69.4',
            choice2: '81.89',
            choice3: '88',
            choice4: '91.32',
            answer: 3,
      
      },
      {
            question: 'Weight of kareena is 70% of Saaron weight . if weight of saaron is 66.67kg, then what is the weight of kareena?',
            choice1: '42 kg',
            choice2: '50 kg',
            choice3: '46.67 kg',
            choice4: '50.67kg',
            answer: 3,
      
      },
      {
            question: "Rohan's mother gave him Rs.300, out of which he spent 15% on stationery, 35% on fastfood and saved the remaining amount. How much did Rohan save?",
            choice1: '200',
            choice2: '100',
            choice3: '80',
            choice4: '150',
            answer: 4,
      
      },
      {
            question: "Rudraneel invests 65% of his money in machinery, 20% in raw material and still has Rs.1305 cash with him. Find his total money.",
            choice1: ' Rs.8700  ',
            choice2: ' Rs.7200  ',
            choice3: ' Rs.7900  ',
            choice4: ' Rs.8400  ',
            answer: 1,
      
      },
      {
            question: "Bob scores 56 and John scored 72 in a math exam, full mark of the test is 80. How much percent john scored more than Bob?",
            choice1: '35',
            choice2: '30',
            choice3: '25',
            choice4: '20',
            answer: 4,
      
      },
      {
            question: "A company earns Rs500000, out of which it pays 75% to employees. Then, how much money remain with the company?",
            choice1: 'Rs 15000',
            choice2: 'Rs 125000',
            choice3: 'Rs 155000',
            choice4: 'Rs 105000',
            answer: 2,
      
      },
      {
            question: "In a school there are 800 boys and 850 girls. What are the percentage of boys and girls in the school respectively?",
            choice1: '48.48 % & 51.51 %',
            choice2: '50 % & 50 %',
            choice3: '29 % & 71 % ',
            choice4: '46.89 % & 53.11 %',
            answer: 1,
      
      },
      {
            question: "There are 1500 kg of apples and oranges in a farm, out of which 600 kg are apples. Then, what is the percentage of oranges in the farm?",
            choice1: '55',
            choice2: '50',
            choice3: '65',
            choice4: '60',
            answer: 4,
      
      },
      {
            question: 'A Football team won 40% and lost 60% of all the matches it played in one year. If the team played 70 matches in that year, then how many matches the team lose?',
            choice1: '60',
            choice2: '42',
            choice3: '66',
            choice4: '48',
            answer: 2,
      
      },
      {
            question: "In an exam passing mark is 40%, Joy got 500 marks and failed by 20 marks. What is the total mark of the exam?",
            choice1: '1300',
            choice2: '1200',
            choice3: '1400',
            choice4: '1500',
            answer: 1,
      
      },
      {
            question: 'Harry got 60 out of 80 marks in Mathematics and 60 out of 80 marks in English. Find the total percentage  harry got.',
            choice1: '60',
            choice2: '70',
            choice3: '75',
            choice4: '80',
            answer: 3,
      
      },
      {
            question: '275% of 2 liters is equal to ________.',
            choice1: '5.5 liters',
            choice2: '4.5 liters',
            choice3: '550 liters',
            choice4: '450 liters',
            answer: 1,
      
      },
      {
            question: '45.5% of 20 kg is equal to ________.',
            choice1: '9.0 kg',
            choice2: '9.91 kg',
            choice3: '9.8 kg',
            choice4: '9.1 kg',
            answer: 4,
      
      },
      {
            question: '250% of 4  _____  1450% of (1/4). Fill in the blanks using <, > or =',
            choice1: '=',
            choice2: '<',
            choice3: '>',
            choice4: 'none',
            answer: 3,
      
      },
      {
            question: '65% of 9 liter 700 milliliter is equal to ________.',
            choice1: '5 liter 35 milliliter',
            choice2: '6 liter 35 milliliter',
            choice3: '5 liter 305 milliliter',
            choice4: '6 liter 305 milliliter',
            answer: 4,
      
      },
      {
            question: '2 kg 750 g is _____ percent of 15 kg 750 g.',
            choice1: '7.64',
            choice2: '17.46',
            choice3: '17.64',
            choice4: 'none of the above',
            answer: 2,
      
      },
      
]
const SCORE_POINTS = 5
const MAX_QUES= 20
const MAX= 100
 

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