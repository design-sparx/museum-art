import {
  Center,
  Container,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import AppFooter from "@/components/AppFooter";
import FooterData from "@/data/footer.json";
import { IconSearch } from "@tabler/icons-react";

interface IProps {
  opened: boolean;
  close: () => void;
}

export default function SearchModal({ opened, close }: IProps) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Search"
      fullScreen
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <Container fluid px={0}>
        <Center>
          <TextInput
            size="xl"
            placeholder="what are you looking for?"
            icon={<IconSearch />}
          />
        </Center>
        <AppFooter data={FooterData.data} />
      </Container>
    </Modal>
  );
}
