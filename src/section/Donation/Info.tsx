import { Alert, Button, Container, Text, Title } from "@mantine/core";

export default function InfoSection() {
  return (
    <Container fluid>
      <Title>Your Donations Matter</Title>
      <Text>
        Donations to Museum help us continue our important work by supporting
        our educational and public programs, preservation of artifacts in our
        extensive collection, and daily operations. Contributions can be made
        directly to the museum or through a financial institution using the
        methods listed below. Gifts to the museum may also be made in honor or
        memory of a loved one.
      </Text>
      <Text>
        The Museum is a non-profit organization. Your donation to Museum is 100%
        tax-deductible.
      </Text>
      <Button>Donate now</Button>
      <Alert>
        Questions? Please refer to the FAQ below or contact the JANM Development
        department at mail@museum.org or 000.000.0000.
      </Alert>
    </Container>
  );
}
