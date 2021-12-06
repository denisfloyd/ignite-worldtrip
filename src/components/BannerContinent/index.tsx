import { Text, Image, Box, Flex, useBreakpointValue } from "@chakra-ui/react";

interface BannerContinentProps {
  imageUrl: string;
  continent: string;
}

export function BannerContinent({ imageUrl, continent }: BannerContinentProps) {
  return (
    <Flex
      background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${imageUrl})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      w="100%"
      h={["150px", "300px"]}
      px={["4", "14"]}
      py={["6", "8"]}
      alignItems="flex-end"
    >
      <Text fontSize={["xl", "4xl"]} fontWeight="500" color="gray.200">
        {continent}
      </Text>
    </Flex>
  );
}
