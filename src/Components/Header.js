import React from "react";

function Header(props) {
  console.log("Header", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-items">{props.data.length}</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PWLrK9sjBd-bUJXjYWHLldzfhUlwmuhhfQ&usqp=CAU"
          alt="cart-logo"
        />
      </div>
    </div>
  );
}

export default Header;
