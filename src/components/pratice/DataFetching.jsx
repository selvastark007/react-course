import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [post,setPost]  = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    const handleChange = () => {
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[idFromButtonClick])

    return (
        <>

            {/* <ul>
                {posts.map(post =>(

                   <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.userId}</h3>
                   </div>
                    
                ))}
            </ul> */}

            <input type="text" value={id} onChange={e=> setId(e.target.value)} />
            <button onClick={handleChange}>Post Change</button>
           <h2>{post.title}</h2>
        </>
    )
}

export default DataFetching