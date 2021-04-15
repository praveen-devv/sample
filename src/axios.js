import axios from 'axios'

const instance = axios.create({
    baseUrl : 'http://localhost:5001/clone-a332b/us-central1/api'
})

export default instance;