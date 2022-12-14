import { Router } from 'express'
import {
  create,
  removeById,
  searchAlls,
  searchById,
  updatedProduct
} from '../controllers/productosControllers'

const productRoutes = Router()
productRoutes.get('/', searchAlls)
productRoutes.post('/', create)
productRoutes.get('/:id', searchById)
productRoutes.put('/', updatedProduct)
productRoutes.delete('/:id', removeById)
export default productRoutes
