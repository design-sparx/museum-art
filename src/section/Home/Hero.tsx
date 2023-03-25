import React from "react";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  createStyles,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  heroImage: {
    height: 600,
  },
}));
export default function HeroSection() {
  const { classes } = useStyles();

  return (
    <Box>
      <BackgroundImage
        src="https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        radius={0}
        className={classes.heroImage}
      >
        <Container sx={{ height: "100%" }}>
          <Stack
            align="flex-start"
            justify="end"
            pb="xl"
            sx={{ height: "100%" }}
          >
            <Paper p="md" shadow="md">
              <Text size="xl" weight={600} mb="md">
                Welcome to the Lorem Ipsum Museum
              </Text>
              <Text mb="md">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Text>
              <Button size="md">Plan your visit</Button>
            </Paper>
          </Stack>
        </Container>
      </BackgroundImage>
    </Box>
  );
}
