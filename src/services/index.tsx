import axiosInstance from "./axioInstance"

export interface InputData {
  payload?: any
  header?: any
  url: string
}

export async function Get(data: InputData) {
  const authToken = null

  if (authToken) axiosInstance.defaults.headers.get["Authorization"] = `Bearer ${authToken}`

  return await axiosInstance
    .get(data.url)
    .then(res => {
      return res.data
    })
    .catch(error => {
      if (error.response) {
        return error.response.data
      } else {
        return {
          message: error.message,
          status: false,
        }
      }
    })
}

export async function Post(data: InputData, contentType?: string) {
  const authToken = null

  if (authToken) axiosInstance.defaults.headers.post["Authorization"] = `Bearer ${authToken}`

  if (contentType) axiosInstance.defaults.headers.post["Content-Type"] = contentType
  else axiosInstance.defaults.headers.post["Content-Type"] = "application/json"
  return await axiosInstance
    .post(data.url, data.payload)
    .then(res => {
      return res.data
    })
    .catch(error => {
      if (error.response) {
        return error.response.data
      } else {
        return {
          message: error.message,
          status: false,
        }
      }
    })
}

export async function Delete(data: InputData, contentType?: string) {
  const authToken = null

  if (authToken) axiosInstance.defaults.headers.delete["Authorization"] = `Bearer ${authToken}`

  if (contentType) axiosInstance.defaults.headers.post["Content-Type"] = contentType
  else axiosInstance.defaults.headers.post["Content-Type"] = "application/json"

  return await axiosInstance
    .delete(data.url, {
      data: data.payload
    })
    .then(res => {
      return res.data
    })
    .catch(error => {
      if (error.response) {
        return error.response.data
      } else {
        return {
          message: error.message,
          status: false,
        }
      }
    })
}

export async function Put(data: InputData, contentType?: string) {
  const authToken = null

  if (authToken) axiosInstance.defaults.headers.put["Authorization"] = `Bearer ${authToken}`

  if (contentType) axiosInstance.defaults.headers.post["Content-Type"] = contentType
  else axiosInstance.defaults.headers.post["Content-Type"] = "application/json"

  return await axiosInstance
    .put(data.url, data.payload)
    .then(res => {
      return res.data
    })
    .catch(error => {
      if (error.response) {
        return error.response.data
      } else {
        return {
          message: error.message,
          status: false,
        }
      }
    })
}

