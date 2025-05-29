import {useEffect, useState} from "react";
import Post from "./Post.jsx";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
            console.log(posts);
            setPosts(posts)
        })
            .catch((error) => console.log(error.message))
    }, []);


    return (
        <>
            {posts.map((post) => {
               return <Post key={post.id} {...post} />
            })}
            </>
    )
}

export default Posts