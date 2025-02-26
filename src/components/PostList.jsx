import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

export default function PostList() {
    // stato per i post
    const [posts, setPosts] = useState([]);

    // Stato per il form
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: '',
        image: '',
    });

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

    // Funzione per aggiornare i dati del form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Funzione per inviare il form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Invio dei dati al server
        axios.post('http://localhost:3000/posts', formData)
            .then(response => {
                // Aggiungi il nuovo post alla lista senza chiamare di nuovo l'API
                setPosts(prevPosts => [...prevPosts, response.data]);

                // Resetta i dati del form
                setFormData({
                    title: '',
                    content: '',
                    tags: '',
                    image: '',
                });
            })
            .catch(error => {
                setErrorMessage("Errore nella creazione del post.");
                console.error("Errore:", error);
            });
    };

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

            <div className="form">
                <h1>Aggiungi un nuovo post</h1>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Nome post</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Titolo del post"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="content" className="form-label">Contenuto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="content"
                            name="content"
                            placeholder="Descrivi il post"
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tags"
                            name="tags"
                            placeholder="Inserisci i tags"
                            value={formData.tags}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="image" className="form-label">Immagine</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            name="image"
                            placeholder="Inserisci immagine"
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Invia</button>
                    </div>
                </form>
            </div>


        </div >
    );
}
