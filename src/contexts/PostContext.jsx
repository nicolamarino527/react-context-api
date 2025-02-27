import React, { createContext, useState, useContext } from "react";
import { data } from "react-router-dom";


// creiamo il contenuto
const PostContext = createContext();

// stabiliamio provider per fornire i dati dal padre al componente figlio 
export function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);


    //  funzione per caricare i post
    const fetchPosts = (newPosts) => {
        setPosts(newPosts);
    }


    return (
        <PostContext.Provider value={{ posts, fetchPosts }}>
            {children}
        </PostContext.Provider>
    )
}
// hook per consumare il contesto 
export const usePosts = () => {
    return useContext(PostContext)
}

export default PostContext