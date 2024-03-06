import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Apply() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" />
        </FormControl>
        <FormControl id="document">
          <FormLabel>Upload Document</FormLabel>
          <Input type="file" />
        </FormControl>
        <Button colorScheme="blue">Submit Application</Button>
      </VStack>
    </Box>
  );
}

export default Apply;
