import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function DonationSection() {
  return (
    <Box sx={{ height: 360 }}>
      <BackgroundImage
        src="https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        radius={0}
        sx={{ height: "100%" }}
      >
        <Stack justify="center" sx={{ height: "100%" }}>
          <Container>
            <Paper p="md">
              <Title>We need your support</Title>
              <Text>
                Your support is vital and helps the Museum to share the
                collection with the world.
              </Text>
              <Button>Make a donation</Button>
            </Paper>
          </Container>
        </Stack>
      </BackgroundImage>
    </Box>
  );
}
