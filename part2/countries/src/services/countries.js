import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/all'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => response.data)
        .catch(error => {
            alert('FATAL ERROR. Could not retrieve data from API.')
        })
}

export default { getAll }