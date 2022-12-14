import { Router } from 'express'
import { recoverUserPass } from '../controllers/loginUser'

const loginRoutes = Router()
loginRoutes.post('/', recoverUserPass)
export default loginRoutes
