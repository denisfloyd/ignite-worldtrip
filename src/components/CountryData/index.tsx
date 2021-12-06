import { Flex, Text } from "@chakra-ui/react";

interface CountryDataProps {
  value: number;
  description: string;
}

export function CountryData({ value, description }: CountryDataProps) {
  return (
    <Flex flexDirection="column" textAlign="center" fontWeight="600">
      <Text fontSize={["2xl", "4xl"]} color="yellow.400">
        {value}
      </Text>
      <Text fontSize={["xl", "2xl"]}>{description}</Text>
    </Flex>
  );
}
