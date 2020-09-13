import React from "react";
import PropTypes from "prop-types";

function ThemeSwitch(props) {
  // useEffect : lifecycle
  let [theme, updateTheme] = React.useState(false);
  React.useEffect(() => {
    if (theme) {
      document.body.className = "bg-dark";
    } else {
      document.body.className = "";
    }
  });

  return (
    <a
      className="mx-2"
      style={{ cursor: "pointer" }}
      onClick={() => {
        updateTheme(!theme);
        props.changeTheme(!theme);
      }}
    >
      {!theme ? (
        <i className="fas fa-moon fa-2x text-secondary"></i>
      ) : (
          <i className="far fa-sun fa-2x text-white"></i>
        )}
    </a>
  );

  // return (
  //   <div className="custom-control custom-switch">
  //     <input
  //       type="checkbox"
  //       className="custom-control-input"
  //       id="customSwitch1"
  //       onChange={(event) => {
  //         updateTheme(event.currentTarget.checked);
  //         props.changeTheme(event.currentTarget.checked);
  //       }}
  //     />
  //     <label class="custom-control-label" for="customSwitch1">
  //       Dark Mode
  //     </label>
  //   </div>
  // );
}
export default ThemeSwitch;
ThemeSwitch.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};
