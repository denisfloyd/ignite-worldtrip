import { Grid, Image, IconButton, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { BsChevronLeft } from "react-icons/bs";

export function Header() {
  const { asPath, back } = useRouter();

  const isHomePage = asPath === "/";

  return (
    <Grid
      w="100%"
      maxW={1480}
      h={["50px", "100px"]}
      px={["6", "12"]}
      bg="white"
      justifyContent="center"
      alignItems="center"
      templateColumns="repeat(3, 1fr)"
    >
      {!isHomePage && (
        <IconButton
          aria-label="Back"
          icon={<Icon as={BsChevronLeft} />}
          fontSize="24"
          variant="unstyled"
          onClick={back}
          gridColumn="1"
          justifySelf="flex-start"
        />
      )}
      <Image
        w={["81px", "184px"]}
        src="assets/logo.png"
        alt="Logo worldtrip com avião voando ao final."
        gridColumn="2"
        justifySelf="center"
      />
    </Grid>
  );
}
