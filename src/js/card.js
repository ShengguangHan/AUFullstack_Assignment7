import data from '../../data/db.json'

// achieve data info
const imagesInfo = data.images

//create card function
function createCard(imageInfo){
  const cardDom = document.createElement('div')
  cardDom.classList.add('card')
  cardDom.style.backgroundImage = `url(${imageInfo.address})`
  return cardDom
}

//create cardGroup
export const cardGroup = document.createElement('div')
cardGroup.classList.add('cardGroup')

//cardGroup add card
imagesInfo.forEach(imagesInfo => {
  const cardDom = createCard(imagesInfo)
  cardGroup.append(cardDom)
})