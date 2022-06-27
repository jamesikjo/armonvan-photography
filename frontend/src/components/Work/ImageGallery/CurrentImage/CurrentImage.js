import Image from "next/image";
import { getStrapiMedia } from "../../../../lib/media";

const CurrentImage = ({ photoList, selectedIdx }) => {
  const getPhotoData = (selectedIdx) => {
    const { image } = photoList[selectedIdx].attributes;
    return getStrapiMedia(image);
  };

  return <Image src={getPhotoData(selectedIdx)} width={999} height={666} />;
};

export default CurrentImage;
