import { useState } from "react";

export default function Form() {

    // stato per l errore
    const [errorMessage, setErrorMessage] = useState('');

    // Stato per il form
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: '',
        image: '',
    });

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


        <div className="bg">
            <div className="container">
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
            </div>
        </div>
    )
}