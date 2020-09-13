import React from "react";
import Column from "./Column";
import { ThemeContext } from "../context";

function ErrorPage(props) {

  return (
    <div className="row">
      <Column colSize={1}>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Oops! This Page Could Not Be Found</h2>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed. name changed or is temporarily unavailable
            </p>
            <a href="/">Go To Homepage</a>
          </div>
        </div>
      </Column>
    </div>
  );
}
export default ErrorPage;
