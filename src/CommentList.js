class CommentList {
  constructor(){
    this.comments = []
  }

  renderComments(){
    return this.comments.map(comment => comment.render() ).join('')
  }

  render(){
    return `<ul>${this.renderComments()}</ul>`
  }

  addComment(text){
    const comment = new Comment(text)
    this.comments.push(comment)
  }
}
