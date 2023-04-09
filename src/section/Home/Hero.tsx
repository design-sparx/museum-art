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
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

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
    marginTop: rem(-320),
    paddingBottom: rem(96),
  },
}));
export default function HeroSection() {
  const videoRef = useRef<any>(null);
  const [pause, setPause] = useState(false);
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
    videoRef.current.play();
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
            <Text size={36} weight={600} mb="md" align="center">
              Welcome to the Lorem Ipsum Museum
            </Text>
            <Text mb="md" size="lg" align="center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <Flex justify="space-between" align="center">
              <Button size="lg">Learn More</Button>
              <Button
                variant="white"
                leftIcon={
                  pause ? (
                    <IconPlayerPlay size={18} />
                  ) : (
                    <IconPlayerPause size={18} />
                  )
                }
                onClick={pauseVideo}
              >
                {pause ? "Play" : "Pause"} background video
              </Button>
            </Flex>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
