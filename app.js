// app.js 
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
); 

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})
     