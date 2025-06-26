import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const style = {
    marginTop: "10px",
  };

  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );
    const data = await response.json();
    setComments(data);
    console.log(data);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Link to={"/post-list"} className="btn btn-info btn-sm">
          Go Back
        </Link>
        <div className="card" style={style}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
        <div>
          <h3> Comments </h3>
          <div className="card">
            <div className="card-body">
              {" "}
              {comments.map((comment, index) => {
                return (
                  <div key={index} style={style}>
                    <div>
                      {comment.id}
                      <h5 className="card-title">{comment.name}</h5>
                      <h6 className="card-title">{comment.email}</h6>
                      <p className="card-text">{comment.body}</p>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
