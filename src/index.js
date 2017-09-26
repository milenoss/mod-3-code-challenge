document.addEventListener('DOMContentLoaded', function() {
  const yourNumber = 2 //ENTER YOUR NUMBER HERE
  const imageURL = `https://randopic.herokuapp.com/images/${yourNumber}`
  const likeURL = `https://randopic.herokuapp.com/likes/${yourNumber}`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


  const image = new Image()
  const comment = new Comment()
  document.getElementById('like_button').addEventListener('click',() => image.likeImage(likeURL))
  document.getElementById('comment_form').addEventListener('submit', comment.addComment)


  fetch(imageURL)
  .then(res => res.json() )
  .then(json => image.render(json))





})
