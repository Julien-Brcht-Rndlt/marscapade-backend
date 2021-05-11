//Express setup
const express = require('express');
const app = express();
const activities = require('./routes/activities');
const circuits = require('./routes/circuits');

app.use('/', activities);
app.use('/', circuits);

// Using express.json() middleware
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, (result, error) => {
    if(error) {
        console.error(`error starting http server: ${err.stack}`);
    } else {
        console.log(`Server listening port: ${port}`)
    }
})
