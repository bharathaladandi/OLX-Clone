import React from "react";
import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <Box w="100%" p={4} height={"85vh"} display="grid" placeItems={"center"}>
        <HStack alignItems={"flex-start"} spacing="3rem">
          <Box textAlign={"left"}>
            <Heading fontSize={"8rem"}>Oops!</Heading>
            <br />
            <Text fontSize={"1.5rem"}>We can't seem to find that..😢</Text>
            <Text fontSize={"1.5rem"}>Try searching for it.</Text>
          </Box>
          <Image src="https://statics.olx.in/external/base/img/404.webp" />
        </HStack>
        <Link to="/">
          <Button colorScheme="teal" size="lg">
            🏠 Home
          </Button>
        </Link>
      </Box>
    </>
  );
};
