# Components
A collection of (currently) unfinished and undocumented mithril utilities and components.

## Table of Contents
[Action](#action)

## Action

Use an action component when you have an internal or external link.

```javascript
import {action} from '@codeurs/front'
view(){
    return m('a', action('/url'))
}
```

If you have another attribute you must write it a little bit different.

```javascript
import {action} from '@codeurs/front'
view(){
    return m('a', {
        class: 'link',
        ...action('/url')
    })
}
```

## Slider

Horizontal touch enabled slider. Slides can be of variable width.

````javascript
import {Slider, SliderStore, Component} from '@codeurs/front'

export default class MySlider extends Component {
  slider = new SliderStore()
  view() {
    return m('.myslider', [
      m(Slider, this.slider, [
        m('.myslider-slide'), // display: inline-block
        m('.myslider-slide')  // etc ...
      ]),
      m('a', {onclick: e => this.slider.goPrevious()}, 'Previous'),
      m('a', {onclick: e => this.slider.goNext()}, 'Next')
    ])
  }
}
````
