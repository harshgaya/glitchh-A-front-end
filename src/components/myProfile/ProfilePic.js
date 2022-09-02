import "./Profilepic.css"
import profile_img from "./../../assets/images/profile_img.png"
import EditButtonimage from "./EditButton";
const ProfilePic = () => {
    return (
        <div className="ProfilePic">
            <div className="content">
            <img className="profile_img" src={profile_img} alt="" />
            <div className="circle small"></div>
            <div className="profileImgEdit">
            <EditButtonimage />
            </div>
            </div>
             
        </div>
    );
}

export default ProfilePic;