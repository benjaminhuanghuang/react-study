import React from 'react';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
    id: number;
    title: string;
}

export default function Demo() {
    const [posts, setPosts] = useState<Post[]>([]);
    // the loading state
    const [isLoading, setIsLoading] = useState(false);   
    const [error, setError] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            try{
                const res = await fetch(`${BASE_URL}/posts`);
                const data = (await res.json()) as Post[];
                setPosts(data);    
            }
            catch(err) {
                setError(err);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchPosts(); // called on Mount  
    }, []);
    
    if(isLoading) {
        return <div>Loading...</div>;   
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );  

}