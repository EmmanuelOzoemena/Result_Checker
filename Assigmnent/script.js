// const submit = document.querySelector('#submit')

// function prompt(){
//   prompt('Your Score is:')
// }

// submit.addEventListener('click', prompt)

// const grade = document.getElementById('grade')
// const score = document.getElementById('score')





// const scoreHt = document.querySelector('#score')
// const grade = document.querySelector('#submit') 

// // const grade = document.getElementById('grade')


// grade.addEventListener('click', (e)=>{
//   e.preventDefault();
//   const score = scoreHt.value
// // parseInt(prompt('Enter Your Score:'))

// if(score >=70 && score <=100){
//   alert(`Your grade is A (Excellent)`)
// }else if(score <= 69 && score >=60){
//   alert(`Your grade is B (Very Good)`)
// }else if(score <= 59 && score >=50){
//   alert(`Your grade is C (Credit)`)
// }else if(score <= 49 && score >=45){
//   alert(`Your grade is D (Fair)`)
// }else if(score <= 45 && score >=40){
//   alert(`Your grade is E (Pass)`)
// }else if(score <= 39 && score >=  0){
//   alert(`Your grade is F (Fail)`)
// }else{
//   alert(`${score} is an invalid grade, please enter a correct grade`)
// }  
//   }
// )

let a
let b
let c
let d
let e
let firstName = ""
let lastName = ""
let email = ""
let regNo = ""
let result = 0;
let avg = 0;


function Calculate() {
  a=parseInt(form1.score1.value)
  b=parseInt(form1.score2.value)
  c=parseInt(form1.score3.value)
  d=parseInt(form1.score4.value)
  e=parseInt(form1.score5.value)
  firstName = form1.firstName.value
  lastName = form1.lastName.value 
  email = form1.email.value 
  regNo = form1.regNo.value 

  result = a + b + c + d + e

  avg = result / 5

  document.write(`Name: ${firstName} ${lastName} <br> `)
  document.write(`Email: ${email} <br> `)
  document.write(`Registration Number: ${regNo} <br> `)
  document.write(`The Total is: ${result} <br>`)
  document.write(`The Avergae is: ${avg} <br>`)

  if (avg > 50) {
    document.write(`Remarks: Proud of you! 👍`)
  } else {
    document.write(`Reamrks: You disappointed your teacher!   😢 `)
  }

  
}
