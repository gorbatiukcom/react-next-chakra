"use client";

import { Flex, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex flexDirection="column" p={[5, 10]} maxWidth="600px" mx="auto">
      <Heading mb={4}>About us</Heading>
    </Flex>
  );
}
