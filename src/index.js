document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/images/', {
    headers:  'content-type': 'application/json',
              'accept': 'application/json',
  }).then(res => res.json() )
  .then(json => render(json))

})

function render() {
  debugger
}

//give them comment structure
