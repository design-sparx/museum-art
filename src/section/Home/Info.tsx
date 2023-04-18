import React from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconClock, IconMap2, IconTicket } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const { Col } = Grid;

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.violet[0],
    padding: theme.spacing.md,
  },
}));

export default function InfoSection() {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const iconSize = smallerThan ? 32 : 48;

  return (
    <Container pt={80} pb={120}>
      <Title mb="xl" size={smallerThan ? 32 : 48} align="center">
        The world&apos;s leading museum of art
      </Title>
      <Grid>
        <Col md={6} lg={7}>
          <Image
            src="https://images.unsplash.com/photo-1513038630932-13873b1a7f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
            height={smallerThan ? 320 : 500}
            fit="cover"
            radius="sm"
          />
        </Col>
        <Col md={6} lg={5}>
          <Stack>
            <Paper className={classes.card}>
              <Flex gap="md">
                <Box sx={{ width: iconSize, height: iconSize }}>
                  <IconClock size={iconSize} />
                </Box>
                <Stack spacing="sm">
                  <Text size="lg" weight={500}>
                    Opening Times
                  </Text>
                  <Text>From January 1</Text>
                  <Text>Monday - Friday : 10.00–17.00</Text>
                </Stack>
              </Flex>
            </Paper>
            <Paper className={classes.card}>
              <Flex gap="md">
                <Box sx={{ width: iconSize, height: iconSize }}>
                  <IconTicket size={iconSize} />
                </Box>
                <Stack spacing="sm" align="flex-start">
                  <Text size="lg" weight={500}>
                    Book Online
                  </Text>
                  <Text>
                    Some exhibitions and events carry a separate charge
                  </Text>
                  <Button size="md" fullWidth={smallerThan}>
                    Join Now and Book Online
                  </Button>
                </Stack>
              </Flex>
            </Paper>
            <Paper className={classes.card}>
              <Flex gap="md">
                <Box sx={{ width: iconSize, height: iconSize }}>
                  <IconMap2 size={iconSize} />
                </Box>
                <Stack spacing="sm">
                  <Text size="lg" weight={500}>
                    Where You Visit
                  </Text>
                  <Text>ABC 123 Street, Highway Drive</Text>
                  <Text>Nairobi, XYZ Building</Text>
                </Stack>
              </Flex>
            </Paper>
          </Stack>
        </Col>
      </Grid>
    </Container>
  );
}
