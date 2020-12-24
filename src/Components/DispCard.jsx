import { Link } from "react-router-dom";
import React from "react";

export const DispCard = (props) => {
  const [del, setDelete] = React.useState(0);
  const deleteProduct = (id) => {
    fetch("https://fakestoreapi.com/products/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setDelete(json.id);
        }
      });
  };
  return (
    <div
      className="card card-display-product"
      style={{ width: "18rem", margin: "2%" }}
    >
      {del !== 0 && (
        <div className="alert alert-success" role="alert">
          Product deleted successfully
        </div>
      )}
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/product/" + props.data.id}
      >
        <img
          className="card-img-top"
          src={props.data.image}
          alt={props.data.title}
          height="250px"
          width="200px"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <div align="center">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/product/" + props.data.id}
            >
              {props.data.title}{" "}
            </Link>
            <br />
            <span style={{ color: "green" }}>₹{props.data.price}</span>
          </div>
        </h5>
        <div align="left">
          <span className="badge badge-info" style={{ padding: "2%" }}>
            {props.data.category}
          </span>{" "}
          &nbsp;
          <a
            data-toggle="collapse"
            href={"#showdesc" + props.data.id}
            role="button"
            style={{ color: "black" }}
            aria-expanded="false"
            aria-controls={"#showdesc" + props.data.id}
          >
            <i className="fa fa-caret-down"></i>
          </a>
          <div align="right">
            <Link to={"/edit-product/" + props.data.id}>
              <button className="btn btn-secondary">
                <i className="fa fa-edit"></i>
              </button>
            </Link>
            &nbsp;&nbsp;
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteProduct(props.data.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="collapse" id={"showdesc" + props.data.id}>
          <p className="card-text">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
};
