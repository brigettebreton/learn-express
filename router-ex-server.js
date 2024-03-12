const express = require('express');
const app = express();
const port = 8001;
const birds = require('./birds');

//looks for url to end in /birds
//ex: localhost:8001 "fails to get", while localhost:8001/birds shows the birds.js home page
app.use('/birds', birds);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});