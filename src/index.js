$(renderCommentList)

function renderCommentList (){
  const commentList = new CommentList()
  
  $('form#note-form').submit(e => {
    e.preventDefault()
    const $input = $(e.target).find('input').first()
    const text = $input.val()
    commentList.addComment(text)
    $('#comment-list').html( commentList.render() )
    $input.val('')
  })
}
