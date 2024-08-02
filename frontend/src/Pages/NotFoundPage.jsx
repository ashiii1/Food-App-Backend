import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bgImage from '../Images/bg_4.jpg'; // Make sure the path to the image is correct

export const PageNotFound = () => {

  const navigate = useNavigate();
  const handlePagenotFound = () => {
    navigate(`/`);
  };

  return (
    <Box textAlign="center" mb={-10} py={10} px={6}
    sx={{
      color: "white",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
      width: "100%",
      height: "60vh", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
       }}
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        onClick={handlePagenotFound}
        colorScheme="teal"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
};
