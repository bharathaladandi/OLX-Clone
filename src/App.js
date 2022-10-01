import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import "./App.css";
import { Allroutes } from "./Component/Allroutes";
import { Footer } from "./Component/Footer";
import { Navbar } from "./Component/Navbar";

function App() {
 
  
  return (
    <>
       <Navbar />
      <Allroutes />
      <Footer />
      

    </>
  );
}

export default App;
