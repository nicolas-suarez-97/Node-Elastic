const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({extended:true}));
app.use( function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const PORT = process.env.PORT || 4000;

app.use('/api/employe',require('./routes/employe'));

app.listen(PORT, ()=>{
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});


module.exports = app;