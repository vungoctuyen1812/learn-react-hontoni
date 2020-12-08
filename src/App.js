import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './features/Footer';
import Home from './features/Home';
import NavbarFeature from './features/Navbar';
import Recipes from './features/Recipes';

function App() {
    /*useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            console.log(productList);
        };

        fetchProducts();
    }, []);*/
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarFeature />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/recipes" component={Recipes} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
