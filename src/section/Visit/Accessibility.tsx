import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function AccessibilitySection() {
  return (
    <Container fluid>
      <SimpleGrid cols={2}>
        <Stack>
          <Title>Accessibility</Title>
          <Text>We have a wide range of services for disabled visitors.</Text>
          <Text>
            Find out how to make the most of your visit and plan your trip in
            advance on our Accessibility at the Museum page.
          </Text>
          <Button>Learn more</Button>
        </Stack>
        <Image
          src="https://images.unsplash.com/photo-1545483656-1a34ae73add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="accessibility image"
          height={400}
        />
      </SimpleGrid>
    </Container>
  );
}
