import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import sideScroll from "./../../utils/sideScroll";
import Gallery from "../../components/Work/Gallery";
import { fetchData } from "../../utils/fetchData";
import Thumbnails from "../../components/Work/Gallery/Thumbnails";

const PhotoGallery = ({ photos }) => {
  console.log(photos);
  const { data: photoList } = photos;

  const [open, setOpen] = useState(true);
  const [photoIdx, setPhotoIdx] = useState(0);
  const thumbnailWrapper = useRef(null);
  const router = useRouter();

  //check for photos and set first photo from collection to a variable
  const getSinglePhoto = photoList.length && photoList[photoIdx];

  const handleCloseDialog = () => {
    setOpen(false);
    setPhotoIdx(0);
    router.replace("/work");
  };

  const handleNextPhoto = () => {
    setPhotoIdx((photoIdx + 1) % photoList.length);
    if (photoIdx < photoList.length - 1) {
      sideScroll(thumbnailWrapper.current, 5, 80, 10);
    } else {
      //photoIdx loops back to position 0 after last photo
      thumbnailWrapper.current.scrollLeft = 0;
    }
  };

  const handlePrevPhoto = () => {
    const len = photoList.length;
    const thumbNailWidth = thumbnailWrapper.current.scrollWidth;

    if (photoIdx === 0) {
      //navigates photos in reverse if photoIdx is at 0
      setPhotoIdx(len - 1);
      thumbnailWrapper.current.scrollLeft = thumbNailWidth;
    } else {
      sideScroll(thumbnailWrapper.current, 5, 80, -10);
      setPhotoIdx(photoIdx - 1);
    }
  };
  return (
    <>
      {photoList.length > 0 && (
        <Gallery
          singlePhoto={getSinglePhoto}
          open={open}
          handleCloseDialog={handleCloseDialog}
          setOpen={setOpen}
          handleNextPhoto={handleNextPhoto}
          handlePrevPhoto={handlePrevPhoto}
        >
          <Thumbnails
            photos={photoList}
            setPhotoIdx={setPhotoIdx}
            photoIdx={photoIdx}
            forwardedRef={thumbnailWrapper}
          />
        </Gallery>
      )}
    </>
  );
};
export default PhotoGallery;

export const getStaticPaths = async () => {
  const categoriesRes = await fetchData("/categories", { fields: ["name"] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        //category key needs to match the file name [category].js under pages
        category: category.attributes.name,
      },
    })),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchData("/categories", {
    filters: { name: params.category },
    populate: {
      photos: {
        sort: ["id:asc"],
        //populate all relations in level- photos
        populate: "*",
      },
    },
  });

  return {
    props: {
      photos: matchingCategories.data[0].attributes.photos,
    },

    revalidate: 15,
  };
}
