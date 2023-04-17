import React from "react";
import {
  Button,
  Container,
  createStyles,
  Overlay,
  rem,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  bg: {
    backgroundImage: `url(https://images.unsplash.com/photo-1501380881752-df57c981dfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
    minHeight: rem(650),
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.fn.smallerThan("sm")]: {
      minHeight: rem(500),
    },
  },
  container: {
    height: rem(650),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },
  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 800,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(32),
      lineHeight: 1.3,
    },
  },
  description: {
    color: theme.white,
    maxWidth: 600,
    margin: `${theme.spacing.lg} 0`,
    fontSize: theme.fontSizes.lg,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.md,
    },
  },
}));
export default function HeroSection() {
  const { classes, theme } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes.wrapper}>
      <div className={classes.bg}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>Explore the collection</Title>
          <Text className={classes.description}>
            Welcome to the new version of Collection online. Find out more about
            ongoing improvements. For help and further information read our
            online guide.
          </Text>
          <TextInput
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xs"
            size={smallerThan ? "lg" : "xl"}
            rightSection={
              <Button leftIcon={<IconSearch />} size="md" variant="white">
                Search
              </Button>
            }
            placeholder="Enter a keyword, person, place"
            rightSectionWidth={136}
            sx={{ width: smallerThan ? "100%" : 720 }}
          />
        </Container>
      </div>
    </div>
  );
}
