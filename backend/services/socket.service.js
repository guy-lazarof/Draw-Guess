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
        console.log('users:', users)

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


        socket.on('start-game', (socketId) => {
            // broadcast('word-choosing', '', socketId)
            // gIo.emit('word-choosing')
            socket.broadcast.emit('word-choosing')

        })

        socket.on('word-choosing', () => {
            console.log('starting game')
        })

        socket.on('disconnect', socket => {
            users -= 1
            console.log(`Socket disconnected [id: ${socket.id}]`)
            console.log('users:', users)
        })
    })
}


async function broadcast({ type, data, socketId }) {
    socketId = socketId.toString()
    if (socketId) {
        socketId.broadcast.emit(type, data)
    }
}

// const excludedSocket = await _getUserSocket(userId)
// if (excludedSocket) {
//     excludedSocket.broadcast.emit(type, data)
// }


// async function emitToUser({ type, data, userId }) {
//     userId = userId.toString()
//     const socket = await _getUserSocket(userId)

//     console.log('type:', type)
//     console.log('data:', data)
//     console.log('userId:', userId)

//     if (socket) {
//         logger.info(`Emiting event: ${type} to user: ${userId} socket [id: ${socket.id}]`)
//         socket.emit(type, data)
//     } else {
//         logger.info(`No active socket for user: ${userId}`)
//         // _printSockets()
//     }
// }


// async function _getUserSocket(userId) {
//     const sockets = await _getAllSockets()
//     const socket = sockets.find(s => s.userId === userId)
//     return socket
// }
