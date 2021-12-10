import { Flex, Grid, Text, HStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { BannerContinent } from "../../components/BannerContinent";
import { CountryData } from "../../components/CountryData";

import { continents } from "../../utils/continents";

type Data = {
  description: string;
  value: number;
};

interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    description: string;
    imageUrl: string;
    data: Data[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  const { name, description, imageUrl, data } = continent;

  return (
    <Flex w="100%" mb="14" direction="column">
      <BannerContinent imageUrl={imageUrl} continent={name} />
      <Flex px={["6", "12"]}>
        <Grid
          mt={["4", "8"]}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Text textAlign="justify" fontSize={["sm", "lg"]}>
            {description}
          </Text>
          <HStack
            spacing={["7", "14"]}
            justifyContent="center"
            mt={["4", "4", "6", "0"]}
          >
            {data.map((data) => (
              <CountryData
                key={data.description}
                description={data.description}
                value={data.value}
              />
            ))}
          </HStack>
        </Grid>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continentData = continents.find((continent) => continent.slug === slug);

  return {
    props: {
      continent: continentData,
    },
    revalidate: 1,
  };
};
