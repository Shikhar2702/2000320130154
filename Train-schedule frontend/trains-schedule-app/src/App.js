import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Container,
  Button,
  Text,
} from "@chakra-ui/react";
import AllTrainPage from "./Pages/AllTrainPage";
import SingleTrainPage from "./Pages/SingleTrainPage";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex
          align="center"
          justify="space-between"
          p={4}
          bg="blue.500"
          color="white"
        >
          <Heading as="h1" size="lg">
            Train App
          </Heading>
          <Box>
            Welcome, to our Train App <br></br>Click on Single Train, All trains
            to get details
          </Box>
          <Box>
            <Flex as="ul" listStyleType="none">
              {/* Use Link to navigate to AllTrains page */}
              <Box as="li" mr={4}>
                <Link to="/">All Trains</Link>
              </Box>
              {/* Use Link to navigate to SingleTrain page */}
              <Box as="li" mr={4}>
                <Link to="/train/1">Single Train</Link>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Container maxW="container.lg" mt={4}>
          <Routes>
            <Route path="/" element={<AllTrainPage />} />
            <Route path="/train/:trainId" element={<SingleTrainPage />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
