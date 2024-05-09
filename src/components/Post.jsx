import RelatedPost from "./RelatedPost"
import { Link } from "react-router-dom"

const Post = () => {
    return (
        <div>
            <div class="container mt-8">
                <Link to="/" class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    class="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>
            <section class="post-page-container">
                {/* <!-- detailed post  --> */}
                <main class="post">
                    <img src="../src/assets/images/mern.webp" alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
                    <div>
                        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
                            MERN stack for Web Development
                        </h1>
                        <div class="tags" id="lws-singleTags">
                            <span>#python,</span> <span>#tech,</span> <span>#git</span>
                        </div>
                        <div class="btn-group">
                            {/* <!-- handle like on button click --> */}
                            <button class="like-btn" id="lws-singleLinks">
                                <i class="fa-regular fa-thumbs-up"></i> 100
                            </button>
                            {/* <!-- handle save on button click --> */}
                            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                            <button class="active save-btn" id="lws-singleSavedBtn">
                                <i class="fa-regular fa-bookmark"></i> Saved
                            </button>
                        </div>
                        <div class="mt-6">
                            <p>
                                A MERN stack comprises a collection of four frameworks (MongoDB,
                                ExpressJs, ReactJs and NodeJs) used to develop full-stack
                                javascript solutions for rapid, scalable, and secure applications.
                                Each framework serves a different purpose in creating successful
                                web applications. It is an excellent choice for companies looking
                                to develop high-quality responsive applications quickly using just
                                one language.
                            </p>
                        </div>
                    </div>
                </main>
                {/* <!-- detailed post ends --> */}
                {/* <!-- related posts --> */}
                <aside>
                    <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
                    <div class="space-y-4 related-post-container">
                        <RelatedPost />
                    </div>
                </aside>
                {/* <!-- related posts ends --> */}
            </section>
        </div>
    )
}

export default Post
