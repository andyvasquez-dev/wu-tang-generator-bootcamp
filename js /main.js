// What do we need?
// 1. function for assigning Name - if else based on the values
//

const button = document.querySelector('button')
button.addEventListener('click', nameSend)

function nameSend(){
  let firstName = document.getElementById('name').value
  let color = document.querySelector('#color').value
  let genre = document.querySelector('#genre').value
  let food = document.querySelector('#food').value
  let animal = document.querySelector('#animal').value

  if(firstName == "" || color == "0" || genre == "0" || food == "0" || animal == "0"){
    document.getElementById('wuName').innerHTML = "you are missing a selection"
  }
  else {
    fetch(`/api?name=${firstName}&col=${color}&gen=${genre}&food=${food}&an=${animal}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        document.querySelector('#wuName').innerHTML = data;
      });
  }
  return;
}
