import { useParams } from "react-router-dom"

const DetailProjectPage = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>ini Halaman Detail Projek</h1>
            <p>id projek: {id}</p>
        </div>
    )
}

export default DetailProjectPage