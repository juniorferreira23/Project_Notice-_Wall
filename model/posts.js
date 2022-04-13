module.exports = {

    posts: [],
    
    getAll: function() {
        return this.posts;
    },

    newPost: function(title, description) {

        this.posts.push({id: generatorId(), title, description});
    },

    editPost: function(id, title, description) {

        this.posts.forEach((post) => {
            if(post.id == id){
                post.title = title
                post.description = description
            }else{
                return false
            }
        })
    },

    deletePost: function(id){
        this.posts.forEach((post, index) => {
            if(post.id == id){
                this.posts.splice(index, 1)
            }else{
                return false
            }
        })
    }
};

function generatorId(){
    return Math.random().toString(36).substring(2, 9);
};