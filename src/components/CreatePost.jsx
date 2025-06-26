import { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const CREATED = 201;



    const handleSubmit =  async (e) => {
        
        // Preparing post data to be submitted
        const newPost = {
            title,
            body,
            userId: 1
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }

        const postRequest = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        console.log(postRequest);
        if (postRequest.status === CREATED && postRequest.ok === true ){
            setSuccess(true);
            setBody('');
            setTitle('');
        }else{
          setSuccess(false);
            setBody('');
            setTitle('');
        }
    }
    const titleError= ()=>{
      const titleRegEx = /^[A-Z a-z]{4,20}$/;
      if (!title.trim()){
        setError("Title is required");
        setSubmitted(false);
        setSuccess(false);
      } else if (!titleRegEx.test(title.trim())){
        setError("Your post title cannot be less than 4 characters");
        setError("Your post title cannot be more than 20 characters");
        setSubmitted (false);
        setSuccess(false);
      }else{
        setError(" ");
        setSubmitted(true);
        setSuccess(true);
      }
     }

     const bodyError = () =>{
      const bodyRegEx= /^[A-Z a-z]{10,200}$/;
      if (!body.trim()){
        setError("Post body text is required");
        setSubmitted(false);
        setSuccess(false);
      } else if (!bodyRegEx.test(body.triom())){
        setError("Your post body text cannot be less than 10 characters");
        setError("Your post body text cannot be more than 200 characters");
        setSubmitted (false);
        setSuccess(false);
      } else{
        setError(" ");
        setSubmitted(true);
        setSuccess(true);
      }
     }

     const isDisabled = submitted? " " : "disabled";



  return (
    <div className="container">
        { success && (
            <div className="alert alert-success"> Post Created Successfully! </div>
        )}
      <form className="mt-3" >
        <div className="mb-3">
          <label className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Post Title"
            value={title}
            onChange={ e => {
              setTitle(e.target.value)
              setSubmitted(false)
            }}
          />
          {titleError && <p className="text text-danger">{error}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">
            Post Body
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
          {bodyError && <p className="text text-danger">{error}</p>}
        </div>

        <button type="button" onClick={handleSubmit} onSubmit={isDisabled} className="btn btn-primary"> Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
