import Navbar from "../portals/grocery/components/navbar/navbar";
import Navcard from "../portals/grocery/components/navCard/navCard";
import Footer from '../components/coreComponents/footer/footer'


const GroceryHome = () => {
    return(
        <div>
            <Navbar/>
            <div style={{background:'grey', height:'100vh'}}>
                <Navcard/>

            </div>
            <Footer/>
        </div>
    )
};
export default GroceryHome;