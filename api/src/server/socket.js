export default (io) => {
  io.on('connection', async (socket) => {
    console.log(`New client ${socket.id}`)
  })
}
