import { forwardRef } from "react";

// styled components import
import {
  LoaderContainer,
  LoaderText,
  ImageGroup,
  Image,
  LoaderTextContainer,
} from "./Loader.styled";

const Loader = forwardRef((prop, ref) => {
  const { loaderText, imageList } = ref.current;

  return (
    <LoaderContainer>
      <LoaderTextContainer>
        <LoaderText ref={loaderText}>Art connects us</LoaderText>
      </LoaderTextContainer>

      <ImageGroup ref={imageList}>
        <Image src={"/images/smile1.jpg"} alt="" />
        <Image src={"/images/sneaker1.jpg"} alt="" />
        <Image src={"/images/trouser2-zoom.jpg"} alt="" />
      </ImageGroup>
    </LoaderContainer>
  );
});

export default Loader;
