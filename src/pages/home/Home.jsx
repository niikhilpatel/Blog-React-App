import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import Post from "../../components/post/Post"

export default function Home() {
    return (
        <>
            <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
