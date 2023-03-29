import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Paper,
  rem,
  Stack,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    minHeight: rem(650),
  },
  videoBg: {
    minWidth: "100%",
    height: rem(650),
    objectFit: "cover",
    objectPosition: "bottom",
  },
  content: {
    marginTop: rem(-240),
    paddingBottom: rem(96),
  },
}));
export default function HeroSection() {
  const videoRef = useRef<any>(null);
  const [pause, setPause] = useState(true);
  const { classes } = useStyles();

  const pauseVideo = (): void => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPause(false);
    } else {
      videoRef.current.pause();
      setPause(true);
    }
  };

  useEffect(() => {
    videoRef.current.pause();
  }, []);

  return (
    <Box className={classes.wrapper}>
      <video className={classes.videoBg} autoPlay loop muted ref={videoRef}>
        <source
          src={require("../../../public/static/video/walkthrough.mp4")}
          type="video/mp4"
        />
      </video>
      <Container className={classes.content}>
        <Stack align="flex-start" justify="end" pb="xl" sx={{ height: "100%" }}>
          <Paper p="md" shadow="md">
            <Text size="xl" weight={600} mb="md">
              Welcome to the Lorem Ipsum Museum
            </Text>
            <Text mb="md">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <Flex>
              <Button size="md">Plan your visit</Button>
              <Button onClick={pauseVideo}>{pause ? "Play" : "Pause"}</Button>
            </Flex>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
