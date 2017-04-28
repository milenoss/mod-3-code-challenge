class Comment {

  constructor(text){
    this.text = text
  }

  render(){
    return `<li>${this.text}</li>`
  }
}
