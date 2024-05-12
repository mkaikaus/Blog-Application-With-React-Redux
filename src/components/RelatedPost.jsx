import { Link } from "react-router-dom"

const RelatedPost = ({ post }) => {
    const { id, image, title, createdAt, tags } = post || {};

    return (
        <div className="card">
            <Link to={`/post/${id}`}>
                <img src={image} className="card-image" alt="" />
            </Link>
            <div className="p-4">
                <Link to={`/post/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div className="mb-0 tags">
                    {tags.map(tag => <span key={tag}>#{tag}</span>)}
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    )
}

export default RelatedPost
