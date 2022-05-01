import {useState} from 'react';

function GalleryItems({picture, putLikes}) {

    const [pictureClicked, setPictureClicked] = useState(false);

    const clickPicture = () => {
        setPictureClicked(!pictureClicked)
    }

    const handleLikes = (e) => {
        e.preventDefault();
        putLikes(picture.id)
    }
    
    const renderDescriptionText = () => {
        if (pictureClicked) {
            return (
                <div className="pictureContainer">
                    <img src={picture.path} onClick={clickPicture} className="displayDescription" />
                    <div onClick={clickPicture}>{picture.description}</div>
                    <p><button onClick={handleLikes}>Like</button>Likes: {picture.likes}</p>
                </div>
        )} else {
            return (
                <div className="pictureContainer">
                    <img src={picture.path} onClick={clickPicture} />
                    <p><button onClick={handleLikes}>Like</button>Likes: {picture.likes}</p>
                </div>
            )
        }
    }

    return (
        <>{renderDescriptionText()}</>
    )
}

export default GalleryItems;