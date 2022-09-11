import React, { useState } from "react";
import { TemasContext } from "./TemasContext";

export const TemasProvider = (props) => {
    const [tema, setTema] = useState(dark);
    return(
        <TemasContext.Provider value={{}} >

        </TemasContext.Provider>
    )
}