class Image {

  // render(json) {
  //   document.getElementById('image').src = json.url
  //   document.getElementById('image').alt = json.name
  //   document.getElementById('name').innerText = json.name
  //   document.getElementById('likes').innerText = `${json.likes}`
  //   document.getElementById('image_id').innerText = `${json.id}`
  //   document.getElementById('comments').innerHTML = json.comments
  //                                                   .map((comment) => new Comment(comment.content, comment.id).render())
  //                                                   .join(" ")
  //   var deleteButtons = document.getElementsByClassName('btn')
  //   for(let i = 0; i < deleteButtons.length; i++ ) {
  //     deleteButtons[i].addEventListener('click',(e) => {
  //       new Comment().deleteComment(e)})
  //   }
  // }
  //
  // likeImage(url) {
  //   fetch(url, {
  //     method: 'POST',
  //     headers:{
  //       'content-type': 'application/json',
  //       'accept': 'application/json'
  //     },
  //     body: JSON.stringify({image_id: document.getElementById('image_id').innerText})
  //   })
  //   .then(res => res.json() )
  //   .then(json => this.render(json))
  // }

}
