import "./button.css"
import IconSecondary from "./Iconsecondary";
import {Routes, Route, useNavigate} from 'react-router-dom';
const Button = () => {
    const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate('/edit');
  };
    return ( 
        <div className="Button row placement">
            {/* <div className="row placement"> */}
                <div className="col-10">
                <button className="edit" onClick={navigateToEdit}>Edit Profile</button>
                </div>
                <div className="col-1 icon">
                <IconSecondary />
                </div>
             
            {/* </div> */}
            
           
        </div>
     );
}
 
export default Button;