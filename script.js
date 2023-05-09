let displaySlot = document.createElement('div')
document.body.appendChild(displaySlot)
displaySlot.className="slot"
const section = document.getElementById("section").innerHTML=
`<div class="dogImg">
  <h1 class="dog">A DOG WEBSITE</h1>
  <img class="image" src="dog logo.png" alt="">
</div>
<div class="container">
  <div class="car">
    <h3>Welcome to pets shop</h3>
    <p class></p>
      
  </div>
  <div id="cute">

  </div>
  <div id="fuck">

  </div>
</div>
`


async function fetchDogBreed() {
    response = await fetch('https://dog.ceo/api/breeds/list/all')
    data = await response.json()
    // console.log(data)
    createBreedList(data.message)

}

fetchDogBreed();
function createBreedList(breedList){

    document.getElementById('section').innerHTML += `
    
    <select onchange="specBreed(this.value)">
    
    <option>Choose a dog breed</option>
    
    ${Object.keys(breedList).map(function (x)
        
        {
    
    return `<option>${x}</option>`
    
     })}
    </section>
     `
    
    }
    
    async function specBreed(breed){
    
     if (breed != "Choose a dog breed"){
    
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    
     const data = await response.json()
    // console.log(data)
     showImage(data.message)

     }
    }

   function showImage(image){
    displaySlot.innerHTML = `<img src=${image[0]}>`
    }
