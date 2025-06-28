function ListGroup() {

    let items = ["USA", "Nigeria", "Germany", "UK", "Finland"];

  return (
    <>
    <h1> List </h1>
    {items.length === 0 && <p> No Item Found</p>}
      <ul className="list-group">
      {items.map((item, index) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
      </ul>
    </>
  );
}

export default ListGroup;
