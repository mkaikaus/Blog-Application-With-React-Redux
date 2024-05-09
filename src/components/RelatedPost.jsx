import { Link } from "react-router-dom"

const RelatedPost = () => {
    return (
        <div class="card">
            <Link to="/post/1">
                <img src="../src/assets/images/ai.jpg" class="card-image" alt="" />
            </Link>
            <div class="p-4">
                <Link to="/post/1" class="text-lg post-title lws-RelatedPostTitle">
                    The future of Artificial Inteligence
                </Link>
                <div class="mb-0 tags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2020-07-15</p>
            </div>
        </div>
    )
}

export default RelatedPost
