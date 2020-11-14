import React from 'react';
import HeroImage from './features/HeroImage';
import LastestRecipes from './features/LastestRecipes';
import NavbarFeature from './features/Navbar';

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
            <NavbarFeature />
            <HeroImage />
            <LastestRecipes />
        </div>
    );
}

export default App;
