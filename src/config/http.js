import Axios from 'axios'
import { getToken, removeToken } from './auth'
import history from './history'

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

http.interceptors.response.use(
    response => response,
    error => {

        const { response: { status } } = error

        if (error.message === 'Network Error' && !error.message) {
            alert('você está sem internet')
        }

        switch (status) {
            case 401:
                console.log('Token inválido')
                removeToken()
                history.push('/login')
                break;
            default:
                console.log(status, `aconteceu um erro ${status}`)
                break;
        }

        return Promise.reject(error)
    }
)
export default http;