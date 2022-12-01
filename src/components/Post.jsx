// import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

// working with useParams
// const Post = () => {
//     const params = useParams()

//     return (<div>
//         <h2>Post: {params.id}</h2>
//         <p>Name: {params.name}</p>
//     </div>)
// }

const Post = () => {
    const navigate = useNavigate()

    const status = 200;

    const onClick = () => {
        navigate("/about")
    }

    if (status !== 200) {
        return <Navigate  to = "/notfound" />
    }

    return (
        <div>
            <h2>Post</h2>
            <button onClick={onClick}>to about</button>
            <Routes>
                <Route path="/show" element={<h1>Hello World!</h1>}/>
            </Routes>
        </div>
    )
}

export default Post;