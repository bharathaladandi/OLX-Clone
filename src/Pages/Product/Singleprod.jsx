import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import Slider from "../Home/Slider";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Singleprod = ({ texts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { category } = useParams();
  const { id } = useParams();

  const [prod, setprod] = useState([]);
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
      .get(`https://hidden-ravine-45597.herokuapp.com/${pageroute[category]}/${[+id + 1]}`)
      .then((r) => {
        setprod(r.data);
      });
  }, []);

  return (
    <Container maxW="96%" mt="1.5rem" bg="#F2F4F5" p="1rem 0rem">
      <HStack justifyContent={"space-between"} alignItems={"flex-start"}>
        <Box w="65%">
          <Box bg="black">
            <Center>
              <Box bg="pink">
                <Image height={"80vh"} src={prod.imgUrl1 || prod.imgUrl2} />
              </Box>
            </Center>
          </Box>
          <Box
            p="18px"
            mt="1px"
            bg="#fff"
            border="1px solid rgba(14, 4, 5, 0.2)"
          >
            <Text mt="5px" fontSize={"19px"} fontWeight={"700"}>
              Details
            </Text>
            <HStack
              spacing={"10rem"}
              color={"#002f34"}
              fontSize="14px"
              m="1rem 0rem"
            >
              <Text>{prod.text2}</Text>
              <Text>{prod.text1}</Text>
            </HStack>
            <hr />
            <Text mt="15px" fontSize={"19px"} fontWeight={"700"}>
              Details
            </Text>
            <VStack
              mt="1rem"
              fontSize="14px"
              spacing={"15px"}
              alignItems={"flex-start"}
            >
              <Text>{prod.text1}</Text>
              <Text>{prod.text3}</Text>
            </VStack>
          </Box>
          <Box border="1px solid rgba(14, 4, 5, 0.2)" pt="-3rem">
            <Slider bgs={"#fff"} texts={"Related ads"} />
          </Box>
        </Box>

        <Box w="35%" p="0px 1rem" bg>
          <Box
            border="1px solid rgba(14, 4, 5, 0.2)"
            bg="#fff"
            borderRadius={"4px"}
            p="18px"
          >
            <HStack justifyContent={"space-between"}>
              <Box>
                <Heading>{prod.price}</Heading>
                <Text color={"#406367"} mt="5px">
                  {prod.text1}
                </Text>
                <Text color={"#406367"} mt="5px">
                  {prod.text2}
                </Text>
              </Box>
              <Box>
                <HStack alignItems={"flex-start"} spacing={"15px"}>
                  <FiShare2 fontSize={"25px"} />
                  <AiOutlineHeart fontSize={"25px"} />
                </HStack>
              </Box>
            </HStack>
            <HStack
              justifyContent={"space-between"}
              color={"rgba(0, 47, 52, 0.64)"}
              fontSize="12px"
              mt="20px"
              p="10px 0px"
            >
              <Text> {prod.text3}</Text>
              <Text>{prod.day}</Text>
            </HStack>
          </Box>

          <Box
            border="1px solid rgba(14, 4, 5, 0.2)"
            bg="#fff"
            borderRadius={"4px"}
            p="18px"
            mt="1rem"
          >
            <Box>
              <Text mt="5px" fontSize={"19px"}>
                Seller description
              </Text>
            </Box>
            <HStack justifyContent={"space-between"}>
              <Box w="95%">
                <HStack
                  alignItems={"center"}
                  spacing={"15px"}
                  justifyContent={"space-between"}
                >
                  <Box>
                    <HStack alignItems={"center"} spacing={"15px"}>
                      <Image
                        height={"70px"}
                        borderRadius={"50%"}
                        src="https://statics.olx.in/external/base/img/avatar_4.png"
                      />
                      <VStack alignItems={"flex=start"}>
                        <Heading as="h5" size="sm">
                          Pavankumar
                        </Heading>
                        <Text fontSize={"12px"}>Member Since May 2020</Text>
                      </VStack>
                    </HStack>
                  </Box>
                  <Box>
                    <BsChevronRight fontSize={"20px"} />
                  </Box>
                </HStack>
              </Box>
            </HStack>
            <Box>
              <Button
                m="1rem 0rem"
                as="button"
                w="100%"
                p={"18px 10px"}
                height={"50px"}
                textAlign={"center"}
                fontWeight={"700"}
                backgroundColor={"#fff"}
                border={"2px solid #000"}
                _hover={{ border: "5px solid #000" }}
                onClick={onOpen}
              >
                Chat With Seller
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent h="85vh">
                    <ModalHeader>
                      <HStack alignItems={"center"} justify={"center"}>
                        <Image
                          boxSize={"70px"}
                          borderRadius={"50%"}
                          src="https://statics.olx.in/external/base/img/avatar_1.png"
                        />
                        <Text fontSize={"2rem"} color={"cyan"}>
                          ⟼
                        </Text>
                        <Image
                          boxSize={"60px"}
                          borderRadius={"50%"}
                          src="https://apollo-singapore.akamaized.net:443/v1/files/jgarwzl0sztm1-IN/image;s=120x120"
                        />
                      </HStack>
                      <VStack spacing={"2rem"} mt="2rem ">
                        <Text>Write a message to PavanKumar </Text>

                        <Input
                          variant="flushed"
                          placeholder="Write your message here"
                          bg="gray.200"
                          py="1.5rem"
                        />
                      </VStack>
                    </ModalHeader>
                    <ModalCloseButton fontSize={"1.5rem"} onClose={onClose} />
                    <ModalBody>
                      <Button
                        bg="#002F34"
                        color="#fff"
                        h="7vh"
                        variant="solid"
                        w="100%"
                        mt="3rem"
                        _hover={{ bg: "#002F34", color: "#fff" }}
                      >
                        Send Message
                      </Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Button>
            </Box>
          </Box>

          <Box
            border="1px solid rgba(14, 4, 5, 0.2)"
            bg="#fff"
            borderRadius={"4px"}
            p="18px"
            mt="1rem"
          >
            <Box>
              <Text mt="5px" fontSize={"19px"} fontWeight={"700"}>
                Posted in
              </Text>
              <Text color={"#406367"} m="5px 0px">
                Android phone repair
              </Text>
            </Box>
            <Box>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                  alt="demo"
                />
              </AspectRatio>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Container>
  );
};
