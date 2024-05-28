// app.js 
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();


app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})
     