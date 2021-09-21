import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import {CartContext} from "./pages/CartContext";
import {useEffect, useState} from "react";

const App = () => {
    const [cart, setCart] = useState({});
    //fetch cart form localstorage
    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return(
        <>
            <Router>
                <CartContext.Provider value={{cart, setCart}}>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" component={ProductsPage} exact></Route>
                        <Route path="/products/:_id" component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;
