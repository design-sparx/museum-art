import {
  Box,
  Burger,
  Button,
  ButtonProps,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  rem,
  ScrollArea,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const useStyles = createStyles((theme) => ({
  header: {
    border: "none",
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  },
  link: {
    [theme.fn.smallerThan("sm")]: {},

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  activeLink: {
    borderRadius: 0,
    borderBottom: `2px solid ${theme.colors.violet[7]}`,

    ...theme.fn.hover({
      borderRadius: theme.radius.sm,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),

    [theme.fn.smallerThan("sm")]: {
      backgroundColor: theme.colors.violet[0],
      color: theme.colors.violet[8],
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    label: "Visit",
    link: "/visit",
  },
  {
    label: "Exhibitions",
    link: "/exhibitions",
  },
  {
    label: "Collections",
    link: "/collections",
  },
  {
    label: "Support Us",
    link: "/support",
  },
];

interface IProps {
  handleOpenSearch: () => void;
}

export default function TopNav({ handleOpenSearch }: IProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, cx, theme } = useStyles();
  const router = useRouter();

  const urlResolver = (url: string): boolean => {
    return router.pathname.includes(url.toLowerCase());
  };

  const buttonProps: ButtonProps = {
    variant: "subtle",
    size: "md",
  };

  const links = mockdata.map((item) => (
    <Button
      className={urlResolver(item.label) ? classes.activeLink : classes.link}
      key={item.label}
      component={Link}
      href={item.link}
      {...buttonProps}
    >
      {item.label}
    </Button>
  ));

  return (
    <Box>
      <Header height="100%" px="md" className={classes.header}>
        <Group position="apart" sx={{ height: "100%" }}>
          <UnstyledButton component={Link} href="/">
            <Title order={2}>Museum & Art</Title>
          </UnstyledButton>

          <Group
            sx={{ height: "100%" }}
            spacing="xs"
            className={classes.hiddenMobile}
          >
            {links}
            <Button
              className={classes.link}
              key="search button"
              leftIcon={<IconSearch size={18} />}
              onClick={handleOpenSearch}
              {...buttonProps}
            >
              Search
            </Button>
            <Button size="md" component={Link} href="/donation">
              Donate
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Museum & Art"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Stack spacing="sm" px="sm" mb="sm">
            {links}
            <Button size="md" component={Link} href="/donation">
              Donate
            </Button>
          </Stack>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />{" "}
          <Group position="center" grow pb="xl" px="md">
            <Button variant="subtle">Join & Give</Button>
            <Button variant="subtle">Museum Shop</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
