import { useDispatch, useSelector } from "react-redux";
import RelatedPost from "./RelatedPost";
import { useEffect } from "react";
import { fetchRelatedPosts } from "../features/RelatedPost/RelatedPostsSlice";
import Loading from "./Loading";

const RelatedPostList = ({ currentPostId, tags }) => {
    const dispatch = useDispatch();
    const { relatedPosts, isLoading, isError, error } = useSelector((state) => state.relatedPosts);


    useEffect(() => {
        dispatch(fetchRelatedPosts({ tags, id: currentPostId }));
    }, [tags, currentPostId, dispatch]);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && relatedPosts?.length === 0) {
        content = <div className="col-span-12">No post found!</div>;
    }

    if (!isError && !isLoading && relatedPosts?.length > 0) {
        content = relatedPosts.map((post) => (
            <RelatedPost key={post.id} post={post} />
        ));
    }

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {content}
            </div>
        </aside>
    )
}

export default RelatedPostList
