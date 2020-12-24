import React from "react";
import spinnervlll from "../Assets/Images/spinnervlll.gif";
import Carousel from "./Carousel";

export const SingleProduct = (props) => {
  const [data, setData] = React.useState([]);
  const [datastate, setDataState] = React.useState(0);
  React.useEffect(() => {
    setDataState(0);
    fetch("https://fakestoreapi.com/products/" + props.match.params.id)
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setData(json);
          setDataState(1);
        } else {
          setDataState(2);
        }
      });
  }, [props.match.params.id]);
  return (
    <div>
      {datastate === 0 && (
        <div>
          <center>
            <img
              src={spinnervlll}
              alt="Loading..."
              //   width="100%"
              height="100%"
            />
          </center>
        </div>
      )}
      {datastate === 1 && (
        <div className="container" style={{ padding: "3%" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={data.image}
                width="100%"
                style={{ maxHeight: "350px" }}
                alt={data.title}
              />
            </div>
            <div className="col-md-8">
              <h3>{data.title}</h3>
              <span
                className="badge badge-info"
                style={{ padding: "1%", cursor: "pointer" }}
              >
                {data.category}
              </span>{" "}
              <span
                style={{
                  color: "green",
                  fontSize: "1.35rem",
                  fontWeight: "bold",
                }}
              >
                ₹{data.price}
              </span>
              <p>{data.description}</p>
              <div>
                <button className="btn btn-danger">Add to cart</button>
                &nbsp;&nbsp;
                <button className="btn btn-success">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {datastate === 2 && (
        <div>
          <center>
            <h1>No data found...!</h1>
          </center>
        </div>
      )}
      <div className="container-fluid" style={{ marginTop: "3%" }}>
        <Carousel />
      </div>
    </div>
  );
};
