import axios from 'axios'
const baseUrl = 'http://localhost:3001/items'

const getAllItems = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const returnDefaultObject = { getAllItems }
export default returnDefaultObject