import "./GamesPlayed.css"
import Slider from "./slider";
const GamesPlayed = () => {
    return ( 
        <div className="gamesPlayed">
            <h3>Games Played</h3>
            <div className="list">
           <Slider />
            </div>
        </div>
     );
}
 
export default GamesPlayed;
