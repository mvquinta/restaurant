import foodMenuTraditional from './food-menu-traditional'
import foodMenuDessert from './food-menu-dessert'
import foodMenuFusion from './food-menu-fusion'
import foodMenuSashimi from './food-menu-sashimi'

function heroHeader() {
    //header main div
    const divHeroImage = document.createElement('div')
    divHeroImage.classList.add('hero-image')

    /********/
    /*Create navbar*/
    /********/
    const divNavbar = document.createElement('div')
    divNavbar.classList.add('navbar')

    const aLogoImg = document.createElement('a')
    aLogoImg.classList.add('btn-logo-img')
    const imgLogo = document.createElement('img')
    imgLogo.classList.add('img_logo')
    imgLogo.setAttribute('src', './assets/top_dos_logo.svg')
    imgLogo.setAttribute('alt', 'dreams of sushi logo')

    const divNavbarRight = document.createElement('div')
    divNavbarRight.classList.add('navbar-right')

    const aBtnHome = document.createElement('a')
    aBtnHome.classList.add('btn-menu')
    aBtnHome.setAttribute('href', '#')
    aBtnHome.innerHTML = 'HOME'
    const aBtnAboutUs = document.createElement('a')
    aBtnAboutUs.classList.add('btn-menu')
    aBtnAboutUs.setAttribute('href', '#aboutUsWrapper')
    aBtnAboutUs.innerHTML = 'ABOUT US'
    const aBtnMenu= document.createElement('a')
    aBtnMenu.classList.add('btn-menu')
    aBtnMenu.setAttribute('href', '#menuWrapper')
    aBtnMenu.innerHTML = 'MENU'
    const aBtnContact = document.createElement('a')
    aBtnContact.classList.add('btn-menu')
    aBtnContact.setAttribute('href', '#contactWrapper')
    aBtnContact.innerHTML = 'CONTACT'

    //Append all divs of navbar
    divNavbarRight.appendChild(aBtnHome)
    divNavbarRight.appendChild(aBtnAboutUs)
    divNavbarRight.appendChild(aBtnMenu)
    divNavbarRight.appendChild(aBtnContact)

    aLogoImg.appendChild(imgLogo)

    divNavbar.appendChild(aLogoImg)
    divNavbar.appendChild(divNavbarRight)

    /********/
    /*Create Hero Text and Button*/
    /********/

    const divHeroText = document.createElement('div')
    divHeroText.classList.add('hero-text')

    const hReserve = document.createElement('h1')
    const spanHReserve = document.createElement('span')
    hReserve.innerHTML = 'Reserve your '
    spanHReserve.innerHTML = 'Experience'
    hReserve.appendChild(spanHReserve)

    const pHeroText = document.createElement('p')
    pHeroText.innerHTML = 'Japanese food to taste your dreams'
    const btnBook = document.createElement('button')
    btnBook.classList.add('btn-book')
    btnBook.setAttribute('type', 'button')
    btnBook.innerHTML = 'Book With Us'

    //Append all divs of hero text
    divHeroText.appendChild(hReserve)
    divHeroText.appendChild(pHeroText)
    divHeroText.appendChild(btnBook)

    //Append main child divs to header main div
    divHeroImage.appendChild(divNavbar)
    divHeroImage.appendChild(divHeroText)

    return divHeroImage
}

function footer() {

    //Create footer element
    const footer = document.createElement('footer')

    //create footer content and append them accordingly
    const pFootA = document.createElement('p')
    pFootA.classList.add('footerP')
    pFootA.innerHTML = ' Created by: '
    const aFootA = document.createElement('a')
    aFootA.setAttribute('href', 'https://github.com/mvquinta')
    aFootA.setAttribute('target', '_blank')
    aFootA.setAttribute('rel', 'noopener noreferrer')
    aFootA.innerHTML = 'mvqdev'
    pFootA.appendChild(aFootA)

    const pFootB = document.createElement('p')
    pFootB.classList.add('footerP')
    const aFootB = document.createElement('a')
    aFootB.setAttribute('href', 'https://www.theodinproject.com/')
    aFootB.setAttribute('target', '_blank')
    aFootB.setAttribute('rel', 'noopener noreferrer')
    aFootB.innerHTML = 'The Odin Project'
    pFootB.appendChild(aFootB)

    //append p elements to footer
    footer.appendChild(pFootA)
    footer.appendChild(pFootB)

    return footer
}

function aboutUsWrapper() {
    //create about-us wrapper - first section
    const divAboutUsWrapper = document.createElement('div')
    divAboutUsWrapper.classList.add('about-us-wrapper')
    divAboutUsWrapper.id = 'aboutUsWrapper'

    const divAboutUsContent = document.createElement('div')
    divAboutUsContent.classList.add('about-us-content')
    //Start of flex structure
    const divRow = document.createElement('div')
    divRow.classList.add('row')
    //First column of two
    const divFirstColumn = document.createElement('div')
    divFirstColumn.classList.add('column')
    const divFirstJapCuisine = document.createElement('div')
    divFirstJapCuisine.classList.add('div-jap-cuisine')
    const hFirstTwo = document.createElement('h2')
    hFirstTwo.innerHTML = 'Enjoy Japanese Cuisine'
    const divFirstYellowStripe = document.createElement('div')
    divFirstYellowStripe.classList.add('yellow-stripe')
    const pFirstCuisine = document.createElement('p')
    pFirstCuisine.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vestibulum orci, aliquam, eu id eget suspendisse odio est. Sapien pretium, maecenas et velit interdum blandit. Suscipit elit. Diam vestibulum orci, aliquam, eu id eget suspendisse odio est. Sapien pretium, maecenas et velit interdum blandit. Suscipit elit.'
    const divFirstImgJapCuisine = document.createElement('div')
    divFirstImgJapCuisine.classList.add('img-jap-cuisine')
    const divFirstImgAboutUs = document.createElement('div')
    divFirstImgAboutUs.classList.add('div-img-about-us')

    //Second column of two
    const divSecondColumn = document.createElement('div')
    divSecondColumn.classList.add('column')

    const divSecondEnjoyCuisine = document.createElement('div')
    divSecondEnjoyCuisine.classList.add('div-enjoy-cuisine')

    const divSecondImgEnjoyCuisine = document.createElement('div')
    divSecondImgEnjoyCuisine.classList.add('img-enjoy-cuisine')

    const divSecondImgAboutUs = document.createElement('div')
    divSecondImgAboutUs.classList.add('div-img-about-us')

    const hSecondTwo = document.createElement('h2')
    hSecondTwo.innerHTML = 'Carefully Selected and Handled'
    const divSecondYellowStripe = document.createElement('div')
    divSecondYellowStripe.classList.add('yellow-stripe')
    const pSecondCuisine = document.createElement('p')
    pSecondCuisine.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vestibulum orci, aliquam, eu id eget suspendisse odio est. Sapien pretium, maecenas et velit interdum blandit. Suscipit elit. Diam vestibulum orci, aliquam, eu id eget suspendisse odio est. Sapien pretium, maecenas et velit interdum blandit. Suscipit elit.'

    //Append all childs
    //append of Second Column
    divSecondImgEnjoyCuisine.appendChild(divSecondImgAboutUs)
    divSecondEnjoyCuisine.appendChild(divSecondImgEnjoyCuisine)
    divSecondEnjoyCuisine.appendChild(hSecondTwo)
    divSecondEnjoyCuisine.appendChild(divSecondYellowStripe)
    divSecondEnjoyCuisine.appendChild(pSecondCuisine)
    divSecondColumn.appendChild(divSecondEnjoyCuisine)
    //append of First Column
    divFirstImgJapCuisine.appendChild(divFirstImgAboutUs)
    divFirstJapCuisine.appendChild(hFirstTwo)
    divFirstJapCuisine.appendChild(divFirstYellowStripe)
    divFirstJapCuisine.appendChild(pFirstCuisine)
    divFirstJapCuisine.appendChild(divFirstImgJapCuisine)
    divFirstColumn.appendChild(divFirstJapCuisine)
    //append columns to Row
    divRow.appendChild(divFirstColumn)
    divRow.appendChild(divSecondColumn)
    //append rest
    divAboutUsContent.appendChild(divRow)
    divAboutUsWrapper.appendChild(divAboutUsContent)

    return divAboutUsWrapper
}

function aboutUsSection3() {
    const divAboutUsSection3Wrapper = document.createElement('div')
    divAboutUsSection3Wrapper.classList.add('about-us-section3-wrapper')

    const divAboutUsSection3 = document.createElement('div')
    divAboutUsSection3.classList.add('about-us-section3')

    const divImgBgSection3 = document.createElement('div')
    divImgBgSection3.classList.add('img-bg-section3')

    const divSection3Content = document.createElement('div')
    divSection3Content.classList.add('div-section3-content')

    const hTwo = document.createElement('h2')
    hTwo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nec quam eget nunc.'
    const divFirstYellowStripe = document.createElement('div')
    divFirstYellowStripe.classList.add('yellow-stripe')
    const pFirst = document.createElement('p')
    pFirst.innerHTML = 'Massa integer congue suspendisse purus tortor fusce pulvinar in. Integer sem sed mattis purus. Enim nibh dignissim malesuada dignissim orci vulputate nec at. Ac quam consequat eu.'
    const divSection3Icons = document.createElement('div')
    divSection3Icons.classList.add('div-section3-icons')

    const divFirstRowIcons = document.createElement('div')
    divFirstRowIcons.classList.add('rowIcons')

    const divFirstColumnIcons = document.createElement('div')
    divFirstColumnIcons.classList.add('columnIcons')
    const divIconsHat = document.createElement('div')
    divIconsHat.classList.add('icons-section3')

    const iconHat = document.createElement('img')
    iconHat.setAttribute('src', './assets/top-dos-hat-icon.svg')
    const h3First = document.createElement('h3')
    h3First.innerHTML = 'Japanese Chef'
    const pIconHat = document.createElement('p')
    pIconHat.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque viverra et vitae nibh.'

    const divSecondColumnIcons = document.createElement('div')
    divSecondColumnIcons.classList.add('columnIcons')
    const divIconsBook = document.createElement('div')
    divIconsBook.classList.add('icons-section3')

    const iconBook = document.createElement('img')
    iconBook.setAttribute('src', './assets/top-dos-book-icon.svg')
    const h3Second = document.createElement('h3')
    h3Second.innerHTML = 'Curated Recipes'
    const pIconBook = document.createElement('p')
    pIconBook.innerHTML = 'Vestibulum enim orci convallis mattis aliquam tortor at lobortis. Non donec pretium eget.'

    divIconsBook.appendChild(iconBook)
    divIconsBook.appendChild(h3Second)
    divIconsBook.appendChild(pIconBook)

    divIconsHat.appendChild(iconHat)
    divIconsHat.appendChild(h3First)
    divIconsHat.appendChild(pIconHat)

    divSecondColumnIcons.appendChild(divIconsBook)
    divFirstColumnIcons.appendChild(divIconsHat)

    divFirstRowIcons.appendChild(divFirstColumnIcons)
    divFirstRowIcons.appendChild(divSecondColumnIcons)
    divSection3Icons.appendChild(divFirstRowIcons)

    divSection3Content.appendChild(hTwo)
    divSection3Content.appendChild(divFirstYellowStripe)
    divSection3Content.appendChild(pFirst)
    divSection3Content.appendChild(divSection3Icons)
    divImgBgSection3.appendChild(divSection3Content)

    divAboutUsSection3.appendChild(divImgBgSection3)

    divAboutUsSection3Wrapper.appendChild(divAboutUsSection3)

    return divAboutUsSection3Wrapper
}

function menuTitle() {
    const divMenuTitle = document.createElement('div')
    divMenuTitle.classList.add('div-menu-title')

    const h2Menu = document.createElement('h2')
    h2Menu.innerHTML = 'Our Menus'
    const pMenu = document.createElement('p')
    pMenu.innerHTML = 'At euismod magna facilisi nulla amet in neque. Porttitor dui quis gravida integer quis aenean. Dignissim morbi in metus, vel sed.'

    const divMenuNavbar = document.createElement('div')
    divMenuNavbar.classList.add('div-menu-navbar')

    const menuNavbar = document.createElement('nav')
    const ulNavbar = document.createElement('ul')
    ulNavbar.classList.add('food-menu-ul')

    const liNavbarTrad = document.createElement('li')
    const aNavbarTrad = document.createElement('a')
    aNavbarTrad.classList.add('btn-food-menu')
    //aNavbarTrad.setAttribute('href', '#')
    aNavbarTrad.innerHTML = 'TRADITIONAL'
    liNavbarTrad.appendChild(aNavbarTrad)

    const liNavbarFusion = document.createElement('li')
    const aNavbarFusion = document.createElement('a')
    aNavbarFusion.classList.add('btn-food-menu')
    //aNavbarFusion.setAttribute('href', '#')
    aNavbarFusion.innerHTML = 'FUSION'
    liNavbarFusion.appendChild(aNavbarFusion)

    const liNavbarSashimi = document.createElement('li')
    const aNavbarSashimi = document.createElement('a')
    aNavbarSashimi.classList.add('btn-food-menu')
    //aNavbarSashimi.setAttribute('href', '#')
    aNavbarSashimi.innerHTML = 'SASHIMI'
    liNavbarSashimi.appendChild(aNavbarSashimi)

    const liNavbarDessert = document.createElement('li')
    const aNavbarDessert = document.createElement('a')
    aNavbarDessert.classList.add('btn-food-menu')
    //aNavbarDessert.setAttribute('href', '#')
    aNavbarDessert.innerHTML = 'DESSERTS'
    liNavbarDessert.appendChild(aNavbarDessert)

    ulNavbar.appendChild(liNavbarTrad)
    ulNavbar.appendChild(liNavbarFusion)
    ulNavbar.appendChild(liNavbarSashimi)
    ulNavbar.appendChild(liNavbarDessert)

    menuNavbar.appendChild(ulNavbar)
    divMenuNavbar.appendChild(menuNavbar)

    divMenuTitle.appendChild(h2Menu)
    divMenuTitle.appendChild(pMenu)
    divMenuTitle.appendChild(divMenuNavbar)

    return divMenuTitle
}

function menuContent() {
    const divMenuContent = document.createElement('div')
    divMenuContent.classList.add('div-menu-content')

    divMenuContent.appendChild(foodMenuTraditional())

    return divMenuContent
}

function menuWrapper() {
    const divMenuWrapper = document.createElement('div')
    divMenuWrapper.classList.add('menu-wrapper')
    divMenuWrapper.id = 'menuWrapper'

    divMenuWrapper.appendChild(menuTitle())
    divMenuWrapper.appendChild(menuContent())

    return divMenuWrapper
}

function contactWrapper() {
    const divContactWrapper = document.createElement('div')
    divContactWrapper.classList.add('contact-wrapper')
    divContactWrapper.id = 'contactWrapper'
    const divContactTitle = document.createElement('div')
    divContactTitle.classList.add('div-contact-title')
    const h2Contact = document.createElement('h2')
    h2Contact.innerHTML = 'Book a Table With Us'
    const divForm = document.createElement('div')
    divForm.classList.add('div-form')

    const formContact = document.createElement('form')
    formContact.setAttribute('action', '')
    formContact.setAttribute('method', '')
    const divFormElements = document.createElement('div')
    divFormElements.classList.add('div-form-elements')

    //Form Creation
    //Date Form Creation
    const inputDate = document.createElement('input')
    inputDate.classList.add('form-field')
    inputDate.setAttribute('type','date')
    inputDate.setAttribute('name','date')
    inputDate.setAttribute('placeholder','')
    //Persons Form Creation
    const inputPersons = document.createElement('input')
    inputPersons.classList.add('form-field')
    inputPersons.setAttribute('type','number')
    inputPersons.setAttribute('name','persons')
    inputPersons.setAttribute('placeholder','Persons')
    //Phone Form Creation
    const inputPhone = document.createElement('input')
    inputPhone.classList.add('form-field')
    inputPhone.setAttribute('type','text')
    inputPhone.setAttribute('name','phonenumber')
    inputPhone.setAttribute('placeholder','Phone Number')
    //Button Form Creation
    const inputButton = document.createElement('input')
    inputButton.classList.add('form-btn')
    inputButton.setAttribute('type','button')
    inputButton.setAttribute('value','Find a Table')
    //

    //Form Appends
    divFormElements.appendChild(inputDate)
    divFormElements.appendChild(inputPersons)
    divFormElements.appendChild(inputPhone)
    divFormElements.appendChild(inputButton)

    //Creation of contact Map
    const divContactMap = document.createElement('div')
    divContactMap.classList.add('div-contact-map')
    const divImgMap = document.createElement('div')
    divImgMap.classList.add('div-img-map')
    const divContactInfoWrapper = document.createElement('div')
    divContactInfoWrapper.classList.add('div-contact-info-wrapper')
    const divContactInfoBox = document.createElement('div')
    divContactInfoBox.classList.add('div-contact-info-box')
    const divContactInfo = document.createElement('div')
    divContactInfo.classList.add('div-contact-info')

    //Creation of white box content
    const h4BoxFirst = document.createElement('h4')
    h4BoxFirst.innerHTML = 'Contact Details'
    const pBoxFirst = document.createElement('p')
    pBoxFirst.innerHTML = 'A Street in the City'
    const pBoxSecond = document.createElement('p')
    pBoxSecond.innerHTML = '+123 456 789'
    const pBoxThird = document.createElement('p')
    pBoxThird.innerHTML = 'contact@sushidreams.com'
    const h4BoxSecond = document.createElement('h4')
    h4BoxSecond.innerHTML = 'Opening Hours'
    //Creation of Opening Hours
    const pBoxFourth = document.createElement('p')
    pBoxFourth.innerHTML = 'Tuesday / Friday'
    const spanBoxFourth = document.createElement('span')
    spanBoxFourth.innerHTML = '11:00 / 23:00'
    pBoxFourth.appendChild(spanBoxFourth)
    //
    const pBoxFifth = document.createElement('p')
    pBoxFifth.innerHTML = 'Saturday / Sunday'
    const spanBoxFifth = document.createElement('span')
    spanBoxFifth.innerHTML = '11:00 / 01:00'
    pBoxFifth.appendChild(spanBoxFifth)
    //
    const pBoxSixth = document.createElement('p')
    pBoxSixth.innerHTML = 'Monday'
    const spanBoxSixth = document.createElement('span')
    spanBoxSixth.innerHTML = '11:00 / 01:00'
    pBoxSixth.appendChild(spanBoxSixth)


    //Append of whitebox content
    divContactInfo.appendChild(h4BoxFirst)
    divContactInfo.appendChild(pBoxFirst)
    divContactInfo.appendChild(pBoxSecond)
    divContactInfo.appendChild(pBoxThird)
    divContactInfo.appendChild(h4BoxSecond)
    divContactInfo.appendChild(pBoxFourth)
    divContactInfo.appendChild(pBoxFifth)
    divContactInfo.appendChild(pBoxSixth)

    divContactInfoBox.appendChild(divContactInfo)
    divContactInfoWrapper.appendChild(divContactInfoBox)
    divImgMap.appendChild(divContactInfoWrapper)
    divContactMap.appendChild(divImgMap)

    formContact.appendChild(divFormElements)
    divForm.appendChild(formContact)
    divForm.appendChild(divContactMap)

    divContactTitle.appendChild(h2Contact)
    divContactTitle.appendChild(divForm)
    divContactWrapper.appendChild(divContactTitle)

    return divContactWrapper
}

function main() {
    //create main div
    const divMain = document.createElement('div')
    divMain.classList.add('main')

    divMain.appendChild(aboutUsWrapper())
    divMain.appendChild(aboutUsSection3())
    divMain.appendChild(menuWrapper())
    divMain.appendChild(contactWrapper())

    return divMain
}

function menuElection(menuClick) {
    if (menuClick === 'TRADITIONAL') {
        let menuWrapper = document.querySelector('.menu-wrapper')
        let removeDiv = document.querySelector('.div-menu-content')
        removeDiv.remove()
        let newDivMenuContent = document.createElement('div')
        newDivMenuContent.classList.add('div-menu-content')
        newDivMenuContent.appendChild(foodMenuTraditional())
        menuWrapper.appendChild(newDivMenuContent)
    } else if (menuClick === 'FUSION') {
        let menuWrapper = document.querySelector('.menu-wrapper')
        let removeDiv = document.querySelector('.div-menu-content')
        removeDiv.remove()
        let newDivMenuContent = document.createElement('div')
        newDivMenuContent.classList.add('div-menu-content')
        newDivMenuContent.appendChild(foodMenuFusion())
        menuWrapper.appendChild(newDivMenuContent)
    } else if (menuClick === 'SASHIMI') {
        let menuWrapper = document.querySelector('.menu-wrapper')
        let removeDiv = document.querySelector('.div-menu-content')
        removeDiv.remove()
        let newDivMenuContent = document.createElement('div')
        newDivMenuContent.classList.add('div-menu-content')
        newDivMenuContent.appendChild(foodMenuSashimi())
        menuWrapper.appendChild(newDivMenuContent)
    } else if (menuClick === 'DESSERTS') {
        let menuWrapper = document.querySelector('.menu-wrapper')
        let removeDiv = document.querySelector('.div-menu-content')
        removeDiv.remove()
        let newDivMenuContent = document.createElement('div')
        newDivMenuContent.classList.add('div-menu-content')
        newDivMenuContent.appendChild(foodMenuDessert())
        menuWrapper.appendChild(newDivMenuContent)
    }
}

function dreamsOfSuhi() {
    document.body.appendChild(heroHeader())
    document.body.appendChild(main())
    document.body.appendChild(footer())

    document.querySelector('.food-menu-ul').addEventListener('click', (e) => {
        let menuClick = e.target.textContent
        menuElection(menuClick)
    })
}

dreamsOfSuhi()