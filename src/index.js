const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

getImage(imgUrl)
getBreeds(breedUrl)

let imageDump = document.querySelector('#dog-image-container')
let listDump = document.querySelector('#dog-breeds')
let completeBreedArray =[]
let filteredBreeds = []

function getImage(url)
{
    fetch(url).then(resp => resp.json()).then(dog => appendDogs(dog.message))
}

function appendDogs(dogArray)
{
    dogArray.forEach(appendMethod)
}

function appendMethod(element)
{
    let dogPic = document.createElement('img')
    dogPic.src = element
    imageDump.appendChild(dogPic) 
}

function getBreeds(url) {
    fetch(url).then(resp => resp.json()).then(breeds => addBreeds(breeds.message))
}

function addBreeds(breeds) {
    for(breed in breeds){
        if(breeds[breed].length > 0) {
            for(variety of breeds[breed]) {
                appendBreedMethodToArray(`${variety} ${breed}`)
            }
        } else {
            appendBreedMethodToArray(breed)
        }
    }
    appendBreedtoDomFromArray(completeBreedArray)
    filterLetter()
}

function appendBreedMethod(breed) {
    let li = document.createElement('li')
    li.addEventListener('click', colorChange)
    li.textContent = breed
    listDump.appendChild(li)
}

function appendBreedMethodToArray(breed) {
    completeBreedArray.push(breed)
}

function appendBreedtoDomFromArray(array)
{
    array.forEach(appendBreedMethod)
}

function colorChange(event) {
    event.target.style.color = '#228b22'
}

function filterLetter() {
    document.querySelector('#breed-dropdown').onchange = (e) => {
        if(e.target.value === 'reset') {
            listDump.innerHTML = ''
            appendBreedtoDomFromArray(completeBreedArray)
        } else {
            filteredBreeds = completeBreedArray.filter(breed => breed[0] === e.target.value)
            listDump.innerHTML = ''
            appendBreedtoDomFromArray(filteredBreeds)
        }
    }
}