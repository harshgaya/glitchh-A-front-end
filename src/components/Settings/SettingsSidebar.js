import "./SettingsSidebar.css"
import { NavLink  } from "react-router-dom";
const SettingsSidebar = () => {
    return ( <div className="SettingsSidebar">
        <div className="card background settingsCard">
            <h3>Settings</h3>
            <NavLink to="/edit" className={(navData) => (navData.isActive ? "settingLink selectedLink" : "settingLink")}>Edit Profile</NavLink>
            <NavLink to="/changePassword" className={(navData) => (navData.isActive ? "settingLink selectedLink" : "settingLink")}>Change password</NavLink>
            <NavLink to="/settingside" className={(navData) => (navData.isActive ? "settingLink selectedLink" : "settingLink")}>Privacy & Security Settings</NavLink>
            <NavLink to="/settingside" className={(navData) => (navData.isActive ? "settingLink selectedLink" : "settingLink")}>Notification Settings</NavLink>
            <NavLink to="/settingside" className={(navData) => (navData.isActive ? "settingLink selectedLink" : "settingLink")}>Login Activity</NavLink>
            <NavLink to="/help" className={(navData) => (navData.isActive ? "settingLink selectedLink" : "settingLink")}>Help & Support</NavLink>
        </div>
    </div> );
}
 
export default SettingsSidebar;