//https://dev.to/lukocastillo/svelte-3-how-to-connect-your-app-with-a-rest-api-axios-2h4e
import axios from 'axios'

const axiosAPI = axios.create({
    baseURL : "https://pokeapi.co/api/v2/" 
})

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    }

    return axiosAPI({
        method,
        url,
        data: request,
        headers
      }).then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
        return Promise.reject(err)
      });
};

const get = (url, request) => apiRequest("get",url, request)
const deleteRequest = (url, request) =>  apiRequest("delete", url, request)
const post = (url, request) => apiRequest("post", url, request)
const put = (url, request) => apiRequest("put", url, request)

const api ={
    get,
    delete: deleteRequest,
    post,
    put,
};

export default api