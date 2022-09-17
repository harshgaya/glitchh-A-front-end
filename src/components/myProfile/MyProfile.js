import "./MyProfile.css"
import cover_img from './../../assets/images/cover.png'
import EditbuttonImage from "./EditButton";
import ProfilePic from "./ProfilePic";
import Button from "./button";
import GamesPlayed from "./GamesPlayed";
import PostView from "./PostView";
import ReactDOM from 'react-dom';

import postIcon from "./../../assets/images/post-icon.png"
import byteIcon from "./../../assets/images/bytes-icon.png"
import profile_img from "./../../assets/images/profile_img.png";
import { useState } from 'react';
import button from "./../../assets/images/EditButton.png"
import cover1 from "./../../assets/images/cover1.png"
import cover2 from "./../../assets/images/cover2.png";
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




const MyProfile = (props) => {
    // const url = "./../asse//ts/images/cover.png"
    const [backdrop, setBackdrop] = useState(false);
    const [coverImage, setCoverImage] = useState(cover_img);
    const [gridSelectedImage, setGridSelectedImage] = useState(gameImage1);
    const [imageClassName, setImageClassName] = useState('grid-single-image');

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


    const editBackgroundImageHandler = () => {
        setBackdrop(true);
    }
    const removeBackdrop = () => {
        setBackdrop(false);
    }

    const coverImageChangeHandler = (event) => {


        setCoverImage(gridSelectedImage);
        setBackdrop(false);

    }
    const changeGridSelectedImage = (event) => {
        console.log(event.target);
        // event.target.style.border = '5px solid red';
        setImageClassName('grid-single-selected-image');
        setGridSelectedImage(event.target.src);

    }




    return (
        <div className="myProfile">
            <div className="container">
                <div className="card background">
                    <img className="coverImage" src={coverImage} alt="Profile Cover" />
                    {/* <EditbuttonImage  /> */}
                    <button onClick={editBackgroundImageHandler} className="logoButton"><img src={button} alt="editButton" /></button>

                    {backdrop && <div>

                        {ReactDOM.createPortal(
                            <div className="backdrop-for-profile" onClick={removeBackdrop}>

                            </div>, document.getElementById('profile-backdrop')
                        )}

                        <div className="choose-banner-pop-up">
                            <img src={crossIcon} alt="cross-button" onClick={removeBackdrop} />

                            <div className="banner-lists">
                                <h3>Choose banner</h3>
                                <div className="banner-images">
                                    <div className="selected-banner-image">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ?</p>
                                        <img src={gridSelectedImage} alt="gameimage" />

                                    </div>
                                    <div className="grid-images">

                                        {
                                            list_of_cover_images.map((coverImage) => (
                                                <img src={coverImage.src} alt={coverImage.title} key={coverImage.id} onClick={changeGridSelectedImage} className='grid-single-image' />
                                            ))
                                        }



                                    </div>



                                </div>
                                <div className="button-done">
                                    <button onClick={coverImageChangeHandler}>Done</button>
                                </div>

                            </div>

                        </div>


                    </div>}



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
                        <div className="button-align">
                            <Button />
                        </div>
                        <div className="gamesPlayedMain">
                            <GamesPlayed />
                        </div>
                        <div className="postview">
                            <PostView />
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default MyProfile;