import Table from "react-bootstrap/Table";

const SearchResult = () => {
  return (
    <div>
      <Table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">name</th>
            <th scope="col">name</th>
            <th scope="col">name</th>
            <th scope="col">name</th>
            <th scope="col">name</th>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">thing</th>
            <th scope="row">thing</th>
            <th scope="row">thing</th>
            <th scope="row">thing</th>
            <th scope="row">thing</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default SearchResult;
