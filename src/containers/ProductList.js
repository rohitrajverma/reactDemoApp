import React from "react";
import Product from "../components/Product";
import Axios from "axios";
import { connect } from "react-redux";

class ProductList extends React.Component {
  state = { pList: [] };

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const url =
      "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
    Axios.get(url)
      .then((res) => {
        console.log("success", res);
        this.setState({ pList: res.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    const { pList } = this.state;

    return (
      <div className="row">
        {pList.map((value) => (
          <Product
            pData={value}
            key={value.productId}
            currencyCode={this.props.selectedCurrency}
          />
        ))}
        {/* <Product pData={pList} wishlist={true} /> */}
        {/* <Product /> */}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    selectedCurrency: store.currency,
  };
};
// connect(how to connect)(what to connect/component)
export default connect(mapStoreToProps)(ProductList);
