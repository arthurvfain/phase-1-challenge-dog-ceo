const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
getImage(imgUrl)

let imageDump = document.querySelector('#dog-image-container')

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