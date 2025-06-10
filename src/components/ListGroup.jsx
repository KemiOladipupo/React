function ListGroup() {

    let items = ["USA", "Nigeria", "Germany", "UK", "Finland"];

    items = [];

    const noItem = () => {
      if (items.length === 0) {
        return <p> No Item Found</p>;
      }
    }
  return (
    <>
    <h1> List </h1>
      { noItem()}
      <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
      ))}
      </ul>
    </>
  );
}

export default ListGroup;
