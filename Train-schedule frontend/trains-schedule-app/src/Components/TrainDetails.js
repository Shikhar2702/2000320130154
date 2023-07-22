import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const TrainDetails = ({ train }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="base">
      <Heading size="md">{train.name}</Heading>
      <Text fontSize="sm">Departure: {train.departure}</Text>
      <Text fontSize="sm">Arrival: {train.arrival}</Text>
      <Text fontSize="sm">Seat Availability: {train.seats}</Text>
      <Text fontSize="sm">Coach Class: {train.coachClass}</Text>
      <Text fontSize="sm">Fare: {train.fare}</Text>
      <Text fontSize="sm">Status: {train.status}</Text>
    </Box>
  );
};

export default TrainDetails;
