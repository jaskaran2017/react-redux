import { connect } from "react-redux";
import Header from "../Components/Header";

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToprops = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToprops)(Header);
