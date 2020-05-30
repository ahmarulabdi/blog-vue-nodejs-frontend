import axios from 'axios'
require('dotenv').config()
export default new axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
