import React from 'react';
import HeroImage from './features/HeroImage';
import LastestRecipes from './features/LastestRecipes';
import NavbarFeature from './features/Navbar';
import RankRecipes from './features/RankRecipes';
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
            <RankRecipes />
        </div>
    );
}

export default App;
