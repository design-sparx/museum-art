import { Box, Container, Paper, SimpleGrid, Text, Title } from "@mantine/core";

export default function SupportSection() {
  return (
    <Container fluid sx={{ overflow: "hidden" }}>
      <Box>
        <Title>Support the Museum</Title>
        <Text>Join today and Enjoy unlimited</Text>
      </Box>
      <SimpleGrid cols={3}>
        <Paper p="md">
          <Text size="lg">Become a member</Text>
          <Text>
            Support us by becoming a Member today and get 10% off in our online
            shop.
          </Text>
        </Paper>
        <Paper p="md">
          <Text size="lg">Donate</Text>
          <Text>
            Your support is vital and helps the Museum to share the collection
            with the world.
          </Text>
        </Paper>
        <Paper p="md">
          <Text size="lg">Shop Online</Text>
          <Text>
            The Museum shop has a range of unique gifts, replicas, games and
            more.
          </Text>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
