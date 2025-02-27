import PostList from "../components/PostList";
import { usePosts } from "../contexts/PostContext";
import { useEffect } from "react";
import axios from "axios";

export default function PostsPage() {

    // usiamo la funzone per caricare i post
    const { fetchPosts } = usePosts();

    //  faccio la chiamta axios per prendere i dati dalla api
    // carica i post quando il componente si monta

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((res) => {
                fetchPosts(res.data);
            })
            .catch((error) => {
                console.error("Errore nella chiamata API:", error);
            });
    }, [fetchPosts]);


    return (
        <>
            <PostList />
        </>
    )
}