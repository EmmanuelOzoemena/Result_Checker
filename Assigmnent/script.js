// const submit = document.querySelector('#submit')

// function prompt(){
//   prompt('Your Score is:')
// }

// submit.addEventListener('click', prompt)

// const grade = document.getElementById('grade')
// const score = document.getElementById('score')





const scoreHt = document.querySelector('#score')
const grade = document.querySelector('#submit') 

// const grade = document.getElementById('grade')


grade.addEventListener('click', (e)=>{
  e.preventDefault();
  const score = scoreHt.value
// parseInt(prompt('Enter Your Score:'))

if(score >=70 && score <=100){
  alert(`Your grade is A (Excellent)`)
}else if(score <= 69 && score >=60){
  alert(`Your grade is B (Very Good)`)
}else if(score <= 59 && score >=50){
  alert(`Your grade is C (Credit)`)
}else if(score <= 49 && score >=40){
  alert(`Your grade is D (Fair)`)
}else if(score <= 39 && score >=30){
  alert(`Your grade is E (Pass)`)
}else if(score <= 29 && score >=  0){
  alert(`Your grade is F (Fail)`)
}else{
  alert(`${score} is an invalid grade, please enter a correct grade`)
}  
  }
)