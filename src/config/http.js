import Axios from 'axios'
import { getToken } from './auth'

//const localUrlApi = 'http://localhost:4646'

const http = Axios.create({
    baseURL:'https://chido-tacos.herokuapp.com/'
//dando erro no process env enquanto  não deployado 
    //baseURL: process.env.REACT_APP_API || localUrlApi
})

http.defaults.headers['Content-type'] = 'application/json'

if(getToken()){
    http.defaults.headers['x-auth-token'] = getToken();
}

export default http;