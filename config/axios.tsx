import axios from 'axios'

const axiosClient = axios.create(
    {
        baseURL: 'https://coding-challenge-api.aerolab.co',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFhODNkOTliNzc4MTAwMjA5YzVhOWYiLCJpYXQiOjE2MjE3ODc2MDl9.AeIJu5Hkx_K9oq-RuwVpRn_sBa__I2j5c-cj25TQHSE`
        }
    }
)

export default axiosClient
