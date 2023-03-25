import React from "react";
import {
  Button,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Check whats open",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    title: "Booking online",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600066975936-ecc81000c8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80",
    title: "Keep your distance",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function VisitSection() {
  return (
    <Container fluid>
      <Title>Visit the Museum</Title>
      <Text>3 steps to be safe (COVID-19 Guidelines Observed)</Text>
      <SimpleGrid cols={3}>
        {data.map((item, i) => (
          <Paper key={`visit-item-${i}`}>
            <Image src={item.image} alt={item.title} height={320} />
            <Text>{item.title}</Text>
            <Text>{item.text}</Text>
            <Button>Learn More</Button>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
