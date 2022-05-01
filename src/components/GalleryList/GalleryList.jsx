import GalleryItems from "../GalleryItems/GalleryItems";

function GalleryList({galleryList, putLikes}) {
    return (
        <>
            {galleryList.map((picture) => {
                return (
                    <GalleryItems key={picture.id} picture={picture} putLikes={putLikes}/>
                )
            })}
        </>
    )
}

export default GalleryList;