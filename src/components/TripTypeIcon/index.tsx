import { Box, Text, Image, Flex } from "@chakra-ui/react";

interface TripTypeIconProps {
  showFullIcon?: boolean;
  title: string;
  icon: string;
}

export function TripTypeIcon({ showFullIcon, title, icon }: TripTypeIconProps) {
  return (
    <Flex
      flexDirection={showFullIcon ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
    >
      {showFullIcon ? (
        <Image w="85px" src={icon} alt={title} marginBottom="4" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text>{title}</Text>
    </Flex>
  );
}
