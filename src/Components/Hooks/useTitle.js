import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(() =>{
        document.title = `${title} | Paradise Salon`
    },[title])

}

export default useTitle;