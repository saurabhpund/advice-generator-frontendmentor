const adviceQuote = document.getElementById('advice');
const diceBtn = document.getElementById("dice");
const adviceId = document.getElementById('advice-id')


const Advice = async function(){
    await fetch('	https://api.adviceslip.com/advice')
    .then(res => res.json().then( ({slip}) => {
        adviceQuote.innerText = slip.advice;
        adviceId.innerText = slip.id;
    }))
    .catch(err => console.log(new Error(err)))
}



diceBtn.addEventListener("click", Advice)
document.onload = Advice();