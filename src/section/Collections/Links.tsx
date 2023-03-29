import { Container, Paper, SimpleGrid, Title } from "@mantine/core";

const data = [
  "collection",
  "collection online",
  "galleries",
  "blog",
  "podcast",
];

export default function LinksSection() {
  const items = data.map((d) => <Paper key={d}>{d}</Paper>);
  return (
    <Container fluid>
      <Title>You may also be interested in</Title>
      <SimpleGrid cols={3}>{items}</SimpleGrid>
    </Container>
  );
}
