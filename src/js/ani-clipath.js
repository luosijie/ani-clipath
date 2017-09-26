const defaultShapes = [
  [
    {
      c: '#000000',
      p: [ { x: '0%', y: '50%' }, { x: '50%', y: '0%' }, { x: '100%', y: '100%' }]
    }
  ],
  [
    {
      c: '#000000',
      p: [ { x: '0%', y: '0%' }, { x: '50%', y: '0%' }, { x: '0%', y: '50%' }]
    }
  ]
]

class AniClipath {
  constructor ( el, shapes ) {
    if (!el) {
      throw error('A DOM container is required!')
    }
    this.shapes = shapes || defaultShapes
  }
}

export default AniClipath
