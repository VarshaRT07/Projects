const scores=[24,53,23,66,44,13]
const newscore= scores.filter(score => score<50);
console.log(newscore);
const mapscore= scores.map(score => score/2);
console.log(mapscore);

const numbers = [175, 50, 25];
const rednumbers = numbers.reduce((acc, n) => acc - n);
console.log(rednumbers);

const correctAnswer = ['B','A','B','B','A'];
const form= document.querySelector('.quiz-form');
const result= document.querySelector('.result');

form.addEventListener('submit',e =>{
    e.preventDefault();
    console.log(form)

    let score=0;
    const userAnswers= [form.opt1.value, form.opt2.value, form.opt3.value, form.opt4.value,form.opt5.value];

    userAnswers.forEach((answer, index)=> {
        if(answer === correctAnswer[index]){
            score+= 10;

        }
    });
    scrollTo(0,0);
    result.classList.remove('d-none');

    let output =0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent=`${output}`;
        if(output === score){
            clearInterval(timer);

        } else {
            output++;
        }
    },100)
    // result.querySelector('span').textContent=`${score}`;
    

})



