import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Divider,
  Flex,
  rem,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconClock,
  IconMap2,
} from "@tabler/icons-react";
import React from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function AppFooter({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container fluid>
        <Flex>
          <Stack>
            <Title>Connect with us</Title>
            <Flex>
              <ActionIcon>
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon>
                <IconBrandTwitter />
              </ActionIcon>
              <ActionIcon>
                <IconBrandInstagram />
              </ActionIcon>
              <ActionIcon>
                <IconBrandYoutube />
              </ActionIcon>
              <ActionIcon>
                <IconBrandLinkedin />
              </ActionIcon>
            </Flex>
          </Stack>
          <Stack>
            <Text>Enter your email address to receive our newsletter</Text>
            <Flex>
              <TextInput />
              <Button>Signup</Button>
            </Flex>
          </Stack>
        </Flex>
      </Container>
      <Divider />
      <Container fluid>
        <SimpleGrid cols={4}>
          <Stack>
            <Stack>
              <Flex>
                <IconMap2 size={36} />
                <Text size="lg" weight={500}>
                  Where You Visit
                </Text>
              </Flex>
              <Text>ABC 123 Street, Highway Drive</Text>
              <Text>Nairobi, XYZ Building</Text>
              <Text>+254 000 000 000</Text>
            </Stack>
            <Stack>
              <Flex>
                <IconClock size={36} />
                <Text size="lg" weight={500}>
                  Opening Times
                </Text>
              </Flex>
              <Text>From January 1</Text>
              <Text>Monday - Friday : 10.00–17.00</Text>
            </Stack>
          </Stack>
          {groups}
        </SimpleGrid>
      </Container>
      <Divider />
      <Container fluid>
        <Flex>
          <Button>Privacy Policy</Button>
          <Button>Cookies</Button>
          <Button>Terms of Use</Button>
          <Text>&copy;{new Date().getFullYear()} Art & History Museum</Text>
        </Flex>
        <Flex>
          <Text>Site created by&nbsp;</Text>
          <Button
            component="a"
            target="_blank"
            href="https://github.com/kelvink96"
          >
            Kelvin
          </Button>
        </Flex>
      </Container>
    </footer>
  );
}
