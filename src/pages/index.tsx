import { Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";

import { BannerHome } from "../components/BannerHome";
import { Separator } from "../components/Separator";
import { ContinentsSlider } from "../components/ContinentsSlider";
import { TripTypeIcon } from "../components/TripTypeIcon";

import { tripTypes } from "../utils/tripTypes";
import { continents } from "../utils/continents";

export default function Home() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex w="100%" mb="14" direction="column">
      <BannerHome />

      <Grid
        mt={["6", "6", "16"]}
        mx={["10", "24"]}
        templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        gap={["3", "4", "10"]}
        justifyContent="center"
      >
        {tripTypes.map(tripType => (
          <TripTypeIcon
            key={tripType.title}
            title={tripType.title}
            icon={tripType.icon}
            showFullIcon={!isMobileVersion}
          />
        ))}

        <TripTypeIcon
          title="e mais..."
          icon="assets/earth.png"
          showFullIcon={!isMobileVersion}
        />
      </Grid>

      <Separator />

      <Text
        fontSize={["xl", "4xl"]}
        fontWeight="500"
        textAlign="center"
        marginBottom="10"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <ContinentsSlider continents={continents} />
    </Flex>
  );
}
