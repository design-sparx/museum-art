import {
  Button,
  Center,
  Container,
  List,
  Paper,
  PaperProps,
  Stack,
  Text,
  Title,
  TitleProps,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

const { Item } = List;

export default function WelcomeSection() {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const paperProps: PaperProps = {
    withBorder: true,
    p: "lg",
    sx: {
      backgroundColor: theme.colors.gray[0],
    },
  };

  const titleProps: TitleProps = {
    order: 3,
    mb: "md",
  };

  return (
    <Container pt={80} pb={120}>
      <Stack spacing="lg">
        <Paper {...paperProps}>
          <Title {...titleProps}>Museum Hours</Title>
          <List>
            <Item>
              Tuesday, Wednesday, Friday–Sunday: 11 a.m.–5 p.m.; last entry is
              at 4 p.m.
            </Item>
            <Item>Thursday: 12 p.m.–8 p.m.; last entry is at 7 p.m.</Item>
            <Item>
              Closed Monday and in observance of Juneteenth (6/19), Fourth of
              July, Anniversary of the Civil Liberties Act of 1988 (8/10),
              Indigenous People’s Day, Election Day, Thanksgiving, Christmas,
              and New Year’s Day.
            </Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>Advance Timed Ticketing</Title>
          <List>
            <Item>Timed, advance tickets are recommended.</Item>
            <Item>
              Entrance times are on the hour, every hour, starting at 11 a.m.
              until 4 p.m. (PST).
            </Item>
            <Item>
              Admission is accepted up to 30 minutes after your ticket time.
            </Item>
            <Item>Tickets are released four weeks in advance.</Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>Before You Arrive</Title>
          <List>
            <Item>
              Please print your ticket or download it to your mobile device.
            </Item>
            <Item>
              Masks are strongly recommended, except for children two and
              younger.
            </Item>
            <Item>
              Symptom Check: Visitors are required to self check themselves for
              COVID-19 symptoms prior to entry. Visitors who are feeling sick or
              are experiencing COVID-19 symptoms (such as cough, shortness of
              breath or difficulty breathing, fever, chills, headache, or any
              other symptoms), or who have had contact with anyone confirmed or
              suspected of having COVID-19; are under isolation or quarantine
              orders should stay home, regardless of vaccination status.
              Visitors displaying COVID-19 symptoms will not be allowed to enter
              the museum. See CDC Symptom Check guidelines here. Please contact
              museumservices@email.org to reschedule your visit or ask for a
              full refund.
            </Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>When You Arrive</Title>
          <List>
            <Item>Scan your ticket at self scanning stations.</Item>
            <Item>
              Masks are strongly recommended, except for children ages two and
              younger.
            </Item>
            <Item>
              Visitors who are feeling sick or are experiencing COVID-19
              symptoms (such as cough, shortness of breath or difficulty
              breathing, fever, chills, headache, or any other symptoms), or who
              have had contact with anyone confirmed or suspected of having
              COVID-19; are under isolation or quarantine orders should stay
              home, regardless of vaccination status. Visitors displaying
              COVID-19 symptoms will not be allowed to enter the museum.
            </Item>
          </List>
        </Paper>
        <Paper {...paperProps}>
          <Title {...titleProps}>Visitor Policies</Title>
          <List>
            <Item>
              Masks are strongly recommended, except for children ages two and
              younger.
            </Item>
            <Item>No food or drinks permitted in the museum.</Item>
            <Item>
              A limited number of self-serve storage lockers (9&quot;W x
              22&quot;H x 16&quot;D) are available on a first-come basis. Valid
              ID required to use lockers.
            </Item>
            <Item>Large bags are not permitted</Item>
            <Item>Only service animals are allowed.</Item>
          </List>
        </Paper>
        <Text>
          Protecting the health and well-being of our staff and visitors is our
          top priority. We strongly recommend all staff and visitors—regardless
          of vaccination status—to wear a face mask in the museum and to
          maintain a six-foot distance from anyone outside of their own
          household at all times.
        </Text>
        <Text>
          See below for admission pricing and directions. For more information
          please contact Visitor Services at museumservices@email.org or call
          000.00.0000.
        </Text>
        <Text>
          Occasionally we may need to close galleries at short notice. We regret
          that we are not always able to alert visitors in advance of their
          visit.
        </Text>
        <Text>We look forward to welcoming you.</Text>
        <Center mt={smallerThan ? 16 : "xl"}>
          <Button size="lg" fullWidth={smallerThan}>
            Get Tickets
          </Button>
        </Center>
      </Stack>
    </Container>
  );
}
