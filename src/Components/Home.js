import React from "react";

function Home(props) {
  console.log("Home", props.data);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="item">
          <img
            src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a70.jpg"
            alt="Galaxy A70"
            className="img-wrapper"
          />
        </div>
        <div className="text-wrapper item">
          <span>Samsung Galaxy A70</span>
          <br />
          <br />
          <span>Price: $760.0</span>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "Galaxy A70" })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
