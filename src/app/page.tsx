"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Progress,
  Radio,
  Switch,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex flexDirection="column" p={[5, 10]} maxWidth="600px" mx="auto">
      <Heading mb={4}>Home</Heading>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 1000,
            isClosable: true,
          })
        }
        mb={4}
      >
        Show Toast
      </Button>
      <Button colorScheme="green" mb={4}>
        Test button
      </Button>
      <Button colorScheme="red" mb={4}>
        Test button
      </Button>
      <Progress value={75} mb={4} />
      <Input placeholder="Enter your name here..." mb={4} />
      <Checkbox title="Remember me" mb={4} />
      <Radio title="Check me" mb={4} />
      <Switch title="Remember me" mb={4} />

      <Text>Current mode: {colorMode}</Text>
      <Button onClick={() => toggleColorMode()}>Toggle mode</Button>
    </Flex>
  );
}
