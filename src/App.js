
import Home from './page/home/Home';
import Product from './page/Product/Product';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ProductDetail from './page/ProductDetail/ProductDetail';
import ShoppingCart from './page/cart/ShoppingCart';
import CheckOut from './page/CheckOut/CheckOut';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Switch>
          <Route exact path='/' >
            <Home active={'Home'} />
          </Route>
          <Route exact path='/product'>
            <Product active={'Product'}/>
          </Route>
          <Route exact path='/productdetail/:id'>
            <ProductDetail />
          </Route>
          <Route exact path='/shoppingcart'>
            <ShoppingCart />
          </Route>
          <Route exact path='/checkout'>
            <CheckOut />
          </Route>
        </Switch>
        {/* <ProductDetail/> */}
      </div>
    </Router>
  );
}

export default App;
