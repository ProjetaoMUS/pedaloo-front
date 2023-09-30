import { Image, Skeleton } from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";

export const CarouselImage = ({ source }) => {
  const screenWidth = Dimensions.get("window").width;
  const [imgIsLoading, setImgIsLoading] = useState(true);

  return (
    <>
      {imgIsLoading && <Skeleton w={screenWidth} h="100%" />}
      <Image
        source={{ uri: source }}
        w={screenWidth}
        alt="Imagem do local"
        onLoad={() => setImgIsLoading(false)}
        fallbackElement={<Skeleton w={screenWidth} h="100%" />}
      />
    </>
  );
};