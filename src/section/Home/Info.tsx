import React from "react";
import {
  Button,
  Container,
  Flex,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconClock, IconMap2, IconTicket } from "@tabler/icons-react";

export default function InfoSection() {
  return (
    <Container fluid>
      <Title>The world&apos;s leading museum of art</Title>
      <SimpleGrid cols={2}>
        <Image
          src="https://images.unsplash.com/photo-1513038630932-13873b1a7f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
          height={500}
          fit="cover"
        />
        <Paper>
          <Flex gap="md">
            <IconClock size={48} />
            <Stack>
              <Text size="lg" weight={500}>
                Opening Times
              </Text>
              <Text>From January 1</Text>
              <Text>Monday - Friday : 10.00–17.00</Text>
            </Stack>
          </Flex>
          <Flex gap="md">
            <IconTicket size={48} />
            <Stack>
              <Text size="lg" weight={500}>
                Book Online
              </Text>
              <Text>Some exhibitions and events carry a separate charge</Text>
              <Button>Join Now and Book Online</Button>
            </Stack>
          </Flex>
          <Flex gap="md">
            <IconMap2 size={48} />
            <Stack>
              <Text size="lg" weight={500}>
                Where You Visit
              </Text>
              <Text>ABC 123 Street, Highway Drive</Text>
              <Text>Nairobi, XYZ Building</Text>
            </Stack>
          </Flex>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
