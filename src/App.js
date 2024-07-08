import { Carousel } from 'react-responsive-carousel';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PointPleasantPark from "./images/PointPleasantPark.jpg";
import SunsetWithMalak from "./images/SunsetWithMalak.jpg";
import SweetHeavenBalls from "./images/SweetHeavenBalls.jpg";
import AngelSunsetWithText from "./images/AngelSunsetWithText.png";

function TripCarousel() {
        return (
            <Carousel autoPlay interval="5000" transitionTime="1000" showThumbs={false}>
                <div>
                    <img src={SweetHeavenBalls} width={500} height={500} />
                    <p className="legend">Sweet Heaven Balls</p>
                </div>
                <div>
                    <img src={PointPleasantPark} width={500} height={500}/>
                    <p className="legend">Point Pleasant Park</p>
                </div>
                <div>
                    <img src={SunsetWithMalak} width={500} height={500} />
                    <p className="legend">Sunset With Malak</p>
                </div>
                <div>
                    <img src={AngelSunsetWithText} width={500} height={500} />
                    <p className="legend">Sunset</p>
                </div>
            </Carousel>
        );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hiiiii Malakkkkk <span role="img" aria-label="sheep">😊</span>
                    <div>
                        It was so nice meeting with you, I created this page just as a memory in July :)
                    </div>
                    <div>
                        Don't forget to look at last image.
                    </div>
                </p>
                <TripCarousel />
            </header>
        </div>
    );
}

export default App;
