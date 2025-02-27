import { Link } from "react-router-dom";
import React from "react";

export default function PostCard({ post }) {
    return (
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
    );
}