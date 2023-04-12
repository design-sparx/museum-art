import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function DonationSection() {
  return (
    <Box pt={80} pb={120}>
      <Box sx={{ height: 560 }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          radius={0}
          sx={{
            height: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Stack justify="center" sx={{ height: "100%" }}>
            <Container>
              <Paper p="xl">
                <Title>We need your support</Title>
                <Text my="sm">
                  Your support is vital and helps the Museum to share the
                  collection with the world.
                </Text>
                <Center>
                  <Button size="md">Make a donation</Button>
                </Center>
              </Paper>
            </Container>
          </Stack>
        </BackgroundImage>
      </Box>
    </Box>
  );
}
