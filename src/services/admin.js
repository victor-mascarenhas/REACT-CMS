import http from '../config/http'

//Get
const getProducts = () => http.get('/product')
const getCategories = () => http.get('/category')

//Delete
const delCategories = (_id) => http.delete(`/category/${_id}`)

export {
    getProducts,
    getCategories,
    delCategories
}