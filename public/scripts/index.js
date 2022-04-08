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
            <div class="card" id="${json.id}}">
              <div class="card-header">
                  <h5 class="card-title text-white">${json.title}</h5>
              </div>
              <div class="card-body">
                <p class="card-text">${json.description}</p>
              </div>
            </div>
          </div>`

          posts += post
        })

        let PostsHtml = document.querySelector('.posts')

        PostsHtml.innerHTML = posts
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

    fetch('http://192.168.0.120:5000/api/new', options).then(res => {
        console.log(res)
        updatePosts()
        document.querySelector('#title').value = ''
        document.querySelector('#desc').value = ''
    })
    
}