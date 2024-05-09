import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/Posts/postsSlice";
import postReducer from "../features/Post/postSlice"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer
    },
});