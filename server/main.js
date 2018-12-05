const SSE = require('sse-nodejs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/time', (req, res) => {
    var app = SSE(res);
    app.sendEvent('time', () => {
        return new Date
    }, 3000);

    app.disconnect(() => {
        console.log("disconnected");
    });

    app.removeEvent('time', 25100);

})
;

app.listen(8080, () => {
    console.log('SSE server start at port: 8000')
});