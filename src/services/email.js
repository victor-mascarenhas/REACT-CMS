import http from '../config/http'

//Post
const postEmail = (data) => http.post('/email', data)

export {
    postEmail
}