import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import RenderItem from "./components/Products/RenderItem";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div className='App'>
      <Router>
          <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path={`/products/:productId`}>
              <div className='product-main'>
                <SideBar />
                <div className='product-gallery'>
                  <RenderItem />
                </div>
              </div>
            </Route>  
      </Router>
      <Footer />
    </div>
  );
}
export default App;
