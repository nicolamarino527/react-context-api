import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { usePosts } from "../contexts/PostContext";
import PostCard from './PostCard';

export default function PostList() {
    // prendiamo i post dal context
    const { posts } = usePosts()

    return (


        <div className='bg'>
            <h2 className='posts-title'>Lista dei Post</h2>
            <div className="post-list mt-5">
                {posts.map((post) => (
                    // cicliamo i post e passiamo la prop a postcard
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div >
    );

}
