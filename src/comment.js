class Comment {
  constructor(comment) {
    this.comment = comment
  }

  render() {
    return `<li>${this.comment}<button class="button">delete</button></li>`
  }

}
