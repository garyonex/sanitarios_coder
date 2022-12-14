import { Router } from 'express'
import {
  allUsers,
  changeUserById,
  checkUser,
  removeUserById,
  userRegister
} from '../controllers/userRegister'
import authToken from '../middlewares/authtoken.js'
import authUserAdmin from '../middlewares/authUserAdmin.js'
const userRoutes = Router()

userRoutes.post('/', userRegister)
userRoutes.get('/:id', authToken, authUserAdmin, checkUser)
userRoutes.get('/', authToken, authUserAdmin, allUsers)
userRoutes.put('/:id', authToken, authUserAdmin, changeUserById)
userRoutes.delete('/:id', authToken, authUserAdmin, removeUserById)
export default userRoutes
