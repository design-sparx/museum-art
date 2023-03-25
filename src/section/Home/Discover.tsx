import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

export default function DiscoverSection() {
  return (
    <Container fluid sx={{ overflow: "hidden" }}>
      <Box>
        <Title>Discover</Title>
        <Text>Get Latest Updates and News</Text>
      </Box>
      <Paper p="md">
        <Grid>
          <Grid.Col lg={7}>
            <Image
              src="https://images.unsplash.com/photo-1610494940231-a07875fb25fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              height={480}
              fit="cover"
            />
          </Grid.Col>
          <Grid.Col lg={5}>
            <Text size="lg">Lorem ipsum dolor sit amet</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris.
              Mauris in aliquam sem fringilla ut morbi tincidunt. Amet venenatis
              urna cursus eget nunc scelerisque viverra mauris in. Neque
              convallis a cras semper auctor neque.
            </Text>
            <Text>
              Duis convallis convallis tellus id interdum velit laoreet id
              donec. Cras fermentum odio eu feugiat pretium. Tellus orci ac
              auctor augue mauris augue neque gravida in.
            </Text>
            <Button>Continue reading</Button>
          </Grid.Col>
        </Grid>
      </Paper>
      <SimpleGrid cols={3}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Paper p="md" key={`news-item-${i}`}>
            <Text size="lg">Lorem ipsum dolor sit amet</Text>
            <Text>
              Duis convallis convallis tellus id interdum velit laoreet id
              donec. Cras fermentum odio eu feugiat pretium. Tellus orci ac
              auctor augue mauris augue neque gravida in.
            </Text>
            <Button>Read more</Button>
          </Paper>
        ))}
      </SimpleGrid>
      <Button>Discover more content</Button>
    </Container>
  );
}
