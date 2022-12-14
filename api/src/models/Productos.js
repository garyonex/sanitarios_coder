import { model, Schema } from 'mongoose'

const Products = Schema({
  name: {
    required: true,
    unique: true,
    maxlength: 100
  },
  description: {
    required: true,
    type: String,
    maxlength: 1000
  },
  categories: {
    type: Array,
    required: true
  },
  available: {
    required: true,
    type: Boolean
  },
  images: {
    type: String,
    default: []
  }
})

export default model('Product', Products)
