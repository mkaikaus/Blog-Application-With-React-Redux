import { Link } from "react-router-dom"

const SinglePost = ({ post = {} }) => {

    const { id, image, title, createdAt, isSaved, tags, likes } = post;


    let saveFlag;
    if (!isSaved) {
        saveFlag = <div className="flex gap-2 mt-4">
            <span className="lws-badge btn-primary"> Save </span>
        </div>
    }
    else {
        saveFlag = <div className="flex gap-2 mt-4">
            <span className="lws-badge-saved"> Saved </span>
        </div>
    }

    return (
        <div className="lws-card">
            <Link to={`/post/${id}`}>
                <img src={image} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt} </p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`/post/${id}`} className="lws-postTitle"> {title} </Link>
                <div className="lws-tags">
                    {tags.map(tag => <span key={tag}>#{tag}</span>)}
                </div>
                {saveFlag}
            </div>
        </div>
    )
}

export default SinglePost
