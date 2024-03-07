import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

function Profile() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please enter your name and email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        toast({
          title: "Profile Updated",
          description: "Your profile has been updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was an issue updating your profile.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" p={4} onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="profile-name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="profile-email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Save Profile
        </Button>
      </VStack>
    </Box>
  );
}

export default Profile;
