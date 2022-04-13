let postId = ''

window.addEventListener('load', updatePosts)

function updatePosts(){

    fetch('http://192.168.0.120:5000/api/all')
    .then(res => {
        return res.json()
    })
    .then(jsons => {

        jsons = JSON.parse(jsons)

        let posts = ''

        jsons.forEach(json => {
            
            let post = `<div class="col">
            <div class="card" id="${json.id}">
              <div class="card-header">
                  <h5 class="card-title text-white">${json.title}</h5>
              </div>
              <div class="card-body">
                <p class="card-text">${json.description}</p>
                <a href="#" onclick="showEditForm(event)" class="btn btn-success">Edit</a>
                <a href="#" onclick="deletePost(event)" id="del" class="btn btn-danger">Delete</a>
              </div>
            </div>
          </div>`

          posts += post
        })

        document.querySelector('.posts').innerHTML = posts
    })
    .catch(err => {
        console.log(err)
    })
}

function newPost(){

    let title = document.querySelector('#title').value
    let description = document.querySelector('#desc').value

    let post = {title, description}

    let options = {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.0.120:5000/api/new', options)
    .then(res => {
        updatePosts()
        document.querySelector('#title').value = ''
        document.querySelector('#desc').value = ''
    })
    .catch(err => {
        console.log(err)
    })
}

function showEditForm(event){
    document.querySelector('.form-edit').classList.toggle('active')

    postId = event.target.parentNode.parentNode.id

    let title = event.target.parentNode.parentNode.children[0].children[0].innerText
    let description = event.target.parentNode.parentNode.children[1].children[0].innerText

    document.querySelector('#edit_title').value = title
    document.querySelector('#edit_desc').value = description
}

function editPost(){

    let title = document.querySelector('#edit_title').value
    let description = document.querySelector('#edit_desc').value
    
    let post = {
        id: postId,
        title,
        description
    }

    let options = {
        method: 'PUT',
        headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.0.120:5000/api/editPost', options)
    .then(res => {
        updatePosts()
        document.querySelector('.form-edit').classList.toggle('active')
    })
    .catch(err => {
        console.log(err)
    })
}

function deletePost(event){

    postId = event.target.parentNode.parentNode.id

    let post = {
        id: postId
    }
    
    let options = {
        method: 'DELETE',
        headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.0.120:5000/api/deletePost', options)
    .then(res => {
        console.log(res)
        updatePosts()
    })
}