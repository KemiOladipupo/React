import { useEffect, useState } from "react";

function FetchUsers() {
  // https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState([]);

  // const fetchUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((userData) => {

  //       console.log(userData);
  //       setUsers(userData);
  //     });
  // };

  // useEffect(fetchUsers, []);

    const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /**
   * HTTP Verbs: GET, POST, PATCH, PUT, DELETE
   * POST - Create a new resource 
   * PUT -  Replace a whole Resource e.g replace both title, body
   * PATCH - Partial Update i.e some fields in the resource but not ALL
   * DELETE - Remove (delete the resource)
   */

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Username</th>
          <th scope="col">Company</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        { users.map(user => (
            <tr key={user.id}>
                <td> {user.id}</td>
                <td> {user.name}</td>
                <td> {user.email}</td>
                <td> {user.phone}</td>
                <td> {user.username}</td>
                <td> {user.company.name}</td>
                <td> {user.address.city}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FetchUsers;
