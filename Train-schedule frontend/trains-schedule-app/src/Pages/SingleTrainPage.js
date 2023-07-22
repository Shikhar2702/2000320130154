import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import TrainDetails from "../Components/TrainDetails";

const SingleTrainPage = () => {
  const [trainId, setTrainId] = useState("");
  const [train, setTrain] = useState(null);

  const handleSubmit = () => {
    axios
      .get(`http://localhost:5000/singleTrain/${trainId}`)
      .then((response) => {
        setTrain(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <Heading>Single Train Schedule</Heading>
      <FormControl id="trainId" mt={4} isRequired>
        <FormLabel>Enter Train ID:</FormLabel>
        <Input
          placeholder="Enter serial number of the train ;e.g: 1, 2"
          type="number"
          value={trainId}
          onChange={(e) => setTrainId(e.target.value)}
        />
      </FormControl>
      <Button mt={2} onClick={handleSubmit} color="blue">
        Get Train Details
      </Button>
      {train ? (
        <TrainDetails train={train} />
      ) : (
        <Text mt={4}>
          Enter a valid train ID and click "Get Train Details" to view train
          information.
        </Text>
      )}
    </Box>
  );
};

export default SingleTrainPage;
