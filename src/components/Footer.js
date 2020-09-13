import React from "react";
import { ThemeContext } from "../context";

function Footer(props) {
  const theme = React.useContext(ThemeContext);
  const cls = !theme
    ? "footer mt-auto py-3"
    : "footer mt-auto py-3 bg-dark text-white";
  return (
    <footer className={cls}>
      <div className="container">
        <span>&copy; {new Date().getFullYear()}- My APP</span>
      </div>
    </footer>
  );
}
export default Footer;
