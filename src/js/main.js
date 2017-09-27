import '../scss/main.scss'
import animals from './animals.js'
import AniClipath from './ani-clipath.js'

// -------------------------------------------------------- //

const next = document.querySelector('.right')
const previous = document.querySelector('.left')

animals.forEach( elem => {
  elem.forEach( _elem => {
  	_elem.p.forEach( __elem => {
  	  __elem.x = (__elem.x/3200*100).toFixed(2) + '%'
  	  __elem.y = (__elem.y/2400*100).toFixed(2) + '%'
  	})
  })
})

let aniClipath = new AniClipath({
  el: '.content',
  speed: 1000,
  delay: 30,
  shapes: animals
})

next.addEventListener('click', () => {
  aniClipath.next()
})
previous.addEventListener('click', () => {
  aniClipath.previous()
})
