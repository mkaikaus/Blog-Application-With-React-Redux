import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/Posts/postsSlice";
import postReducer from "../features/Post/postSlice"
import relatedPostsReducer from "../features/RelatedPost/RelatedPostsSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer,
        relatedPosts: relatedPostsReducer
    },
});