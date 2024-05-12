import { useDispatch, useSelector } from "react-redux"
import RelatedPost from "./RelatedPost"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";
import { fetchPost } from "../features/Post/postSlice";
import Loading from "./Loading";
import RelatedPostList from "./RelatedPostList";

const Post = () => {
    const { post, isLoading, isError, error } = useSelector(state => state.post);

    const { id, image, title, isSaved, tags, likes, description } = post;
    const dispatch = useDispatch();
    const { postId } = useParams();
    // console.log(params);

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [postId]);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && !post?.id) {
        content = <div className="col-span-12">No post found!</div>;
    }

    if (!isError && !isLoading && post?.id) {
        content = <main className="post">
            <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>


                <div className="tags" id="lws-singleTags">
                    {tags.map(tag => <span key={tag}>#{tag}</span>)}
                </div>
                <div className="btn-group">
                    <button className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>

                    {isSaved ?
                        <button className="save-btn" id="lws-singleSavedBtn">
                            <i className="fa-regular fa-bookmark"></i> Saved
                        </button> :
                        <button className="active save-btn" id="lws-singleSavedBtn">
                            <i className="fa-regular fa-bookmark"></i> Save
                        </button>
                    }
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    }

    return (
        <div>
            <div className="container mt-8">
                <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>
            <section className="post-page-container">
                {/* <!-- detailed post  --> */}
                {content}
                {/* <!-- detailed post ends --> */}
                {/* <!-- related posts --> */}
                <RelatedPostList currentPostId={id} tags={tags} />
                {/* <!-- related posts ends --> */}
            </section>
        </div>
    )
}

export default Post
