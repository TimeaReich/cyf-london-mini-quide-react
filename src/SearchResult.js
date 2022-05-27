import Table from "react-bootstrap/Table";

const SearchResult = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data ? (
        <Table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr>
                <th scope="row">{index}</th>
                <th scope="row">{item.name}</th>
                <th scope="row">{item.address}</th>
                <th scope="row">{item.phone}</th>
                <th scope="row">{item.website}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        ""
      )}
    </div>
  );
};
export default SearchResult;
