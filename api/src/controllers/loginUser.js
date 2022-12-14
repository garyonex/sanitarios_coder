import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'

export const recoverUserPass = async (req, res) => {
  const { body } = req
  const { email, password } = body

  const user = await User.findOne({ email })
  const passCorrect =
    user === null ? false : await bcrypt.compare(password, user.password)
  if (!(user && passCorrect)) {
    res.status(401).json({ error: 'Invalid user or password' })
  }
  const userForToken = {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin
  }
  const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
    expiresIn: 60 * 60
  })
  const { ...others } = user._doc
  res.send({ ...others, token })
}
