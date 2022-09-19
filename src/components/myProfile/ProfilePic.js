import "./Profilepic.css";
import button from "./../../assets/images/EditButton.png";
import profile_img from "./../../assets/images/profile_img.png";
import { useState } from 'react';
import ReactDOM from 'react-dom';
import crossIcon from "./../../assets/images/cross.png";
import gameImage1 from "./../../assets/h/gameimage1.jpg";
import gameImage2 from "./../../assets/h/gameimage2.jpg";
import gameImage3 from "./../../assets/h/gameimage3.jpg";
import gameImage4 from "./../../assets/h/gameimage4.jpg";
import gameImage5 from "./../../assets/h/gameimage5.webp";
import gameImage6 from "./../../assets/h/gameimage6.jpg";
import gameImage7 from "./../../assets/h/gameimage7.jpg";
import gameImage8 from "./../../assets/h/gameimage8.jpg";
import gameImage9 from "./../../assets/h/gameimage9.jpg";


// 
import EditButtonimage from "./EditButton";
const ProfilePic = (props) => {
    const [backdrop, setBackdrop] = useState(false);
    const [profileImage, setProfileImage] = useState(profile_img);
    const [selectImage, setSelectImage] = useState(profile_img);

    const list_of_cover_images = [
        {
            id: 'gameImage1',
            title: 'gameImage1',
            src: gameImage1
        },
        {
            id: 'gameImage2',
            title: 'gameImage2',
            src: gameImage2
        },
        {
            id: 'gameImage3',
            title: 'gameImage3',
            src: gameImage3
        },
        {
            id: 'gameImage4',
            title: 'gameImage4',
            src: gameImage4
        },
        {
            id: 'gameImage5',
            title: 'gameImage5',
            src: gameImage5
        }
        ,
        {
            id: 'gameImage6',
            title: 'gameImage6',
            src: gameImage6
        },
        {
            id: 'gameImage7',
            title: 'gameImage7',
            src: gameImage7
        },
        {
            id: 'gameImage8',
            title: 'gameImage8',
            src: gameImage8
        }
        ,
        {
            id: 'gameImage9',
            title: 'gameImage9',
            src: gameImage9
        }
    ]

    const editProfileImageHandler = () => {
        setBackdrop(true);
    }
    const removeBackdrop = () => {
        setBackdrop(false);
    }
    const selectProfileImage = (event) => {

        setSelectImage(event.target.src);

    }
    const changeProfileImage = (event) => {
        console.log(event.target);


        setProfileImage(selectImage);
        setBackdrop(false);

    }


    return (
        <div className="ProfilePic">
            <div className="content">
                <img className="profile_img" src={profileImage} alt="" />
                <div className="circle small"></div>
                <div className="profileImgEdit">
                    {/* <EditButtonimage /> */}
                    <button onClick={editProfileImageHandler} className="logoButton"><img src={button} alt="editButton" /></button>
                    {backdrop && <div>

                        {ReactDOM.createPortal(
                            <div className="backdrop-for-profile" onClick={removeBackdrop}>

                            </div>, document.getElementById('profile-backdrop')
                        )}

                        <div className="choose-banner-pop-up">
                            <img src={crossIcon} alt="cross-button" onClick={removeBackdrop} />

                            <div className="profile-lists">
                                <h3>Choose avatar</h3>
                                <div className="profile-images">
                                    <div className="selected-profile-image">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ?</p>

                                        <div className="profile-images-list">

                                            {
                                                list_of_cover_images.map((coverImage) => (
                                                    <img src={coverImage.src} alt={coverImage.title} key={coverImage.id} className='profile-single-image' onClick={selectProfileImage} />
                                                ))
                                            }
                                        </div>


                                    </div>




                                </div>
                                <div className="button-done">
                                    <button onClick={changeProfileImage}>Done</button>
                                </div>

                            </div>



                        </div>


                    </div>}



                </div>
            </div>

        </div>
    );
}

export default ProfilePic;