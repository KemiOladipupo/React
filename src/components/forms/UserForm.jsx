import { useState } from "react";

function UserForm() {
  const [name, setName] = useState(""); // name = ''
  const [error, setError] = useState(""); // error = ''
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z]{2,}$/;

    if (!name.trim()) {
      setError("Sorry! , Name is required!"); // error = Sorry! , Name is required!
      setSubmitted(false);
    } else if (!nameRegex.test(name.trim())){
        setError("Name must contain only letters (A-z or a-z) and must not be less than 2 character");
    }
     else {
      setError(""); // error = ''  i.e initial state which is empty
      setSubmitted(true);
    }
  };

  const DisplayMessage = () => {
    if (error) return <p className="text text-danger"> {error}</p>;
    if (submitted)
      return <p className="text text-success"> {`Hello ${name} !`}</p>;
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <DisplayMessage />
      <label> Name: </label>
      <input
        type="text"
        value={name}
        className="form-control"
        onChange={(e) => {
          setName(e.target.value); // name = input value  (i.e what my user typed)
          setSubmitted(false);
        }}
      />
      <br />

      <button type="submit" className="btn btn-success">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}

export default UserForm;

// Regex- Regular Expression ( used to describe a pattern of text)
// /^/
