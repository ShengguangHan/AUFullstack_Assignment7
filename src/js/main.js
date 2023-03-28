import '../css/style.scss'

import { cardGroup } from './card'
import { buttonGroup } from './button'

//app dom
const appDom = document.getElementById('app')

//card group
appDom.append(cardGroup)

//add button
cardGroup.append(buttonGroup)

// left button
const leftButton = buttonGroup.querySelector('.left')

leftButton.addEventListener('click', () => {
  // cards
  const cardList = cardGroup.querySelectorAll('.card')
  cardGroup.prepend(cardList[cardList.length - 1])
})

// right button
const rightButton = buttonGroup.querySelector('.right')

rightButton.addEventListener('click', () => {
  // cards
  const cardList = cardGroup.querySelectorAll('.card')
  cardGroup.insertBefore(cardList[0], buttonGroup )
})