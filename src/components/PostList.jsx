import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

export default function PostList() {
    // stato per i post
    const [posts, setPosts] = useState([]);

    // stato per l errore
    const [errorMessage, setErrorMessage] = useState('');

    // Funzione per ottenere i post
    function fetchPosts() {
        axios.get('http://localhost:3000/posts')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => {
                console.error("Errore nella chiamata API:", error);
            });
    }

    // Carica i post quando il componente si monta
    useEffect(() => {
        fetchPosts();
    }, []);

    return (


        <div className='bg'>
            <h2 className='posts-title'>Lista dei Post</h2>
            <div className="post-list mt-5">
                {posts.map((post) => (
                    <Link to={`/posts/${post.id}`} className='card-link'>
                        <div className="card" key={post.id}>
                            <img
                                src={post.image}
                                className="card-img-top"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.tags}</p>
                                <p className="card-text">{post.content}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}
