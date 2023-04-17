import {
  Button,
  ButtonProps,
  Container,
  createStyles,
  Paper,
  PaperProps,
  SimpleGrid,
  Stack,
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

export default function FeaturesSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const buttonProps: ButtonProps = {
    variant: "white",
    size: "sm",
    fullWidth: smallerThan,
  };

  const paperProps: PaperProps = {
    p: "md",
    className: classes.card,
  };

  return (
    <Container fluid pt={80} pb={120}>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 1, spacing: "md" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <Paper {...paperProps}>
          <Stack align="start">
            <Title order={3}>Reference Materials</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button {...buttonProps}>Learn more</Button>
          </Stack>
        </Paper>
        <Paper {...paperProps}>
          <Stack align="start">
            <Title order={3}>Collections Access</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button {...buttonProps}>Learn more</Button>
          </Stack>
        </Paper>
        <Paper {...paperProps}>
          <Stack align="start">
            <Title order={3}>Artifact Donations</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button {...buttonProps}>Learn more</Button>
          </Stack>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
