import Navbar from "../components/coreComponents/navbar/navbar";
import Footer from "../components/coreComponents/footer/footer";
import Navcard from "../components/coreComponents/navCard/navcard";


const Home = () => {
    return(
        <div>
            <Navbar/>
        <div style={{ backgroundColor: '#f0f0f0', height: '100vh', padding:'1px 14px' }}> 
            <Navcard/> 
            
            

        </div>
        <Footer/>
        </div>
    )
};
export default Home;