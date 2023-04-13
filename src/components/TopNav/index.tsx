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
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    border: "none",
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  },
  link: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
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
  const { classes, theme } = useStyles();

  const buttonProps: ButtonProps = {
    variant: "subtle",
    size: "sm",
  };

  const links = mockdata.map((item) => (
    <Button
      className={classes.link}
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
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          {links}
          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
