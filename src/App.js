import "./stayles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CategoryPage} />
          <Route path="/category/:cat" exact component={CategoryPage} />
          <Route path="/details/:id" component={ProductDetailPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
