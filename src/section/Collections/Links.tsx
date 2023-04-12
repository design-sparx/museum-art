import {
  Container,
  createStyles,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const data = [
  "collection",
  "collection online",
  "galleries",
  "blog",
  "podcast",
];

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${theme.colors.gray[2]}`,

    "&:hover, &:focus": {
      border: `1px solid ${theme.colors.violet[7]}`,
      cursor: "pointer",
      transition: "all ease-in 200ms",
      transform: "scale(1.03)",
    },
  },
}));

export default function LinksSection() {
  const { classes } = useStyles();

  const items = data.map((d) => (
    <Paper key={d} px="sm" py="xl" className={classes.card}>
      <Text transform="capitalize" weight={500} align="center">
        {d}
      </Text>
    </Paper>
  ));

  return (
    <Container pt={80} pb={120}>
      <Title size={48} align="center" mb="xl">
        You may also be interested in
      </Title>
      <SimpleGrid cols={3} spacing="lg">
        {items}
      </SimpleGrid>
    </Container>
  );
}
