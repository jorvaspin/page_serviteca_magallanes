import { useEffect } from "react"; 

const useTitle = (title, description) => {

    useEffect(() => {
        document.title = title
    }, [title]);

    useEffect(() => {
        document.querySelector('meta[name="description"]').setAttribute("content", description);
    }, [description]);
}

export default useTitle;