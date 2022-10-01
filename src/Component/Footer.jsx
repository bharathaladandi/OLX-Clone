import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <>
      <Box p="2rem" backgroundColor={"#F7F8F9"}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Image src="https://statics.olx.in/external/base/img/phone-app.webp" />
          </Stack>
          <Stack
            align={"flex-start"}
            borderRight={{ base: "none", sm: "none", md: "2px solid #C9C7C8" }}
            px="1.3rem"
          >
            <Heading as="h1" textTransform={"capitalize"}>
              TRY THE OLX APP
            </Heading>
            <Text fontSize={"18px"}>
              Buy, sell and find just about anything using the app on your
              mobile.
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h4" size="sm">
              GET YOUR APP TODAY
            </Heading>
            <br />
            <HStack>
              <Image
                w="7rem"
                src="https://statics.olx.in/external/base/img/appstore_2x.webp"
              />
              <Image
                w="7rem"
                src="https://statics.olx.in/external/base/img/playstore_2x.webp"
              />
            </HStack>
          </Stack>
        </SimpleGrid>
      </Box>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"7xl"} py={4}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={"flex-start"} fontSize={"12px"} lineHeight="13px">
              <Text color={"#443E34"} fontWeight="500" fontSize="15px">
                POPULAR LOCATIONS
              </Text>
              <br />
              <Link color={"rgba(0,47,52,.64)"}> Kolkata </Link>
              <Link color={"rgba(0,47,52,.64)"}> Mumbai </Link>
              <Link color={"rgba(0,47,52,.64)"}> Chennai </Link>
              <Link color={"rgba(0,47,52,.64)"}> Pune </Link>
            </Stack>

            <Stack align={"flex-start"} fontSize={"12px"} lineHeight="13px">
              <Text color={"#443E34"} fontWeight="500" fontSize="15px">
                TRENDING LOCATIONS
              </Text>
              <br />
              <Link color={"rgba(0,47,52,.64)"}> Bhubaneshwar </Link>
              <Link color={"rgba(0,47,52,.64)"}> Hyderabad </Link>
              <Link color={"rgba(0,47,52,.64)"}> Chandigarh </Link>
              <Link color={"rgba(0,47,52,.64)"}> Nashik </Link>
            </Stack>

            <Stack align={"flex-start"} fontSize={"12px"} lineHeight="13px">
              <Text color={"#443E34"} fontWeight="500" fontSize="15px">
                ABOUT US
              </Text>
              <br />
              <Link color={"rgba(0,47,52,.64)"}>About OLX Group</Link>
              <Link color={"rgba(0,47,52,.64)"}> Careers</Link>
              <Link color={"rgba(0,47,52,.64)"}>Contact Us</Link>
              <Link color={"rgba(0,47,52,.64)"}>OLXPeople</Link>
              <Link color={"rgba(0,47,52,.64)"}>Waah Jobs</Link>
            </Stack>
            <Stack align={"flex-start"} fontSize={"12px"} lineHeight="15px">
              <Text color={"#443E34"} fontWeight="500" fontSize="15px">
                OLX
              </Text>
              <br />
              <Link color={"rgba(0,47,52,.64)"}>Help </Link>
              <Link color={"rgba(0,47,52,.64)"}>Sitemap </Link>
              <Link color={"rgba(0,47,52,.64)"}>
                Legal & Privacy information
              </Link>
              <Link color={"rgba(0,47,52,.64)"}>Blog </Link>
            </Stack>

            <Stack align={"flex-start"} fontSize={"12px"} lineHeight="13px">
              br
              <Text color={"#443E34"} fontWeight="500" fontSize="15px">
                Follow US
              </Text>
              <HStack>
                <SocialButton label={"Facebook"} href={"#"}>
                  <FaFacebookF />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </HStack>
              <br />
              <br />
              <HStack wrap={'wrap'}>
                <Image src="https://statics.olx.in/external/base/img/playstore.webp" />
                <Image src="https://statics.olx.in/external/base/img/appstore.webp" />
              </HStack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          backgroundColor={"#002F34"}
          color={"#fff"}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text fontSize={"14px"}>
              <b>Other Countries</b> Pakistan - South Africa - Indonesia
            </Text>
            <Stack direction={"row"} spacing={6}>
              <Text fontSize={"12px"}>
                <b>Free Classifieds in India.</b> © 2006-2022 OLX
              </Text>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};
