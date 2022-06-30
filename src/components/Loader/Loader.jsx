import { useContext } from "react";

import { RefContext } from "../../contexts/RefContexts";

// styled components import
import {
  LoaderContainer,
  LoaderText,
  ImageGroup,
  Image,
  LoaderTextContainer,
} from "./Loader.styled";

const Loader = () => {
  const { loaderTextRef, loaderContainerRef, loaderImageGroupRef } =
    useContext(RefContext);

  return (
    <LoaderContainer ref={loaderContainerRef}>
      <LoaderTextContainer>
        <LoaderText ref={loaderTextRef}>Art connects us</LoaderText>
      </LoaderTextContainer>

      <ImageGroup ref={loaderImageGroupRef}>
        <div>
          <Image src={"/images/smile1.jpg"} alt="" />
          <Image src={"/images/jacket1-zoom.jpg"} alt="" />
          <Image src={"/images/trouser2-zoom.jpg"} alt="" />
        </div>
      </ImageGroup>
    </LoaderContainer>
  );
};

export default Loader;
