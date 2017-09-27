document.addEventListener('DOMContentLoaded', function() {
  const yourNumber = 2 //ENTER YOUR NUMBER HERE
  const imageURL = `https://randopic.herokuapp.com/images/${yourNumber}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const likes = document.getElementById('likes')
  const addImageToDom = (json) => {
    document.getElementById('image').src = json.url
    document.getElementById('name').innerText = json.name
    likes.innerText = json.likes
    document.getElementById('comments').innerHTML = json.comments
                                                        .map(comment => `<li>${comment.content}</li>`)
                                                        .join(' ')
  }

  document.getElementById('like_button').addEventListener('click', () => {
    likes.innerText = parseInt(likes.innerText)+1
    fetch(likeURL, {
      method: 'POST',
      headers:  {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({image_id: 2})
    })
  })
  fetch(imageURL)
  .then(res => res.json() )
  .then(addImageToDom)


  // const comment = new Comment()
  // document.getElementById('like_button').addEventListener('click',() => image.likeImage(likeURL))
  // document.getElementById('comment_form').addEventListener('submit', comment.addComment)
  //
  //






})
