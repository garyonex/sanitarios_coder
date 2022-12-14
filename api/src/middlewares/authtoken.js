import jwt from 'jsonwebtoken'

const authToken = (req, res, next) => {
  const authUser = req.get('authorization')
  let token = ''
  if (authUser && authUser.toLowerCase().startsWith('bearer')) {
    token = authToken.substring(7)
  }
  let decodeToken = {}
  try {
    decodeToken = jwt.verify(token, process.env.JWT_SECRET)
    const { id: userId } = decodeToken
    req.userId = userId
  } catch (error) {
    if (!token || !decodeToken.id) {
      res.status(401).json({ error: 'Token invalid' })
    }
  }
}

export default authToken