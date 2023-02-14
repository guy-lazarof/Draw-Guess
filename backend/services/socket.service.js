var gIo = null

module.exports = {
    setupSocketAPI,
}

function setupSocketAPI(http) {
    let users = 0

    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })

    gIo.on('connection', socket => {
        console.log(`New connected socket [id: ${socket.id}]`)
        users += 1
        socket.on('drawing', draw => {
            socket.broadcast.emit('drawing-from-server', draw)
        });

        socket.on('connections', () => {
            socket.emit('connections-from-server', users);
        })

        socket.on('disconnect', socket => {
            users -= 1
            console.log(`Socket disconnected [id: ${socket.id}]`)
        })
    })
}
