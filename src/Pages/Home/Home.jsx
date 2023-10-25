import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "./Service/Services";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;