//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://backend-donasi-sk.test/api'
})

export default Api