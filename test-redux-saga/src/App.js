import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DetailProduct } from "./pages/DetailProduct";
import { Navbar } from "./components/Navbar/Navbar";
import { Stores } from "./pages/Shop";
import { CartShopping } from "./pages/CartShopping";
import { ManagedProducts } from "./pages/ManagedProducts";
import { AddProduct } from "./pages/AddProduct";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products" exact>
              <Stores />
            </Route>
            <Route path="/products/:id">
              <DetailProduct />
            </Route>
            <Route path="/cart" exact>
              <CartShopping />
            </Route>
            <Route path="/managed-products" exact>
              <Layout>
                <ManagedProducts />
              </Layout>
            </Route>
            <Route path="/managed-products/add-product">
              <Layout>
                <AddProduct />
              </Layout>
            </Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}
