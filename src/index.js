document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3922 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

    
    //fetch image
    //render image,comments and likes
    //post likes 
    //post comment 
    //display comment 
  
  getImages() 

  function getImages(){ 
      return fetch(imageURL)
      .then(response => response.json())
      .then(result => renderImage(result))
  }




  function renderImage(result){ 
      //debugger
      const div = document.querySelector('#image_card')

      let image = document.querySelector('#image')
      image.src = result.url

      let h4 = document.querySelector('h4')
      h4.innerHTML = result.name

      let span = document.getElementById('likes')
      span.innerText = span.innerText.length
      
      
      let button = document.getElementById('like_button')
      let likes = document.getElementById('likes')
      likes.id = imageId
      likes.innerText = result.like_count
      
      // event listener for like button 
      button.addEventListener('click', function(){
         //console.log
          currentLikes = parseInt(likes.innerText)
          likes.innerText = currentLikes + 1

          let data = {
              image_Id : imageId,
              image_likes: likes
          }

          fetch(likeURL,{
              method: 'POST',
              headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application.json'
              },
              body: JSON.stringify( data)
          })
          .then(res => res.json())
          .then(response => console.log('You are a liker'))
          
      })
        //display the comment 

      const form = document.querySelector('#comment_form')
      result.comments.forEach(function (text){
          commentList = document.getElementById("comments")
          
          singleCommentLi = document.createElement('li')
          singleCommentLi.innerText = text.content
          commentList.append(singleCommentLi)
      })

      form.addEventListener('submit', function(e){
          //debugger
          e.preventDefault()
          const data = {
              image_id: imageId,
              content: e.target.children[0].value
          }

          fetch(commentsURL,{
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'

              }
          }).then(res => res.json())
          .then(response => console.log("Success", JSON.stringify(response)))

      })

  }  

})
  
