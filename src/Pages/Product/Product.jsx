import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Image,
  Select,
  SimpleGrid,
  Skeleton,
  Text,
  Stack,
  AccordionIcon,
  Center,
  Button,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Slider,
  SliderMark,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Filter } from "./Filterdata";
export const Product = () => {
  const [productdata, setproductdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [limit, setlimit] = useState(21);
  const [sort, setsort] = useState("");
  const [relaod, setrelaod] = useState("");
  const { id } = useParams();

  const pageroute = [
    "tempcar",
    "tempmotorcycle",
    "tempmobile",
    "temphouse",
    "tempscooter",
    "tempcommercial",
    "temprent",
  ];
  useEffect(() => {
    axios
      .get(`https://hidden-ravine-45597.herokuapp.com/${pageroute[id]}?_limit=${limit}`)
      .then((r) => {
        setproductdata(r.data);
        setloading(false);
      });
    return () => {
      setloading(true);
    };
  }, [limit, id]);


  
  useEffect(() => {
    if (sort === "lth") {
      productdata.sort(
        (a, b) => a.price.replace(/,/g, "") - b.price.replace(/,/g, "")
      );
      console.log(productdata);
      setproductdata(productdata);
      setrelaod(Date.now());
    } else if (sort === "htl") {
      productdata.sort(
        (a, b) => b.price.replace(/,/g, "") - a.price.replace(/,/g, "")
      );
      console.log(productdata);
      setproductdata(productdata);
      setrelaod(Date.now());
    }
  }, [sort]);

  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box w="95%" m="10px auto">
      <HStack w="100%" flexWrap={"wrap"} alignItems={"flex-start"}>
        <Box w={["100%", "100%", "30%"]}>
          <Box mt={5}>
            <Heading size="sm" mb={2}>
              Used In India
            </Heading>
            <Accordion allowToggle>
              {Filter.map((obj, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg">{obj.Name}</Text>
                        <Text fontSize="xs">{obj.subtitle}</Text>
                      </Box>
                      <AccordionIcon fontSize={"30px"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack
                      spacing={2}
                      direction="column"
                      h={"200px"}
                      overflowX="auto"
                    >
                      {obj.Sub.map((item, index) => (
                        <HStack key={index}>
                          <BsDashLg />
                          <Text>{item}</Text>
                        </HStack>
                      ))}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg">Budget</Text>
                  </Box>
                  <AccordionIcon fontSize={"30px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box p="10px 5px">
                  <HStack justifyContent={"space-between"}>
                    <Box w="75%">
                      <Slider
                        aria-label="slider-ex-6"
                        onChange={(val) => setSliderValue(val)}
                      >
                        <SliderMark value={0} {...labelStyles}>
                          0
                        </SliderMark>
                        <SliderMark value={90} {...labelStyles}>
                          25000+
                        </SliderMark>
                        <SliderMark
                          value={sliderValue}
                          textAlign="center"
                          bg="blue.500"
                          color="white"
                          mt="-10"
                          ml="-5"
                          w="12"
                        >
                          {sliderValue}%
                        </SliderMark>
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </Box>
                    <Button size={"md"} colorScheme="blackAlpha">
                      Apply
                    </Button>
                  </HStack>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box w={["100%", "100%", "69%"]}>
          <HStack justifyContent={"space-between"} mb="1rem">
            <Text fontSize={"13px"}>
              {(Math.random() * 132444773).toFixed(0)} ads in <b>India </b>{" "}
            </Text>
            <Box w="25%">
              <HStack>
                <Select
                  variant="unstyled"
                  placeholder="Sort By"
                  onChange={(e) => {
                    setsort(e.target.value);
                  }}
                >
                  <option value="lth">Price: Low to High</option>
                  <option value="htl">Price: Hight to Low </option>
                  <option value="date">Date Published</option>
                  <option value="relevance">Relevance</option>
                  <option value="distance">Distance</option>
                </Select>
              </HStack>
            </Box>
          </HStack>

          {loading ? (
            <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
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
          ) : (
            <SimpleGrid columns={[1, 2, 3]} spacing={3}>
              {productdata.map((cars, i) => (
                <Box
                  key={cars.id}
                  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                  borderRadius="5px"
                  height="auto"
                  p="1rem 1rem 5px 1rem"
                >
                  <AiOutlineHeart
                    style={{ float: "right", fontSize: "25px" }}
                  />
                  <Link to={`/singleprod/${id}/${i}`}>
                    <Image
                      width={"auto"}
                      m="auto"
                      height="22vh"
                      src={cars.imgUrl1 || cars.imgUrl2}
                    />
                    <Box textAlign={"left"}>
                      <Text fontWeight={"700"} mt="8px">
                        ₹ {cars.price}
                      </Text>
                      <Text fontSize={"13px"} color="rgba(0, 47, 52, 0.64)">
                        {cars.text1}
                      </Text>
                      <Text fontSize={"13px"} 
                        fontWeight={'600'}>{cars.text2}</Text>
                      <HStack
                        justifyContent={"space-between"}
                        color={"rgba(0, 47, 52, 0.64)"}
                        fontSize="11px"
                        fontWeight={'600'}
                      >
                        <Text>{cars.text3}</Text>
                        <Text>{cars.day}</Text>
                      </HStack>
                    </Box>
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          )}
          <Center>
            <Box m="2rem 0rem">
              <Button
                onClick={() => {
                  setTimeout(() => {
                    setlimit(limit + 20);
                    setloading(false);
                  }, 1000);
                }}
                p={"13px 10px"}
                height={"50px"}
                backgroundColor={"#fff"}
                border={"2px solid #000"}
                _hover={{ border: "3px solid #000" }}
              >
                Load more
              </Button>
            </Box>
          </Center>
        </Box>
      </HStack>
    </Box>
  );
};
