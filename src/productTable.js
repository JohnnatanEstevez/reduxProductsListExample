import { Component, useState } from "react";
import { Table } from "react-bootstrap";
import { PRODUCT_STATUS } from "./constants";
export default function ProductsTable(props) {
  const [editRow, setEditRow] = useState(null);
  const { products, onUpdate } = props;

  const handleEditStart = (product) => (event) => {
    setEditRow({ ...product });
  };
  const handleChange = ({ target: { name, value } }) => {
    setEditRow((prevEditRow) => ({ ...prevEditRow, [name]: value }));
  };
  const handleStatus = ({ target: { value } }) => {
    setEditRow((prevEditRow) => ({
      ...prevEditRow,
      status: value,
    }));
  };
  const handleUpdate = () => {
    //const { editRow } = this.state;
    onUpdate(editRow);
    setEditRow(null);
  };
  const handleCancel = () => {
    setEditRow(null);
  };
  console.log(editRow);
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) =>
          product.id === editRow?.id ? (
            <tr key={product.id}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={editRow.name}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="price"
                  value={editRow.price}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={editRow.description}
                  onChange={handleChange}
                />
              </td>
              <td>
                <select value={editRow.status} onChange={handleStatus}>
                  {PRODUCT_STATUS.map((status) => (
                    <option value={status}>{status}</option>
                  ))}
                </select>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancel}>Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.status}</td>
              <td style={{ cursor: "pointer" }}>
                <button onClick={handleEditStart(product)}>Edit</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
}

/* export default class ProductsTable1 extends Component {
  state = {
    editRow: null,
  };

  handleEditStart = (product) => (event) => {
    this.setState({
      editRow: { ...product },
    });
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      editRow: { ...prevState.editRow, [name]: value },
    }));
  };
  handleStatus = ({ target: { value } }) => {
    this.setState((prevState) => ({
      editRow: { ...prevState.editRow, status: value },
    }));
  };
  handleCancel = () => {
    this.setState({ editRow: null });
  };
  handleUpdate = () => {
    const { editRow } = this.state;
    this.props.onUpdate(editRow);
    this.setState({ editRow: null });
  };
  render() {
    console.log(this.props);
    const { products, onUpdate } = this.props;
    const { editRow } = this.state;
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            product.id === editRow?.id ? (
              <tr key={product.id}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={editRow.name}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={editRow.price}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    value={editRow.description}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <select value={editRow.status} onChange={this.handleStatus}>
                    {PRODUCT_STATUS.map((status) => (
                      <option value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button onClick={this.handleUpdate}>Update</button>
                  <button onClick={this.handleCancel}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.status}</td>
                <td style={{ cursor: "pointer" }}>
                  <button onClick={this.handleEditStart(product)}>Edit</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    );
  }
}
 */
