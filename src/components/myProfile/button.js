import "./button.css"
import IconSecondary from "./Iconsecondary";
const Button = () => {
    return ( 
        <div className="Button row placement">
            {/* <div className="row placement"> */}
                <div className="col-10">
                <button className="edit">Edit Profile</button>
                </div>
                <div className="col-1 icon">
                <IconSecondary />
                </div>
             
            {/* </div> */}
            
           
        </div>
     );
}
 
export default Button;