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
  const { loaderTextRef, imageListRef, loaderContainerRef } = ref.current;

  return (
    <LoaderContainer ref={loaderContainerRef}>
      <LoaderTextContainer>
        <LoaderText ref={loaderTextRef}>Art connects us</LoaderText>
      </LoaderTextContainer>

      <ImageGroup ref={imageListRef}>
        <Image src={"/images/smile1.jpg"} alt="" />
        <Image src={"/images/sneaker1.jpg"} alt="" />
        <Image src={"/images/trouser2-zoom.jpg"} alt="" />
      </ImageGroup>
    </LoaderContainer>
  );
});

export default Loader;
