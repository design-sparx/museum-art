import {
  Box,
  Button,
  ButtonProps,
  Center,
  Container,
  createStyles,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid transparent`,

    "&:hover, &:focus": {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

export default function DiscoverSection() {
  const { classes } = useStyles();
  const buttonProps: ButtonProps = {
    variant: "light",
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
        <Grid>
          <Grid.Col lg={6}>
            <Image
              src="https://images.unsplash.com/photo-1610494940231-a07875fb25fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              height={420}
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
              <Button {...buttonProps}>Continue reading</Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
      <SimpleGrid cols={4} mt="lg">
        {Array.from({ length: 4 }).map((_, i) => (
          <Paper p="md" key={`news-item-${i}`} className={classes.card}>
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
      <Center mt="xl">
        <Button size="xl" variant="light">
          Discover more content
        </Button>
      </Center>
    </Container>
  );
}
