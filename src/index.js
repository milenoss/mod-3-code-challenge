document.addEventListener('DOMContentLoaded', function() {
  const yourNumber = 50 //ENTER YOUR NUMBER HERE
  const imageURL = `https://randopic.herokuapp.com/images/${yourNumber}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let image = document.getElementById('image')
  let name = document.getElementById('name')
  let likes = document.getElementById('likes')
  let comments = document.getElementById('comments')

  document.getElementById('like_button').addEventListener('click',likeImage)
  document.getElementById('comment_form').addEventListener('submit',submitComment)

  fetch('https://randopic.herokuapp.com/images/50')
  .then(res => res.json())
  .then(json => renderPage(json))

  function renderPage(json) {
    image.src = json.url
    name.innerText = json.name
    likes.innerText = json.like_count
    image.dataset.id = json.id
    comments.innerHTML = json.comments.map((comment) => `<li>${comment.content}</li>`).join(" ")
  }

  function likeImage() {
    fetch(`https://randopic.herokuapp.com/likes/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({image_id: image.dataset.id})
    })
    .then(res => res.json())
    likes.innerText = parseInt(likes.innerText)+1
  }

  function submitComment(e) {
    e.preventDefault()
    fetch('https://randopic.herokuapp.com/comments/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        image_id: image.dataset.id,
        comment: document.getElementById('comment_input').value
      })
    })
    .then(res => res.json())
    comments.innerHTML = comments.innerHTML + `<li>${document.getElementById('comment_input').value}</li>`
    document.getElementById('comment_input').value = ""
  }


})
