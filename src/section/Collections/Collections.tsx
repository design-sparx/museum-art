import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const { Col } = Grid;

const data = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1679690708461-11c19962a25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    title: "Lorem ipsum dolor",
    description:
      "Massa placerat duis ultricies lacus sed turpis tincidunt id. Natoque penatibus et magnis dis parturient. Phasellus vestibulum lorem sed risus. Tellus rutrum tellus pellentesque eu. Vitae purus faucibus ornare suspendisse.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602086232396-bdff9b31bc7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Lorem ipsum dolor",
    description:
      "Massa placerat duis ultricies lacus sed turpis tincidunt id. Natoque penatibus et magnis dis parturient. Phasellus vestibulum lorem sed risus. Tellus rutrum tellus pellentesque eu. Vitae purus faucibus ornare suspendisse.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628074958552-7c9d0b4173b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Lorem ipsum dolor",
    description:
      "Massa placerat duis ultricies lacus sed turpis tincidunt id. Natoque penatibus et magnis dis parturient. Phasellus vestibulum lorem sed risus. Tellus rutrum tellus pellentesque eu. Vitae purus faucibus ornare suspendisse.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633785584922-503ad0e982f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Lorem ipsum dolor",
    description:
      "Massa placerat duis ultricies lacus sed turpis tincidunt id. Natoque penatibus et magnis dis parturient. Phasellus vestibulum lorem sed risus. Tellus rutrum tellus pellentesque eu. Vitae purus faucibus ornare suspendisse.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554919563-7d9635c51fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",
    title: "Lorem ipsum dolor",
    description:
      "Massa placerat duis ultricies lacus sed turpis tincidunt id. Natoque penatibus et magnis dis parturient. Phasellus vestibulum lorem sed risus. Tellus rutrum tellus pellentesque eu. Vitae purus faucibus ornare suspendisse.",
    imageDescription: "Images by Unsplash",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579748048451-365c9c9bfbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Lorem ipsum dolor",
    description:
      "Massa placerat duis ultricies lacus sed turpis tincidunt id. Natoque penatibus et magnis dis parturient. Phasellus vestibulum lorem sed risus. Tellus rutrum tellus pellentesque eu. Vitae purus faucibus ornare suspendisse.",
    imageDescription: "Images by Unsplash",
  },
];
export default function Collections() {
  const items = data.map((d, i) => (
    <Paper key={`collection-item-${i}`} p="md">
      <Grid gutter="md" sx={{ alignItems: "center" }}>
        <Col lg={3}>
          <Image src={d.image} alt={d.title} height={240} radius="sm" mb="sm" />
          <Text align="center" italic>
            {d.imageDescription}
          </Text>
        </Col>
        <Col lg={9}>
          <Title order={3}>{d.title}</Title>
          <Text my="md">{d.description}</Text>
          <Button size="md" variant="light">
            Explore
          </Button>
        </Col>
      </Grid>
      <Divider mt="sm" variant="dotted" />
    </Paper>
  ));

  return (
    <Container fluid pt={80} pb={120}>
      <Title size={48} mb="xl">
        Featured Collections
      </Title>
      <Stack>{items}</Stack>
      <Center>
        <Button size="lg" variant="light">
          Explore More Featured Collections
        </Button>
      </Center>
    </Container>
  );
}
