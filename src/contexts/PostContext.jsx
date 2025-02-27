import React, { createContext, useState, useContext } from "react";
import { data } from "react-router-dom";


// creiamo il contenuto
const PostContext = createContext();

// stabiliamio provider per fornire i dati dal padre al componente figlio 
export const PostProvider = ({ children }) => {
    const [post, setPosts] = useState([])


    //  funzione per caricare i post
    const fetchPosts = (data) => {
        setPosts(data)
    }


    return (
        <PostContext.Provider value={{ posts, fetchPosts }}>
            {children}
        </PostContext.Provider>
    )
}
// hook per consumare il contesto 
export const usePost = () => {
    return useContext(PostContext)
}

export default PostContext