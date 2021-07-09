let answer = document.querySelector('.answer')
let wrong = document.querySelector('.wrong')
let right = document.querySelector('.right')
let btn = document.querySelector('.btn')
let aha = document.querySelector('.aha')
let show = document.querySelector('.show')
let ra = document.querySelector('.ra')

answer.focus()

const rigthAnswers = { 
    benz : true,
    benzo : true,
    benzema : true,
    بنزيما : true,
    بنزيمة :true ,
    بنزيمه : true
}

btn.addEventListener('click', (e)=> {
    e.preventDefault()
    right.classList.remove('visible')
    wrong.classList.remove('visible')
    if (answer.value.length > 0 ){
        if (answer.value.toLowerCase() in rigthAnswers ){
            console.log(' right answer')
            right.classList.add('visible')
        }
        else { 
            console.log(' wrong answer')
            wrong.classList.add('visible')
            aha.innerHTML = answer.value  
        }
    }

})

show.addEventListener('click' , ()=> { 
    right.classList.add('visible')
    ra.style = 'display : none '
})