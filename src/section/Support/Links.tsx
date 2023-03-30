import { Container, Paper, SimpleGrid, Text, Title } from "@mantine/core";

const data = [
  "donate",
  "corporate solution",
  "become a patron",
  "support case studies",
  "become a volunteer",
  "leave a legacy",
];
export default function LinksSection() {
  const items = data.map((d) => (
    <Paper key={`support-links-${d}`}>
      <Text>{d}</Text>
    </Paper>
  ));

  return (
    <Container fluid>
      <Title>More ways to support us</Title>
      <SimpleGrid cols={3}>{items}</SimpleGrid>
    </Container>
  );
}
