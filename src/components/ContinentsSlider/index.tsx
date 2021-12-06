import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFlip,
} from "swiper";

SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFlip,
]);

type Continent = {
  slug: string;
  name: string;
  shortDescription: string;
  imageUrl: string;
};

interface ContinentsSliderProps {
  continents: Continent[];
}

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
  return (
    <Box
      w="100%"
      maxWidth={1240}
      h={["250px", "450px"]}
      px={["6", "20"]}
      mx="auto"
    >
      <Swiper
        style={{ width: "100%", flex: 1 }}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name} style={{ marginRight: 0 }}>
            <Flex
              background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${continent.imageUrl})`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="center"
              w="100%"
              h={["250px", "450px"]}
              px={["10", "24"]}
              justifyContent="center"
              alignItems="center"
              direction="column"
              color="gray.100"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading
                    fontSize={["xl", "5xl"]}
                    textAlign="center"
                    fontWeight="700"
                  >
                    {continent.name}
                  </Heading>
                  <Text fontSize={["xl", "2xl"]} textAlign="center">
                    {continent.shortDescription}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
