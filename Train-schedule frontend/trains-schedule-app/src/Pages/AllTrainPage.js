import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Heading } from "@chakra-ui/react";
import TrainDetails from "../Components/TrainDetails";

const AllTrainPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allTrains")
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <Box>
      <Heading>All Trains Schedule</Heading>
      {trains.map((train) => (
        <TrainDetails key={train.id} train={train} />
      ))}
    </Box>
  );
};

export default AllTrainPage;
