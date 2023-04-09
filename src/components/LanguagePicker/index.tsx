import { useState } from "react";
import {
  createStyles,
  Group,
  Image,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const data = [
  {
    label: "English",
    image:
      "https://res.cloudinary.com/ddh7hfzso/image/upload/v1677783783/meal%20mart/english_njrlxm.png",
  },
  {
    label: "German",
    image:
      "https://res.cloudinary.com/ddh7hfzso/image/upload/v1677783783/meal%20mart/german_a90o3b.png",
  },
  {
    label: "Italian",
    image:
      "https://res.cloudinary.com/ddh7hfzso/image/upload/v1677783783/meal%20mart/italian_ruxfnn.png",
  },
  {
    label: "French",
    image:
      "https://res.cloudinary.com/ddh7hfzso/image/upload/v1677783783/meal%20mart/french_yek0eo.png",
  },
  {
    label: "Polish",
    image:
      "https://res.cloudinary.com/ddh7hfzso/image/upload/v1677783783/meal%20mart/polish_wjp2xh.png",
  },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `.4rem 1rem`,
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[3]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.colors.gray[0],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export default function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} alt="flag" />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="sm"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={22} height={22} alt="flag" />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
