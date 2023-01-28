import { LikeButton} from './LikeButton.jsx';
import Link from 'next/link.js';

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}) //para que no guarde en cache esto y no haga un htm estatico
    .then(res => res.json())
}
export async function ListOfPosts (){
    const posts = await fetchPosts()

    return posts.slice(0, 5).map(post => (
            <article key={post.id}>
                <Link href='/posts/[id]' as={`/posts/${post.id}`}> 
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton  id={post.id}/>
                </Link>
            </article>
        ))
    
    }