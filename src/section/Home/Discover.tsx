import {
  Box,
  Button,
  ButtonProps,
  Center,
  Container,
  createStyles,
  Divider,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    "&:hover, &:focus": {
      transition: "all ease 200ms",
    },
  },
}));

export default function DiscoverSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const buttonProps: ButtonProps = {
    variant: "light",
    fullWidth: smallerThan,
  };

  return (
    <Container fluid pt={80} pb={120}>
      <Box mb="xl" sx={{ textAlign: "center" }}>
        <Title size={48} mb="md">
          Discover
        </Title>
        <Text size="lg">Get Latest Updates and News</Text>
      </Box>
      <Paper>
        <Grid sx={{ alignItems: "center" }}>
          <Grid.Col lg={6}>
            <Image
              src="https://images.unsplash.com/photo-1610494940231-a07875fb25fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              height={smallerThan ? 320 : 420}
              fit="cover"
              radius="sm"
            />
          </Grid.Col>
          <Grid.Col lg={6}>
            <Stack align="start">
              <Title size={24}>Lorem ipsum dolor sit amet</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Facilisi nullam vehicula ipsum a arcu cursus vitae congue
                mauris. Mauris in aliquam sem fringilla ut morbi tincidunt. Amet
                venenatis urna cursus eget nunc scelerisque viverra mauris in.
                Neque convallis a cras semper auctor neque.
              </Text>
              <Text>
                Duis convallis convallis tellus id interdum velit laoreet id
                donec. Cras fermentum odio eu feugiat pretium. Tellus orci ac
                auctor augue mauris augue neque gravida in.
              </Text>
              <Text>
                Et magnis dis parturient montes nascetur. Non tellus orci ac
                auctor. Gravida quis blandit turpis cursus in hac. Nec nam
                aliquam sem et tortor consequat id porta nibh. Netus et
                malesuada fames ac. Faucibus ornare suspendisse sed nisi lacus.
                Arcu dictum varius duis at. Porttitor rhoncus dolor purus non.
              </Text>
              <Button {...buttonProps} size={smallerThan ? "sm" : "md"}>
                Continue reading
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
      {!smallerThan && <Divider my="xl" />}
      <SimpleGrid
        cols={4}
        mt="lg"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <Paper key={`news-item-${i}`} className={classes.card}>
            <Text size="lg" weight={600} mb="md">
              Lorem ipsum dolor sit amet
            </Text>
            <Text mb="md">
              Nulla porttitor massa id neque. Ultrices vitae auctor eu augue ut
              lectus. Lorem dolor sed viverra ipsum nunc aliquet. Vel risus
              commodo viverra maecenas accumsan lacus vel facilisis volutpat.
            </Text>
            <Button {...buttonProps}>Read more</Button>
          </Paper>
        ))}
      </SimpleGrid>
      <Center mt={smallerThan ? 36 : "xl"}>
        <Button size="xl" variant="light" fullWidth={smallerThan}>
          Discover more content
        </Button>
      </Center>
    </Container>
  );
}
