import User from '../models/Users.js'

const authUserAdmin = async (req, res, next) => {
  const { userId } = req
  const id = userId
  try {
    const user = await User.findById(id)
    const userAdmin = user.isAdmin
    if (userAdmin) {
      next()
    } else {
      res.status(403).json('your are no alowed to do that')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default authUserAdmin
