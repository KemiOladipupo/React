import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/movie-list" element={<Movie />}></Route>
          <Route path="/post-list" element={<PostList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/posts/:id" element={<PostDetails />}></Route>
          <Route path="/posts/create" element={<CreatePost />}></Route>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
