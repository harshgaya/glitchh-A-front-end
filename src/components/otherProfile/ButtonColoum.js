import "./ButtonColoum.css"
import unlike from "./../../assets/images/heart.png"
import like from "./../../assets/images/filledHeart.png"
import menu from "./../../assets/images/menu.png"
import {useState} from 'react';
const ButtonColoum = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleClick = event => {
        // 👇️ toggle isActive state variable
        setIsActive(current => !current);
      };
      const openMenu = () => {
        setNavbarOpen(!navbarOpen)
        
      };
    return (<div className="row button-align placement">
        <div className="col-6">
            <button className="edit width-but height-but">Follow</button>
        </div>
        <div className="col-2">
            <button className="message edit width-but height-but">Message</button>
        </div>
        <div className="col-2">
            <button onClick={handleClick} className="edit width-lik height-but"><div className="row center-item">
                <div className={isActive ? 'col-2 like-img' : 'col-2'}>
                    <img src={isActive ? like : unlike} alt="" />
                </div>
                <div className="col-9">
                    Like
                </div>
                </div></button>
        </div>
        <div className="col-1">
        <button onClick={openMenu} className="icon-sec width-ic height-but"><img src={menu} alt="" /></button>
        <div className={navbarOpen ? '' : 'hideMenu'}>
        <div className="card menu-card">
            <ul>Block <hr className="menu-line"/></ul>
            <ul>Report <hr className="menu-line" /></ul>
            <ul>Remove Follower</ul>
        </div>
        </div>
      
        </div>
    </div>);
}


export default ButtonColoum;