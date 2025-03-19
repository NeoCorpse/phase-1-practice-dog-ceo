const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const list = document.querySelector('#dog-breeds')
const dogImageContainer = document.querySelector('#dog-image-container')
const select = document.querySelector('#breed-dropdown')

fetch(imgUrl)
.then(res => res.json())
.then(arr => arr.message.forEach(img => {
    const image = document.createElement('img')
    image.setAttribute('src', img)
    dogImageContainer.appendChild(image)
    
}))

fetch(breedUrl).then(res => res.json())
.then(obj => {
    obj = obj.message
    let breeds = Object.keys(obj)
    breeds.forEach(createElements)
    select.addEventListener('change', e=> {
        let filtered = breeds.filter((breed) => breed.at(0) === select.value)
        list.replaceChildren()
        filtered.forEach(createElements)
    })
    select.dispatchEvent(new Event('change'))
})

list.addEventListener('click', e => {
    let myStyle = e.target.style
    if (myStyle.color === 'red') {
        myStyle.color = 'black'
    } else {
        myStyle.color = 'red'
    }
})

function createElements(breed){
    const li = document.createElement('li')
    li.innerHTML = `${breed}`
    list.appendChild(li)
}


