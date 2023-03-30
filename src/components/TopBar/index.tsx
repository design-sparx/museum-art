import {
  Button,
  Container,
  createStyles,
  Divider,
  Group,
  Header,
  Paper,
  rem,
  Text,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import LanguagePicker from "@/components/LanguagePicker";

const HEADER_HEIGHT = rem(48);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export default function TopBar() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 15000 }));

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group spacing={5} className={classes.links}>
          <Text>OPEN TODAY AT 12 P.M.</Text>
          <Divider orientation="vertical" />
          <Carousel
            mx="auto"
            withIndicators
            height={20}
            orientation="vertical"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            withControls={false}
          >
            <Carousel.Slide>
              <Paper>
                <Text>Announcements from Museum</Text>
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper>
                <Text>Tickets available for 2023 auction event</Text>
              </Paper>
            </Carousel.Slide>
            <Carousel.Slide>
              <Paper>
                <Text>Our COVID-19 Policy</Text>
              </Paper>
            </Carousel.Slide>
          </Carousel>
        </Group>
        <Group spacing={5}>
          <Button>Join & Give</Button>
          <Button>Museum Shop</Button>
          <LanguagePicker />
        </Group>
      </Container>
    </Header>
  );
}
