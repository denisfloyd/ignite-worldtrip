import { Text, Image, Box, Flex, useBreakpointValue } from "@chakra-ui/react";

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      backgroundImage="url(assets/backgroundBanner.png)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      px={["6", "20"]}
      py={["8", "12"]}
      justifyContent="space-between"
    >
      <Box maxW="524px">
        <Text fontSize={["xl", "4xl"]} fontWeight="500" color="gray.200">
          5 Continentes, <br />
          infinitas possibilidades
        </Text>
        <Text
          fontSize={["sm", "xl"]}
          fontWeight="400"
          color="gray.200"
          mt={["2", "4"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && (
        <Image
          src="/assets/airplane.png"
          alt="airplane"
          w="400px"
          position="absolute"
          right="20"
        />
      )}
    </Flex>
  );
}
