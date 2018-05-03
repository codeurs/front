import stream from 'mithril/stream'

export class ModalStore {
  isOpen = false

  open = () => 
    this.isOpen = true

  close = () => 
    this.isOpen = false

  toggle = () => 
    this.isOpen = !this.isOpen
}