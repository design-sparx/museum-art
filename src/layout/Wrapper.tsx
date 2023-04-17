import TopNav from "@/components/TopNav";
import { ReactNode } from "react";
import AppFooter from "@/components/AppFooter";
import FooterData from "@/data/footer.json";
import TopBar from "@/components/TopBar";
import { Box, rem, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SearchModal from "@/components/SearchModal";
import { motion } from "framer-motion";

interface IProps {
  children: ReactNode;
}

export default function Wrapper({ children }: IProps) {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 2,
          width: "100%",
          boxShadow: theme.shadows.md,
        }}
      >
        <TopBar />
        <TopNav handleOpenSearch={open} />
      </Box>
      <Box sx={{ marginTop: rem(140) }}>{children}</Box>
      <AppFooter data={FooterData.data} />
      <SearchModal opened={opened} close={close} />
    </motion.div>
  );
}
