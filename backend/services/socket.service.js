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

        socket.on('connections', () => {
            socket.emit('login', socket.id);
        })

        socket.on('initialUsers', () => {
            if (users === 1) {
                socket.emit('first-navigation', 'user1');
            } else if (users === 2) {
                socket.emit('first-navigation', 'user2');
                // socket.emit('start-game', 'user1')
                // socket.emit('start-game')

            }
        })


        socket.on('two-players', () => {
            // broadcast('word-choosing', '', socketId)
            // gIo.emit('word-choosing')
            socket.broadcast.emit('word-choosing')

        })

        socket.on('send-word', (data) => {
            socket.broadcast.emit('get-word', data)
        })

        socket.on('send-draw', (data) => {
            socket.broadcast.emit('load-draw', data)
        })

        // socket.on('guessing-success', () => {
        //     socket.broadcast.emit('switch-turn')
        // })

        socket.on('add-points', (points = 0) => {
            socket.broadcast.emit('add-points-drawer', points)
        })

        socket.on('disconnect', socket => {
            users -= 1
            console.log(`Socket disconnected [id: ${socket.id}]`)
        })
    })
}


async function broadcast({ type, data, socketId }) {
    socketId = socketId.toString()
    if (socketId) {
        socketId.broadcast.emit(type, data)
    }
}
