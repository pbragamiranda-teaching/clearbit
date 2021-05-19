const authorization = "Bearer sk_3d0ffa21ead92acb2d11d9abdb8e8f71";
// TODO

const form  = document.querySelector('#clearbitForm')
const input = document.querySelector('#clearbitEmail')

const userName     = document.querySelector('#userName')
const userEmail    = document.querySelector('#userEmail')
const userBio      = document.querySelector('#userBio')
const userLocation = document.querySelector('#userLocation')


const searchEmail = (email) => {
  fetch(`https://person-stream.clearbit.com/v1/people/email/${email}`, {
    headers: {
      Authorization: authorization
    }
  })
    .then(response => response.json())
    .then(data => {
      userName.innerText       = data.name.fullName
      userEmail.innerText      = data.email
      userBio.innerText        = data.bio
      userLocation.innerText   = data.location
    })
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = input.value
  searchEmail(email);
})
