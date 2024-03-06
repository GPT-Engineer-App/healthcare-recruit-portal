import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex alignItems="center" justifyContent="space-between" direction={{ base: "column", md: "row" }} py={10}>
        <VStack align="start" spacing={6} w={{ base: "full", md: "50%" }}>
          <Heading as="h1" size="xl" fontWeight="bold">
            Streamline Your Healthcare Recruiting
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
            Finding the right talent for your healthcare facility is now easier than ever with our cutting-edge SaaS solutions.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue">
            Get Started
          </Button>
        </VStack>
        <Box w={{ base: "full", md: "50%" }} mt={{ base: 10, md: 0 }} textAlign="center">
          <Image src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcmVjcnVpdGluZ3xlbnwwfHx8fDE3MDk3NTY5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare recruiting" />
        </Box>
      </Flex>
      <Stack spacing={8} mt={16}>
        <Feature icon={<FaCheckCircle />} title="Efficient Candidate Matching" description="Our advanced algorithms ensure you find the best match for your healthcare positions quickly and effectively." />
        <Feature icon={<FaCheckCircle />} title="Comprehensive Database" description="Gain access to a wide network of healthcare professionals looking for their next opportunity." />
        <Feature icon={<FaCheckCircle />} title="Seamless Integration" description="Easily integrate our platform with your existing HR systems for a smooth recruitment process." />
      </Stack>
    </Container>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <Flex alignItems="center">
      <Box p={4} color={useColorModeValue("blue.500", "blue.300")}>
        {icon}
      </Box>
      <Box ml={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.200")}>{description}</Text>
      </Box>
    </Flex>
  );
};

export default Index;
