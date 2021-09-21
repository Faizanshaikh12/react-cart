import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
    return(
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" component={ProductsPage} exact></Route>
                    <Route path="/products/:_id" component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
