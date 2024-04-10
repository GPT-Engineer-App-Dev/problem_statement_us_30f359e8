import React from "react";
import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent>
      <VStack spacing={6} marginY={12}>
        <Heading>Welcome to Token Vesting DApp</Heading>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Link to="/connect-wallet">
            <Button leftIcon={<FaUserCircle />} colorScheme="teal" size="lg">
              Connect Wallet
            </Button>
          </Link>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Link to="/admin-dashboard">
            <Button colorScheme="orange" size="lg">
              Organization Admin Dashboard
            </Button>
          </Link>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Link to="/claim-tokens">
            <Button colorScheme="blue" size="lg">
              Claim Tokens
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
