import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DetailProduct } from './pages/DetailProduct';
import { Navbar } from './components/Navbar/Navbar';
import { Stores } from './pages/Shop';
import { CartShopping } from './pages/CartShopping';
import { ManagedProducts } from './pages/ManagedProducts';
import { AddProduct } from './pages/AddProduct';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context/auth';
import { ManagePage } from './pages/ManagePage';
import { ProfileUser } from './pages/ProfileUser';
import { Blogs } from './pages/Blog';
import { ArticleDetail } from './components/Blog/Details';
import { AddArticle } from './pages/AddArticle';
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <div className="App">
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/blog" exact component={Blogs} />
                            <Route path="/blog/:id" component={ArticleDetail} />
                            <Route path="/products" exact component={Stores} />
                            <Route
                                path="/products/:id"
                                component={DetailProduct}
                            />
                            <Route
                                path="/cart"
                                exact
                                component={CartShopping}
                            />
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Layout>
                                <ProtectedRoute
                                    path="/managed-products"
                                    exact
                                    component={ManagedProducts}
                                />
                                <ProtectedRoute
                                    path="/managed-products/add-product"
                                    component={AddProduct}
                                />
                                <ProtectedRoute
                                    path="/managed-products/add-article"
                                    component={AddArticle}
                                />
                                <ProtectedRoute
                                    path="/management"
                                    component={ManagePage}
                                />
                                <ProtectedRoute
                                    path="/profile-user"
                                    component={ProfileUser}
                                />
                            </Layout>
                        </Switch>
                    </Router>
                </div>
            </AuthProvider>
        </ApolloProvider>
    );
}
