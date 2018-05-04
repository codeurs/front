# Components
A collection of (currently) unfinished and undocumented mithril utilities and components.

## Table of Contents
- [Action](#action)
- [Classes](#classes)
- [Modal](#modal)
- [Portal](#portal)
- [Slider](#slider)

## Action

Use an action component when you have an internal or external link.

```javascript
import {action} from '@codeurs/front'

view() {
  return m('a', action('/url'))
}
```

If you have multiple attributes you must write it a little bit different.

```javascript
import {action} from '@codeurs/front'

view() {
  return m('a', {
    class: 'link',
    ...action('/url')
  })
}
```

## Classes

Conditionally join classNames together. Uses [classNames](https://github.com/JedWatson/classnames) in its implementation but allows you to easily prefix them.

```javascript
import {classes} from '@codeurs/front'

view() {
  const {mod} = this.attrs
  const open = true

  return [
    //class will be 'mod-small'
    m('a', classes({mod: 'small'}), 'Size'),

    //class will be 'mod-small.mod-black'
    m('a', classes({mod: ['small', 'black']}), 'Size and color'),

    //class will not be set if mod is falsy (false/null/undefined/0/NaN/'')
    m('a', classes({mod}), 'Modification'),

    //class will be 'is-open' if open evaluates to true
    m('a', classes({is: {open}}), 'Is open'),

    //class will be 'is-active' if url is '/home'
    m('a', classes({is: {active: action.isActive('/home')}}), 'Is active')
  ]
}
```

## Modal

A temporary UI overlay.

````javascript
import {Component, ModalStore, Modal, ModalOverlay} from '@codeurs/front'

class ModalExample extends Component {
  modal = new ModalStore()
  view() {
    return [
      m('a', {onclick: this.modal.open}, 'Open modal'),
      m(Modal, this.modal, [
        m(ModalOverlay),
        m('.modalexample', 'Popup content')
      ])
    ]
  }
}
````

## Portal

Creates a top-level node in the body and mounts its children. Useful to escape z-index stacking for modals.

````javascript
import {Component, Portal} from '@codeurs/front'

class PortalExample extends Component {
  view() {
    return m(Portal, [
      m('.portalexample', 'This is placed at the end of document.body')
    ])
  }
}
````

## Slider

Horizontal touch enabled slider. Slides can be of variable width.

````javascript
import {Component, Slider, SliderStore} from '@codeurs/front'

export default class SliderExample extends Component {
  slider = new SliderStore()
  view() {
    return m('.sliderexample', [
      m(Slider, this.slider, [
        m('.sliderexample-slide'), // display: inline-block
        m('.sliderexample-slide')  // etc ...
      ]),
      m('a', {onclick: e => this.slider.goPrevious()}, 'Previous'),
      m('a', {onclick: e => this.slider.goNext()}, 'Next')
    ])
  }
}
````
