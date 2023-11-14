import {HeroSection} from "./HeroSection";
import Projects from "./Projects";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {BuyerReview, SellerReview} from "./Reviews";
import Contact from "./Contact";

export const WelcomePage = () => {
    return (
        <>
            <HeroSection/>
            <Projects/>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Buyer Review">
                    <BuyerReview/>
                </Tab>
                <Tab eventKey="profile" title="Seller Review">
                    <SellerReview/>
                </Tab>

            </Tabs>


            <Contact/>
        </>
    )
}