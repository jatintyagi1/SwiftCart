import Navbar from "../components/coreComponents/navbar/navbar";
import Footer from "../components/coreComponents/footer/footer";
import Navcard from "../components/navCard/navcard";
import Slider from "../containers/sliders/homeSlider/homeSlider";


const Home = () => {

    const getPadding = () => {
        const width = window.innerWidth;
        if (width < 480) return '0';
        if (width >= 480 && width < 768) return '0';
        if (width >= 768 && width < 992) return '0px';
        if (width >= 992 && width < 1200) return '0px';
        return '1px 20px';
      };


    return(
        <div>
            <Navbar/>
        <div style={{ backgroundColor: '#f0f0f0', height: '100vh', padding:getPadding() }}> 
            <Navcard/>
            <Slider/> 
            
            

        </div>
        <Footer/>
        </div>
    )
};
export default Home;