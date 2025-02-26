import axios from "axios"
import { useParams, } from "react-router-dom"
import { useState, useEffect, use } from "react"


export default function PostDetail() {

    // desctucturing per riornare l'id
    const { id } = useParams()

    // settiamo lo stato al componente
    const [post, setPost] = useState({})

    // chamiamo la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id} `)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchPost(),
        [])

    return (
        <>
            <div className="card card-detail" key={post.id}>
                <img
                    src={post.image}
                    className="card-img-top"
                    alt="Card image"
                />
                <div className="card-body">
                    <h5 className="card-title title-detail">{post.title}</h5>
                    <p className="card-text">"{post.tags}"</p>
                    <p className="card-text">{post.content}</p>
                </div>
            </div>
        </>
    )
}