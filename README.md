<p align="center">
  <img src="https://github.com/luosijie/Front-end-Blog/blob/master/img/logo_aniclipath.png?raw=true">
</p>
<p align="center">
    <strong>For creating clip-path animation,</strong> <a href="https://luosijie.github.io/vm-markdown/">Live Demo</a>
</p>

### Install

#### CDN

```html
<script src="https://unpkg.com/ani-clipath/dist/ani-clipath.min.js">
```
#### NPM
```bash
npm install --save ani-clipath
```
### Usage
Need a container with **width** and **height**
```html
<style>
  .shapes{
    width: 800px;
    height: 600px;
  }
</style>
...
<div class="shapes"></div>
```
**aniClipth.next()** and **aniClipath.previous()** to switch shapes
```js
<script>
  var aniClipath = new AniClipath({
    el: '.shapes',
    speed: 1000,
    delay: 30,
    shapes: data
  })
  setInterval(function(){
    aniClipath.next()
  },3000)
</script>
```
Data format of shapes
```js
var data = [
  [
    // item of shapes
    { 
      // color of item
      c: '#1A1A1A',
      // polygon position of item
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
```


### License

[MIT](https://github.com/luosijie/vm-editor/blob/master/LICENSE.md)
