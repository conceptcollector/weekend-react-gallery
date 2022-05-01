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
                <div className="pictureBlock">
                    <div className="pictureContainer">
                    <span><img src={picture.path} onClick={clickPicture} /></span>
                    <div className="displayDescription">
                        {picture.description}</div>
                    </div>
                    <p className="likeButton"><button onClick={handleLikes}>Like
                    </button>Likes: {picture.likes}</p>
                </div>
        )} else {
            return (
                <div className="pictureBlock">
                <div className="pictureContainer">
                    <img src={picture.path} onClick={clickPicture} />
                    <p className="likeButton"><button onClick={handleLikes}>Like
                    </button> Likes: {picture.likes}</p>
                </div>
                </div>
            )
        }
    }

    return (
        <>{renderDescriptionText()}</>
    )
}

export default GalleryItems;