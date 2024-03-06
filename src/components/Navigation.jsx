import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

function Navigation() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          MyApp
        </Text>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Link to="/" style={{ marginRight: "12px" }}>
          Home
        </Link>
        <Link to="/apply" style={{ marginRight: "12px" }}>
          Apply
        </Link>
        <Link to="/profile" style={{ marginRight: "12px" }}>
          Profile
        </Link>
      </Box>
    </Flex>
  );
}

export default Navigation;
