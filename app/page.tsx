import { gray } from "@radix-ui/colors";
import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";

const RootPage = () => {
  return (
    <Box>
      <Container>
        <Box
          style={{
            border: "1px",
            borderStyle: "dotted",
            borderColor: gray.gray6,
          }}
        >
          <Flex direction="column" align="center" gap="8">
            <Heading align="center" size="9">
              The React Framework for the Web
            </Heading>
            <Text
              align="center"
              style={{
                maxWidth: "776px",
              }}
            >
              Used by some of the world's largest companies, Next.js enables you to create high-quality web applications
              with the power of React components.
            </Text>

            <Flex direction="row" gap="4">
              <Button size="4">Get Started</Button>
              <Button variant="soft" size="4">
                Learn Next.js
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default RootPage;