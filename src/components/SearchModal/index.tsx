import {
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Modal,
  Paper,
  PaperProps,
  rem,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  TextProps,
} from "@mantine/core";
import { IconCalendarTime, IconSearch } from "@tabler/icons-react";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  link: {
    "&:hover, &:focus": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

interface IProps {
  opened: boolean;
  close: () => void;
}

export default function SearchModal({ opened, close }: IProps) {
  const { classes, theme } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const paperProps: PaperProps = {
    p: "md",
    sx: {
      backgroundColor: theme.colors.violet[0],
    },
  };

  const titleTextProps: TextProps = {
    size: "md",
    weight: 500,
    mb: "md",
    className: classes.link,
  };

  const textProps: TextProps = {
    size: "sm",
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Search"
      fullScreen
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <Container px={0}>
        <Center sx={{ height: rem(600) }}>
          <Stack spacing="xl">
            <Text size="lg" color="dimmed" transform="uppercase">
              Search Events
            </Text>
            <TextInput
              size="lg"
              placeholder="what are you looking for?"
              icon={<IconSearch size={18} />}
            />
            <Button size="lg" sx={{ width: "fit-content" }}>
              Search
            </Button>
            <SimpleGrid cols={3} spacing="lg">
              <Paper {...paperProps}>
                <Text {...titleTextProps}>
                  Best forests to visit in North America
                </Text>
                <Flex gap="xs" align="center">
                  <IconCalendarTime size={14} />
                  <Text {...textProps}>Ongoing</Text>
                </Flex>
              </Paper>
              <Paper {...paperProps}>
                <Text {...titleTextProps}>
                  Hawaii beaches review: better than you think
                </Text>
                <Flex gap="xs" align="center">
                  <IconCalendarTime size={14} />
                  <Text {...textProps}>16 August</Text>
                </Flex>
              </Paper>
              <Paper {...paperProps}>
                <Text {...titleTextProps}>
                  Mountains at night: 12 best locations to enjoy the view
                </Text>
                <Flex gap="xs" align="center">
                  <IconCalendarTime size={14} />
                  <Text {...textProps}>17 August – 31 October</Text>
                </Flex>
              </Paper>
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
    </Modal>
  );
}
