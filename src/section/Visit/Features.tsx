import {
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
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Galleries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661893375334-e2603ce341d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
    title: "Family visits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601059252957-c3d6f1911313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Exhibitions and Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FeaturesSection() {
  return (
    <Container fluid pt={80} pb={120}>
      <Title size={48} align="center" mb="xl">
        Ways to explore
      </Title>
      <SimpleGrid cols={3} spacing="md">
        {data.map((d, i) => (
          <Paper key={`visit-feature-${i}`}>
            <Image src={d.image} alt={d.title} height={360} radius="sm" />
            <Title order={3} my="md">
              {d.title}
            </Title>
            <Text>{d.description}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
