import Productos from '../models/Productos.js'

export const searchAlls = async (req, res) => {
  const result = await Productos.find()
  res.status(200).json(result)
}

export const create = async (req, res) => {
  const { body } = req
  const newProduct = await Productos({ body })
  try {
    const saveProduct = newProduct.save()
    res.status(201).json(saveProduct)
  } catch (error) {
    console.log(error)
  }
}

export const searchById = async (req, res) => {
  const { id } = req.params
  const product = await Productos.findById(id)
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json('It was not found')
  }
}

export const removeById = async (req, res) => {
  const { id } = req.params
  await Productos.findByIdAndRemove(id)
  try {
    res.status(204).json('Product has been deleted')
  } catch (error) {
    console.log(error)
  }
}

export const updatedProduct = async (req, res) => {
  const { id } = req.params
  const product = req.body
  const changeProduct = {
    product
  }
  try {
    const result = await Productos.findByIdAndUpdate(id, changeProduct, {
      new: true
    })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}
