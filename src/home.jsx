import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'muazam', id: 1 },
        { title: 'My second Website', body: 'lorem ipsum...', author: 'Dullah', id: 2 },
        { title: 'My third Website', body: 'lorem ipsum...', author: 'MZM', id: 3 },
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'muazam')} title="Muazam's Blogs" />
        </div>
    );
}

export default Home