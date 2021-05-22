import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PWLrK9sjBd-bUJXjYWHLldzfhUlwmuhhfQ&usqp=CAU"
          alt="cart-logo"
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a70.jpg"
            alt="Galaxy A70"
          />
        </div>
        <div className="text-wrapper item">
          <span>Samsung Galaxy A70</span>
          <br />
          <br />
          <span>Price: $760.0</span>
        </div>
        <div className="btn-wrapper">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
