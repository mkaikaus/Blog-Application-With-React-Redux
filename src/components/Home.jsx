import SideBar from './SideBar'
import Post from './Post'
import PostContainer from './PostContainer'

const Home = () => {
    return (
        <section className="wrapper">
            <SideBar />
            <PostContainer />
            {/* <Post /> */}
        </section>

    )
}

export default Home
