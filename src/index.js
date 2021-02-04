console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages();
})

function fetchDogImages() {
	fetch(imgUrl)
	  .then(resp => resp.json())
	  .then(json => renderDogImages(json));
}


function renderDogImages(json){
	const imageContainer = document.querySelector('#dog-image-container')
	json.message.forEach(dogImageURL => {
	  	imageContainer.innerHTML += `<img src="${dogImageURL}" width="400" height="300">`
	})
}



// fetch('https://dog.ceo/api/breeds/image/random/4')
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   json.message.forEach(dogImageURL => {
//     const img = document.createElement('img')
//     img.innerHTML = `<img src=${dogImageURL}>`
//     document.getElementsByTagName("body").appendChild(img)
//   })
// });


