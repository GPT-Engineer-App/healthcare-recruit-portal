import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

function Apply() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !file) {
      toast({
        title: "Error",
        description: "Please fill in all fields and upload a document.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("document", file);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Your application has been submitted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an issue submitting your application.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" p={4} onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="document">
          <FormLabel>Upload Document</FormLabel>
          <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit Application
        </Button>
      </VStack>
    </Box>
  );
}

export default Apply;
