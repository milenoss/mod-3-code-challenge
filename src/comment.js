class CommentList {
  constructor(){
    this.comments = []
  }

  render(){
    return `<ul>${this.comments.map(comment => comment.render() ).join('')}</ul>`
  }

  addComment(text){
    const comment = new Comment(text)
    this.comments.push(comment)
  }
}

class Comment {

  constructor(text){
    this.text = text
  }

  render(){
    return `<li>${this.text}</li>`
  }
}
