class CommentList {
  constructor(comments = []) {
      this.comments = comments.map(comment => new Comment(comment))
  }

  render() {
    // var filter = document.getElementById('filter-comments-input').value
    // var newList = []
    // debugger
    // if(filter !== "") {
    //   for(let i = 0; i < this.comments.length; i++) {
    //
    //     if(this.comments[i].substring.includes(filter)) {
    //       newList.push(this.comments[i])
    //     }
    //   }
    // } else {
    //   newList = this.comments
    // }
    debugger
    document.getElementById('comments-list').innerHTML = newList.join(" ")
    var buttons = document.getElementsByClassName('button')
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', this.deleteComment)
    }
  }

  addComment(newComment) {
    this.comments.push(new Comment(newComment).render())
    this.render()
  }

  deleteComment() {
    this.parentElement.parentElement.removeChild(this.parentElement)
  }
}
