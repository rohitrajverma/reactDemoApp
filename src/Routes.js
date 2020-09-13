import React from "react";
import { Route, Switch } from "react-router-dom";
// import ProductList from "./containers/ProductList";
import Demo from "./Demo";
import ErrorPage from "./components/ErrorPage";
import CheckoutForm from "./containers/CheckoutForm";
import Login from "./containers/Login";
import PrivateRoute from "./components/PrivateRoute";

const LazyProductList = React.lazy(() => import("./containers/ProductList"));

function AppRouter(props) {
  return (
    <main role="main" class="mb-5">
      <div className="container-fluid">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Demo} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={LazyProductList} />
            <PrivateRoute
              path="/checkout/:transactionId"
              component={CheckoutForm}
            />
            <Route component={ErrorPage} />
          </Switch>
        </React.Suspense>
      </div>
    </main>
  );
}
export default AppRouter;
// /products
