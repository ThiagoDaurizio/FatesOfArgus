import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

import { get_AllClasses } from "../API/Request_Labefy";

export const GlobalState = (props) => {
    const [data, set_data] = useState([])
    
    const [classes, set_classes] = useState([])
    const [classeSkills, set_classeSkills] = useState([])
    const [actualClass, set_actualClass] = useState("")

    useEffect(() => {
        get_AllClasses(set_classes)
    }, [])

    const states = {data, classes, classeSkills, actualClass}
    const setters = {set_data, set_classes, set_classeSkills, set_actualClass}

    return(
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}