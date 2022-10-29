
let loaded = false
let pageHeight = null
let actualPercent = 0
let actualPx = 0


window.addEventListener('DOMContentLoaded', (event) => {
  //console.log('body', document.body.scrollHeight);

  pageHeight = document.body.scrollHeight - window.innerHeight

  loaded = true
  actualPerCent= (actualPx * 100) / pageHeight
  moveMarquis(0.0, 40.0)
})

document.addEventListener("scroll", () => {

  if (loaded) {

    actualPx = window.pageYOffset
    actualPerCent= (actualPx * 100) / pageHeight

    moveMarquis(0.0, 40.0)
  }
})



function moveMarquis(min, max) {
  console.log(actualPerCent)
  const marquis = document.querySelector('.marquis')
  if (actualPerCent <= max && actualPerCent >= min) {


    //marquis.style.left = 'calc(40% + ' + (actualPerCent * 10) + 'px)'

    marquis.style.transform = 'rotate(-12deg) translate(calc(-60% + ' + (actualPerCent * 10) + 'px), 0)'

  }

}
