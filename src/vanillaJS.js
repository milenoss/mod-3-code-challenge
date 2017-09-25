document.addEventListener('DOMContentLoaded', function() {
  // your code here!
  const addComment = document.getElementById('comment-form').addEventListener('submit',(e)=>{e.preventDefault(); createComment(document.getElementById('add-comments-input').value);})
  const list = document.getElementsByTagName('li')
  const filter = document.getElementById('filter-comments-input').addEventListener("keyup",(e)=>{e.preventDefault(); filterComments()})
  var commList = []

  function addToList(li) {
    commList.push(li)
    filterComments()
  }

  function filterComments() {
    var fil = document.getElementById('filter-comments-input').value
    var newList = []
    if(fil !== "") {
      for(let i = 0; i < commList.length; i++) {
        if(commList[i].innerText.includes(fil)) {
          newList.push(commList[i])
        }
      }
    } else {
      newList = commList
    }
    commentUL.innerHTML = ""
    newList.forEach((li, index)=>{
      li.childNodes[1].addEventListener('click', deleteComment)
      commentUL.append(li)
    })

  }

  function deleteComment(i) {
    commList.splice(commList.indexOf(this.parentElement),1)
    filterComments()
  }

  function createComment(comment) {
    commentUL = document.getElementById('comments-list')
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(comment));
    var btn = document.createElement('button')
    btn.innerText = "delete"
    btn.className = "button"
    li.appendChild(btn)
    addToList(commentUL.appendChild(li));

  }
})
