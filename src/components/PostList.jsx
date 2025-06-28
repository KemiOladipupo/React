import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const tableStyle = {
    marginTop: '10px'
  }

  return (
    <>
      <Link to={"/posts/create"} className="btn btn-success btn-md">
        Create Post
      </Link>
      <table className="table table-striped" style={tableStyle}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td> {post.id}</td>
              <td> {post.title}</td>
              <td> {post.body}</td>
              <td>
                <Link
                  to={`/posts/${post.id}`}
                  className="btn btn-primary btn-sm"
                > View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PostList;
