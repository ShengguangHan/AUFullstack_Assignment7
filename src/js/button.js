import data from '../../data/db.json'

// achieve data info
const buttonsInfo = data.buttons

// create button function
function createButton(buttonsInfo){
  const buttonDom = document.createElement('i')
  buttonDom.classList.add('button')
  buttonsInfo.classNames.forEach(className => {
    buttonDom.classList.add(className)
  });
  return buttonDom
}

// create  button group
export const buttonGroup = document.createElement('div')
buttonGroup.classList.add('buttonGroup')

//create button
buttonsInfo.forEach(buttonInfo => {
  const buttonDom = createButton(buttonInfo)
  buttonGroup.append(buttonDom)
})