const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config()


// middle wares
app.use(cors());
app.use(express.json());


















app.get('/' , (req, res) => {
    res.send('running server personal portfolio')
})


app.listen(port , () => {
    console.log(`listening personal portfolio at ${port}`)
})