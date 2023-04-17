import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function AccessibilitySection() {
  const smallerThan = useMediaQuery("(max-width: 600px)");

  return (
    <Container fluid pt={80} pb={120}>
      <SimpleGrid
        cols={2}
        spacing="lg"
        sx={{ alignItems: "center" }}
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <Stack align="start">
          <Title size={smallerThan ? 32 : 48}>Accessibility</Title>
          <Text>We have a wide range of services for disabled visitors.</Text>
          <Text>
            Find out how to make the most of your visit and plan your trip in
            advance on our Accessibility at the Museum page.
          </Text>
          <Button size="md" variant="light" fullWidth={smallerThan}>
            Learn more
          </Button>
        </Stack>
        {!smallerThan && (
          <Image
            src="https://images.unsplash.com/photo-1545483656-1a34ae73add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="accessibility image"
            height={360}
            radius="sm"
          />
        )}
      </SimpleGrid>
    </Container>
  );
}
