const defaultShapes = [
  [
    {
      c: '#1A1A1A',
      p: [ { x: '50%', y: '30%' }, { x: '30%', y: '70%' }, { x: '70%', y: '70%' }]
    }
  ],
  [
    {
      c: '#E6E6E6',
      p: [ { x: '50%', y: '70%' }, { x: '30%', y: '30%' }, { x: '70%', y: '30%' }]
    }
  ]
]

class AniClipath {
  constructor () {
    const defaults = {
      el: '',
      speed: 1500,
      delay: 30,
      autoplay: true,
      autoplayInterval: 5000,
      shapes: defaultShapes
    }
    if (arguments[0] && typeof arguments[0] == 'object') {
      this.options = Object.assign(defaults, arguments[0])
    }else{
      this.options = defaults
    }
    if (!this.options.el) {
      throw Error('A DOM container is required!')  
    }  
    this.index = 0
    this.length = this.options.shapes.length
    this.container = document.querySelector(this.options.el)
    this.initialNodes = this._build()
    this._init()
  }

  _init () {
    this.container.appendChild(this.initialNodes)
    this._shaping(this.index)
    if (this.options.autoplay) {
      setInterval(this.next.bind(this), this.options.autoplayInterval)
    }
  }

  _build () {
    const fragment = document.createDocumentFragment()
    const startShape = this.options.shapes[this.index]
    for (let i = 0; i < startShape.length; i++) {
      const div = document.createElement('div')
      div.className = 'ani-clipath-shape'
      div.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
      `
      div.style.transition = div.style.webkitTransition = 'all ' + this.options.speed + 'ms' + ' ease-out'
      fragment.appendChild(div)
    }
    return fragment
  }

  _shaping (index) {
    const currentShape = this.options.shapes[index]
    const shapeNodes = this.container.getElementsByClassName('ani-clipath-shape')
    let delay = 0
    for (let i = 0; i < shapeNodes.length; i++) {
      const color = currentShape[i].c
      const points = currentShape[i].p
      let polygon = 'polygon('

      points.forEach( elem => {
        polygon = polygon + elem.x + '' + elem.y + ','
      })
      polygon = polygon.replace(/,$/g, '') + ')'
      
      setTimeout( () => {
        shapeNodes[i].style.backgroundColor = color
        shapeNodes[i].style.clipPath = shapeNodes[i].style.webkitClipPath = shapeNodes[i].webkitClipPath = polygon
      }, delay)
      delay = delay + this.options.delay
    }
  }

  next () {
    this.index ++
    if (this.index >= this.length) {
      this.index = 0
    }
    this._shaping(this.index)
  }
  
  previous () {
    this.index --
    if (this.index < 0) {
      this.index = this.length -1
    }
    this._shaping(this.index)
  }
}

if (typeof window !== 'undefined') {
  window.AniClipath = AniClipath
}

export default AniClipath
