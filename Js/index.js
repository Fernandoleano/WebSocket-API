const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8080 });
let count = 0;

wsServer.on('connection', function(ws) {
    ws.send('WSS Echo Server: Welcome!');

    ws.on('message', function(msg) {
        ws.send('You said: ' + msg);
        // let actionTxt = msg;
        // let res = actionTxt.split('/');
        // let action = res[0];
        // let userId = res[1];
        // ws.send(`action ${action} for ${userId}`);
        count++;
    });

     ws.send('Fernando');
  
    setInterval(function() {
        ws.send('The server time is: ' + new Date());
        ws.send('counter' + count);
    }, 3000);
});
