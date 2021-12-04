import Link from "next/link";
import { Flex, Icon, Image } from "@chakra-ui/react";
import { RiArrowDropLeftLine } from "react-icons/ri";

import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();

  return (
    <Link href="/">
      <Flex
        as="header"
        w="100%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        px="6"
        h={["2rem", "3rem"]}
      >
        {asPath !== "/" && (
          <Icon
            as={RiArrowDropLeftLine}
            fontSize={["1.5rem", "2rem"]}
            color="gray.200"
            position="absolute"
            top={["0.95rem", "1.8rem"]}
            left="20px"
            cursor="pointer"
          />
        )}
        <Image src="/logo.svg" h="2.8rem" />
      </Flex>
    </Link>
  );
}
