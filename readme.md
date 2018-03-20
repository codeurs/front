# Components
A collection of (currently) unfinished and undocumented mithril utilities and components.
## Table of Contents
[Action](#action)
## Action
Use an action component when you have an internal or external link.
```
import {action, Component} from '@codeurs/front'
view(){
    return m('a', action('/url'))
}
```
If you have another attribute you must write it a little bit different.
```
import {action, Component} from '@codeurs/front'
view(){
    return m('a', {
        class: 'link',
        …action('/url'))
    }
}
```
