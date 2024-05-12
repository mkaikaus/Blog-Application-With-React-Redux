import axios from "../../utils/axios";


export const getRelatedPosts = async ({ tags, id }) => {
    // const { id, image, title, isSaved, tags, likes, description } = post;
    const limit = 5;

    let queryString = tags?.length > 0 ? tags.map(tag =>
        `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
        : `&id_ne=${id}&_limit=${limit}`;

    const response = await axios.get(`/blogs?${queryString}`);

    return response.data;
}