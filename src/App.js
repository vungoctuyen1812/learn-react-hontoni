import React from 'react';
import Footer from './features/Footer';
import HeroImage from './features/HeroImage';
import LastestRecipes from './features/LastestRecipes';
import NavbarFeature from './features/Navbar';
import RankRecipes from './features/RankRecipes';
import SpecialRecipes from './features/SpecialRecipes';
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
            <SpecialRecipes />
            <Footer />
        </div>
    );
}

export default App;
