import {
  Container,
  createStyles,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
      color: theme.colors.violet[7],
      cursor: "pointer",
      transition: "all ease-in 150ms",
      transform: "scale(1.03)",
    },
  },
}));

export default function LinksSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const items = data.map((d) => (
    <Paper key={d} px="sm" py="xl" className={classes.card}>
      <Text transform="capitalize" weight={500} align="center">
        {d}
      </Text>
    </Paper>
  ));

  return (
    <Container pt={80} pb={120}>
      <Title size={smallerThan ? 32 : 48} align="center" mb="xl">
        You may also be interested in
      </Title>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
