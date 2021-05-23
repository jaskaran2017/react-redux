import { connect } from "react-redux";
import Home from "../Components/Home";
import { AddToCart, RemoveToCart } from "../Services/Actions/action";

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToprops = (dispatch) => ({
  addToCartHandler: (data) => dispatch(AddToCart(data)),
  removeToCartHandler: (data) => dispatch(RemoveToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);
