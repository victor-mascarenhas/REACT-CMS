import http from '../config/http'

//Get
const getProducts = () => http.get('/product')
const getCategories = () => http.get('/category')

//Delete
const delCategories = (_id) => http.delete(`/category/${_id}`)
const delProducts = (_id) => http.delete(`/product/${_id}`)

//Post
const postCategories = (data) => http.post('/category', data)
const postProducts = (data, config = {}) => http.post('/product', data, config)

//Patch
const patchCategories = (_id, data) => http.patch(`/category/${_id}`, data)
const patchProducts = (_id, data) => http.patch(`/product/${_id}`, data)

export {
    getProducts,
    getCategories,
    delCategories,
    postCategories,
    patchCategories,
    delProducts,
    patchProducts,
    postProducts
}