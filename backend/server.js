const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const http = require('http').createServer(app)

app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const { setupSocketAPI } = require('./services/socket.service')

setupSocketAPI(http)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log('Server is running on port: ' + port)
})
// const cookieParser = require('cookie-parser')
// Express App Config
// app.use(cookieParser())
// const authRoutes = require('./api/auth/auth.routes')
// const userRoutes = require('./api/user/user.routes')
// const reviewRoutes = require('./api/review/review.routes')
// const stayRoutes = require('./api/stay/stay.routes')
// const orderRoutes = require('./api/order/order.routes')
// routes
// const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
// app.all('*', setupAsyncLocalStorage)

// app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
// app.use('/api/review', reviewRoutes)
// app.use('/api/stay', stayRoutes)
// app.use('/api/order', orderRoutes)
// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/car/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue/react-router to take it from there
// const logger = require('./services/logger.service')