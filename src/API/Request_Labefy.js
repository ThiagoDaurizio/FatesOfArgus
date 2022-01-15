import axios from "axios";
import { URLBase_Labefy } from "../Constants/BaseURL";

const header = {headers: { Authorization: "argus-thiago-carver" } }


export const get_AllClasses = (set_data) => {
    const url = `${URLBase_Labefy}/playlists`

    axios.get(url, header)
        .then((resp) => {
            console.log(resp.data.result.list)
            set_data(resp.data.result.list)
        })
        .catch((error) => {
            console.log("erro", error)
        })
}


export const get_ClassSkillList = (ClassId) => {
    const url = `${URLBase_Labefy}/playlists/${ClassId}/tracks`

    axios.get(url, header)
        .then((resp) => {
            console.log(resp)
        })
        .catch((error) => {
            console.log("erro", error)
        })
}

export const post_NewClass = (body) => {
    const url = `${URLBase_Labefy}/playlists`

    axios.post(url, body, header)
        .then((resp) => {
            window.alert("classe adicionada")
        })
        .catch((error) => {
            console.log("erro", error)
        })
}