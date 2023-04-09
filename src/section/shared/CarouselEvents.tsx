import {
  ActionIcon,
  ActionIconProps,
  Badge,
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Image,
  Paper,
  Progress,
  rem,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";
import React, { useCallback, useEffect, useState } from "react";
import {
  IconArrowLeftBar,
  IconArrowRightBar,
  IconCalendarTime,
} from "@tabler/icons-react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best forests to visit in North America",
    category: "nature",
    date: "ongoing",
    type: "online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Hawaii beaches review: better than you think",
    category: "beach",
    date: "16 August",
    type: "current",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "nature",
    date: "17 August – 31 October",
    type: "online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Aurora in Norway: when to visit for best experience",
    category: "nature",
    date: "15 August – 31 October",
    type: "current",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best places to visit this winter",
    category: "tourism",
    date: "15 August – 31 October",
    type: "current",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
    date: "15 August – 31 October",
    type: "current",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const useStyles = createStyles((theme) => ({
  link: {
    "&:hover, &:focus": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

interface IProps {
  title?: string;
}

export default function CarouselEventsSection({ title }: IProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const { classes } = useStyles();

  const actionIconProps: ActionIconProps = {
    size: "xl",
    variant: "subtle",
    color: "violet",
  };

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  const handleNext = () => {
    embla?.scrollNext();
  };

  const handlePrevious = () => {
    embla?.scrollPrev();
  };

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  const slides = data.map((item, i) => (
    <Carousel.Slide key={`item.title-${i}`}>
      <Paper>
        <Image
          src={item.image}
          alt={item.title}
          height={278}
          width="100%"
          fit="cover"
          radius="sm"
        />
        <Box py="md" px={0}>
          <Stack align="start" spacing="xs">
            <Badge size="lg" variant="filled" radius="xs">
              {item.type} exhibition
            </Badge>
            <Text size="xl" weight={600} component="a" className={classes.link}>
              {item.title}
            </Text>
            <Flex gap="xs" align="center">
              <IconCalendarTime size={14} />
              <Text size="sm" transform="capitalize">
                {item.date}
              </Text>
            </Flex>
            <Spoiler maxHeight={48} showLabel="Show more" hideLabel="Hide">
              <Text>{item.description}</Text>
            </Spoiler>
          </Stack>
        </Box>
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Container fluid pt={80} pb={120} sx={{ overflow: "hidden" }}>
      <Flex justify="space-between" align="center">
        <Title size={48}>{title ?? "Exhibitions and events"}</Title>
        <Flex gap="md">
          <ActionIcon
            onClick={handlePrevious}
            title="previous slide"
            {...actionIconProps}
          >
            <IconArrowLeftBar />
          </ActionIcon>
          <ActionIcon
            onClick={handleNext}
            title="next slide"
            {...actionIconProps}
          >
            <IconArrowRightBar />
          </ActionIcon>
        </Flex>
      </Flex>
      <Progress
        value={scrollProgress}
        styles={{
          bar: { transitionDuration: "0ms" },
          root: { maxWidth: "100%" },
        }}
        size="xs"
        mx="auto"
        my="lg"
      />
      <Carousel
        slideSize="33%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="md"
        align="start"
        slidesToScroll={1}
        loop
        dragFree
        getEmblaApi={setEmbla}
        withControls={false}
      >
        {slides}
      </Carousel>
      <Center mt="xl">
        <Button size="xl" variant="light">
          View all Upcoming Events
        </Button>
      </Center>
    </Container>
  );
}
