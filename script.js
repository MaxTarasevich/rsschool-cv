const hamburger = document.querySelector(`.hamburger`)
const modal = document.querySelector(`.modal-menu`)
const modalLinks = document.querySelectorAll(`.modal-menu ul li`)

function toggleMenu(){
   hamburger.classList.toggle(`active`)
   modal.classList.toggle(`active`)
   if(modal.classList.contains(`active`)){
     document.body.style.overflow = `hidden`
   }else{
      document.body.style.overflow = ``
   }
}

hamburger.addEventListener(`click`,toggleMenu)

modalLinks.forEach((link)=>{
   link.addEventListener(`click`,toggleMenu)
})

const card = document.querySelectorAll(`.card`)

card.forEach((item)=>{
   item.addEventListener(`click`,()=>{
      card.forEach((i)=>{
         i.classList.remove(`active`)
      })
      item.classList.add(`active`)
   })
})
