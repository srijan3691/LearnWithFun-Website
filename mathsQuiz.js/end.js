const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const timeStamp = document.querySelector('#timeStamp')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5
var today = new Date();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +" of "+ today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();

timeStamp.innerText = `Date and Time : ${time}`;

finalScore.innerText = `${mostRecentScore} out of 100`;
if(mostRecentScore > 75){
    comment.innerText= `You are a Genius`;
}

else if(mostRecentScore > 55){
        comment.innerText= `You are doing average! Stay Focused`;
    }
else{
        comment.innerText= `Stay Focused! Keep practicing `;
    
}


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('mathematicsQuiz.html')

    
}