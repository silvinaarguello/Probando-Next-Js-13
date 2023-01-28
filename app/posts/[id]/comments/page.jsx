import Image from "next/image";
const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve,3000))
    return fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next:{
            revalidate:60
        }
    })
    .then(res => res.json())
} 

export default async function Post ({ params }) {
    const {id} = params;
    const comments = await fetchComments(id)

    return (
        <ul style={{background: '#444', fontSize:'15px', color:"#FFFFFF"}}>
            {comments.map(comment =>(
                <li key={comment.id}>
                    <img widht='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`} />
                    <h4>{comment.name}</h4>
                    <small> {comment.body}</small>
                </li>
            ))};
        </ul>
    )

}