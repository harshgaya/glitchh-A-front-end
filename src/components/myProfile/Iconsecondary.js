import "./Iconsecondary.css"
import settingsButton from "./../../assets/images/settings.png"
const IconSecondary = () => {
    return ( 
        <div className="iconsecondary">
            <button className="icon-sec"><img src={settingsButton} alt="" /></button>
        </div>
     );
}
 
export default IconSecondary;