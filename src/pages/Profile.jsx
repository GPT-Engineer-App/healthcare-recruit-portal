import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Profile() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="profile-name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" />
        </FormControl>
        <FormControl id="profile-email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <Button colorScheme="blue">Save Profile</Button>
      </VStack>
    </Box>
  );
}

export default Profile;
