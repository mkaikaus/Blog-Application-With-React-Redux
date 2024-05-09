import { useDispatch, useSelector } from "react-redux"
import SinglePost from "./SinglePost"
import { useEffect } from "react";
import { fetchPosts } from "../features/Posts/postsSlice";
import Loading from "./Loading";

const PostContainer = () => {
    const dispatch = useDispatch();
    const { posts, isError, error, isLoading } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && posts?.length === 0) {
        content = <div className="col-span-12">No post found!</div>;
    }

    if (!isError && !isLoading && posts?.length > 0) {
        content = posts.map((post) => (
            <SinglePost key={post.id} post={post} />
        ));
    }

    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    )
}

export default PostContainer
