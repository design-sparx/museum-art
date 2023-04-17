import {
  Box,
  Container,
  createStyles,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.violet[8],
    color: theme.white,

    "&:hover, &:focus": {
      cursor: "pointer",
    },
  },
}));

export default function SupportSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  return (
    <Container pt={80} pb={120} sx={{ overflow: "hidden" }}>
      <Box mb="xl" sx={{ textAlign: "center" }}>
        <Title size={smallerThan ? 32 : 48} mb="md">
          Support the Museum
        </Title>
        <Text size="lg">Join today and Enjoy unlimited</Text>
      </Box>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        <Paper p="md" className={classes.card}>
          <Text size="xl" weight={600} mb="sm">
            Become a member
          </Text>
          <Text>
            Support us by becoming a Member today and get 10% off in our online
            shop.
          </Text>
        </Paper>
        <Paper p="md" className={classes.card}>
          <Text size="xl" weight={600} mb="sm">
            Donate
          </Text>
          <Text>
            Your support is vital and helps the Museum to share the collection
            with the world.
          </Text>
        </Paper>
        <Paper p="md" className={classes.card}>
          <Text size="xl" weight={600} mb="sm">
            Shop Online
          </Text>
          <Text>
            The Museum shop has a range of unique gifts, replicas, games and
            more.
          </Text>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
