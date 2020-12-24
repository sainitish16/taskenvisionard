import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import { SingleProduct } from "./Components/SingleProduct";
import { CategoryProducts } from "./Components/CategoryProducts";
import spinnervlll from "./Assets/Images/spinnervlll.gif";
import { DispCard } from "./Components/DispCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-product" exact component={AddProduct} />
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route path="/category/:cat" exact component={CategoryProducts} />
          <Route path="/edit-product/:id" exact component={EditProduct} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  const [allprods, setAllProds] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllProds(json);
      });
  }, []);

  return (
    <div>
      <center style={{ margin: "2%" }}>
        <h1>Get all products </h1>
      </center>
      <div className="container-fluid" align="center">
        <div className="row">
          {allprods.length > 0 ? (
            allprods.map((data) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
                  <DispCard data={data} />
                </div>
              );
            })
          ) : (
            <div className="container-fluid">
              <center>
                <img
                  src={spinnervlll}
                  alt="Loading..."
                  width="100%"
                  height="100%"
                />
              </center>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
