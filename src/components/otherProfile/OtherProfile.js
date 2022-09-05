import "../myProfile/MyProfile.css"
import "./OtherProfile.css"
import profile_img from "./../../assets/images/profile_img.png"
import cover_img from './../../assets/images/cover.png'
import EditbuttonImage from "../myProfile/EditButton";
import ProfilePic from "../myProfile/ProfilePic";
import ButtonColoum from "./ButtonColoum";
import GamesPlayed from "../myProfile/GamesPlayed";
import PostView from "../myProfile/PostView";
const OtherProfile = () => {
    return ( <div>
          <div className="container">
                <div className="card background">
                    <img className="coverImage" src={cover_img} alt="Profile Cover" />
                    <EditbuttonImage />
                    <div className="row alignContent">
                        <div className="col-1">
                            <ProfilePic imgurl={profile_img} />
                        </div>
                        <div className="col-4 details">
                            <h3>ReactMan#2345</h3>
                            <p>I like apex legends, i main wraith.</p>
                        </div>
                        <div className="col-5 quantities">
                            <div className="row first">
                                <div className="col-3">21</div>
                                <div className="col-3">21</div>
                                <div className="col-3">21</div>
                                <div className="col-3">21</div>
                            </div>
                            <div className="row second">
                                <div className="col-3">Likes</div>
                                <div className="col-3">Posts</div>
                                <div className="col-3">Followers</div>
                                <div className="col-3">Following</div>
                            </div>
                        </div>
                            <ButtonColoum />
                        {/* <div className="button-align">
                            <Button />
                        </div> */}
                        <div className="gamesPlayedMain">
                        <GamesPlayed />
                        </div>
                        <div className="postview">
                            <PostView  />
                        </div>       

                    </div>

                </div>
            </div>
    </div> );
}
 
export default OtherProfile;