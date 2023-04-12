import {
  Button,
  Container,
  Flex,
  Grid,
  List,
  Paper,
  PaperProps,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

const { Item } = List;

export default function InfoSection() {
  const theme = useMantineTheme();
  const paperProps: PaperProps = {
    p: "md",
    sx: {
      backgroundColor: theme.colors.violet[0],
    },
  };

  return (
    <Container fluid pt={80} pb={120}>
      <Grid>
        <Grid.Col lg={7}>
          <Paper {...paperProps}>
            <Title order={2} mb="lg">
              Your support is vital and helps the Museum to share the collection
              with the world.
            </Title>
            <Text mb="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <List mb="md">
              <Item>
                Semper auctor neque vitae tempus quam pellentesque nec. Ut
                tellus elementum sagittis vitae et.
              </Item>
              <Item>
                Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
                sapien.{" "}
              </Item>
              <Item>
                Ut etiam sit amet nisl purus in. Cursus mattis molestie a
                iaculis at erat pellentesque.
              </Item>
              <Item>
                Penatibus et magnis dis parturient montes nascetur ridiculus.
              </Item>
              <Item>
                Integer quis auctor elit sed. Egestas dui id ornare arcu odio
                ut.
              </Item>
            </List>
            <Text>
              Read our supporter case studies to discover just a few of the
              fantastic collaborations already in place.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col lg={5}>
          <Paper {...paperProps}>
            <Title order={3} mb="lg">
              Contact us
            </Title>
            <Text mb="md">
              For more information about supporting the Museum:
            </Text>
            <Text mb="md">Email: email@museum.org</Text>
            <Text mb="md">Phone: +000 000 000</Text>
            <Flex gap="sm" wrap="wrap">
              <Button>Donate Now</Button>
              <Button>Make a regular donation</Button>
              <Button>Donate an artifact</Button>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
