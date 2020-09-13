import React from "react";
import PropTypes from "prop-types";
import Column from "./Column";
import ImageWithFallback from "./ImageWithFallback";

class Product extends React.Component {
  _renderButton(stock, wishlist) {
    if (stock) {
      return (
        <button className="btn btn-primary btn-sm btn-block">
          Add to {wishlist ? "Wishlist" : "Cart"}
        </button>
      );
    }
    return (
      <button disabled className="btn btn-danger btn-sm btn-block">
        Out of Stock
      </button>
    );
  }
  render() {
    const { pData, wishlist, currencyCode } = this.props;
    return (
      <Column colSize={4}>
        <div className="shadow-sm p-2 text-center mb-4">
          <ImageWithFallback source={pData.productImage} />
          <h2>{pData.productName}</h2>
          <h3>
            {currencyCode} {pData.productPrice}
          </h3>
          {this._renderButton(pData.productStock, wishlist)}

          {/* {pData.productStock ? (
            <button>Add to Cart</button>
          ) : (
            <p>Out of Stock</p>
          )} */}
        </div>
      </Column>
    );
  }
}
export default Product;
// prop validations
Product.propTypes = {
  pData: PropTypes.object.isRequired,
  wishlist: PropTypes.bool,
};
