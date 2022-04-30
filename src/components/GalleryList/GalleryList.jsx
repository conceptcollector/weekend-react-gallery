import GalleryItems from "../GalleryItems/GalleryItems";

function GalleryList({galleryList}) {
    return (
        <>
            {galleryList.map((picture) => {
                return <GalleryItems key={picture.id} picture={picture} />
            })}
        </>
    )
}

export default GalleryList;