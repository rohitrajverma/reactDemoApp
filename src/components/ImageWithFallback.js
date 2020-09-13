import React from "react";
import PropTypes from "prop-types";

function ImageWithFallback(props) {
  // use state hook
  // let [state_variable,setState_function] = React.useState(initial value);
  let [imgSrc, updateImage] = React.useState(props.source);
  return (
    <img
      src={imgSrc}
      alt={""}
      className="img-thumbnail"
      style={{ height: "300px" }}
      onError={() =>
        updateImage(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"
        )
      }
    />
  );
}
export default ImageWithFallback;
ImageWithFallback.propTypes = {
  source: PropTypes.string.isRequired,
};

// original.jpg
// fails to load : fallback.jpg

// state : initialize the state, use setstate to update the state
// state:{variable:value, variable1:value1,variable2:value2}
