import React, { useState } from "react";
import { TemasContext } from "./TemasContext";

export const TemasProvider = (props) => {
    const [tema, setTema] = useState(dark);
    return(
        <TemasContext.Provider value={{}} >
<<<<<<< HEAD

=======
            
>>>>>>> b5a991b19f9327e2e087daa3b2e7ef1327c0c69b
        </TemasContext.Provider>
    )
}