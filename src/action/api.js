import axios from "axios";
export const URL = process.env.REACT_APP_URL

export const addTrack = (data) => {
  return axios.post(URL + `/addTrack`, data)
}

export const getAllTrack = () => {
    return axios.get(URL + `/getAllTrack`)
}
