import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { login, signup } from "../../AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";

export const Navbarfirst = () => {
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const Auth = useSelector((store) => store.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isOpen: isLogOpen,
    onOpen: onLogOpen,
    onClose: onLogClose,
  } = useDisclosure();

  const {
    isOpen: isSignOpen,
    onOpen: onSignOpen,
    onClose: onSignClose,
  } = useDisclosure();

  const {
    isOpen: isEmailOpen,
    onOpen: onEmailOpen,
    onClose: onEmailClose,
  } = useDisclosure();
  const handleclose = () => {
    onEmailClose();
    onLogClose();
    onSignClose();
  };

  const handleLogin = () => {
    dispatch(
      login({
        email,
        password,
      })
    );
    navigate("/");
    handleclose();
  };
  const handleSignup = () => {
    dispatch(
      signup({
        email,
        password,
      })
    );
    handleclose();
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#F7F8F9" }}
      >
        <Link className="navbar-brand" to="/" style={{ marginTop: "-10px" }}>
          <svg
            width="48px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            fillRule="evenodd"
          >
            <path
              className="rui-4K4Y7"
              d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
          </svg>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <HStack>
              <li className="nav-item active">
                <Select placeholder="Select option"
                w={['100%','100%','100%','100%','250px',]}
                border="2px solid #000"
                borderRadius={"5px"}
                bg="#fff"
                variant="unstyled"
                h="7.5vh"
                mb={['10px','10px','10px','0px','0px',]}
                fontSize={'19px'}
                >
                <option>India</option>
                <option value="1">Maharshtra</option>
                <option value="2">Kerla</option>
                <option value="3">Goa</option>
                <option value="3">Kernatak</option>
                </Select>
              
              </li>
            </HStack>
            <li className="nav-item">
              <div className="input-group" style={{ display: "flex" }}>
                <InputGroup
                  border="2px solid #000"
                  borderRadius={"5px"}
                  ml={["0px", "0px", "0px", "0px", "25px"]}
                  h="7.5vh"
                >
                  <Input
                    type="tel"
                    placeholder="Find car, mobiles phones and more..."
                    outline={"none"}
                    border={"none"}
                    p="5px"
                    bg="#fff"
                    mt="5px"
                    variant="unstyled"
                    w={["100%", "100%", "650px"]}
                  />
                  <InputRightElement
                  h="100%"
                    pointerEvents="none"
                    bg="#002F34"
                    children={<FiSearch color="white" fontSize={"20px"} />}
                  />
                </InputGroup>
              </div>
            </li>
            <li className="nav-item">
            <Select
                w={['100%','550%','100%','100%','100px',]}
                border="none"              
                variant="unstyled"
                h="7.5vh"
                ml={["0px", "0px", "0px", "0px", "18px"]}
                mb={['10px','10px','10px','0px','0px',]}
                fontSize={'19px'}
                >
                  <option value="1">English</option>
                  <option value="2">हिंदी</option>
                </Select>
            </li>
            <li className="nav-item" style={{ marginLeft: "px",marginTop:'3px' }}>
              <div style={{ width: "50px" }}>
                <Button
                  colorScheme="gray"
                  border={"none"}
                  variant="outline"
                  onClick={
                    Auth
                      ? () => {
                          dispatch({ type: "LogOut" });
                        }
                      : onLogOpen
                  }
                >
                  {!Auth ? "Login" : "Log Out"}
                  <Modal isOpen={isLogOpen} onClose={onLogClose}>
                    <ModalOverlay />
                    <ModalContent h="85vh">
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box width={"100%"}>
                          <Button
                            width={"100%"}
                            textAlign="center"
                            colorScheme="teal"
                            variant="outline"
                            onClick={onSignOpen}
                          >
                            <BsPhone /> Continue With Email
                            <Modal isOpen={isSignOpen}>
                              <ModalOverlay />
                              <ModalContent h="85vh">
                                <ModalHeader>
                                  <VStack>
                                    <Link
                                      className="navbar-brand"
                                      to="/"
                                      style={{ marginTop: "-10px" }}
                                    >
                                      <svg
                                        width="48px"
                                        viewBox="0 0 1024 1024"
                                        data-aut-id="icon"
                                        fillRule="evenodd"
                                      >
                                        <path
                                          className="rui-4K4Y7"
                                          d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                                        ></path>
                                      </svg>
                                    </Link>
                                    <Text>Enter your email to Sign up</Text>
                                    <Input
                                      variant="outline"
                                      placeholder="Email"
                                      h="7vh"
                                      value={email}
                                      onChange={(e) => setemail(e.target.value)}
                                    />
                                    <Input
                                      variant="outline"
                                      placeholder="password"
                                      h="7vh"
                                      value={password}
                                      onChange={(e) =>
                                        setpassword(e.target.value)
                                      }
                                    />
                                  </VStack>
                                </ModalHeader>
                                <ModalCloseButton onClick={handleclose} />
                                <ModalBody>
                                  <Box bg="#FEFBF0">
                                    <Text
                                      fontSize={"14px"}
                                      p="15px 20px"
                                      fontWeight={"400"}
                                    >
                                      If you are a new user please select any
                                      other login option from previous page.
                                    </Text>
                                  </Box>
                                  <Button
                                    bg="#002F34"
                                    color="#fff"
                                    h="7vh"
                                    variant="solid"
                                    w="100%"
                                    mt="3rem"
                                    _hover={{ bg: "#002F34", color: "#fff" }}
                                    onClick={handleSignup}
                                  >
                                    Sign Up
                                  </Button>
                                  <Container>
                                    <Text
                                      textAlign={"center"}
                                      fontSize={"10px"}
                                      p="10px 20px"
                                      fontWeight={"400"}
                                    >
                                      Your email is never shared with external
                                      parties nor do we use it to spam you in
                                      any way.
                                    </Text>
                                  </Container>
                                </ModalBody>
                              </ModalContent>
                            </Modal>
                          </Button>
                          <Button
                            my={"20px"}
                            width={"100%"}
                            colorScheme="teal"
                            variant="outline"
                          >
                            <AiOutlineGoogle /> Continue With Google
                          </Button>
                        </Box>
                        <Container mb="100px">
                          <VStack>
                            <Heading size="xs">OR</Heading>
                            <Heading
                              size="xs"
                              textAlign={"center"}
                              cursor={"pointer"}
                              _hover={{ textDecoration: "underline" }}
                              onClick={onEmailOpen}
                            >
                              Login with Email
                              <Modal isOpen={isEmailOpen}>
                                <ModalOverlay />
                                <ModalContent h="85vh">
                                  <ModalHeader>
                                    <VStack>
                                      <Link
                                        className="navbar-brand"
                                        to="/"
                                        style={{ marginTop: "-10px" }}
                                      >
                                        <svg
                                          width="48px"
                                          viewBox="0 0 1024 1024"
                                          data-aut-id="icon"
                                          fillRule="evenodd"
                                        >
                                          <path
                                            className="rui-4K4Y7"
                                            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                                          ></path>
                                        </svg>
                                      </Link>
                                      <Text>Enter your email to login</Text>
                                      <Input
                                        variant="outline"
                                        placeholder="Email"
                                        h="7vh"
                                        value={email}
                                        name="email"
                                        onChange={(e) =>
                                          setemail(e.target.value)
                                        }
                                      />
                                      <Input
                                        variant="outline"
                                        placeholder="Email"
                                        h="7vh"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                          setpassword(e.target.value)
                                        }
                                      />
                                    </VStack>
                                  </ModalHeader>
                                  <ModalCloseButton onClick={handleclose} />
                                  <ModalBody>
                                    <Box bg="#FEFBF0">
                                      <Text
                                        fontSize={"14px"}
                                        p="15px 20px"
                                        fontWeight={"400"}
                                      >
                                        If you are a new user please select any
                                        other login option from previous page.
                                      </Text>
                                    </Box>
                                    <Button
                                      bg="#002F34"
                                      color="#fff"
                                      h="7vh"
                                      variant="solid"
                                      w="100%"
                                      mt="3rem"
                                      _hover={{ bg: "#002F34", color: "#fff" }}
                                      onClick={handleLogin}
                                    >
                                      Log In
                                    </Button>
                                    <Container>
                                      <Text
                                        textAlign={"center"}
                                        fontSize={"10px"}
                                        p="10px 20px"
                                        fontWeight={"400"}
                                      >
                                        Your email is never shared with external
                                        parties nor do we use it to spam you in
                                        any way.
                                      </Text>
                                    </Container>
                                  </ModalBody>
                                </ModalContent>
                              </Modal>
                            </Heading>
                          </VStack>
                        </Container>
                        <Container>
                          <VStack>
                            <Heading size="xs" fontWeight="400">
                              All your personal details are safe with us.
                            </Heading>
                            <Heading
                              size="xs"
                              textAlign={"center"}
                              fontWeight="400"
                            >
                              If you continue, you are accepting
                              <Text
                                color={"blue"}
                                size="xs"
                                textAlign={"center"}
                                fontWeight="400"
                              >
                                OLX Terms and Conditions and Privacy Policy
                              </Text>
                            </Heading>
                          </VStack>
                        </Container>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Button>
              </div>
            </li>
            <li className="nav-item">
              <Button
                leftIcon={<FiPlus />}
                borderRadius="20px"
                colorScheme="light"
                color={"#000"}
                variant="solid"
                marginLeft={"50px"}
                width="90px"
                borderTop="5px solid #23E5DB"
                borderRight="5px solid #3A77FF"
                borderLeft="5px solid #FFCE32"
                borderBottom="5px solid red"
                onClick={onLogOpen}
              >
                SELL
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
