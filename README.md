<p align="center">
  <img src="https://github.com/luosijie/Front-end-Blog/blob/master/img/logo_aniclipath.png?raw=true">
</p>
<p align="center">
    <strong>For creating clip-path animation,</strong> <a href="https://luosijie.github.io/ani-clipath/">Live Demo</a>
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
#### Props

| Property         | type   | Description                      | default  |
| :--------------- | :----- | :------------------------------- | :------- |
| el               | String | DOM container                    | empty    |
| speed            | Number | Animation speed of each triangle | 1500     |
| delay            | Number | Animation delay of each triangle | 30       |
| autoplay         | Number | Play automatically               | true     |
| autoplayInterval | Number | Intervals of autoplay            | 5000     |
| shapes           | Array  | Data of shapes                   | Array    |

#### Methods

| Method | Description |
| :------ | :----------- |
| next() | Switch to next shape |
| previous() | Switch to previous shape |

```js
<script>
  var aniClipath = new AniClipath({
    el: '.shapes',
    speed: 1000,
    delay: 30,
    autoplay: true,
    autoplayInterval: 5000,
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
