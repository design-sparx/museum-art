import {
  Badge,
  Box,
  ButtonProps,
  createStyles,
  Flex,
  Group,
  Image,
  Paper,
  Spoiler,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCalendarTime,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  link: {
    "&:hover, &:focus": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

interface IProps {
  key?: string;
  item: {
    image: string;
    title: string;
    type: string;
    date: string;
    description: string;
  };
}

const EventsCard = ({ item }: IProps) => {
  const { title, type, description, date, image } = item;
  const { classes, theme } = useStyles();

  const buttonProps: ButtonProps = {
    mt: "xs",
    variant: "outline",
    compact: true,
  };

  return (
    <Paper
      key={`event-title-${title}`}
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      sx={{ backgroundColor: theme.colors.violet[0], height: "100%" }}
    >
      <Image src={image} alt={title} height={320} fit="cover" radius="sm" />
      <Box p="md">
        <Stack align="start" spacing="xs">
          <Badge size="lg" variant="filled" radius="xs">
            {type} exhibition
          </Badge>
          <Text size="xl" weight={600} component="a" className={classes.link}>
            {title}
          </Text>
          <Flex gap="xs" align="center">
            <IconCalendarTime size={14} />
            <Text size="sm" transform="capitalize">
              {date}
            </Text>
          </Flex>
          <Spoiler
            maxHeight={48}
            showLabel={
              <Group mt="sm" spacing="xs">
                <IconChevronDown size={18} />
                <Text weight={500}>Show More</Text>
              </Group>
            }
            hideLabel={
              <Group mt="sm" spacing="xs">
                <IconChevronUp size={18} />
                <Text weight={500}>Show Less</Text>
              </Group>
            }
          >
            <Text>{description}</Text>
          </Spoiler>
        </Stack>
      </Box>
    </Paper>
  );
};

export default EventsCard;
