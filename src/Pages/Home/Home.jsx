import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "./Slider";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [limit, setlimit] = useState(21);
  useEffect(() => {
    axios.get(`https://hidden-ravine-45597.herokuapp.com/home?_limit=${limit}`).then((r) => {
      setdata(r.data);
      setloading(false);
    });
    return () => {
      setloading(true);
    };
  }, [limit]);

  return (
    <>
      <Box>
        <Image
          height={"130px"}
          src="https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png"
        />
      </Box>
      <Slider texts={" More on Mobile Phones"} bgs={"#EBEEEF"} />

      <Box m={"1rem 0px"}>
        <Container maxW="90%" mt="10vh" mb="1rem">
          <br />
          <HStack alignItems={"flex-start"} justifyContent="space-between">
            <Text fontSize={"25px"} mb="1rem ">
              Fresh recommendations{" "}
            </Text>
            <Text
              fontSize={"15px"}
              textDecoration={"underline"}
              fontWeight={"600"}
              mb="1rem "
            >
              <Link to="/product/3">view more</Link>
            </Text>
          </HStack>

          {loading ? (
            <>
              <SimpleGrid columns={[1, 1, 2, 2, 4]} spacing={10}>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>

                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
                <Box w="100%" h="400">
                  <Skeleton height="400px" />
                </Box>
              </SimpleGrid>
            </>

          ) : (
            <SimpleGrid columns={[1, 1, 2, 2, 4]} spacing={5}>
              {data.map((item, i = 1) => (
                <Box
                  border={"1px solid #CFCDCD"}
                  borderRadius="5 px"
                  flexWrap={"wrap"}
                  h={"auto"}
                  key={i + 1}
                  p="1rem 1rem 5px 1rem"
                >
                  <Link to={"/product/0"}>
                    <AiOutlineHeart
                      style={{ float: "right", fontSize: "25px" }}
                    />
                    <Image
                      width={"50%"}
                      m="auto"
                      height="30vh"
                      src={item.imgurl + item.imgurl1}
                    />
                    <Box textAlign={"left"}>
                      <Text fontWeight={"700"} mt="8px">
                        ₹ {item.price}
                      </Text>
                      <Text
                        fontSize={"13px"}
                        color="rgba(0, 47, 52, 0.64)"
                        noOfLines={2}
                      >
                        {item.text1}
                      </Text>
                      <HStack
                        justifyContent={"space-between"}
                        color={"rgba(0, 47, 52, 0.64)"}
                        fontSize="13px"
                      >
                        <Text>{item.text3}</Text>
                        <Text>{item.day}</Text>
                      </HStack>
                    </Box>
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          )}

          <br />
        </Container>
      </Box>
      <Center>
        <Box>
          <Button
            onClick={() => {
              setTimeout(() => {
                setlimit(limit + 20);
                setloading(false);
              }, 1000);
            }}
            p={"15px 10px"}
            height={"50px"}
            backgroundColor={"#fff"}
            border={"2px solid #000"}
            _hover={{ border: "3px solid #000" }}
          >
            Load more
          </Button>
        </Box>
      </Center>
      <br />
      <br />
    </>
  );

};


