import http from '../config/http'

const getProducts = (data) => http.get('/product')

export {
    getProducts
}