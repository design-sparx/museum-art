import { Button, Container, Grid, List, Text, Title } from "@mantine/core";

const { Item } = List;
export default function InfoSection() {
  return (
    <Container fluid>
      <Grid>
        <Grid.Col lg={8}>
          <Title>
            Your support is vital and helps the Museum to share the collection
            with the world.
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </Text>
          <List>
            <Item>
              Semper auctor neque vitae tempus quam pellentesque nec. Ut tellus
              elementum sagittis vitae et.
            </Item>
            <Item>
              Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
              sapien.{" "}
            </Item>
            <Item>
              Ut etiam sit amet nisl purus in. Cursus mattis molestie a iaculis
              at erat pellentesque.
            </Item>
            <Item>
              Penatibus et magnis dis parturient montes nascetur ridiculus.
            </Item>
            <Item>
              Integer quis auctor elit sed. Egestas dui id ornare arcu odio ut.
            </Item>
          </List>
          <Text>
            Read our supporter case studies to discover just a few of the
            fantastic collaborations already in place.
          </Text>
        </Grid.Col>
        <Grid.Col lg={4}>
          <Title>Contact us</Title>
          <Text>For more information about supporting the Museum:</Text>
          <Text>Email: email@museum.org</Text>
          <Text>Phone: +000 000 000</Text>
          <Button>Donate Now</Button>
          <Button>Make a regular donation</Button>
          <Button>Donate an artifact</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
