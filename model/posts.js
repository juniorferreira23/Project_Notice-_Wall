module.exports = {

    posts: [
        {
            id: '234gwer234',
            title: 'teste title',
            description: 'teste desc'
        }
    ],
    
    getAll: function() {
        return this.posts;
    },

    newPost: function(title, description) {

        this.posts.push({id: generatorId(), title, description});
    }
};

function generatorId(){
    return Math.random().toString(36).substring(2, 9);
};