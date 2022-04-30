import {useState} from 'react';

function GalleryItems({picture}) {

    const [pictureClicked, setPictureClicked] = useState(false);

    const clickPicture = () => {
        setPictureClicked(!pictureClicked)
    }
    
    const renderDescriptionText = () => {
        if (pictureClicked) {
            return (
                <>
                    <img src={picture.path} onClick={clickPicture} className="displayDescription" />
                    <div onClick={clickPicture}>{picture.description}</div>
                </>
        )} else {
            return (
                <img src={picture.path} onClick={clickPicture} />
            )
        }
    }

    return (
        <div className="pictureContainer">
        {renderDescriptionText()}
        </div>
    )
}

export default GalleryItems;