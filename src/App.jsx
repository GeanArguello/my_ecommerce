import React from "react";
import { Nav } from "./components/Nav";
import { Home } from "./views/Home";
import { ProductsViews} from "./views/ProductsViews"
import {Route, Switch} from "react-router-dom";
import { ProductsTotal } from "./views/ProductsTotal";


function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/product/:id"} exact component={ProductsViews}/>
        <Route path={"/products-total"} exact component={ProductsTotal}/>
      </Switch>
    </>
  );
}

export default App;
