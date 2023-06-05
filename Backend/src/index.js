var express = require('express') 
// const api = require('./api');
var cors = require('cors')
var app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.json({
        message:"Welcome cchuuu"
    })
})
app.use(cors());
app.use(express.json());
app.use('/api',require('./api'));

app.listen(port, () => {
    console.log(`Nayaspotify backend listening on port ${port}`);
  });
  