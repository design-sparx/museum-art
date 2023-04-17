import {
  Button,
  ButtonProps,
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
import { useMediaQuery } from "@mantine/hooks";

const { Slide } = Carousel;

const useStyles = createStyles((theme) => ({
  inner: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    padding: `${theme.spacing.xs} ${theme.spacing.xl}`,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,

    [theme.fn.smallerThan("md")]: {
      justifyContent: "space-between",
    },

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
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

  announcementCard: {
    backgroundColor: theme.colors.violet[0],
    color: theme.black,
    textAlign: "center",
    padding: rem(8),

    [theme.fn.smallerThan("sm")]: {},
  },

  hiddenTablet: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  leftSection: {
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
    },
  },
}));

const announcementsData = [
  "Announcements from Museum",
  "Tickets available for 2023 auction event",
  "Our COVID-19 Policy",
];

export default function TopBar() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 15000 }));
  const smallerThan = useMediaQuery("(max-width: 769px)");

  const buttonProps: ButtonProps = {
    variant: "subtle",
  };

  return (
    <Header height="100%" sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group spacing="sm" className={classes.leftSection}>
          <Text size="sm" weight={600}>
            OPEN TODAY AT 12 P.M.
          </Text>
          <Divider orientation="vertical" className={classes.hiddenTablet} />
          <Carousel
            slideSize="100%"
            align="start"
            withIndicators={false}
            loop={true}
            draggable={false}
            height={36}
            orientation="vertical"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            withControls={false}
          >
            {announcementsData.map((a, i) => (
              <Slide key={`announcement-${i}`}>
                <Paper className={classes.announcementCard}>
                  <Text size="sm" weight={500} transform="uppercase">
                    {a}
                  </Text>
                </Paper>
              </Slide>
            ))}
          </Carousel>
        </Group>
        <Group spacing="sm" className={classes.hiddenTablet}>
          <Button {...buttonProps}>Join & Give</Button>
          <Button {...buttonProps}>Museum Shop</Button>
          <LanguagePicker />
        </Group>
      </Container>
    </Header>
  );
}
