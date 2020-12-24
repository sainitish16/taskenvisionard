import React from "react";
import { Link } from "react-router-dom";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json });
      });
  }
  render() {
    const { data } = this.state;
    if (data.length > 0) {
      return (
        <div>
          <center>
            <h3>Top Trends</h3>
          </center>
          <hr />
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[0].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[0].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[0].title}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[1].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[1].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[1].title}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[2].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[2].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[2].title}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[3].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[3].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[3].title}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[4].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[4].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[4].title}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[5].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[5].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[5].title}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[6].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[6].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[6].title}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[7].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[7].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[7].title}</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/product/" + data[8].id}
                    >
                      <img
                        className="d-block w-100"
                        src={data[8].image}
                        alt="First slide"
                        width="200px"
                        height="250px"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>{data[8].title}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}
