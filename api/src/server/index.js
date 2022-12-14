import { Server as Websocket } from 'socket.io'
import http from 'http'
import app from './app'
import socket from './socket'
import '../db/database.js'
const server = http.createServer(app)
const PORT = 8080
const httpServer = server.listen(PORT)
const io = new Websocket(httpServer, {
  cors: {
    origin: '*'
  }
})
console.log(`Server on port ${PORT}`)
socket(io)
