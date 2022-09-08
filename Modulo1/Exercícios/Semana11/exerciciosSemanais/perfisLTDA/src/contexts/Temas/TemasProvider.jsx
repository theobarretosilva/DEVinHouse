import React, { useState } from "react";
import { TemasContext } from "./TemasContext";

export const TemasProvider = (props) => {
    const [tema, setTema] = useState([]);
    return(
        <TemasContext.Provider value={{}}
    )
}