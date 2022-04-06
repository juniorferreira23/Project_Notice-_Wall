const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api')

const PORT = 5000;

app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, (err) => {
    
    if(err){
        console.log(err);
    }else{
        console.log(`Sevidor Rodando na porta ${PORT}`);
    };
});

