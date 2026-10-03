import React, { useState, useEffect } from 'react';

function Pr6() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Can fetch from placeholder API or local posts.json
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>API DATA</h2>
            {post.map((post) => (
                <div key={post.id} style={{ marginBottom: '15px' }}>
                    <span>ID: {post.id}</span><br />
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Pr6;
