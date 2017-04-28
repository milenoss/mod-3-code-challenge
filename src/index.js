$(function(){
  const commentList = new CommentList()
  $('#comment-list').html( commentList.render() )

  $('form#note-form').submit(e => {
    e.preventDefault()
    debugger
    const $input = $(e.target).find('input').first()
    const text = $input.val()
    commentList.addComment(text)
    $('#comment-list').html( commentList.render() )
    $input.val('')
  })
})
