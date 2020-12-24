import React from "react";
import spinnervlll from "../Assets/Images/spinnervlll.gif";
import { DispCard } from "./DispCard";

export const CategoryProducts = (props) => {
  const [allprods, setAllProds] = React.useState([]);
  React.useEffect(() => {
    setAllProds([]);
    fetch(
      "https://fakestoreapi.com/products/category/" + props.match.params.cat
    )
      .then((res) => res.json())
      .then((json) => setAllProds(json));
  }, [props.match.params.cat]);
  return (
    <div>
      <center style={{ margin: "2%" }}>
        <h1>Category : {props.match.params.cat}</h1>
      </center>
      {allprods.length > 0 ? (
        <div className="container-fluid" align="center">
          <div className="row">
            {allprods.map((data) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
                  <DispCard data={data} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <center>
            <img
              src={spinnervlll}
              alt="Loading..."
            />
          </center>
        </div>
      )}
    </div>
  );
};
