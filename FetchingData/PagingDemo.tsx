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
    const [page, setPage] = useState(0);

    const abortControllerRef = React.useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            // cancel the previous request    
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);

            try {
                const res = await fetch(`${BASE_URL}/posts?page=${page}`, {
                    signal: abortControllerRef.current?.signal
                });
                const data = (await res.json()) as Post[];
                setPosts(data);
            }
            catch (err) {
                if(err.name === 'AbortError') {
                    console.log('Request was cancelled');
                    return;
                }
                setError(err);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [page]);   // called on Mount and whenever page changes

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
            <button onClick={() => setPage(page - 1)}>Previous {page}</button>
            <button onClick={() => setPage(page + 1)}>Next {page}</button>
        </div>
    );

}