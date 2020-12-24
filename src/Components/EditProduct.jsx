import React from "react";

export default class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
      status: 0,
      insertId: "",
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/" + this.props.match.params.id)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          title: json.title,
          price: json.price,
          description: json.description,
          category: json.category,
          image: json.image,
        });
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    var data = this.state;

    fetch("https://fakestoreapi.com/products/" + this.props.match.params.id, {
      method: "PUT",
      body: JSON.stringify({
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          status: 1,
          insertId: json.id,
        });
      });
  };

  render() {
    const {
      title,
      description,
      category,
      price,
      status,
      image,
      insertId,
    } = this.state;
    return (
      <div className="container">
        <h1>Edit Product</h1>
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8">
            {status === 1 && (
              <div className="alert alert-info">
                Edited product successfully <br /> Updated id : {insertId}
              </div>
            )}
            <form
              onSubmit={this.submitHandler}
              id="addproduct-form"
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  Title
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    placeholder="Enter a title"
                    className="form-control"
                    onChange={this.changehandler}
                    required
                  />
                  <br />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    step="0.0001"
                    min="0"
                    placeholder="Enter a price"
                    className="form-control"
                    onChange={this.changehandler}
                    required
                  />
                  <br />
                </div>
              </div>
              <textarea
                name="description"
                id="description"
                value={description}
                className="form-control"
                onChange={this.changehandler}
                placeholder="Enter a description"
                required
                minLength="20"
              />
              <br />
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <select
                    name="category"
                    onChange={this.changehandler}
                    value={category}
                    className="form-control"
                    required
                  >
                    <option value="">Select a Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="men clothing">Men clothing</option>
                    <option value="women clothing">Women clothing</option>
                    <option value="jewelery">Jewelery</option>
                  </select>
                  <br />
                </div>
                <div className="col-md-6 col-sm-12">
                  Image{" "}
                  <input
                    type="file"
                    onChange={(e) => {
                      this.setState({ image: e.target.files[0] });
                    }}
                    accept="image/*"
                    {...(!image && "required")}
                  />
                  <br />
                </div>
              </div>
              {image && (
                <img src={image} width="200px" height="250px" alt={title} />
              )}
              <br />
              <br />
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    );
  }
}
