import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductActionCreator,
  editProductActionCreator,
} from "./redux/products/actionCreator";
import { Button } from "react-bootstrap";
import "./productList.css";
import {
  productsSelector,
  inactiveProductsSelector,
} from "./redux/products/selector";
import ProductsTable from "./productTable";
import { PRODUCT_STATUS } from "./constants";

const INITIAL_STATE = {
  name: "",
  price: "",
  description: "",
  status: PRODUCT_STATUS[0],
};

export default function ProductList() {
  const [product, setProduct] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const inactiveProducts = useSelector(inactiveProductsSelector);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, description, status } = product;
    dispatch(
      createProductActionCreator({
        id: uuidv4(),
        name,
        price,
        description,
        status,
      })
    );

    setProduct(INITIAL_STATE);
  };
  const handleChange = ({ target: { name, value } }) => {
    //console.log(name, value);
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleStatus = ({ target: { value } }) => {
    console.log(value);
    setProduct((product) => ({ ...product, status: value }));
  };
  const handleUpdate = (editedProduct) => {
    dispatch(editProductActionCreator(editedProduct));
  };
  const { name, price, description, status } = product;
  console.log(product);
  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-section">
            <span>Name:</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-section">
            <span>Price:</span>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div className="form-section">
            <span>Description:</span>
            <textarea
              name="description"
              cols="16"
              rows="3"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-section">
            <span>Status:</span>
            <select value={status} onChange={handleStatus}>
              {PRODUCT_STATUS.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>
          </div>
          <button type="submit">Create</button>
        </form>
        <div style={{ padding: "20px" }}>
          <h1>All Products</h1>
          <ProductsTable products={products} onUpdate={handleUpdate} />
        </div>
        <div style={{ padding: "20px" }}>
          <h1>Inactive Products</h1>
          <ProductsTable products={inactiveProducts} />
        </div>
      </div>
    </>
  );
}
