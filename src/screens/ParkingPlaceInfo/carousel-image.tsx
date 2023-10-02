import { Box, Image, Skeleton } from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";

import { Stars } from "./stars";

export const CarouselImage = ({ source, rating }) => {
  const screenWidth = Dimensions.get("window").width;
  const [imgIsLoading, setImgIsLoading] = useState(true);

  return (
    <Box flex={1} w={screenWidth} p={5}>
      {imgIsLoading && <Skeleton w="100%" h="100%" borderRadius={12} />}
      <Image
        source={{ uri: source }}
        borderRadius={12}
        w="100%"
        h="100%"
        alt="Imagem do local"
        onLoad={() => setImgIsLoading(false)}
        fallbackElement={<Skeleton w="100%" h="100%" borderRadius={12} />}
      />

      <Box
        position="absolute"
        left={9}
        bottom={8}
        flexDirection="row"
      >
        <Stars rating={rating} />
      </Box>
    </Box>
  );
};