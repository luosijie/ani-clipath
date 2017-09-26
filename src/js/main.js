import '../scss/main.scss'
import animals from './animals.js'
import AniClipath from './ani-clipath.js'

// -------------------------------------------------------- //

animals.forEach( elem => {
  elem.forEach( _elem => {
  	_elem.p.forEach( __elem => {
  	  __elem.x = (__elem.x/3200*100).toFixed(2) + '%'
  	  __elem.y = (__elem.y/2400*100).toFixed(2) + '%'
  	})
  })
})

