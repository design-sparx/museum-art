import { Alert, Anchor, Button, Container, Text, Title } from "@mantine/core";

export default function InfoSection() {
  return (
    <Container fluid pt={80} pb={120}>
      <Title size={48} mb="xl" align="center">
        Your Donations Matter
      </Title>
      <Text mb="md">
        Donations to Museum help us continue our important work by supporting
        our educational and public programs, preservation of artifacts in our
        extensive collection, and daily operations. Contributions can be made
        directly to the museum or through a financial institution using the
        methods listed below. Gifts to the museum may also be made in honor or
        memory of a loved one.
      </Text>
      <Text mb="md">
        The Museum is a non-profit organization. Your donation to Museum is 100%
        tax-deductible.
      </Text>
      <Button size="md" mb="lg">
        Donate now
      </Button>
      <Alert>
        <Text weight={500} size="md">
          Questions? Please refer to the FAQ below or contact the Museum & Art
          Development department at <Anchor>mail@museum.org</Anchor> or{" "}
          <Anchor>000.000.0000.</Anchor>
        </Text>
      </Alert>
    </Container>
  );
}
