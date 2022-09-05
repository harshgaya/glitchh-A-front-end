import "./Profilepic.css"
// 
import EditButtonimage from "./EditButton";
const ProfilePic = (props) => {
    return (
        <div className="ProfilePic">
            <div className="content">
            <img className="profile_img" src={props.imgurl} alt="" />
            <div className="circle small"></div>
            <div className="profileImgEdit">
            <EditButtonimage />
            </div>
            </div>
             
        </div>
    );
}

export default ProfilePic;