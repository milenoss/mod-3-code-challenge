class Comment {
  // constructor(comment, id) {
  //   this.comment = comment
  //   this.comment_id = id
  //   this.image = new Image()
  // }
  //
  // render() {
  //   return `<li>${this.comment} <button value="${this.comment_id}" class="btn">delete</button></li>`
  // }
  //
  // addComment(e) {
  //   e.preventDefault()
  //   fetch(`http://localhost:3000/comments/`, {
  //     method: 'POST',
  //     headers:{
  //       'content-type': 'application/json',
  //       'accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       image_id: document.getElementById('image_id').innerText,
  //       comment: document.getElementById('comment_input').value
  //     })
  //   }).then(res => res.json())
  //     .then(json => new Image().render(json))
  // }
  //
  // deleteComment(e) {
  //   fetch(`http://localhost:3000/comments/${e.target.value}`, {
  //     method: 'DELETE',
  //     headers:{
  //       'content-type': 'application/json',
  //       'accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       image_id: document.getElementById('image_id').innerText
  //     })
  //   }).then(res => res.json())
  //     .then(json => this.image.render(json))
  // }
}
