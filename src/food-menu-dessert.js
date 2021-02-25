function foodMenuDessert() {
    const divMenuContentFlex = document.createElement('div')
    divMenuContentFlex.classList.add('menu-content-flex')
    const divRowMenuFood = document.createElement('div')
    divRowMenuFood.classList.add('row-menu-food')
    const divColumnMenuFood = document.createElement('div')
    divColumnMenuFood.classList.add('column-menu-food')
    const divContentMenuFood = document.createElement('div')
    divContentMenuFood.classList.add('content-menu-food-right')

    const h2FoodType = document.createElement('h2')
    h2FoodType.innerHTML = 'Desserts'

    //First Option Block
    const divMenuOptionsFirst = document.createElement('div')
    divMenuOptionsFirst.classList.add('menu-options-right')
    const h3First = document.createElement('h3')
    h3First.innerHTML = 'First Option'
    const spanFirst = document.createElement('span')
    spanFirst.classList.add('price')
    spanFirst.innerHTML = '9.50€'
    h3First.appendChild(spanFirst)
    const pFirst = document.createElement('p')
    pFirst.innerHTML = 'Porttitor feugiat mauris tempus, viverra pulvinar. Diam pellentesque.'
    //

    //Second Option Block
    const divMenuOptionsSecond = document.createElement('div')
    divMenuOptionsSecond.classList.add('menu-options-right')
    const h3Second = document.createElement('h3')
    h3Second.innerHTML = 'Second Option'
    const spanSecond = document.createElement('span')
    spanSecond.classList.add('price')
    spanSecond.innerHTML = '10.50€'
    h3Second.appendChild(spanSecond)
    const pSecond = document.createElement('p')
    pSecond.innerHTML = 'Aliquam aliquam vel vitae velit etiam eget facilisis in. Non vulputate.'
    //

    //Third Option Block
    const divMenuOptionsThird = document.createElement('div')
    divMenuOptionsThird.classList.add('menu-options-right')
    const h3Third = document.createElement('h3')
    h3Third.innerHTML = 'Third Option'
    const spanThird = document.createElement('span')
    spanThird.classList.add('price')
    spanThird.innerHTML = '11.50€'
    h3Third.appendChild(spanThird)
    const pThird = document.createElement('p')
    pThird.innerHTML = 'In varius nisl, justo morbi ornare etiam fringilla vitae congue. Vivamus.'
    //

    const divColumnMenuFoodImg = document.createElement('div')
    divColumnMenuFoodImg.classList.add('column-menu-food')
    const divImgMenuFood = document.createElement('div')
    divImgMenuFood.classList.add('image-menu-food')
    divImgMenuFood.id = 'image-dessert'

    //First Option Appends Block
    divMenuOptionsFirst.appendChild(h3First)
    divMenuOptionsFirst.appendChild(pFirst)

    //

    //Second Option Appends Block
    divMenuOptionsSecond.appendChild(h3Second)
    divMenuOptionsSecond.appendChild(pSecond)
    //

    //Third Option Appends Block
    divMenuOptionsThird.appendChild(h3Third)
    divMenuOptionsThird.appendChild(pThird)
    //

    divContentMenuFood.appendChild(h2FoodType)
    divContentMenuFood.appendChild(divMenuOptionsFirst)
    divContentMenuFood.appendChild(divMenuOptionsSecond)
    divContentMenuFood.appendChild(divMenuOptionsThird)


    divColumnMenuFoodImg.appendChild(divImgMenuFood)
    divRowMenuFood.appendChild(divColumnMenuFoodImg)
    divColumnMenuFood.appendChild(divContentMenuFood)
    divRowMenuFood.appendChild(divColumnMenuFood)
    divMenuContentFlex.appendChild(divRowMenuFood)

    return divMenuContentFlex
}

export default foodMenuDessert